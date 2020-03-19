import Link from 'next/link'

export default ({ items }) => (
  <div>
    <p>Hello, Next.js</p>
    <div>
      <Link href={'/'}>
        <a>News</a>
      </Link>
      <Link href={'/feeds/newest'}>
        <a>Newest</a>
      </Link>
    </div>
    <div>
      {items.map((n, i) => (
        <div key={i}>{n.title}</div>
      ))}
    </div>
  </div>
)