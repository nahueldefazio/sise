import React from 'react';
import { Container, Typography, Paper, Grid, Box, TextField, Button, Fade, Slide } from '@mui/material';

function Camaras() {
  return (
    <Container disableGutters maxWidth={false} sx={{ py: 10, 
      px: 20,
      backgroundImage: 'url("/images/home/camara2.avif")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
       }}>
      <Fade in timeout={1000}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" component="span" color="text.secondary">
            Inicio
          </Typography>
          <Typography variant="body1" component="span" color="text.secondary">
            {' > '}
          </Typography>
          <Typography variant="body1" component="span" sx={{color: "white"}}>
            Instalación de Cámaras
          </Typography>
        </Box>
      </Fade>

      <Grid container spacing={6}>
        <Grid item xs={12} md={7} sx={{
          display: 'flex',
          flexDirection: 'column',  // Add this to stack children vertically
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
          <Box>
            <Slide direction="down" in timeout={1000}>
              <Typography variant="h2" component="h1" gutterBottom>
                Instalación de Cámaras
              </Typography>
            </Slide>

            <Slide direction="right" in timeout={1200}>
              <Typography variant="h4" gutterBottom color="text.secondary" sx={{ mb: 4 }}>
                ¿Estar en dos lugares al mismo tiempo ahora es posible?
              </Typography>
            </Slide>

            <Fade in timeout={1400}>
              <Box>
                <Typography variant="body1" paragraph>
                  Gracias a la tecnología actual podrás visualizar...
                </Typography>

                {/* Wrap all your content sections in Box components */}
                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" gutterBottom sx={{ color: '#FDEC06', mb: 3 }}>
                    Para tu Hogar
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: 'white' }}>
                    Gran poder disuasorio para prevenir el ingreso de delincuentes e identificar situaciones de riesgo en el hogar. Nuestras cámaras de seguridad para casas con visualización online te permiten proteger lo que más importa en cualquier momento y desde cualquier lugar.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white' }}>
                    Disfruta la tranquilidad de saber que todo está bien.
                  </Typography>
                </Box>

                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" gutterBottom sx={{ color: '#FDEC06', mb: 3 }}>
                    Para tu Negocio
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: 'white' }}>
                    Prevención de robo interno, intimida a que se generen robo de hormiga en lugares claves.
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: 'white' }}>
                    Es un beneficio clave tener videovigilancia instalada en cualquier negocio, ya que ofrece la prevención de que suceda un robo, los criminales y delincuentes se sienten más asustados, y piensan dos veces el entrar a robar al ver las cámaras instaladas.
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{ color: '#DAA520', mb: 2 }}>
                    Registro legal de delincuencia:
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: 'white' }}>
                    Una de las mejores cosas acerca de un sistema de cámaras de videovigilancia es la evidencia que se puede proporcionar en caso de que suceda un crimen, ya que estos sistemas también pueden llegar a grabar audio.
                  </Typography>
                  <Typography variant="h6" gutterBottom sx={{ color: '#DAA520', mb: 2 }}>
                    Monitoreo conveniente desde cualquier lugar:
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white' }}>
                    Podrás acceder a las cámaras de vigilancia de tu negocio desde internet o un circuito cerrado de televisión. Algunos modelos incluso permiten que puedas ver tu casa o negocio con tu celular.
                  </Typography>
                </Box>

                <Box sx={{ mb: 6 }}>
                  <Typography variant="h5" gutterBottom sx={{ color: '#FDEC06', mb: 3 }}>
                    Para Consorcios
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: 'white' }}>
                    Es una herramienta de control y gestión que permite a los propietarios incrementar su seguridad. También es un potente sistema de disuasión, la presencia de cámaras intimida a los intrusos y vándalos, consiguiendo que desistan.
                  </Typography>
                  <Typography variant="body1" paragraph sx={{ color: 'white' }}>
                    Elimina los peligros habituales, los robos a personas y pisos, los destrozos y robos de vehículos en garajes y trasteros, la preocupación de los padres y las personas mayores.
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'white' }}>
                    Evita agresiones e intimidaciones a los vecinos. Disuade a los merodeadores. No volverán a ver individuos que duermen en los portales y trasteros, ni intrusos en la piscina. Acaba con la impunidad con la que actúan algunos individuos. Reduce los gastos de reparaciones.
                  </Typography>
                </Box>

                <Box sx={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  p: 3,
                  borderRadius: 2,
                  mt: 4
                }}>
                  <Typography variant="h6" sx={{ color: '#FDEC06', fontStyle: 'italic', textAlign: 'center' }}>
                    Reduce los gastos en seguridad, conserjerías y reparaciones, reemplazando en múltiples ocasiones a la seguridad física o haciendo más eficaz su labor.
                  </Typography>
                </Box>
                </Box>
              </Fade>
            </Box>
        </Grid>

        <Grid item xs={12} md={5}>
          <Slide direction="left" in timeout={1000}>
            <Paper elevation={3} sx={{ p: 4,
                                  display: 'flex', 
                                  alignItems: 'center',
                                  flexDirection: 'column',  // Add this to stack children vertically
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
              <Typography variant="h5" gutterBottom color="error" align="center">
                ES REAL
              </Typography>
              <Typography variant="body1" paragraph align="center">
                Gracias a la tecnología actual podrás visualizar un sistema de cámaras online desde tu notebook o smartphone donde quiera que estés. Solo tenés que dejarnos tus datos y nos estaremos comunicando para contarte en cómo podemos ayudarte.
              </Typography>

              {/* Add your form fields here */}
            </Paper>
          </Slide>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Camaras;
