import React from 'react';
import { Container, Typography, Paper, Grid, Box, TextField, Button, Fade, Slide } from '@mui/material';
import Image from 'next/image';
import { getImagePath } from '../../utils/imagePath';

function Camaras() {
  return (
    <Box sx={{
      position: 'relative',
      minHeight: '100vh',
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
          src="/images/home/camara2.avif"
          alt="Instalación profesional de cámaras de seguridad SISE para videovigilancia en hogar, negocio y consorcios"
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
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.85) 100%)',
          backdropFilter: 'blur(8px)',
          zIndex: 1
        }} />
      </Box>
      
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 8 }}>
        <Fade in timeout={1000}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="body1" component="span" sx={{ color: '#ffff00', fontWeight: 'bold' }}>
              Inicio
            </Typography>
            <Typography variant="body1" component="span" sx={{ color: '#ffff00', fontWeight: 'bold' }}>
              {' > '}
            </Typography>
            <Typography variant="body1" component="span" sx={{ color: '#ffff00', fontWeight: 'bold' }}>
              Instalación de Cámaras
            </Typography>
          </Box>
        </Fade>

        <Grid container spacing={{ xs: 2, md: 6 }}>
          <Grid item xs={12} md={7}>
            <Paper elevation={3} sx={{
              p: { xs: 2, md: 4 },
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              color: 'white',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <Typography 
                variant="h1" 
                component="h1" 
                gutterBottom 
                sx={{ 
                  color: '#ffff00', 
                  fontWeight: 'bold', 
                  textShadow: '4px 4px 8px rgba(0,0,0,0.9)',
                  fontSize: { xs: '2.2rem', md: '2.8rem', lg: '3.3rem' },
                  textAlign: { xs: 'center', md: 'left' },
                  mb: 5,
                  mt: 3,
                  letterSpacing: '0.03em',
                  lineHeight: { xs: 1.3, md: 1.4 }
                }}
              >
                Instalación de Cámaras
              </Typography>

              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  mb: 6, 
                  color: '#ffff00', 
                  fontWeight: 'bold',
                  fontSize: { xs: '1.5rem', md: '1.8rem', lg: '2.1rem' },
                  textAlign: { xs: 'center', md: 'left' },
                  textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                  letterSpacing: '0.02em',
                  lineHeight: { xs: 1.4, md: 1.5 }
                }}
              >
                ¿Estar en dos lugares al mismo tiempo ahora es posible?
              </Typography>

              <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                <Typography 
                  variant="body1" 
                  paragraph 
                  sx={{ 
                    color: 'white',
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    mb: 6,
                    lineHeight: { xs: 1.7, md: 1.8 },
                    letterSpacing: '0.01em',
                    px: { xs: 2, md: 3 },
                    textAlign: 'justify'
                  }}
                >
                  Gracias a la tecnología actual podrás visualizar un sistema de cámaras online desde tu notebook o smartphone donde quiera que estés.
                </Typography>

                <Box sx={{ mb: { xs: 5, md: 7 } }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: '#ffff00', 
                      mb: 4,
                      mt: 2,
                      fontWeight: 'bold',
                      fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
                      textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                      letterSpacing: '0.02em',
                      lineHeight: { xs: 1.4, md: 1.5 }
                    }}
                  >
                    Para tu Hogar
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      color: 'white',
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                      letterSpacing: '0.01em',
                      px: { xs: 2, md: 3 },
                      textAlign: 'justify',
                      lineHeight: { xs: 1.7, md: 1.8 }
                    }}
                  >
                    Gran poder disuasorio para prevenir el ingreso de delincuentes e identificar situaciones de riesgo en el hogar. Nuestras cámaras de seguridad para casas con visualización online te permiten proteger lo que más importa en cualquier momento y desde cualquier lugar.
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'white',
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                      letterSpacing: '0.01em',
                      px: { xs: 2, md: 3 },
                      textAlign: 'justify',
                      fontStyle: 'italic'
                    }}
                  >
                    Disfruta la tranquilidad de saber que todo está bien.
                  </Typography>
                </Box>

                <Box sx={{ mb: { xs: 4, md: 6 } }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: '#ffff00', 
                      mb: 3,
                      fontWeight: 'bold',
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}
                  >
                    Para tu Negocio
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      color: 'white',
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                      letterSpacing: '0.01em',
                      px: { xs: 2, md: 3 },
                      textAlign: 'justify',
                      lineHeight: { xs: 1.7, md: 1.8 }
                    }}
                  >
                    Prevención de robo interno, intimida a que se generen robo de hormiga en lugares claves.
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      color: 'white',
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                      letterSpacing: '0.01em',
                      px: { xs: 2, md: 3 },
                      textAlign: 'justify',
                      lineHeight: { xs: 1.7, md: 1.8 }
                    }}
                  >
                    Es un beneficio clave tener videovigilancia instalada en cualquier negocio, ya que ofrece la prevención de que suceda un robo, los criminales y delincuentes se sienten más asustados, y piensan dos veces el entrar a robar al ver las cámaras instaladas.
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      color: '#ffff00', 
                      mb: 2,
                      fontWeight: 'bold',
                      fontSize: { xs: '1rem', md: '1.2rem' }
                    }}
                  >
                    📋 Registro legal de delincuencia:
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      color: 'white',
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                      letterSpacing: '0.01em',
                      px: { xs: 2, md: 3 },
                      textAlign: 'justify',
                      lineHeight: { xs: 1.7, md: 1.8 },
                      pl: 2
                    }}
                  >
                    Una de las mejores cosas acerca de un sistema de cámaras de videovigilancia es la evidencia que se puede proporcionar en caso de que suceda un crimen, ya que estos sistemas también pueden llegar a grabar audio.
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    gutterBottom 
                    sx={{ 
                      color: '#ffff00', 
                      mb: 2,
                      fontWeight: 'bold',
                      fontSize: { xs: '1rem', md: '1.2rem' }
                    }}
                  >
                    📱 Monitoreo conveniente desde cualquier lugar:
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'white',
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                      letterSpacing: '0.01em',
                      px: { xs: 2, md: 3 },
                      textAlign: 'justify',
                      lineHeight: { xs: 1.7, md: 1.8 },
                      pl: 2
                    }}
                  >
                    Podrás acceder a las cámaras de vigilancia de tu negocio desde internet o un circuito cerrado de televisión. Algunos modelos incluso permiten que puedas ver tu casa o negocio con tu celular.
                  </Typography>
                </Box>

                <Box sx={{ mb: { xs: 4, md: 6 } }}>
                  <Typography 
                    variant="h5" 
                    gutterBottom 
                    sx={{ 
                      color: '#ffff00', 
                      mb: 3,
                      fontWeight: 'bold',
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                    }}
                  >
                    Para Consorcios
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      color: 'white',
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                      letterSpacing: '0.01em',
                      px: { xs: 2, md: 3 },
                      textAlign: 'justify',
                      lineHeight: { xs: 1.7, md: 1.8 }
                    }}
                  >
                    Es una herramienta de control y gestión que permite a los propietarios incrementar su seguridad. También es un potente sistema de disuasión, la presencia de cámaras intimida a los intrusos y vándalos, consiguiendo que desistan.
                  </Typography>
                  <Typography 
                    variant="body1" 
                    paragraph 
                    sx={{ 
                      color: 'white',
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                      letterSpacing: '0.01em',
                      px: { xs: 2, md: 3 },
                      textAlign: 'justify',
                      lineHeight: { xs: 1.7, md: 1.8 }
                    }}
                  >
                    Elimina los peligros habituales, los robos a personas y pisos, los destrozos y robos de vehículos en garajes y trasteros, la preocupación de los padres y las personas mayores.
                  </Typography>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'white',
                      fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                      letterSpacing: '0.01em',
                      px: { xs: 2, md: 3 },
                      textAlign: 'justify',
                      lineHeight: { xs: 1.7, md: 1.8 }
                    }}
                  >
                    Evita agresiones e intimidaciones a los vecinos. Disuade a los merodeadores. No volverán a ver individuos que duermen en los portales y trasteros, ni intrusos en la piscina. Acaba con la impunidad con la que actúan algunos individuos. Reduce los gastos de reparaciones.
                  </Typography>
                </Box>

                <Box sx={{
                  background: 'rgba(255, 255, 0, 0.1)',
                  border: '2px solid #ffff00',
                  p: { xs: 2, md: 3 },
                  borderRadius: 2,
                  mt: 4
                }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: '#ffff00', 
                      fontStyle: 'italic', 
                      textAlign: 'center',
                      fontSize: { xs: '1rem', md: '1.2rem' },
                      fontWeight: 'bold'
                    }}
                  >
                    💡 Reduce los gastos en seguridad, conserjerías y reparaciones, reemplazando en múltiples ocasiones a la seguridad física o haciendo más eficaz su labor.
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} md={5}>
            <Paper elevation={3} sx={{
              p: { xs: 2, md: 4 },
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              color: 'white',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              transition: 'transform 0.3s ease',
              textAlign: 'center',
              '&:hover': {
                transform: 'translateY(-5px)'
              }
            }}>
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  color: '#ffff00',
                  fontWeight: 'bold',
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                  textShadow: '4px 4px 8px rgba(0,0,0,0.8)',
                  mb: 5,
                  mt: 3,
                  letterSpacing: '0.03em',
                  lineHeight: { xs: 1.3, md: 1.4 }
                }}
              >
                ¡ES REAL!
              </Typography>
              <Typography 
                variant="body1" 
                paragraph 
                sx={{
                  color: 'white',
                  fontSize: { xs: '0.9rem', md: '1rem' },
                  lineHeight: 1.6,
                  textAlign: { xs: 'center', md: 'center' }
                }}
              >
                Gracias a la tecnología actual podrás visualizar un sistema de cámaras online desde tu notebook o smartphone donde quiera que estés. Solo tenés que dejarnos tus datos y nos estaremos comunicando para contarte en cómo podemos ayudarte.
              </Typography>

              <Box sx={{
                background: 'rgba(255, 255, 0, 0.1)',
                border: '1px solid #ffff00',
                p: { xs: 2, md: 3 },
                borderRadius: 2,
                mt: 3
              }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#ffff00', 
                    fontWeight: 'bold',
                    fontSize: { xs: '1rem', md: '1.2rem' }
                  }}
                >
                  📞 Contactanos para más información
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    color: 'white', 
                    mt: 1,
                    fontSize: { xs: '0.8rem', md: '0.9rem' }
                  }}
                >
                  Te asesoraremos sin compromiso
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Camaras;
