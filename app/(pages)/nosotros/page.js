"use client"
import React from 'react';
import { Container, Typography, Paper, Box, Grid, Fade, Slide } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import TargetIcon from '@mui/icons-material/TrackChanges';
import VisionIcon from '@mui/icons-material/Visibility';
import MissionIcon from '@mui/icons-material/Rocket';

function Nosotros() {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <Box sx={{ 
      background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
      minHeight: '100vh',
      py: 8,
      color: 'white'
    }}>
      <Container maxWidth="lg">
        <Fade in timeout={1000}>
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
            Nuestra Historia
          </Typography>
        </Fade>

        <Box ref={ref1}>
          <Slide direction="up" in={inView1} timeout={1000}>
            <Paper elevation={3} sx={{ 
              p: 4,
              mb: 8,
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
              }
            }}>
              <Typography variant="h3" gutterBottom sx={{ 
                fontWeight: 'bold',
                color: '#FFD700',
                textAlign: 'center',
                mb: 4
              }}>
                ¿POR QUÉ ELEGIRNOS?
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 3,
                '& p': {
                  lineHeight: 1.8,
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '1.1rem'
                }
              }}>
                <Typography variant="body1" paragraph>
                  SISE es una empresa joven con especialistas técnicos con 30 años de experiencia en instalaciones y puesta en marcha de sistemas electrónicos de seguridad utilizando lo último en tecnología.
                </Typography>
                <Typography variant="body1" paragraph>
                  En SISE nos interesa brindar soluciones efectivas y de manera personalizada para satisfacer cada una de las necesidades de nuestros clientes. También contamos con personal técnico propio especialmente capacitados en las instalaciones, mantenimiento y reparación de sistemas electrónicos de seguridad para darles tranquilidad, profesionalismo y confiabilidad del personal que ingresa a su propiedad en cada instalación.
                </Typography>
                <Typography variant="body1" paragraph>
                  Nuestros especialistas te asesorarán para realizar un proyecto de instalación a medida y así determinar el equipamiento más adecuado a utilizar, luego se procede a la instalación de los mismos, preservando la estética del espacio protegido dentro de tu hogar o empresa. El equipamiento consiste en marcas líderes en seguridad electrónica, todas con garantía y soporte en el pais.
                </Typography>
                <Typography variant="body1" paragraph>
                  Al ser una empresa joven todos los inicios son difíciles porque ya que existe una amplia variedad de soluciones en el mercado, pero nos mantenemos en el camino de la honestidad, la confianza y transparencia, brindando la respuesta necesaria en tiempo y forma a cada uno de nuestros trabajos; podemos decir que formamos una empresa seria y consolidada en este mercado. Por todo esto es que hoy en día, el que tenga un sistema instalado SISE sabrá de esta experiencia, la honestidad y calidad de profesionales que se sienten orgullosos de hacer realidad su vocación.
                </Typography>
              </Box>
            </Paper>
          </Slide>
        </Box>

        <Grid container spacing={4} ref={ref2}>
          {[
            { 
              title: "OBJETIVO", 
              icon: <TargetIcon sx={{ fontSize: 60, color: '#FFD700', mb: 2 }} />,
              content: "Sencillamente, seguir ganando la confianza de aquellos que nos han entregado la responsabilidad de protegerlos y seguir dándoles la seguridad a sus seres queridos y sus bienes."
            },
            { 
              title: "MISIÓN", 
              icon: <MissionIcon sx={{ fontSize: 60, color: '#FFD700', mb: 2 }} />,
              content: "Seguir aprendiendo, mejorando y creciendo día a día acompañando el avance tecnológico en materia de Seguridad Electrónica. Brindar soluciones integrales y personalizadas que garanticen la tranquilidad y seguridad de nuestros clientes, manteniendo los más altos estándares de calidad y servicio."
            },
            { 
              title: "VISIÓN", 
              icon: <VisionIcon sx={{ fontSize: 60, color: '#FFD700', mb: 2 }} />,
              content: "Actualmente la seguridad pasó de ser un lujo para unos pocos a una necesidad mundial. Nuestra visión es ser líderes en innovación y excelencia en el campo de la seguridad electrónica, estableciendo nuevos estándares en la industria y siendo reconocidos por nuestra dedicación al cliente y soluciones de vanguardia."
            }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Slide direction="up" in={inView2} style={{ transitionDelay: `${index * 200}ms` }}>
                <Paper elevation={3} sx={{ 
                  p: 4,
                  minHeight: '400px', // Added fixed minimum height
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.2)',
                    background: 'rgba(255, 255, 255, 0.15)',
                  }
                }}>
                  <Box sx={{ flexGrow: 0 }}>
                    {item.icon}
                    <Typography variant="h4" gutterBottom sx={{ 
                      fontWeight: 'bold',
                      color: '#FFD700',
                      mb: 3
                    }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ 
                      lineHeight: 1.8,
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: '1.1rem'
                    }}>
                      {item.content}
                    </Typography>
                  </Box>
                </Paper>
              </Slide>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Nosotros;