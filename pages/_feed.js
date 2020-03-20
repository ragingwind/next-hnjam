import Nav from '../components/nav'
import Feed from '../components/feed'

export default function Feeds({ items }) {
  return (
    <>
      <Nav />
      <Feed items={items} />
    </>
  )
}