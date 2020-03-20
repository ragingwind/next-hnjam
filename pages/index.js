import { getFeeds } from '../lib/hn'

export {default} from './_feed'

export async function getStaticProps({ params }) {
  return getFeeds('news')
}

export async function getStaticPaths() {
  return {
    paths: ['newest', 'ask', 'show', 'jobs'].map(p => {
      return {
        params: {
          slug: p
        }
      }
    }),
    fallback: false
  }
}