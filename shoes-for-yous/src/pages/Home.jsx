import { Box, Typography, Paper } from "@mui/material";

function Home() {
  const gradientBg = "linear-gradient(180deg, #ffffff 0%, #f28b82 100%)";

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 4,
        background: gradientBg,
        padding: 4,
      }}
    >
      {/* H1 Box */}
      <Paper
        sx={{
          padding: 3,
          backgroundColor: "rgba(255,255,255,0.9)",
          textAlign: "center",
          maxWidth: 600,
        }}
        elevation={6}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#b71c1c",
          }}
        >
          Welcome to the Shoe Store
        </Typography>
      </Paper>

      {/* Paragraph Box */}
      <Paper
        sx={{
          padding: 3,
          backgroundColor: "rgba(255,255,255,0.85)",
          textAlign: "center",
          maxWidth: 600,
        }}
        elevation={3}
      >
        <Typography
          variant="body1"
          sx={{
            color: "#0c0b0c",
            fontSize: "1.2rem",
          }}
        >
          Discover the latest sneakers from top brands, browse our shop, and manage products in the admin portal. Quality shoes, great style, and easy navigation.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Home;