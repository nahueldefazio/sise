'use client';
import React, { useEffect, useState, useMemo } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Container, Typography, Grid, Box, Button, Fade, Slide, Zoom, useMediaQuery, useTheme } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from '@mui/material';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import { getImagePath } from '../utils/imagePath';
import { getNavPath, getNonNavbarPath } from '../utils/getNavPath';

// Styled components for reusable styles
const GlassmorphicContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  borderRadius: '16px',
  background: 'rgba(0, 5, 5, 0.25)',
  color: 'white',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  textAlign: 'center',
  transition: 'transform 0.3s ease',
  '&:hover': {
    transform: 'translateX(10px)'
  }
}));

const FullWidthSection = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundImage'
})(({ theme, backgroundImage }) => ({
  width: '100vw',
  marginLeft: 'calc(-50vw + 50%)',
  marginRight: 'calc(-50vw + 50%)',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(6),
  backgroundImage: `url("${getImagePath(backgroundImage)}")`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const ResponsiveImage = styled(Image)({
  width: '100%',
  height: 'auto',
  borderRadius: '20px',
  marginTop: '20px'
});

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6]
  }
}));

function Inicio() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  // Memoize carousel items to prevent unnecessary re-renders
  const items = useMemo(
    () => [
      {
        img: getImagePath('/images/home/sise3.jpg'),
        alt: 'Sistema de monitoreo de seguridad SISE funcionando las 24 horas del día para proteger propiedades residenciales y comerciales',
        title: 'Monitoreo 24/7',
        description: 'Servicios Integrales en Seguridad Electronica',
        width: 1920,
        height: 1080
      },
      {
        img: getImagePath('/images/home/cam3.jpg'),
        alt: 'Cámaras de seguridad profesionales instaladas por SISE para videovigilancia integral de hogar y empresa',
        title: 'Seguridad Integral',
        description: 'Atencion personalizada',
        width: 1920,
        height: 1080
      },
      {
        img: getImagePath('/images/home/alarma1.png'),
        alt: 'Sistema de alarmas residenciales SISE con sensores de movimiento y central de monitoreo para protección del hogar',
        title: 'Alarmas Residenciales',
        description: 'Instalacion de alarmas de seguridad',
        width: 1920,
        height: 1080
      }
    ],
    []
  );

  // Use a single useInView hook with refs object for better performance
  const { ref: ref1, inView: inView1 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref2, inView: inView2 } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: ref3, inView: inView3 } = useInView({ threshold: 0.2, triggerOnce: true });

  const [showScrollTop, setShowScrollTop] = useState(false);

  // Optimize scroll event listener with throttling
  useEffect(() => {
    let timeoutId;

    const handleScroll = () => {
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          setShowScrollTop(window.scrollY > 400);
          timeoutId = null;
        }, 100); // Throttle to 100ms
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Box component="main" sx={{ overflow: 'hidden' }}>
      <Fade in timeout={1000}>
        <Box>
          {/* Hero Carousel Section - Optimized with Next.js Image */}
          <Box
            sx={{
              width: '100%',
              height: { xs: '60vh', md: '90vh' },
              position: 'relative'
            }}
          >
            <Carousel
              animation="slide"
              interval={5000}
              indicators={true}
              navButtonsAlwaysVisible={true}
              sx={{
                height: '100%',
                '& .MuiButtonBase-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.3)',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.5)'
                  }
                }
              }}
            >
              {items.map((item, i) => (
                <Box
                  key={i}
                  sx={{
                    height: { xs: '60vh', md: '90vh' },
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative'
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                        zIndex: 1
                      }
                    }}
                  >
                    <Image
                      src={getImagePath(item.img)}
                      alt={item.alt}
                      sizes="100vw"
                      priority={i === 0} // Load first image with priority
                      style={{
                        objectFit: 'contain',
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#000000'
                      }}
                      quality={80}
                      width={item.width || 1920}
                      height={item.height || 1080}
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM0NDQ0NDQiLz48L3N2Zz4="
                      onError={(e) => {
                        console.error(`Error loading image: ${item.img}`);
                        e.target.style.backgroundColor = '#444444';
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      textAlign: 'center',
                      px: 4,
                      zIndex: 2
                    }}
                  >
                    <Typography
                      variant="h1"
                      sx={{
                        fontWeight: 'bold',
                        textShadow: '4px 4px 8px rgba(0,0,0,0.8)',
                        mb: { xs: 3, md: 4 },
                        fontSize: { xs: '2.5rem', sm: '3rem', md: '4.5rem', lg: '5.5rem' },
                        lineHeight: { xs: 1.1, md: 1.2 },
                        letterSpacing: { xs: '0.02em', md: '0.03em' },
                        color: '#ffff00',
                        textStroke: '2px #000000',
                        WebkitTextStroke: '1px #000000',
                        px: { xs: 2, md: 3 },
                        mt: { xs: 2, md: 3 }
                      }}
                    >
                      {item.title || 'Seguridad Integral'}
                    </Typography>
                    <Typography
                      variant="h4"
                      sx={{
                        maxWidth: { xs: '95%', md: '900px' },
                        textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                        fontSize: { xs: '1.4rem', sm: '1.6rem', md: '2.2rem', lg: '2.6rem' },
                        lineHeight: { xs: 1.4, md: 1.5 },
                        letterSpacing: { xs: '0.01em', md: '0.02em' },
                        fontWeight: 500,
                        color: '#ffff00',
                        WebkitTextStroke: '0.5px #000000',
                        px: { xs: 3, md: 2 },
                        mt: { xs: 1, md: 2 }
                      }}
                    >
                      {item.description || 'Protegemos lo que más te importa'}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Carousel>
          </Box>

          {/* Alarm System Section - Optimized with styled components */}
          <Box
            sx={{
              backgroundImage: `url("${getImagePath('/images/home/camara-de-seguridad.png')}")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: 0
              }
            }}
          >
            <Container
              ref={ref1}
              maxWidth="lg"
              sx={{
                py: { xs: 8, md: 15 },
                px: { xs: 3, md: 4 },
                position: 'relative',
                borderRadius: 4
              }}
            >
              <Grid container spacing={{ xs: 3, md: 6 }} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Slide direction="left" in={inView1} timeout={1200}>
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: { xs: 5, md: 6 },
                        borderRadius: 3,
                        boxShadow: '0 6px 25px rgba(0,0,0,0.3)',
                        color: 'white'
                      }}
                    >
                      <Typography variant="h5" gutterBottom sx={{ textShadow: '3px 3px 6px rgba(0,0,0,0.6)', fontWeight: 'bold', fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.7rem' }, mb: { xs: 3, md: 4 }, mt: { xs: 2, md: 3 }, letterSpacing: '0.02em', lineHeight: { xs: 1.4, md: 1.5 }, px: { xs: 2, md: 3 }, color: '#ffff00' }}>
                        Cuando las oportunidades no llamen a tu puerta...
                      </Typography>
                      <Typography variant="h2" component="h2" gutterBottom sx={{ fontWeight: 'bold', textShadow: '4px 4px 8px rgba(0,0,0,0.7)', fontSize: { xs: '1.8rem', sm: '2.3rem', md: '3.3rem' }, mb: { xs: 4, md: 5 }, letterSpacing: '0.03em', lineHeight: { xs: 1.2, md: 1.3 }, px: { xs: 2, md: 3 }, color: '#ffff00' }}>
                        CONSTRUYE UNA
                      </Typography>
                      <Box sx={{textAlign: 'center', height: 'auto' }}>
                        <Image
                          src={getImagePath('/images/home/sise.jpg')}
                          alt="Componentes del sistema de alarmas SISE: gabinete, placa madre, transformador y batería para protección integral del hogar"
                          width={800}
                          height={500}
                          style={{
                            objectFit: 'cover',
                            borderRadius: '30px',
                            height: 'auto',
                            clipPath: 'inset(4% 0% 3% 0%)',
                            display: 'block',
                            margin: '0 auto',
                            ...(isMobile && { width: '-webkit-fill-available' })
                          }}
                        />
                      </Box>
                      <Typography variant="h6" paragraph sx={{ marginTop: { xs: '30px', md: '40px' }, fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, lineHeight: { xs: 1.6, md: 1.7 }, mb: { xs: 3, md: 4 }, px: { xs: 2, md: 3 }, letterSpacing: '0.01em', textAlign: 'justify' }}>
                        Para proteger a tu familia o tu negocio te ofrecemos un sistema de intrusión a medida que consiste de varios elementos.
                      </Typography>
                      <Typography variant="body1" paragraph sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }, lineHeight: { xs: 1.7, md: 1.8 }, mb: { xs: 4, md: 5 }, px: { xs: 2, md: 3 }, letterSpacing: '0.01em', textAlign: 'justify' }}>
                        Un gabinete donde se aloja la placa madre donde realiza todos los procesos electrónicos, un transformador y una batería para que el sistema siga operando aún ante un corte de
                        luz.
                      </Typography>
                      <StyledButton 
                        variant="contained" 
                        size="large" 
                        href={getNonNavbarPath('/alarma')}
                        sx={{ 
                          fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.4rem' }, 
                          py: { xs: 1.2, md: 2 }, 
                          px: { xs: 2.5, md: 4 },
                          mt: { xs: 1.5, md: 2 },
                          backgroundColor: '#ffff00',
                          color: '#000000',
                          fontWeight: 'bold',
                          minWidth: { xs: '200px', md: 'auto' },
                          '&:hover': {
                            backgroundColor: '#ff0000',
                            color: '#ffffff',
                            transform: 'translateY(-3px)',
                            boxShadow: '0 8px 25px rgba(255, 0, 0, 0.4)'
                          }
                        }}
                      >
                        Sistema de Alarmas
                      </StyledButton>
                    </Box>
                  </Slide>
                </Grid>
              </Grid>
            </Container>
          </Box>

          {/* Monitoring Section - Optimized with styled components */}
          <FullWidthSection
            ref={ref2}
            backgroundImage={getImagePath('/images/home/home2.avif')}
            sx={{
              backgroundAttachment: 'fixed',
              transition: 'transform 0.5s ease',
              '&:hover': {
                transform: 'translateY(-10px)'
              }
            }}
          >
            <Fade in={inView2} timeout={1000}>
              <GlassmorphicContainer sx={{ maxWidth: '900px', padding: { xs: '2rem', sm: '2.5rem', md: '4.5rem' }, mx: { xs: 2, md: 0 } }}>
                <Typography variant="h2" component="h2" gutterBottom align="center" sx={{ fontSize: { xs: '1.7rem', sm: '2.1rem', md: '2.8rem', lg: '3.3rem' }, mb: { xs: 2, md: 3 }, mt: { xs: 2, md: 3 }, letterSpacing: '0.02em', lineHeight: { xs: 1.3, md: 1.4 }, textShadow: '3px 3px 6px rgba(0,0,0,0.7)', color: '#ffff00' }}>
                  Deja de preocuparte y
                </Typography>
                <Typography variant="h2" component="span" align="center" display="block" gutterBottom sx={{ fontSize: { xs: '1.9rem', sm: '2.3rem', md: '3.1rem', lg: '3.8rem' }, fontWeight: 'bold', mb: { xs: 4, md: 5 }, letterSpacing: '0.03em', lineHeight: { xs: 1.2, md: 1.3 }, textShadow: '4px 4px 8px rgba(0,0,0,0.8)', color: '#ffff00' }}>
                  RESUELVE TUS PROBLEMAS
                </Typography>
                <Typography variant="h5" align="center" sx={{ maxWidth: { xs: '95%', md: '800px' }, mx: 'auto', mb: { xs: 4, md: 5 }, fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.6rem', lg: '1.8rem' }, lineHeight: { xs: 1.6, md: 1.7 }, letterSpacing: '0.01em', fontWeight: 500, px: { xs: 3, md: 4 }, textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
                  Nos ocupamos de cuidar lo que más querés para que disfrutes de tu hogar y tu familia con la tranquilidad que mereces.
                </Typography>
                <Typography variant="h6" align="center" sx={{ fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.4rem', lg: '1.5rem' }, lineHeight: { xs: 1.7, md: 1.8 }, mb: { xs: 5, md: 6 }, letterSpacing: '0.01em', px: { xs: 3, md: 4 }, textAlign: 'justify' }}>
                  Contamos con personal las 24hs los 365 días del año para atender y actuar con el usuario o la policía por cualquier evento que haya comunicado el sistema de alarma.
                </Typography>
                <StyledButton 
                  variant="outlined" 
                  size="large" 
                  href={getNonNavbarPath('/monitoreo')} 
                  sx={{ 
                    mt: { xs: 3, md: 4 }, 
                    fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, 
                    py: { xs: 1.3, md: 2.5 }, 
                    px: { xs: 2.5, md: 5 },
                    borderWidth: 2,
                    borderColor: '#ffff00',
                    color: '#ffff00',
                    fontWeight: 'bold',
                    minWidth: { xs: '200px', md: 'auto' },
                    '&:hover': { 
                      borderWidth: 2,
                      borderColor: '#ff0000',
                      backgroundColor: '#ff0000',
                      color: 'white',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 8px 25px rgba(255, 0, 0, 0.4)'
                    }
                  }}
                >
                  Monitoreo de Alarmas
                </StyledButton>
              </GlassmorphicContainer>
            </Fade>
          </FullWidthSection>

          {/* Camera System Section - Optimized with styled components */}
          <FullWidthSection ref={ref3} backgroundImage={getImagePath('/images/home/home3.avif')}>
            <Grid container spacing={6} justifyContent="center">
              <Grid item xs={12} md={8} lg={6}>
                <Slide direction="right" in={inView3} timeout={1200}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <GlassmorphicContainer
                      sx={{
                        width: { xs: '95%', sm: '85%', md: '80%' },
                        padding: { xs: '2rem', sm: '3rem', md: '4.5rem' }
                      }}
                    >
                      <Typography variant="h2" component="h2" gutterBottom sx={{ fontSize: { xs: '1.7rem', sm: '2.1rem', md: '2.8rem', lg: '3.3rem' }, mb: { xs: 2, md: 3 }, mt: { xs: 2, md: 3 }, letterSpacing: '0.02em', lineHeight: { xs: 1.3, md: 1.4 }, textShadow: '3px 3px 6px rgba(0,0,0,0.7)', color: '#ffff00' }}>
                        Si lo imaginas
                      </Typography>
                      <Typography variant="h2" component="span" sx={{ fontWeight: 'bold', display: 'block', mb: { xs: 4, md: 5 }, fontSize: { xs: '1.9rem', sm: '2.3rem', md: '3.1rem', lg: '3.8rem' }, letterSpacing: '0.03em', lineHeight: { xs: 1.2, md: 1.3 }, textShadow: '4px 4px 8px rgba(0,0,0,0.8)', color: '#ffff00' }}>
                        ES REAL
                      </Typography>
                      <Typography variant="h5" paragraph sx={{ fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem', lg: '1.7rem' }, lineHeight: { xs: 1.6, md: 1.7 }, mb: { xs: 4, md: 5 }, letterSpacing: '0.01em', fontWeight: 500, px: { xs: 3, md: 4 }, textAlign: 'justify' }}>
                        Gracias a la tecnología actual, podrás visualizar tu sistema de cámaras en tiempo real desde cualquier lugar del mundo, simplemente con una conexión a internet. Ya sea desde tu
                        notebook, smartphone o tablet, tendrás acceso inmediato a las imágenes de tu hogar o empresa.
                      </Typography>
                      {/* Removed duplicate paragraph */}
                      <StyledButton 
                        variant="contained" 
                        size="large" 
                        href={getNonNavbarPath('/camaras')}
                        sx={{ 
                          fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.5rem' }, 
                          py: { xs: 1.3, md: 2.5 }, 
                          px: { xs: 2.5, md: 5 },
                          mb: { xs: 2, md: 3 },
                          backgroundColor: '#ffff00',
                          color: '#000000',
                          fontWeight: 'bold',
                          minWidth: { xs: '200px', md: 'auto' },
                          '&:hover': {
                            backgroundColor: '#ff0000',
                            color: '#ffffff',
                            transform: 'translateY(-3px)',
                            boxShadow: '0 8px 25px rgba(255, 0, 0, 0.4)'
                          }
                        }}
                      >
                        Instalación de Cámaras
                      </StyledButton>

                      <Box sx={{ width: '100%', height: 'auto', mt: 4, textAlign: 'center' }}>
                        <Image
                          src={getImagePath('/images/home/sise2.jpg')}
                          alt="Sistema de cámaras de seguridad SISE instalado profesionalmente para videovigilancia en tiempo real desde smartphone y computadora"
                          width={800}
                          height={500}
                          sizes="(max-width: 600px) 90vw, (max-width: 960px) 80vw, 700px"
                          style={{
                            objectFit: 'cover',
                            borderRadius: '25px',
                            width: '100%',
                            height: 'auto',
                            maxWidth: '600px',
                            display: 'block',
                            margin: '0 auto'
                          }}
                        />
                      </Box>
                    </GlassmorphicContainer>
                  </Box>
                </Slide>
              </Grid>
            </Grid>
          </FullWidthSection>

          {/* Why Choose Us Section */}
        </Box>
      </Fade>
      {/* Optimized scroll-to-top button with better performance */}
      <Zoom in={showScrollTop}>
        <Fab
          color="primary"
          size="medium"
          aria-label="scroll back to top"
          onClick={scrollToTop}
          sx={{
            position: 'fixed',
            bottom: 16,
            right: 16,
            zIndex: 1000,
            bgcolor: 'primary.main',
            color: 'black',
            transition: 'all 0.3s ease',
            '&:hover': {
              bgcolor: 'error.main',
              transform: 'translateY(-5px)'
            }
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>
    </Box>
  );
}

export default Inicio;
