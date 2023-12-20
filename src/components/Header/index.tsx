import * as React from "react";
import { Link as NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useScrollTrigger } from "@mui/material";
import { Link } from "react-scroll";

const drawerWidth = 240;

const navItems = [
  { title: "Home", to: "#section-1" },
  { title: "Location", to: "#section-2" },
  { title: "Aggiungi al calendario", to: "#section-3" },
];

type Props = {
  hideMenu?: boolean;
};

const title = "Cristiano & Marta";

export default function Header({ hideMenu = false }: Props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: hideMenu
      ? window.screen.height * 0.1
      : window.screen.height * 0.38,
  });

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", backgroundColor: "transparent" }}
    >
      <Typography variant="h6" sx={{ my: 2 }} color={"#596D4E"}>
        {title}
      </Typography>
      {!hideMenu && (
        <>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  <Link
                    to={item.to}
                    smooth={true}
                    duration={500}
                    onClick={handleDrawerToggle}
                  >
                    <ListItemText primary={item.title} />
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  window.location.href = "/lista-di-nozze";
                }}
              >
                <ListItemText primary={"Lista di nozze"} />
              </ListItemButton>
            </ListItem>
          </List>
        </>
      )}
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        component={"nav"}
        elevation={trigger ? 4 : 0}
        sx={{
          backgroundColor: trigger ? "#596D4E" : "transparent",
        }}
      >
        <Toolbar sx={{ justifyContent: { sm: "center" } }}>
          {!hideMenu && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: !hideMenu ? "none" : "block", sm: "block" },
            }}
            color={"white"}
          >
            <NavLink
              to={"/"}
              style={{ color: "white", textDecoration: "none" }}
            >
              {title}
            </NavLink>
          </Typography>
          {!hideMenu && (
            <Box
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.title}
                  sx={{ color: "white", fontWeight: "600" }}
                >
                  <Link
                    key={item.title}
                    to={item.to}
                    smooth={true}
                    duration={500}
                  >
                    {item.title}
                  </Link>
                </Button>
              ))}
              <Button
                sx={{ color: "white", fontWeight: "600" }}
                onClick={() => {
                  window.location.href = "/lista-di-nozze";
                }}
              >
                Lista di nozze
              </Button>
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
