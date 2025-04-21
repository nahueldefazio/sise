"use client";
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Container, Typography, Grid, Box, Button } from '@mui/material';

function Inicio() {
  const items = [
    {
      img: "/images/slide1.jpg",
      alt: "Sistemas de Seguridad"
    },
    {
      img: "/images/slide2.jpg",
      alt: "Monitoreo 24/7"
    },
    {
      img: "/images/slide3.jpg",
      alt: "Alarmas Residenciales"
    }
  ];

  return (
    <>
      <Box sx={{ width: '100%', overflow: 'hidden' }}>
        <Carousel
          animation="slide"
          interval={5000}
          indicators={true}
          navButtonsAlwaysVisible={true}
          fullHeightHover={true}
          sx={{ width: '100%' }}
        >
          {items.map((item, i) => (
            <Box
              key={i}
              component="img"
              src={item.img}
              alt={item.alt}
              sx={{
                width: '100%',
                height: '80vh',
                objectFit: 'cover',
                display: 'block'
              }}
            />
          ))}
        </Carousel>
      </Box>
      {/* Alarm System Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <img 
              src="/images/dsc-alarm-system.png" 
              alt="DSC Alarm System Components" 
              style={{ 
                width: '100%',
                maxWidth: '500px',
                height: 'auto',
                display: 'block',
                margin: '0 auto'
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
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
            <Typography variant="body1" paragraph>
              Para proteger a tu familia o tu negocio te ofrecemos un sistema de intrusión a medida que consiste de varios elementos.
            </Typography>
            <Typography variant="body1" paragraph>
              Un gabinete donde se aloja la placa madre donde realiza todos los procesos electrónicos, un transformador y una batería para que el sistema siga operando aún ante un corte de luz.
            </Typography>
            <Button 
              variant="contained" 
              color="primary" 
              size="large" 
              href="/alarma"
              sx={{ mt: 2 }}
            >
              Sistema de Alarmas
            </Button>
          </Grid>
        </Grid>
      </Container>

      {/* Additional Section */}
      <Box sx={{ bgcolor: '#1a237e', color: 'white', py: 8 }}>
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
      </Box>

      {/* Camera System Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
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
          </Grid>
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <img 
                  src="/images/camera-view-1.jpg" 
                  alt="Camera View Living Room" 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </Grid>
              <Grid item xs={6}>
                <img 
                  src="/images/camera-view-2.jpg" 
                  alt="Camera View Office" 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </Grid>
              <Grid item xs={6}>
                <img 
                  src="/images/camera-view-3.jpg" 
                  alt="Camera View Bedroom" 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </Grid>
              <Grid item xs={6}>
                <img 
                  src="/images/camera-view-4.jpg" 
                  alt="Camera View Kitchen" 
                  style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      {/* Why Choose Us Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
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
      </Container>
    </>
  );
}

export default Inicio;