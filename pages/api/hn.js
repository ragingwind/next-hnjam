import fetch from 'node-fetch'

export default async function news(req, res) {
  const response = await fetch('http://api.hnpwa.com/v0/news/1.json', {
    method: 'GET'
  })
  const data = await response.json()

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate')
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader('Access-Control-Allow-Headers', 'pragma')
  res.status(200)
  res.json(data)
  res.end()
}