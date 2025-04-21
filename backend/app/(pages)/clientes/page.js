import React from 'react';
import { Container, Typography, Grid, Paper, Box } from '@mui/material';

const clientLogos = [
  {
    id: 1,
    src: '/images/logos/sacabollos.png',
    alt: 'Sacabollos Impacto'
  },
  {
    id: 2,
    src: '/images/logos/see.png',
    alt: 'SEE Automation Digital Packaging'
  },
  {
    id: 3,
    src: '/images/logos/manantial.jpg',
    alt: 'Manantial Grupo Humano'
  },
  {
    id: 4,
    src: '/images/logos/cajaRuidos.png',
    alt: 'Caja de Ruidos'
  }
];

function Clientes() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom 
        align="center"
        sx={{ mb: 6 }}
      >
        Instituciones y empresas que confían en nuestros servicios
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {clientLogos.map((logo) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={logo.id}>
            <Paper 
              elevation={3}
              sx={{
                p: 4,
                height: '200px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.05)',
                }
              }}
            >
              <Box
                component="img"
                src={logo.src}
                alt={logo.alt}
                sx={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  objectFit: 'contain',
                  padding: 2
                }}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Clientes;