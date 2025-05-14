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
      background: 'linear-gradient(145deg, #f5f5f5 0%, #ffffff 100%)',
      minHeight: '100vh',
      py: 8 
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
              background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
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
              background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
              borderRadius: 2,
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '4px',
                background: 'linear-gradient(45deg, #1a237e 30%, #0d47a1 90%)',
              }
            }}>
              <Typography variant="h3" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                ¿POR QUÉ ELEGIRNOS?
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 3,
                '& p': {
                  lineHeight: 1.8,
                  color: 'text.secondary'
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
              icon: <TargetIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />,
              content: "Sencillamente, seguir ganando la confianza de aquellos que nos han entregado la responsabilidad de protegerlos y seguir dándoles la seguridad a sus seres queridos y sus bienes."
            },
            { 
              title: "MISIÓN", 
              icon: <MissionIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />,
              content: "Seguir aprendiendo, mejorando y creciendo día a día acompañando el avance tecnológico en materia de Seguridad Electrónica..."
            },
            { 
              title: "VISIÓN", 
              icon: <VisionIcon sx={{ fontSize: 50, color: 'primary.main', mb: 2 }} />,
              content: "Actualmente la seguridad paso de ser un lujo para unos pocos a una necesidad mundial..."
            }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index} sx={{width: "100%"}}>
              <Slide direction="up" in={inView2} style={{ transitionDelay: `${index * 200}ms` }}>
                <Paper elevation={3} sx={{ 
                  p: 4,
                  height: '100%',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                  }
                }}>
                  {item.icon}
                  <Typography variant="h4" gutterBottom color="primary" sx={{ fontWeight: 'bold' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                    {item.content}
                  </Typography>
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