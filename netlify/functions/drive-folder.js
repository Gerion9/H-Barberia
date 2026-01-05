function parseDriveFileIdsFromHtml(html, folderId) {
  const results = [];
  const seen = new Set();

  const add = (id) => {
    if (!id || id === folderId) return;
    if (seen.has(id)) return;
    seen.add(id);
    results.push(id);
  };

  // /file/d/<id>/...
  const reFile = /\/file\/d\/([a-zA-Z0-9_-]{10,})\//g;
  let match;
  while ((match = reFile.exec(html))) add(match[1]);

  // thumbnail?id=<id> or open?id=<id> patterns commonly present in embedded views
  const reId = /(?:thumbnail\?id=|open\?id=|uc\?export=view&id=|id=)([a-zA-Z0-9_-]{10,})/g;
  while ((match = reId.exec(html))) add(match[1]);

  return results;
}

export const handler = async (event) => {
  try {
    const folderId = event.queryStringParameters?.folderId;

    if (!folderId) {
      return {
        statusCode: 400,
        headers: {
          'content-type': 'application/json',
          'access-control-allow-origin': '*',
        },
        body: JSON.stringify({ ids: [], error: 'Missing folderId' }),
      };
    }

    const url = `https://drive.google.com/embeddedfolderview?id=${encodeURIComponent(folderId)}#grid`;
    const upstream = await fetch(url, {
      headers: {
        'user-agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120 Safari/537.36',
      },
    });

    if (!upstream.ok) {
      return {
        statusCode: 502,
        headers: {
          'content-type': 'application/json',
          'access-control-allow-origin': '*',
        },
        body: JSON.stringify({ ids: [], error: `Upstream error ${upstream.status}` }),
      };
    }

    const html = await upstream.text();
    const ids = parseDriveFileIdsFromHtml(html, folderId);

    return {
      statusCode: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, max-age=300',
        'access-control-allow-origin': '*',
      },
      body: JSON.stringify({ ids }),
    };
  } catch {
    return {
      statusCode: 500,
      headers: {
        'content-type': 'application/json',
        'access-control-allow-origin': '*',
      },
      body: JSON.stringify({ ids: [], error: 'Internal error' }),
    };
  }
};


