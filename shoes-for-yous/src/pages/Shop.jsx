import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Shop({ products }) {
    const [search, setSearch] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.brand.toLowerCase().includes(search.toLowerCase())
    );
    
    return (
        <div>
            <h2>Shop</h2>

            <input  
                type="text"
                placeholder="Search shoes..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <div 
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    marginTop: "20px"
                }}
            >
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default Shop;