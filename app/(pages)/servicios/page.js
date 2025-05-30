"use client"
import React from 'react';
import { Container, Typography, Paper, Grid, Box, Fade, Zoom } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import SecurityIcon from '@mui/icons-material/Security';
import VideocamIcon from '@mui/icons-material/Videocam';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ApartmentIcon from '@mui/icons-material/Apartment';
import PanToolIcon from '@mui/icons-material/PanTool';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import GroupIcon from '@mui/icons-material/Group';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import DoorFrontIcon from '@mui/icons-material/DoorFront';
import FenceIcon from '@mui/icons-material/Fence';

function Servicios() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: "VIDEO-VERIFICACIÓN",
      content: "Ante un disparo de alarma, el operador de la central de monitoreo podrá verificar previamente mediante la visualización de las cámaras del lugar, si existe un evento real o una falsa alarma y asi se lo podrá comunicar a la policía o al propietario."
    },
    {
      title: "CONTROL DE HORARIOS",
      content: "Los servicios de control horario para alarmas se refieren a sistemas o servicios diseñados para gestionar y controlar el tiempo en el que se activan y desactivan las alarmas, asegurando que se ajusten a las necesidades específicas de un entorno determinado."
    },
    {
      title: "ENVÍO DE RESÚMENES MENSUALES",
      content: "Son una funcionalidad que ofrecen algunos sistemas de seguridad y monitoreo de alarmas. Estos servicios generan y envían un informe detallado sobre los eventos de seguridad registrados durante un período determinado."
    },
    {
      title: "CONSORCIOS",
      content: "Ofrecemos diferentes herramientas de control y gestión que permite a los propietarios incrementar su seguridad. Reduce los gastos en seguridad, conserjerías y reparaciones, reemplazando en múltiples ocasiones a la seguridad física o haciendo más eficaz su labor."
    },
    {
      title: "ALARMA DE PÁNICO",
      content: "Una alarma de pánico es un dispositivo que se activa manualmente para enviar una alerta rápida y discreta en situaciones de emergencia, también se le conoce como \"alarma de coacción\", \"alarma de atraco\" o \"botón de pánico\"."
    },
    {
      title: "BOTÓN DE AYUDA",
      content: "También conocido como Botón SOS para adultos mayores, este sistema puede ayudar a solicitar servicios de emergencia médica y contactar a personas para solicitar atención, a través de un control remoto, pulsera o de una aplicación en el celular."
    },
    {
      title: "ALARMAS VECINALES",
      content: "Es un sistema de seguridad que se basa en la colaboración de los vecinos de un barrio o urbanización para proteger el área, este tipo de alarmas se componen de un dispositivo central que emite luces y sonidos."
    },
    {
      title: "CONTROL DE ACCESO",
      content: "Con este sistema nos permite controlar el ingreso y egreso de personas a todas las zonas restringidas del lugar y así puede tener un control y monitoreo de accesos, tráfico y movimientos en sus instalaciones."
    },
    {
      title: "DETECCIÓN DE INCENDIOS",
      content: "Nos permite detectar automáticamente a través de dispositivos electrónicos fijos, un principio de incendio o temperatura y poder comunicárnoslo por diferentes medios, inclusive en forma sonora a través de un sistema de detección."
    },
    {
      title: "PORTEROS, PORTEROS VISORES, PORTEROS IP Y PORTERÍA MULTIFAMILIAR",
      content: "Sistemas de comunicación y control de acceso para edificios y residencias que permiten la identificación y comunicación con visitantes antes de permitir su ingreso."
    }
  ];

  const serviceIcons = {
    "VIDEO-VERIFICACIÓN": <VideocamIcon />,
    "CONTROL DE HORARIOS": <AccessTimeIcon />,
    "ENVÍO DE RESÚMENES MENSUALES": <AssessmentIcon />,
    "CONSORCIOS": <ApartmentIcon />,
    "ALARMA DE PÁNICO": <PanToolIcon />,
    "BOTÓN DE AYUDA": <MedicalServicesIcon />,
    "ALARMAS VECINALES": <GroupIcon />,
    "CONTROL DE ACCESO": <FingerprintIcon />,
    "DETECCIÓN DE INCENDIOS": <LocalFireDepartmentIcon />,
    "PORTEROS, PORTEROS VISORES, PORTEROS IP Y PORTERÍA MULTIFAMILIAR": <DoorFrontIcon />,
    "SEGURIDAD PERIMETRAL": <SecurityIcon />,
    "CERCO ELÉCTRICO": <FenceIcon />
  };

  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)', // Dark gradient background
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
                Servicios
              </Typography>
            </Box>

            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              align="center"
              sx={{
                mb: 6,
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '2px'
              }}
            >
              Nuestros Servicios
            </Typography>

            <Grid container spacing={4} ref={ref}>
              {services.map((service, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Zoom in={inView} style={{ transitionDelay: `${index * 100}ms` }}>
                    <Paper 
                      elevation={3} 
                      sx={{ 
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        background: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '16px',
                        border: '1px solid rgba(255, 255, 255, 0.18)',
                        '&:hover': {
                          transform: 'translateY(-10px)',
                          background: 'rgba(255, 255, 255, 0.15)',
                          boxShadow: '0 8px 32px rgba(255, 215, 0, 0.15)',
                          '& .service-icon': {
                            transform: 'scale(1.1) rotate(10deg)',
                            color: '#FFD700'
                          }
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
                      }}
                    >
                      <Box sx={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        mb: 3,
                        gap: 2
                      }}>
                        <Box className="service-icon" sx={{ 
                          color: 'rgba(255, 215, 0, 0.8)',
                          transition: 'all 0.3s ease',
                          '& > svg': {
                            fontSize: 48
                          }
                        }}>
                          {serviceIcons[service.title]}
                        </Box>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            fontWeight: 'bold',
                            color: '#FFD700',
                            flex: 1
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body1"
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: 1.8,
                          fontSize: '1.1rem'
                        }}
                      >
                        {service.content}
                      </Typography>
                    </Paper>
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

export default Servicios;