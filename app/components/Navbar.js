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
  Typography,
  Divider,
  Fade,
  Slide,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import VideocamIcon from '@mui/icons-material/Videocam';
import SecurityIcon from '@mui/icons-material/Security';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import GroupIcon from '@mui/icons-material/Group';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { getImagePath } from '../utils/imagePath';
import { getNavPath } from '../utils/getNavPath';

const navItems = [
  { title: 'INICIO', path: '/', icon: HomeIcon },
  { title: 'CÁMARAS', path: '/camaras', icon: VideocamIcon },
  { title: 'ALARMA', path: '/alarma', icon: SecurityIcon },
  { title: 'MONITOREO', path: '/monitoreo', icon: MonitorHeartIcon },
  { title: 'OTROS SERVICIOS', path: '/servicios', icon: MiscellaneousServicesIcon },
  { title: 'CLIENTES', path: '/clientes', icon: GroupIcon },
  { title: 'NOSOTROS', path: '/nosotros', icon: InfoIcon },
  { title: 'CONTACTO', path: '/contacto', icon: ContactMailIcon }
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
      boxShadow: '0 2px 10px rgba(255, 255, 0, 0.3)',
      borderBottom: '2px solid #ffff00'
    }}>
      <Toolbar sx={{color: "#ffff00"}} >
        <Link href={getNavPath("/")} passHref>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              textDecoration: 'none',
              '&:hover': {
                transform: 'scale(1.05)',
                filter: 'drop-shadow(0 0 8px #ffff00)'
              },
              transition: 'all 0.3s ease-in-out',
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
                border: '2px solid #ffff00',
              }}
            />
          </Box>
        </Link>

        {isMobile ? (
          <>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              sx={{
                color: '#ffff00',
                backgroundColor: 'rgba(255, 255, 0, 0.1)',
                borderRadius: '12px',
                padding: '8px',
                '&:hover': {
                  color: '#ff0000',
                  backgroundColor: 'rgba(255, 255, 0, 0.2)',
                  transform: 'scale(1.1)',
                  boxShadow: '0 4px 12px rgba(255, 255, 0, 0.3)'
                },
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Drawer
              anchor="right"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              transitionDuration={300}
              sx={{
                '& .MuiDrawer-paper': {
                  width: '280px',
                  backgroundColor: 'rgba(0, 0, 0, 0.98)',
                  backdropFilter: 'blur(20px)',
                  borderLeft: '3px solid #ffff00',
                  boxShadow: '0 0 30px rgba(255, 255, 0, 0.3)'
                },
                '& .MuiBackdrop-root': {
                  backgroundColor: 'rgba(0, 0, 0, 0.7)'
                }
              }}
            >
              {/* Header del menú */}
              <Box sx={{ 
                p: 3, 
                borderBottom: '1px solid rgba(255, 255, 0, 0.2)',
                background: 'linear-gradient(135deg, rgba(255, 255, 0, 0.1) 0%, rgba(255, 255, 0, 0.05) 100%)'
              }}>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography variant="h6" sx={{ 
                    color: '#ffff00', 
                    fontWeight: 'bold',
                    textShadow: '0 0 10px rgba(255, 255, 0, 0.5)'
                  }}>
                    MENÚ
                  </Typography>
                  <IconButton
                    onClick={handleDrawerToggle}
                    sx={{
                      color: '#ffff00',
                      '&:hover': {
                        color: '#ff0000',
                        transform: 'rotate(90deg)'
                      },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>
              </Box>

              {/* Lista de navegación */}
              <List sx={{ pt: 2, px: 1 }}>
                {navItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <Fade in={mobileOpen} timeout={300} style={{ transitionDelay: `${index * 50}ms` }} key={item.title}>
                      <ListItem 
                        onClick={handleDrawerToggle}
                        sx={{
                          mb: 1,
                          borderRadius: '12px',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          '&:hover': {
                            backgroundColor: 'rgba(255, 255, 0, 0.15)',
                            transform: 'translateX(8px)',
                            boxShadow: '0 4px 20px rgba(255, 255, 0, 0.2)',
                            '& .menu-icon': {
                              color: '#ff0000',
                              transform: 'scale(1.2)'
                            },
                            '& .menu-text': {
                              color: '#ff0000',
                              textShadow: '0 0 8px rgba(255, 0, 0, 0.5)'
                            }
                          }
                        }}
                      >
                        <Link 
                          href={getNavPath(item.path)} 
                          passHref 
                          style={{ 
                            textDecoration: 'none', 
                            color: 'inherit',
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            padding: '8px 0'
                          }}
                        >
                          <IconComponent 
                            className="menu-icon"
                            sx={{ 
                              color: '#ffff00', 
                              mr: 2, 
                              fontSize: '24px',
                              transition: 'all 0.3s ease'
                            }} 
                          />
                          <ListItemText 
                            primary={item.title}
                            className="menu-text"
                            sx={{ 
                              '& .MuiListItemText-primary': {
                                color: '#ffff00',
                                fontWeight: '500',
                                fontSize: '0.95rem',
                                transition: 'all 0.3s ease'
                              }
                            }} 
                          />
                        </Link>
                      </ListItem>
                    </Fade>
                  );
                })}
              </List>

              {/* Footer del menú */}
              <Box sx={{ 
                mt: 'auto', 
                p: 3, 
                borderTop: '1px solid rgba(255, 255, 0, 0.2)',
                textAlign: 'center'
              }}>
                <Typography variant="body2" sx={{ 
                  color: 'rgba(255, 255, 0, 0.7)',
                  fontSize: '0.8rem'
                }}>
                  SISE - Seguridad Electrónica
                </Typography>
              </Box>
            </Drawer>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: 2 }}>
            {navItems.map((item) => (
              <Link 
                href={getNavPath(item.path)} 
                key={item.title} 
                passHref 
                style={{ textDecoration: 'none' }}
              >
                <Button 
                  sx={{
                    color: '#ffff00',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    '&:hover': {
                      color: '#ff0000',
                      backgroundColor: 'rgba(255, 255, 0, 0.1)',
                      transform: 'translateY(-2px)',
                      textShadow: '0 0 8px #ff0000'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
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
