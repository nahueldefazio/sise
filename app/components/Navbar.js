"use client"
import React, { useState } from 'react';
import Link from 'next/link';  // Fixed import
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
import { getImagePath } from '../utils/imageLoader';

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
    <AppBar position="fixed" sx={{ 
      backgroundColor: 'rgba(0, 0, 0, 0.95)',
      backdropFilter: 'blur(8px)',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
    }}>
      <Toolbar sx={{color: "yellow"}} >
        <Link href="/" passHref>
          <Box
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
              src={getImagePath("/images/logos/logo.jpg")}
              alt="SISE - Servicios Integrados en Seguridad Electrónica"
              sx={{
                height: '50px',
                width: 'auto',
                mr: 2,
                borderRadius: '8px',
              }}
            />
          </Box>
        </Link>

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
                    key={item.title}
                    onClick={handleDrawerToggle}
                  >
                    <Link href={item.path} passHref style={{ textDecoration: 'none' }}>
                      <ListItemText primary={item.title} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Link 
                href={item.path} 
                key={item.title} 
                passHref 
                style={{ textDecoration: 'none', color: 'yellow' }}
              >
                <Button color="inherit">
                  {item.title}
                </Button>
              </Link>
            ))}
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
