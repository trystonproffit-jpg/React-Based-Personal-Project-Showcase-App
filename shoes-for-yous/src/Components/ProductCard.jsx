function ProductCard({ product }) {
    return (
        <div
            style={{
                background: "#eee",
                padding: "15px",
                borderRadius: "8px",
                width: "180px"
            }}
        >
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p>{product.description}</p>
            <p>${product.price}</p>
        </div>
    )
}

export default ProductCard;