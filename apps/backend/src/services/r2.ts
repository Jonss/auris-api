export async function getObject(
  bucket: R2Bucket,
  key: string,
  range?: { start: number; length: number }
) {
  const opts = range ? { range } : undefined
  const obj = await bucket.get(key, opts)
  if (!obj) return null

  const size = obj.size
  const etag = obj.httpEtag
  const lastModified = obj.uploaded?.toUTCString?.()
  const contentType = obj.httpMetadata?.contentType ?? 'application/octet-stream'
  const headers: Record<string, string> = {
    'Accept-Ranges': 'bytes',
    'Content-Type': contentType,
    'ETag': etag,
    'Cache-Control': 'private, max-age=0, must-revalidate',
  }
  if (lastModified) headers['Last-Modified'] = lastModified

  if (range && obj.body) {
    const start = range.start
    const end = Math.min(size - 1, start + range.length - 1)
    headers['Content-Range'] = `bytes ${start}-${end}/${size}`
    headers['Content-Length'] = String(end - start + 1)
    return { body: obj.body, status: 206, headers }
  }

  if (obj.body) headers['Content-Length'] = String(size)
  return { body: obj.body, status: 200, headers }
}