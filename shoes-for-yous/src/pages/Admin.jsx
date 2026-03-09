import { useState } from "react";

function Admin({ products, setProducts }) {
    const [name, setName] = useState("");
    const [brand, setBrand] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newProduct = {
            id: products.length + 1,
            name,
            brand,
            description,
            price: Number(price)
        };

        setProducts([...products, newProduct]);

        setName("");
        setBrand("");
        setDescription("");
        setPrice("");
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
        </div>
    );
}

export default Admin;