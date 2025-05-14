"use client";
import React, { useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Container, Typography, Grid, Box, Button, Fade, Slide, Zoom } from '@mui/material';
import { useInView } from 'react-intersection-observer';

function Inicio() {
  const items = [
    {
      img: " images/home/home1.avif",
      alt: "Sistemas de Seguridad",
      title: "Sistemas de Seguridad",
      description: "Protegemos lo que más te importa"
    },
    {
      img: "/images/home/cam1.jpg",
      alt: "Monitoreo 24/7",
      title: "Monitoreo 24/7",
      description: "Atencion personalizada"
    },
    {
      img: "/images/home/alarma1.png",
      alt: "Alarmas Residenciales",
      title: "Alarmas Residenciales",
      description: "Instalacion de alarmas de seguridad"
    }
  ];

  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref3, inView3] = useInView({ threshold: 0.2, triggerOnce: true });

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
            backgroundImage: 'url("/images/home/camara-de-seguridad.png")',
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
              mb: 8
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
                      src="/images/home/sise3.jpg" 
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
            bgcolor: '#1a237e', 
            color: 'white', 
            py: 8,
            transition: 'transform 0.5s ease',
            '&:hover': {
              transform: 'translateY(-10px)'
            }
          }}>
            <Fade in={inView2} timeout={1000}>
              <Container maxWidth="lg">
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
          <Container ref={ref3} maxWidth="lg" sx={{ py: 8 }}>
            <Grid container spacing={6} alignItems="center">
              <Grid item xs={12} md={6}>
                <Slide direction="right" in={inView3} timeout={1200}>
                  <Box>
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
                      Gracias a la tecnología actual podrás visualizar un sistema de cámaras online desde tu notebook o smartphone donde quiera que estés, con una conexión a internet.
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
                </Slide>
              </Grid>
              <Grid item xs={12} md={6}>
                <Zoom in={inView3} timeout={1400}>
                  <Grid container spacing={2}>
                    {[1, 2, 3, 4].map((num) => (
                      <Grid item xs={6} key={num}>
                        <Box
                          component="img"
                          src={`/images/camera-view-${num}.jpg`}
                          alt={`Camera View ${num}`}
                          sx={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'scale(1.1)',
                              boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                            }
                          }}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Zoom>
              </Grid>
            </Grid>
          </Container>
  
          {/* Why Choose Us Section */}
          <Container maxWidth="lg" sx={{ py: 8 }}>
            <Slide direction="up" in timeout={1200}>
              <Box>
                <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 6 }}>
                  ¿Por qué elegirnos?
                </Typography>
                <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '900px', mx: 'auto', mb: 4 }}>
                  En SISE nos impulsa brindar soluciones efectivas y de manera personalizada para satisfacer cada una de las necesidades de nuestros clientes.
                </Typography>
                <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '900px', mx: 'auto', mb: 4 }}>
                  Somos una empresa joven con especialistas técnicos con más de 20 años de experiencia en instalaciones y puesta en marcha de sistemas electrónicos de seguridad, utilizando lo último en tecnología.
                </Typography>
                <Typography variant="body1" align="center" sx={{ maxWidth: '900px', mx: 'auto' }}>
                  Nuestros especialistas te asesorarán para realizar un proyecto de instalación a medida para determinar el equipamiento más adecuado a utilizar, luego se procede a la instalación de los mismos, preservando la estética del espacio protegido dentro de tu hogar o empresa, el equipamiento consiste de marcas líderes en seguridad electrónica.
                </Typography>
              </Box>
            </Slide>
          </Container>
        </Box>
      </Fade>
    </Box>
  );
}


export default Inicio;