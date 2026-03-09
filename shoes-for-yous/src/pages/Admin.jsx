import { useState } from "react";
import { TextField, Button, Box, Typography, Paper, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Admin({ products, setProducts }) {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const API_URL = "http://localhost:5000/products";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !brand || !description || !price) return;

    const newProduct = { name, brand, description, price: Number(price) };
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });
    const savedProduct = await res.json();
    setProducts([...products, savedProduct]);

    setName("");
    setBrand("");
    setDescription("");
    setPrice("");
  };

  const handleProductChange = async (id, key, value) => {
    const newValue = key === "price" ? Number(value) : value;
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [key]: newValue }),
    });
    const updatedProduct = await res.json();
    setProducts(products.map((p) => (p.id === id ? updatedProduct : p)));
  };

  const handleDelete = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Admin Portal
      </Typography>

      {/* Add Product Form */}
      <Paper sx={{ padding: 3, marginBottom: 4 }} elevation={3}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <TextField label="Shoe Name" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField label="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            label="Price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary">
            Add Shoe
          </Button>
        </Box>
      </Paper>

      {/* Products List */}
      <Typography variant="h5" gutterBottom>
        Current Products
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {products.map((product) => (
          <Paper key={product.id} sx={{ padding: 2, display: "flex", alignItems: "center", gap: 2 }} elevation={2}>
            <TextField
              label="Name"
              value={product.name}
              onChange={(e) => handleProductChange(product.id, "name", e.target.value)}
              sx={{ flex: 1 }}
            />
            <TextField
              label="Brand"
              value={product.brand}
              onChange={(e) => handleProductChange(product.id, "brand", e.target.value)}
              sx={{ flex: 1 }}
            />
            <TextField
              label="Description"
              value={product.description}
              onChange={(e) => handleProductChange(product.id, "description", e.target.value)}
              sx={{ flex: 2 }}
            />
            <TextField
              label="Price"
              type="number"
              value={product.price}
              onChange={(e) => handleProductChange(product.id, "price", e.target.value)}
              sx={{ width: 120 }}
            />
            <IconButton color="error" onClick={() => handleDelete(product.id)}>
              <DeleteIcon />
            </IconButton>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Admin;