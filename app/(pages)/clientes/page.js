"use client"
import React, { useMemo } from 'react';
import { Container, Typography, Grid, Paper, Box, Fade, Zoom } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { getImagePath } from '../../utils/imagePath';

// Styled component for client logo container
const ClientLogoContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(5),
  height: '220px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(255, 255, 255, 0.12)',
  backdropFilter: 'blur(15px)',
  borderRadius: '20px',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-15px)',
    background: 'rgba(255, 255, 255, 0.18)',
    boxShadow: '0 15px 35px rgba(255, 215, 0, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '5px',
    background: '#ffff00',
  }
}));

function Clientes() {
  // Memoize client logos to prevent unnecessary re-renders
  const clientLogos = useMemo(() => [
    {
      id: 1,
      src: getImagePath('/images/logos/sacabollos.png'),
      alt: 'Sacabollos Impacto',
      width: 300,
      height: 150
    },
    {
      id: 2,
      src: getImagePath('/images/logos/see.png'),
      alt: 'SEE Automation Digital Packaging',
      width: 300,
      height: 150
    },
    {
      id: 3,
      src: getImagePath('/images/logos/manantial.jpg'),
      alt: 'Manantial Grupo Humano',
      width: 300,
      height: 150
    },
    {
      id: 4,
      src: getImagePath('/images/logos/cajaRuidos.png'),
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
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Image with Blur - Full Screen */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <Image
          src="/images/home/server1.jpg"
          alt="Tecnología empresarial y servidores que respaldan los servicios de seguridad electrónica que las empresas confían en SISE"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: 'scale(1.1)'
          }}
          quality={80}
          priority
        />
        
        {/* Dark overlay for better content readability */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0.95) 100%)',
          zIndex: 1
        }} />
        
        {/* Corporate Pattern Overlay */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            radial-gradient(circle at 20% 80%, rgba(255, 255, 0, 0.1) 0%, transparent 60%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 0, 0.1) 0%, transparent 60%),
            radial-gradient(circle at 40% 40%, rgba(255, 255, 0, 0.05) 0%, transparent 50%)`,
          zIndex: 2
        }} />
      </Box>
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3, py: 8 }}>
        <Fade in timeout={1000}>
          <Box>
            <Box sx={{ 
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Typography variant="body1" component="span" sx={{ color: '#ffff00' }}>
                Inicio
              </Typography>
              <Typography variant="body1" component="span" sx={{ color: '#ffff00' }}>
                {' > '}
              </Typography>
              <Typography variant="body1" component="span" sx={{ color: '#ffff00', fontWeight: 'bold' }}>
                Clientes
              </Typography>
            </Box>

            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom 
              align="center"
              sx={{
                mb: 10,
                mt: 4,
                fontWeight: 'bold',
                color: '#ffff00',
                textShadow: '4px 4px 8px rgba(0,0,0,0.9)',
                letterSpacing: '0.04em',
                fontSize: { xs: '2.8rem', md: '3.8rem', lg: '4.3rem' },
                textTransform: 'uppercase',
                lineHeight: { xs: 1.2, md: 1.3 }
              }}
            >
              Empresas que Confían en Nosotros
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              mb: 6 
            }}>
              <Box sx={{
                width: '140px',
                height: '5px',
                background: '#ffff00',
                borderRadius: '3px',
                boxShadow: '0 3px 12px rgba(255, 255, 0, 0.5)'
              }} />
            </Box>

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
