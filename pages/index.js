import { getFeeds } from '../lib/hn'

export {default} from './_feeds'

export async function getStaticProps({ params }) {
  return getFeeds('news')
}