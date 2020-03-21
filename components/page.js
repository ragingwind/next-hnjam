import Nav from './nav'

export default function Page({ children }) {
  return (
    <main>
      <Nav />
      <div>{children}</div>
      <style jsx>{`
        div {
          width: 100%;
          color: #333;
          padding-top: 30px;
        }
      `}</style>
    </main>
  )
}
