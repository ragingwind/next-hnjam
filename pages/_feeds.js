import Page from '../components/page'
import Items from '../components/items'

export default function Feeds ({ items }) {
  return (
    <div className="container mx-auto">
      <Page>
        <Items items={items} />
      </Page>
    </div>
  )
}