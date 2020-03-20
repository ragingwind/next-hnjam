import Link from 'next/link'

const LabelLink = ({ href, label }) => (
  <span>
    <Link href={href}>
      <a>{label}</a>
    </Link>
  </span>
)

export default () => (
  <nav>
    <LabelLink href={'/'} label={'▲'} />
    <LabelLink href={'/'} label={'news'} />
    {['newest', 'ask', 'show', 'jobs'].map(p => {
      return <LabelLink key={p} href={`/feeds/${p}`} label={p.toUpperCase()} />
    })}
  </nav>
)
