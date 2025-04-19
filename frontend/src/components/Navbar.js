import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const navItems = [
  { title: 'INICIO', path: '/' },
  { title: 'CÁMARAS', path: '/camaras' },
  { title: 'ALARMA', path: '/alarma' },
  { title: 'MONITOREO', path: '/monitoreo' },
  { title: 'OTROS SERVICIOS', path: '/servicios' },
  { title: 'PERSONAS QUE CONFÍAN EN NOSOTROS', path: '/clientes' },
  { title: 'NOSOTROS', path: '/nosotros' },
  { title: 'CONTACTO', path: '/contacto' }
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{color: "yellow"}} >
        <Box
          component={Link}
          to="/"
          sx={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            '&:hover': {
              transform: 'scale(1.05)',
            },
            transition: 'transform 0.2s ease-in-out',
            borderRadius: '8px',
          }}
        >
          <Box
            component="img"
            src="/images/logos/logo.jpg"
            alt="SISE - Servicios Integrados en Seguridad Electrónica"
            sx={{
              height: '50px',
              width: 'auto',
              mr: 2
            }}
          />
        </Box>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            >
              <List>
                {navItems.map((item) => (
                  <ListItem 
                    button 
                    component={Link} 
                    to={item.path} 
                    key={item.title}
                    onClick={handleDrawerToggle}
                  >
                    <ListItemText primary={item.title} />
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }} S>
            {navItems.map((item) => (
              <Button
                color="inherit"
                component={Link}
                to={item.path}
                key={item.title}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;