function Shop({ products }) {
  return (
    <div>
      <h2>Shop</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.brand} - ${p.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shop;