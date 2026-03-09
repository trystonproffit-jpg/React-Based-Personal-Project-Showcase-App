import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navColor = "#f28b82";

  const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: navColor }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Box sx={{ display: "flex", gap: 4 }}>
          <Button
            component={NavLink}
            to="/"
            sx={{
              color: "white",
              "&:hover": { color: "#fff9f9" },
            }}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Home
          </Button>

          <Button
            component={NavLink}
            to="/shop"
            sx={{
              color: "white",
              "&:hover": { color: "#fff9f9" },
            }}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Shop
          </Button>

          <Button
            component={NavLink}
            to="/admin"
            sx={{
              color: "white",
              "&:hover": { color: "#fff9f9" },
            }}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Admin
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;