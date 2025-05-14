"use client"
import React from 'react';
import { Container, Typography, Paper, Grid, Box, TextField, Button, Fade, Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import SecurityIcon from '@mui/icons-material/Security';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function Monitoreo() {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <Box sx={{ 
      background: 'linear-gradient(145deg, #f5f5f5 0%, #ffffff 100%)',
      minHeight: '100vh',
      pt: 4
    }}>
      <Container disableGutters maxWidth={false} sx={{
        py: 10, 
        px: 20,
        backgroundImage: 'url("./images/home/alarma4.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        <Fade in timeout={1000}>
          <Box>
            <Box sx={{ 
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Typography variant="body1" component="span" color="text.secondary">
                Inicio
              </Typography>
              <Typography variant="body1" component="span" color="text.secondary">
                {' > '}
              </Typography>
              <Typography variant="body1" component="span" color="primary">
                Monitoreo de Alarmas
              </Typography>
            </Box>

            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                mb: 6,
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Monitoreo de Alarmas 24/7
            </Typography>

            <Grid container spacing={6}>
              <Grid item xs={12} md={7} ref={ref1}>
                <Slide direction="right" in={inView1} timeout={1000}>
                  <Box>
                    <Box sx={{
                      display: 'flex',
                      gap: 3,
                      mb: 6
                    }}>
                      {[
                        {
                          icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
                          title: 'Seguridad Continua',
                          desc: 'Monitoreo las 24 horas, los 365 días del año'
                        },
                        {
                          icon: <CameraAltIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
                          title: 'Video Verificación',
                          desc: 'Confirmación visual de eventos en tiempo real'
                        },
                        {
                          icon: <SupportAgentIcon sx={{ fontSize: 40, color: 'primary.main' }} />,
                          title: 'Soporte Inmediato',
                          desc: 'Personal capacitado para cada emergencia'
                        }
                      ].map((item, index) => (
                        <Paper
                          key={index}
                          elevation={3}
                          sx={{
                            p: 3,
                            flex: 1,
                            textAlign: 'center',
                            transition: 'transform 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-10px)'
                            }
                          }}
                        >
                          {item.icon}
                          <Typography variant="h6" sx={{ my: 1 }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {item.desc}
                          </Typography>
                        </Paper>
                      ))}
                    </Box>

                    <Typography variant="h4" gutterBottom sx={{ 
                      color: 'primary.main',
                      fontWeight: 'bold',
                      mb: 3
                    }}>
                      ¿Preocupado por la seguridad de tu negocio o tu hogar?
                    </Typography>

                    <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                      Nuestras alarmas, que están conectadas a nuestra central de monitoreo, están atentas a cualquier tipo de evento que pueda llegar a ocurrir. Tras surgir un evento de alarma (cualquier otro evento), el sistema se comunica con la central de monitoreo. La información es recibida y decodificada por nuestros equipos de comunicación. Al mismo el operador la atiende, verifica la señal y activa el procedimiento de seguridad confeccionado anteriormente con vos para cada caso particular. Se llama a las personas de referencia y se les informa del evento sucedido mientras se envía el móvil policial regional si es necesario.
                    </Typography>

                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                      Central de Monitoreo
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                      La central de monitoreo está avalada por las normativas de seguridad electrónicas vigentes que se actualizan constantemente. El servicio de monitoreo a distancia es lo que transforma la instalación de una alarma en un sistema de seguridad y tiene como objetivo principal, velar por tu protección y de lo que más aprecias ante situaciones de emergencia. Este servicio se realiza a través de un sistema informatizado de telecomunicaciones, que en tiempo real, recibe los reportes y eventos provenientes del sistema de alarma instalado.
                    </Typography>

                    <Typography variant="h5" gutterBottom sx={{ mb: 3 }}>
                      Video Verificación
                    </Typography>
                    <Typography variant="body1" paragraph>
                      Si contás con nuestro sistema de cámaras ya instalado, tras un disparo de la alarma, el operador de la central de monitoreo podrá verificar previamente, tras la visualización de las cámaras, si existe un evento real o una falsa alarma y así se lo podrá comunicar a la policía o al propietario.
                    </Typography>

                    <Box sx={{ bgcolor: '#1a237e', color: 'white', p: 3, mt: 4, borderRadius: 1 }}>
                      <Typography variant="body1">
                        No solo ofrecemos tecnología de avanzada sino también al personal altamente capacitado para cubrir todo tipo de emergencia.
                      </Typography>
                    </Box>
                  </Box>
                </Slide>
              </Grid>

              <Grid item xs={12} md={5} ref={ref2}>
                <Slide direction="left" in={inView2} timeout={1000}>
                  <Paper elevation={6} sx={{ 
                    p: 4,
                    borderRadius: 2,
                    background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
                    position: 'sticky',
                    top: 24
                  }}>
                    <Typography variant="h5" gutterBottom color="primary" align="center">
                      RESUELVE TUS PROBLEMAS
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                      Nos ocupamos de cuidar lo que más querés para que disfrutes de tu hogar y tu familia con la tranquilidad que mereces. Solo tenés que dejarnos tus datos y nos estaremos comunicando para contarte en cómo podemos ayudarte.
                    </Typography>
                    
                    <Box component="form" sx={{ mt: 4 }}>
                      <TextField
                        fullWidth
                        label="Nombre"
                        margin="normal"
                        required
                      />
                      <TextField
                        fullWidth
                        label="Correo Electrónico"
                        margin="normal"
                        required
                        type="email"
                      />
                      <TextField
                        fullWidth
                        label="Teléfono"
                        margin="normal"
                      />
                      <TextField
                        fullWidth
                        label="Mensaje"
                        margin="normal"
                        required
                        multiline
                        rows={4}
                      />
                      <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ mt: 3 }}
                      >
                        Te solucionamos aquí
                      </Button>
                    </Box>
                  </Paper>
                </Slide>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
}

export default Monitoreo;