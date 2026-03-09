import { Box, Typography, Paper } from "@mui/material";

function Shop({ products }) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center", // centers content horizontally
        gap: 3,
        backgroundColor: "#fff5f5", // soft background to match the theme
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ color: "#b71c1c", fontWeight: "bold" }}>
        Shop
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "100%",
          maxWidth: 600, // limits width for better readability
        }}
      >
        {products.map((p) => (
          <Paper
            key={p.id}
            sx={{
              padding: 2,
              textAlign: "center", // center all text inside the paper
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "#0a090a", // contrasting dark text
            }}
            elevation={3}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: 1 }}>
              {p.name}
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: 0.5 }}>
              Brand: {p.brand}
            </Typography>
            <Typography variant="body1" sx={{ marginBottom: 0.5 }}>
              ${p.price}
            </Typography>
            <Typography variant="body2">{p.description}</Typography>
          </Paper>
        ))}
      </Box>
    </Box>
  );
}

export default Shop;