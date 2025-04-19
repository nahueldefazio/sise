import React from 'react';
import { Container, Typography, Paper, Grid, Box, TextField, Button } from '@mui/material';

function Monitoreo() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Box sx={{ mb: 2 }}>
        <Typography variant="body1" component="span" color="text.secondary">
          Inicio
        </Typography>
        <Typography variant="body1" component="span" color="text.secondary">
          {' > '}
        </Typography>
        <Typography variant="body1" component="span">
          Monitoreo de Alarmas
        </Typography>
      </Box>

      <Typography variant="h2" component="h1" gutterBottom sx={{ mb: 4 }}>
        Monitoreo de Alarmas
      </Typography>

      <Grid container spacing={6}>
        {/* Left Section */}
        <Grid item xs={12} md={7}>
          <Typography variant="h4" gutterBottom color="text.secondary">
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
        </Grid>

        {/* Right Section - Contact Form */}
        <Grid item xs={12} md={5}>
          <Paper elevation={3} sx={{ p: 4 }}>
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
        </Grid>
      </Grid>
    </Container>
  );
}

export default Monitoreo;