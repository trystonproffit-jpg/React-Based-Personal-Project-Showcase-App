import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Shop() {
    return (
        <div>
            <h2>Shop</h2>

            <div 
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    marginTop: "20px"
                }}
            >
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Shop;