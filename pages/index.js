import fetch from 'node-fetch'
import md5Hex from 'md5-hex'
import Feed from '../components/feed'

function Index({ items }) {
  return <Feed items={items} />
}

export async function getStaticProps() {
  const response = await fetch('http://api.hnpwa.com/v0/news/1.json', {
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

export default Index
