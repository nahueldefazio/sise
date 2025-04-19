import React from 'react';
import { Container, Typography, Box, Link, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import { validateEmail, validateName } from '../utils/validations';

function Footer() {
  const [errors, setErrors] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');

    const data = { name, email };
    
    // Validate fields
    const newErrors = {};
    if (!validateName(name)) newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    if (!validateEmail(email)) newErrors.email = 'Email inválido';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      
      if (!response.ok) throw new Error('Error al enviar');
      alert('Suscripción exitosa');
      event.target.reset();
    } catch (error) {
      alert('Error al enviar. Intente nuevamente.');
    }
  };

  return (
    <Box sx={{ bgcolor: '#1a1a1a', color: 'white', py: 4, mt: 'auto' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
          {/* SISE Information */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>SISE</Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Nuestro objetivo es ganarnos la confianza de aquellos que nos han entregado la responsabilidad
              de protegerlos y seguir dándoles la seguridad a sus seres queridos y sus bienes.
            </Typography>
            <Link href="/politicas-de-privacidad" sx={{ color: '#ff9800', textDecoration: 'none' }}>
              políticas de privacidad
            </Link>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2">Encontranos también en</Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                <Link href="https://www.facebook.com/sise.com.ar" target="_blank" sx={{ color: 'white' }}>
                  <FacebookIcon />
                </Link>
                <Link href="https://www.instagram.com/sise_seguridad" target="_blank" sx={{ color: 'white' }}>
                  <InstagramIcon />
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Contact Information */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Contacto</Typography>
            <Typography variant="body2">Oficina +54 11 3221-5517</Typography>
            <Typography variant="body2">Fax +54 11 3221 2100-5517</Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2">ventas@sise.com.ar</Typography>
              <Typography variant="body2">info@sise.com.ar</Typography>
              <Typography variant="body2">administracion@sise.com.ar</Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2">Horario de oficina</Typography>
              <Typography variant="body2">de lunes a viernes de 9:00 a 18:00</Typography>
              <Typography variant="body2">Servicio técnico las 24 horas</Typography>
            </Box>
          </Box>

          {/* Subscription Form */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Manténete al tanto de nuestras promociones</Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                name="name"
                placeholder="Nombre"
                error={!!errors.name}
                helperText={errors.name}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '& input::placeholder': { color: 'rgba(255, 255, 255, 0.7)' }
                  }
                }}
              />
              <TextField
                fullWidth
                name="email"
                type="email"
                placeholder="Correo Electrónico"
                error={!!errors.email}
                helperText={errors.email}
                sx={{
                  mb: 2,
                  '& .MuiOutlinedInput-root': {
                    color: 'white',
                    '& fieldset': { borderColor: 'white' },
                    '&:hover fieldset': { borderColor: 'white' },
                    '& input::placeholder': { color: 'rgba(255, 255, 255, 0.7)' }
                  }
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  bgcolor: '#0039a6',
                  '&:hover': { bgcolor: '#002d84' }
                }}
              >
                Suscribirse
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;