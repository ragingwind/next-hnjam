import Link from 'next/link'

const Item = ({ item }) => (
  <li>
    <span className="point">{item.points || 1}</span>
    <span>
      <div>
        <a href={item.url} target="_black">
          {item.title}
        </a>
      </div>
      <div>
        <span>
          <Link href={`/user?id=${item.user}`}>
            <a>{item.user || 'John Doh'}</a>
          </Link>
        </span>
        <span>
          {' '}
          |{' '}
          <Link href={`/comments?id=${item.id}`}>
            <a>{item.comments_count || 0} comments</a>
          </Link>
        </span>
      </div>
    </span>
    <style jsx>{`
      li {
        list-style-type: none;
        position: relative;
        padding: 20px 30px 20px 80px;
        border-bottom: 1px solid #eee;
        line-height: 20px;
      }
      .point {
        font-size: 18px;
        font-weight: 700;
        position: absolute;
        top: 50%;
        left: 0;
        width: 80px;
        text-align: center;
        margin-top: -10px;
      }
    `}</style>
  </li>
)

const maxPage = {
  '/news': 10,
  '/newest': 10,
  '/ask': 2,
  '/show': 2,
  '/jobs': 1
}

const More = ({ feed, page }) => (
  <div>
    {page < maxPage[feed] ? (
      <Link href={`${feed}?page=${page + 1}`}>
        <a>More...</a>
      </Link>
    ) : (
      ''
    )}
    <style jsx>{`
      padding: 0 12px;
    `}</style>
  </div>
)

export default function Items({ items }) {
  return (
    <div>
      <ul>{items && items.map(f => <Item key={f.id} item={f} />)}</ul>
      <style jsx>{`
        ul {
          padding: 0;
        }
      `}</style>
    </div>
  )
}
