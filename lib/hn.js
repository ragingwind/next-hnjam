import fetch from 'node-fetch'
import md5Hex from 'md5-hex'

export async function getFeeds(feed) {
  const response = await fetch(`http://api.hnpwa.com/v0/${feed}/1.json`, {
    method: 'GET'
  })
  const items = await response.json()
  const etag = md5Hex(JSON.stringify(items))

  return {
    props: {
      items,
      etag
    }
  }
}