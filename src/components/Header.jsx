import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import { purple } from "@mui/material/colors";
import { NavLink, useNavigate } from "react-router-dom";
import { Code } from "@mui/icons-material";

// const pages = ["Home", "About", "Projects", "Contact"];

const pages = [
  {
    name: "Home",
    color: "#9c27b0",
  },
  {
    name: "About",
    color: "#e91e63",
  },
  {
    name: "Projects",
    color: "#03a9f4",
  },
  {
    name: "Contact",
    color: "#e91e63",
  },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      className="header"
      position="static"
      sx={{ backgroundColor: "transparent" }}
    >
      <Container>
        <Toolbar disableGutters>
          <Code sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Mohab Khaled
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name}>
                  <NavLink
                    style={{ textDecoration: "none" }}
                    to={`/${page.name === "Home" ? "" : page.name}`}
                  >
                    <Button
                      key={page.name}
                      onClick={() => {
                        handleCloseNavMenu();
                        document.documentElement.style.setProperty(
                          "--primary-color",
                          page.color
                        );
                      }}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        fontSize: "15px",
                        "&:hover": {
                          color: page.color,
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      {page.name}
                    </Button>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Code sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Mohab Khaled
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <NavLink
                style={{ textDecoration: "none" }}
                to={`/${page.name === "Home" ? "" : page.name}`}
              >
                <Button
                  key={page.name}
                  onClick={() => {
                    handleCloseNavMenu();
                    document.documentElement.style.setProperty(
                      "--primary-color",
                      page.color
                    );
                  }}
                  sx={{
                    my: 2,
                    color: "white",
                    display: "block",
                    fontSize: "15px",
                    "&:hover": {
                      color: page.color,
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {page.name}
                </Button>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
