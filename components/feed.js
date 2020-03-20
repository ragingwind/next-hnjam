export default ({ items }) => (
  <div>
    {items.map((n, i) => (
      <div key={i}>{n.title}</div>
    ))}
  </div>
)
