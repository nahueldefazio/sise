"use client";
import React, { useEffect, useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Container, Typography, Grid, Box, Button, Fade, Slide, Zoom } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab } from '@mui/material';

function Inicio() {
  const items = [
    {
      img: "./images/home/sise3.jpg", // Make sure to save the image with this path
      alt: "Propiedad monitoreada las 24hs",
      title: "Monitoreo 24/7",
      description: "Servicios Integrales en Seguridad Electronica"
    },
    {
      img: "./images/home/cam1.jpg",
      alt: "Monitoreo 24/7",
      title: "Monitoreo 24/7",
      description: "Atencion personalizada"
    },
    {
      img: "./images/home/alarma1.png",
      alt: "Alarmas Residenciales",
      title: "Alarmas Residenciales",
      description: "Instalacion de alarmas de seguridad"
    },    
  ];

  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
          {/* Hero Carousel Section */}
          <Box sx={{ 
            width: '100%', 
            height: '90vh',
            position: 'relative',
          }}>
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
                    position: 'relative',
                    height: '90vh',
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.alt}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      color: 'white',
                      textAlign: 'center',
                      px: 4
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

          {/* Existing sections with enhanced styling */}
          <Box sx={{
            backgroundImage: 'url("./images/home/camara-de-seguridad.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            position: 'relative',
          }}>
            <Box sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
            }} />
            <Container ref={ref1} maxWidth="lg" sx={{ 
              py: 12,
              position: 'relative',
              borderRadius: 4,
              
            }}>
              <Grid container spacing={6} alignItems="center">
                <Grid item xs={12} md={6}>
                  <Slide direction="left" in={inView1} timeout={1200}>
                    <Box sx={{ 
                      p: 4,
                      borderRadius: 2,
                      boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
                    }}>
                      <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        gutterBottom
                      >
                        Cuando las oportunidades no llamen a tu puerta...
                      </Typography>
                    <Typography 
                      variant="h3" 
                      component="h2" 
                      color="error" 
                      gutterBottom 
                      sx={{ fontWeight: 'bold' }}
                    >
                      CONSTRUYE UNA
                    </Typography>
                    <img 
                      src="./images/home/sise.jpg" 
                      alt="DSC Alarm System Components" 
                      style={{ 
                        width: '100%',
                        height: 'auto',
                        display: 'block',
                        margin: '0 auto',
                        borderRadius: '20px',
                      }}
                    />
                    <Typography variant="body1" paragraph sx={{marginTop: "20px", color: 'white'}}>
                      Para proteger a tu familia o tu negocio te ofrecemos un sistema de intrusión a medida que consiste de varios elementos.
                    </Typography>
                    <Typography variant="body1" paragraph sx={{color: 'white'}}>
                      Un gabinete donde se aloja la placa madre donde realiza todos los procesos electrónicos, un transformador y una batería para que el sistema siga operando aún ante un corte de luz.
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="large" 
                      href="/alarma"
                      sx={{ 
                        mt: 2,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          boxShadow: 6
                        }
                      }}
                    >
                      Sistema de Alarmas
                    </Button>
                  </Box>
                </Slide>
                </Grid>
              </Grid>
            </Container>
          </Box>
  
          {/* Additional Section */}
          <Box ref={ref2} sx={{
             width: '100vw',
             marginLeft: 'calc(-50vw + 50%)',
             marginRight: 'calc(-50vw + 50%)',
             py: 6,
             backgroundImage: 'url("./images/home/home2.avif")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             backgroundAttachment: 'fixed',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center', 
            bgcolor: '#1a237e', 
            color: 'white', 
            py: 8,
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'translateY(-10px)'
            }
          }}>
            <Fade in={inView2} timeout={1000}>
              <Container maxWidth="lg"sx={{ 
                      display: 'flex',
                      flexDirection: "column",
                      alignItems: 'center',
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      boxShadow: 1,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(10px)'
                      },
                      background: 'linear-gradient(135deg, #0D0D0D, #1C1C1C)',
                      background: 'rgba(0, 5, 5, 0.25);', /* fondo semitransparente */
                      borderRadius: '16px',
                      padding: '2rem',
                      color: 'white',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
                      backdropFilter: 'blur(10px)',/* <- el efecto de vidrio */
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      textAlign: 'center',
                    }}>
                <Typography variant="h3" component="h2" gutterBottom align="center">
                  Deja de preocuparte y
                </Typography>
                <Typography 
                  variant="h3" 
                  component="span" 
                  color="success.main" 
                  align="center" 
                  display="block"
                  gutterBottom
                >
                  RESUELVE TUS PROBLEMAS
                </Typography>
                <Typography variant="body1" align="center" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
                  Nos ocupamos de cuidar lo que más querés para que disfrutes de tu hogar y tu familia con la tranquilidad que mereces.
                </Typography>
                <Typography variant="body1" align="center">
                  Contamos con personal las 24hs los 365 días del año para atender y actuar con el usuario o la policía por cualquier evento que haya comunicado el sistema de alarma.
                </Typography>
                <Box sx={{ textAlign: 'center', mt: 4 }}>
                  <Button 
                    variant="outlined" 
                    color="inherit" 
                    size="large"
                    href="/monitoreo"
                  >
                    Monitoreo de Alarmas
                  </Button>
                </Box>
              </Container>
            </Fade>
          </Box>
  
          {/* Camera System Section */}
          <Container disableGutters maxWidth={false} ref={ref3} sx={{ py: 8, 
             width: '100vw',
             marginLeft: 'calc(-50vw + 50%)',
             marginRight: 'calc(-50vw + 50%)',
             py: 6,
             backgroundImage: 'url("./images/home/home3.avif")',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
             display: 'flex',
             justifyContent: 'center',
             alignItems: 'center',
          }}>
            <Grid container spacing={6}>
              <Grid item xs={12} md={6}>
                <Slide direction="right" in={inView3} timeout={1200}>
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Box  sx={{ 
                      width: '60%',
                      display: 'flex', 
                      alignItems: 'center',
                      flexDirection: 'column',
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      boxShadow: 1,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(10px)'
                      },
                      background: 'linear-gradient(135deg, #0D0D0D, #1C1C1C)',
                      background: 'rgba(0, 5, 5, 0.25);', /* fondo semitransparente */
                      borderRadius: '16px',
                      padding: '2rem 10rem',
                      color: 'white',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
                      backdropFilter: 'blur(10px)',/* <- el efecto de vidrio */
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      textAlign: 'center',
                    }}>
                    <Typography variant="h3" component="h2" gutterBottom>
                      Si lo imaginas
                    </Typography>
                    <Typography 
                      variant="h3" 
                      component="span" 
                      color="error" 
                      sx={{ fontWeight: 'bold', display: 'block', mb: 3 }}
                    >
                      ES REAL
                    </Typography>
                    <Typography variant="body1" paragraph>
                    Gracias a la tecnología actual, podrás visualizar tu sistema de cámaras en tiempo real desde cualquier lugar del mundo, simplemente con una conexión a internet. 
                    Ya sea desde tu notebook, smartphone o tablet, tendrás acceso inmediato a las imágenes de tu hogar o empresa.
                    </Typography>
                    <Typography variant="body3" paragraph>
                    Gracias a la tecnología actual, podrás visualizar tu sistema de cámaras en tiempo real desde cualquier lugar del mundo, simplemente con una conexión a internet. 
                    Ya sea desde tu notebook, smartphone o tablet, tendrás acceso inmediato a las imágenes de tu hogar o empresa.
                    </Typography>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="large" 
                      href="/camaras"
                      sx={{ mt: 2 }}
                    >
                      Instalación de Cámaras
                    </Button>
                  </Box>
                  </div>
                </Slide>
              </Grid>
            </Grid>
          </Container>
  
          {/* Why Choose Us Section */}
         
        </Box>
      </Fade>
      <Fab 
        color="primary"
        size="medium"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          display: showScrollTop ? 'flex' : 'none',
          zIndex: 1000,
          bgcolor: 'yellow',
          '&:hover': {
            bgcolor: 'rgba(255, 10, 10, 0.9)',
          }
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
  );
}


export default Inicio;