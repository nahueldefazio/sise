"use client"
import React from 'react';
import { Container, Typography, Paper, Box, Grid, Fade, Slide } from '@mui/material';
import Image from 'next/image';
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
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Image with Blur - Full Screen */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <Image
          src="/images/home/nosotros.jpg"
          alt="Equipo profesional de SISE con más de 30 años de experiencia en seguridad electrónica, instalación y mantenimiento de sistemas"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: 'scale(1.1)'
          }}
          quality={80}
          priority
        />
        
        {/* Dark overlay for better content readability */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.75) 50%, rgba(0,0,0,0.9) 100%)',
          backdropFilter: 'blur(8px)',
          zIndex: 1
        }} />
      </Box>
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <Typography 
          variant="h1" 
          component="h1" 
          gutterBottom 
          align="center"
          sx={{
            mb: 10,
            mt: 4,
            fontWeight: 'bold',
            color: '#ffff00',
            textShadow: '4px 4px 8px rgba(0,0,0,0.9)',
            letterSpacing: '0.04em',
            fontSize: { xs: '2.8rem', md: '3.8rem', lg: '4.3rem' },
            textTransform: 'uppercase',
            lineHeight: { xs: 1.2, md: 1.3 }
          }}
        >
          Nuestra Historia
        </Typography>
        
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'center', 
          mb: 6 
        }}>
          <Box sx={{
            width: '100px',
            height: '4px',
            background: '#ffff00',
            borderRadius: '2px',
            boxShadow: '0 2px 8px rgba(255, 255, 0, 0.4)'
          }} />
        </Box>

        <Box ref={ref1}>
          <Box>
            <Paper elevation={3} sx={{ 
              p: { xs: 5, md: 6 },
              mb: 10,
              background: 'rgba(255, 255, 255, 0.12)',
              backdropFilter: 'blur(15px)',
              borderRadius: '20px',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '5px',
                background: '#ffff00',
              }
            }}>
              <Typography variant="h3" gutterBottom sx={{ 
                fontWeight: 'bold',
                color: '#ffff00',
                textAlign: 'center',
                mb: 6,
                mt: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                textShadow: '4px 4px 8px rgba(0,0,0,0.8)',
                letterSpacing: '0.03em',
                lineHeight: { xs: 1.3, md: 1.4 }
              }}>
                ¿POR QUÉ ELEGIRNOS?
              </Typography>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 4,
                px: { xs: 2, md: 3 },
                '& p': {
                  lineHeight: { xs: 1.8, md: 1.9 },
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                  letterSpacing: '0.01em',
                  textAlign: 'justify'
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
          </Box>
        </Box>

        <Grid container spacing={4} ref={ref2}>
          {[
            { 
              title: "OBJETIVO", 
              icon: <TargetIcon sx={{ fontSize: 60, color: '#ffff00', mb: 2 }} />,
              content: "Sencillamente, seguir ganando la confianza de aquellos que nos han entregado la responsabilidad de protegerlos y seguir dándoles la seguridad a sus seres queridos y sus bienes."
            },
            { 
              title: "MISIÓN", 
              icon: <MissionIcon sx={{ fontSize: 60, color: '#ffff00', mb: 2 }} />,
              content: "Seguir aprendiendo, mejorando y creciendo día a día acompañando el avance tecnológico en materia de Seguridad Electrónica. Brindar soluciones integrales y personalizadas que garanticen la tranquilidad y seguridad de nuestros clientes, manteniendo los más altos estándares de calidad y servicio."
            },
            { 
              title: "VISIÓN", 
              icon: <VisionIcon sx={{ fontSize: 60, color: '#ffff00', mb: 2 }} />,
              content: "Actualmente la seguridad pasó de ser un lujo para unos pocos a una necesidad mundial. Nuestra visión es ser líderes en innovación y excelencia en el campo de la seguridad electrónica, estableciendo nuevos estándares en la industria y siendo reconocidos por nuestra dedicación al cliente y soluciones de vanguardia."
            }
          ].map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Box>
                <Paper elevation={3} sx={{ 
                  p: { xs: 4, md: 5 },
                  minHeight: '450px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-start',
                  textAlign: 'center',
                  background: 'rgba(255, 255, 255, 0.12)',
                  backdropFilter: 'blur(15px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-15px)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.3)',
                    background: 'rgba(255, 255, 255, 0.18)',
                  }
                }}>
                  <Box sx={{ flexGrow: 0 }}>
                    {item.icon}
                    <Typography variant="h4" gutterBottom sx={{ 
                      fontWeight: 'bold',
                      color: '#ffff00',
                      mb: 4,
                      mt: 2,
                      fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2rem' },
                      textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                      letterSpacing: '0.02em',
                      lineHeight: { xs: 1.3, md: 1.4 }
                    }}>
                      {item.title}
                    </Typography>
                  </Box>
                  <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <Typography variant="body1" sx={{ 
                      lineHeight: { xs: 1.8, md: 1.9 },
                      color: 'rgba(255, 255, 255, 0.9)',
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                      letterSpacing: '0.01em',
                      textAlign: 'justify',
                      px: { xs: 2, md: 3 }
                    }}>
                      {item.content}
                    </Typography>
                  </Box>
                </Paper>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Nosotros;