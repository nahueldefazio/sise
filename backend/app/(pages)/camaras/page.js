import React from 'react';
import { Container, Typography, Paper, Grid, Box, TextField, Button, Fade, Slide } from '@mui/material';

function Camaras() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Fade in timeout={1000}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="body1" component="span" color="text.secondary">
            Inicio
          </Typography>
          <Typography variant="body1" component="span" color="text.secondary">
            {' > '}
          </Typography>
          <Typography variant="body1" component="span">
            Instalación de Cámaras
          </Typography>
        </Box>
      </Fade>

      <Grid container spacing={6}>
        <Grid item xs={12} md={7}>
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
            <Typography variant="body1" paragraph>
              Gracias a la tecnología actual podrás visualizar un sistema de cámaras online desde tu notebook o smartphone donde quiera que estés.
              Los sistemas de video vigilancia permiten grabar la totalidad de las imágenes o solo cuando se detectan movimientos en la escena. Estas imágenes son grabadas en un disco rígido y luego, de ser necesario, transferir dichas grabaciones a un CD o DVD para almacenarlas.
            </Typography>
          </Fade>

          <Fade in timeout={1600}>
            <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
              Para tu Hogar
            </Typography>
          </Fade>
          
          {/* Add the rest of your content with Fade and Slide components */}
        </Grid>

        <Grid item xs={12} md={5}>
          <Slide direction="left" in timeout={1000}>
            <Paper elevation={3} sx={{ p: 4 }}>
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