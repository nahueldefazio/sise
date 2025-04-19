import React from 'react';
import { Container, Typography, Paper, Grid, Box, TextField, Button } from '@mui/material';

function Alarma() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
        Sistema de Alarmas
      </Typography>

      <Grid container spacing={4}>
        {/* Information Section */}
        <Grid item xs={12} md={7}>
          <Paper elevation={3} sx={{ p: 4, height: '100%' }}>
            <Typography variant="h4" gutterBottom color="primary">
              ¿Querés tener el control de tu negocio?
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ mb: 3 }}>
              Te ofrecemos un sistema de intrusión que consiste de varios elementos:
            </Typography>

            <Box component="ul" sx={{ pl: 2 }}>
              <Typography component="li" sx={{ mb: 1 }}>
                Un gabinete en donde se aloja la placa madre donde se realizan todos los procesos electrónicos
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Un transformador y batería para que el sistema siga operando aún ante un corte de luz
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                También se instala una sirena interna con opción de agregar otra externa
              </Typography>
              <Typography component="li" sx={{ mb: 1 }}>
                Se pueden instalar diferentes tipos de sensores de detección (de movimiento, de apertura, de rotura de vidrio, de vibración, etc.)
              </Typography>
            </Box>

            <Typography variant="body1" paragraph sx={{ mt: 3 }}>
              Este gabinete suele estar instalado en un lugar oculto, ya que es el corazón del sistema de alarma. A esta central, normalmente se le conecta un teclado cerca de la puerta para poder realizar las activaciones, desactivaciones y monitorear otras funciones más.
            </Typography>

            <Typography variant="body1" paragraph>
              Ante una intrusión no deseada, el sensor se detecta, envía la señal a la central, la misma está programada para dar el tiempo necesario para realizar la desactivación del mismo o dispara la sirena alertando de la intrusión.
            </Typography>

            <Typography variant="body1" paragraph>
              Los sistemas de seguridad hoy en día nos dan muchísimas más opciones en funcionalidad y para nuestra comodidad, como son los controles remotos, sensores inalámbricos y comunicadores a nuestros celulares o a una estación de monitoreo.
            </Typography>

            <Typography variant="h6" sx={{ mt: 4, color: 'primary.main', fontStyle: 'italic' }}>
              Te asesoramos para que encuentres el sistema que más se adecue a tus necesidades.
            </Typography>
          </Paper>
        </Grid>

        {/* Contact Form Section */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" gutterBottom color="primary" align="center">
              CONSTRUYE UNA
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Para proteger y controlar tu negocio te ofrecemos un sistema de intrusión a medida, solo tenés que dejarnos tus datos y nos estaremos comunicando para contarte en cómo podemos ayudarte
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
                Quiero construir mi aplicación
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Alarma;