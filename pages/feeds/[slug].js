import fetch from 'node-fetch'
import md5Hex from 'md5-hex'
import Link from 'next/link'
import Feed from '../../components/feed'

export default function Feeds({ items }) {
  return <Feed items={items} />
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `http://api.hnpwa.com/v0/${params.slug}/1.json`,
    {
      method: 'GET'
    }
  )
  const items = await response.json()
  const etag = md5Hex(JSON.stringify(items))

  return {
    props: {
      items,
      etag
    }
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { slug: 'newest' }
      }
    ],
    fallback: false
  }
}
