"use client"
import React from 'react';
import { Container, Typography, Paper, Grid, Box, Fade, Zoom } from '@mui/material';
import Image from 'next/image';
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
      color: 'white'
    }}>
      {/* Hero Section with Full Screen Image */}
      <Box sx={{ 
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Image
          src="/images/home/security.jpg"
          alt="Equipo profesional de seguridad electrónica SISE trabajando en instalación de sistemas de alarmas y monitoreo"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 1
          }}
          priority
          quality={90}
        />
        
        {/* Overlay with gradient */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.8) 100%)',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Content over image */}
          <Box sx={{ 
            textAlign: 'center', 
            zIndex: 3,
            px: 4,
            maxWidth: '1200px'
          }}>
            <Fade in timeout={1500}>
              <Typography 
                variant="h1" 
                component="h1" 
                sx={{
                  fontSize: { xs: '3.3rem', md: '4.8rem', lg: '5.8rem' },
                  fontWeight: 'bold',
                  color: '#ffff00',
                  textShadow: '4px 4px 8px rgba(0,0,0,0.9)',
                  letterSpacing: '0.04em',
                  mb: 5,
                  mt: 3,
                  textTransform: 'uppercase',
                  lineHeight: { xs: 1.2, md: 1.3 }
                }}
              >
                Nuestros Servicios
              </Typography>
            </Fade>
            
            <Fade in timeout={2000} style={{ transitionDelay: '500ms' }}>
              <Typography 
                variant="h4" 
                sx={{
                  fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.9rem', lg: '2.1rem' },
                  color: '#ffffff',
                  textShadow: '3px 3px 6px rgba(0,0,0,0.9)',
                  fontWeight: '500',
                  maxWidth: '800px',
                  mx: 'auto',
                  lineHeight: { xs: 1.6, md: 1.7 },
                  letterSpacing: '0.01em',
                  px: { xs: 3, md: 4 }
                }}
              >
                Soluciones integrales de seguridad electrónica para proteger lo que más valoras
              </Typography>
            </Fade>
          </Box>
        </Box>
      </Box>

      {/* Services Content Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
        <Fade in timeout={1000}>
          <Box>
            <Box sx={{ 
              mb: 4,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Typography variant="body1" component="span" sx={{ color: '#ffff00', fontWeight: 'bold' }}>
                Inicio
              </Typography>
              <Typography variant="body1" component="span" sx={{ color: '#ffff00', fontWeight: 'bold' }}>
                {' > '}
              </Typography>
              <Typography variant="body1" component="span" sx={{ color: '#ffff00', fontWeight: 'bold' }}>
                Servicios
              </Typography>
            </Box>

            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom 
              align="center"
              sx={{
                mb: 8,
                mt: 4,
                fontWeight: 'bold',
                color: '#ffff00',
                textShadow: '4px 4px 8px rgba(0,0,0,0.8)',
                letterSpacing: '0.03em',
                fontSize: { xs: '2.3rem', sm: '2.8rem', md: '3.2rem' },
                lineHeight: { xs: 1.3, md: 1.4 }
              }}
            >
              Nuestros Servicios Especializados
            </Typography>

            <Grid container spacing={4} ref={ref}>
              {services.map((service, index) => (
                <Grid item xs={12} md={6} key={index}>
                  <Zoom in={inView} style={{ transitionDelay: `${index * 100}ms` }}>
                    <Paper 
                      elevation={3} 
                      sx={{ 
                        p: { xs: 4, md: 5 },
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease',
                        background: 'rgba(255, 255, 255, 0.12)',
                        backdropFilter: 'blur(15px)',
                        borderRadius: '20px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                        '&:hover': {
                          transform: 'translateY(-15px)',
                          background: 'rgba(255, 255, 255, 0.18)',
                          boxShadow: '0 15px 35px rgba(255, 215, 0, 0.2)',
                          '& .service-icon': {
                            transform: 'scale(1.1) rotate(10deg)',
                            color: '#ffff00'
                          }
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
                            color: '#ffff00',
                            flex: 1,
                            fontSize: { xs: '1.3rem', sm: '1.5rem', md: '1.7rem' },
                            textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                            letterSpacing: '0.02em',
                            lineHeight: { xs: 1.4, md: 1.5 }
                          }}
                        >
                          {service.title}
                        </Typography>
                      </Box>
                      <Typography 
                        variant="body1"
                        sx={{ 
                          color: 'rgba(255, 255, 255, 0.9)',
                          lineHeight: { xs: 1.8, md: 1.9 },
                          fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                          letterSpacing: '0.01em',
                          textAlign: 'justify',
                          px: { xs: 2, md: 3 }
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
    </Box>
  );
}

export default Servicios;