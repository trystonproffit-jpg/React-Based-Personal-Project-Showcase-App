import { useState } from "react";

function Admin({ products, setProducts }) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const API_URL = "http://localhost:5000/products";

  // Add New Product
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !brand || !description || !price) return;

    const newProduct = { name, brand, description, price: Number(price) };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });
      const savedProduct = await res.json();

      // Update App-level products state
      setProducts([...products, savedProduct]);

      setName("");
      setBrand("");
      setDescription("");
      setPrice("");
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  // Update Product
  const handleProductChange = async (id, key, value) => {
    const newValue = key === "price" ? Number(value) : value;

    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ [key]: newValue }),
      });
      const updatedProduct = await res.json();

      // Update App-level products state
      setProducts(products.map((p) => (p.id === id ? updatedProduct : p)));
    } catch (err) {
      console.error("Error updating product:", err);
    }
  };

  // Delete a Product
  const handleDelete = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });

      // Update App-level products state
      setProducts(products.filter((p) => p.id !== id));
    } catch (err) {
      console.error("Error deleting product:", err);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Admin Portal</h2>

      {/* Add Product Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
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
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button type="submit">Add Shoe</button>
      </form>

      {/* Editable Products List */}
      <h3>Current Products</h3>
      <ul>
        {products.map((product) => (
          <li key={product.id} style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              value={product.name}
              onChange={(e) =>
                handleProductChange(product.id, "name", e.target.value)
              }
            />
            <input
              type="text"
              value={product.brand}
              onChange={(e) =>
                handleProductChange(product.id, "brand", e.target.value)
              }
            />
            <input
              type="text"
              value={product.description}
              onChange={(e) =>
                handleProductChange(product.id, "description", e.target.value)
              }
            />
            <input
              type="number"
              value={product.price}
              onChange={(e) =>
                handleProductChange(product.id, "price", e.target.value)
              }
            />
            <button onClick={() => handleDelete(product.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Admin;