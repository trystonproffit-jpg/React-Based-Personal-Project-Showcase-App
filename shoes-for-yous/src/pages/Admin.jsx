import { useState } from "react";

function Admin({ products = [], setProducts }) {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !brand || !description || !price) return;

        const newProduct = {
            id: Date.now(),
            name,
            brand,
            description,
            price: Number(price),
        };

        setProducts([...products, newProduct]);

        setName("");
        setBrand("");
        setDescription("");
        setPrice("");
    };

    const handlePriceChange = (id, newPrice) => {
        setProducts(
            products.map((p) =>
                p.id === id ? { ...p, price: Number(newPrice) } : p
            )
        );
    };

    return (
        <div>
            <h2>Admin Portal</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Shoe Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                
                <input
                    type="text"
                    placeholder="Brand"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                />
                
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <button type="submit">Add Shoe</button>
            </form>

            <h3>Current Products</h3>
            <ul>
                {products.map((product) => (
                    <li key={product.id} style={{ marginBottom: "1rem" }}>
                        <strong>{product.name}</strong> - {product.brand} - ${product.price}
                        <br />
                        <input
                            type="number"
                            value={product.price}
                            onChange={(e) => handlePriceChange(product.id, e.target.value)                                
                            }
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Admin;