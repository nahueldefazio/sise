'use client';
import React, { useEffect, useState, useMemo } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Container, Typography, Grid, Box, Button, Fade, Slide, Zoom } from '@mui/material';
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

const FullWidthSection = styled(Box)(({ theme, backgroundImage }) => ({
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
  // Memoize carousel items to prevent unnecessary re-renders
  const items = useMemo(
    () => [
      {
        img: getImagePath('/images/home/sise3.jpg'),
        alt: 'Propiedad monitoreada las 24hs',
        title: 'Monitoreo 24/7',
        description: 'Servicios Integrales en Seguridad Electronica',
        width: 1920,
        height: 1080
      },
      {
        img: getImagePath('/images/home/cam3.jpg'),
        alt: '',
        title: 'Seguridad Integral',
        description: 'Atencion personalizada',
        width: 1920,
        height: 1080
      },
      {
        img: getImagePath('/images/home/alarma1.png'),
        alt: 'Alarmas Residenciales',
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
              height: '90vh',
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
                    height: '90vh',
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
                      variant="h2"
                      sx={{
                        fontWeight: 'bold',
                        textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        mb: 2
                      }}
                    >
                      {item.title || 'Seguridad Integral'}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{
                        maxWidth: '800px',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
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
                py: 12,
                position: 'relative',
                borderRadius: 4
              }}
            >
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Slide direction="left" in={inView1} timeout={1200}>
                    <Box
                      sx={{
                        p: 4,
                        borderRadius: 2,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                        color: 'white'
                      }}
                    >
                      <Typography variant="body1" color="white" gutterBottom sx={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)', fontWeight: 'bold', fontSize: '20px' }}>
                        Cuando las oportunidades no llamen a tu puerta...
                      </Typography>
                      <Typography variant="h3" component="h2" color="white" gutterBottom sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                        CONSTRUYE UNA
                      </Typography>
                      <Box sx={{ width: '100%', height: 'auto' }}>
                        <Image
                          src={getImagePath('/images/home/sise.jpg')}
                          alt="DSC Alarm System Components"
                          width={800}
                          height={500}
                          style={{
                            objectFit: 'cover',
                            borderRadius: '30px',
                            width: '100%',
                            height: 'auto',
                            clipPath: 'inset(4% 0% 3% 0%)'
                          }}
                        />
                      </Box>
                      <Typography variant="body1" paragraph sx={{ marginTop: '20px' }}>
                        Para proteger a tu familia o tu negocio te ofrecemos un sistema de intrusión a medida que consiste de varios elementos.
                      </Typography>
                      <Typography variant="body1" paragraph>
                        Un gabinete donde se aloja la placa madre donde realiza todos los procesos electrónicos, un transformador y una batería para que el sistema siga operando aún ante un corte de
                        luz.
                      </Typography>
                      <StyledButton variant="contained" color="primary" size="large" href={getNonNavbarPath('/alarma')}>
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
              <GlassmorphicContainer sx={{ maxWidth: '800px', padding: '3rem' }}>
                <Typography variant="h3" component="h2" gutterBottom align="center">
                  Deja de preocuparte y
                </Typography>
                <Typography variant="h3" component="span" color="success.main" align="center" display="block" gutterBottom>
                  RESUELVE TUS PROBLEMAS
                </Typography>
                <Typography variant="body1" align="center" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
                  Nos ocupamos de cuidar lo que más querés para que disfrutes de tu hogar y tu familia con la tranquilidad que mereces.
                </Typography>
                <Typography variant="body1" align="center">
                  Contamos con personal las 24hs los 365 días del año para atender y actuar con el usuario o la policía por cualquier evento que haya comunicado el sistema de alarma.
                </Typography>
                <StyledButton variant="outlined" color="inherit" size="large" href={getNonNavbarPath('/monitoreo')} sx={{ mt: 4 }}>
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
                        width: { xs: '90%', sm: '80%', md: '70%' },
                        padding: { xs: '2rem', sm: '2rem 3rem', md: '2rem 4rem' }
                      }}
                    >
                      <Typography variant="h3" component="h2" gutterBottom>
                        Si lo imaginas
                      </Typography>
                      <Typography variant="h3" component="span" color="error" sx={{ fontWeight: 'bold', display: 'block', mb: 3 }}>
                        ES REAL
                      </Typography>
                      <Typography variant="body1" paragraph>
                        Gracias a la tecnología actual, podrás visualizar tu sistema de cámaras en tiempo real desde cualquier lugar del mundo, simplemente con una conexión a internet. Ya sea desde tu
                        notebook, smartphone o tablet, tendrás acceso inmediato a las imágenes de tu hogar o empresa.
                      </Typography>
                      {/* Removed duplicate paragraph */}
                      <StyledButton variant="contained" color="primary" size="large" href={getNonNavbarPath('/camaras')}>
                        Instalación de Cámaras
                      </StyledButton>

                      <Box sx={{ width: '100%', height: 'auto', mt: 3 }}>
                        <Image
                          src={getImagePath('/images/home/sise2.jpg')}
                          alt="Sistema de cámaras de seguridad"
                          width={800}
                          height={500}
                          sizes="(max-width: 600px) 90vw, (max-width: 960px) 70vw, 600px"
                          style={{
                            objectFit: 'cover',
                            borderRadius: '20px',
                            width: '100%',
                            height: 'auto'
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
