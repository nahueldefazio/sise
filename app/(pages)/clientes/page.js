"use client"
import React, { useMemo } from 'react';
import { Container, Typography, Grid, Paper, Box, Fade, Zoom } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { styled } from '@mui/material/styles';

// Styled component for client logo container
const ClientLogoContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  height: '200px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-10px)',
    background: 'rgba(255, 255, 255, 0.15)',
    boxShadow: '0 8px 32px rgba(255, 215, 0, 0.15)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '4px',
    background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
  }
}));

function Clientes() {
  // Memoize client logos to prevent unnecessary re-renders
  const clientLogos = useMemo(() => [
    {
      id: 1,
      src: '/images/logos/sacabollos.png',
      alt: 'Sacabollos Impacto',
      width: 300,
      height: 150
    },
    {
      id: 2,
      src: '/images/logos/see.png',
      alt: 'SEE Automation Digital Packaging',
      width: 300,
      height: 150
    },
    {
      id: 3,
      src: '/images/logos/manantial.jpg',
      alt: 'Manantial Grupo Humano',
      width: 300,
      height: 150
    },
    {
      id: 4,
      src: '/images/logos/cajaRuidos.png',
      alt: 'Caja de Ruidos',
      width: 300,
      height: 150
    }
  ], []);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
      minHeight: '100vh',
      py: 8,
      color: 'white'
    }}>
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box>
            <Box sx={{ 
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Typography variant="body1" component="span" sx={{ color: '#FFD700' }}>
                Inicio
              </Typography>
              <Typography variant="body1" component="span" sx={{ color: '#FFD700' }}>
                {' > '}
              </Typography>
              <Typography variant="body1" component="span" sx={{ color: '#FFD700', fontWeight: 'bold' }}>
                Clientes
              </Typography>
            </Box>

            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              align="center"
              sx={{
                mb: 8,
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '2px'
              }}
            >
              Empresas que Confían en Nosotros
            </Typography>

            <Grid container spacing={4} justifyContent="center" ref={ref}>
              {clientLogos.map((logo, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={logo.id}>
                  <Zoom in={inView} style={{ transitionDelay: `${index * 200}ms` }}>
                    <ClientLogoContainer elevation={3}>
                      <Box 
                        sx={{ 
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          width: '80%', 
                          height: '80%',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          }
                        }}
                      >
                        <Image
                          src={logo.src}
                          alt={logo.alt}
                          width={logo.width}
                          height={logo.height}
                          sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 25vw"
                          style={{
                            objectFit: 'contain',
                            opacity: 0.9,
                            transition: 'opacity 0.3s ease',
                          }}
                          onMouseOver={(e) => { e.currentTarget.style.opacity = 1; }}
                          onMouseOut={(e) => { e.currentTarget.style.opacity = 0.9; }}
                        />
                      </Box>
                    </ClientLogoContainer>
                  </Zoom>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default Clientes;
