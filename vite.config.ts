import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

function parseDriveFileIdsFromHtml(html: string, folderId: string): string[] {
  const results: string[] = []
  const seen = new Set<string>()

  const add = (id: string) => {
    if (!id || id === folderId) return
    if (seen.has(id)) return
    seen.add(id)
    results.push(id)
  }

  // /file/d/<id>/...
  const reFile = /\/file\/d\/([a-zA-Z0-9_-]{10,})\//g
  let match: RegExpExecArray | null
  while ((match = reFile.exec(html))) add(match[1])

  // thumbnail?id=<id> or open?id=<id> patterns commonly present in embedded views
  const reId = /(?:thumbnail\?id=|open\?id=|uc\?export=view&id=|id=)([a-zA-Z0-9_-]{10,})/g
  while ((match = reId.exec(html))) add(match[1])

  return results
}

function driveFolderDevProxy() {
  return {
    name: 'drive-folder-dev-proxy',
    configureServer(server: any) {
      server.middlewares.use('/api/drive-folder', async (req: any, res: any, next: any) => {
        try {
          const requestUrl = new URL(req.url ?? '', 'http://localhost')
          const folderId = requestUrl.searchParams.get('folderId')

          if (!folderId) {
            res.statusCode = 400
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({ ids: [], error: 'Missing folderId' }))
            return
          }

          const url = `https://drive.google.com/embeddedfolderview?id=${encodeURIComponent(folderId)}#grid`
          const upstream = await fetch(url, {
            headers: {
              // User-Agent helps avoid some simplified/bot responses
              'user-agent':
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
            },
          })

          if (!upstream.ok) {
            res.statusCode = 502
            res.setHeader('content-type', 'application/json')
            res.end(JSON.stringify({ ids: [], error: `Upstream error ${upstream.status}` }))
            return
          }

          const html = await upstream.text()
          const ids = parseDriveFileIdsFromHtml(html, folderId)

          res.statusCode = 200
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ ids }))
        } catch (err) {
          res.statusCode = 500
          res.setHeader('content-type', 'application/json')
          res.end(JSON.stringify({ ids: [], error: 'Internal error' }))
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), driveFolderDevProxy()],
})
