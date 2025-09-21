'use client';
import React from 'react'; // Añade esta línea
import { Container, Typography, Grid, Box, TextField, Button, Snackbar, Alert } from '@mui/material';
import Image from 'next/image';
import { CircularProgress, Zoom, Slide } from '@mui/material'; // Updated imports
import { useState } from 'react';
import { validateEmail, validateName, validatePhone, validateMessage } from '../../utils/validations';
import { getImagePath } from '../../utils/imagePath';

function Contacto() {
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return validateName(value) ? '' : 'El nombre debe tener al menos 2 caracteres';
      case 'email':
        return validateEmail(value) ? '' : 'Email inválido';
      case 'phone':
        return validatePhone(value) ? '' : 'Teléfono inválido';
      case 'message':
        return validateMessage(value) ? '' : 'El mensaje debe tener al menos 10 caracteres';
      default:
        return '';
    }
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const error = validateField(name, value);
    setErrors((prev) => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message')
    };

    // Validate fields
    const newErrors = {};
    if (!validateName(data.name)) newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    if (!validateEmail(data.email)) newErrors.email = 'Email inválido';
    if (!validatePhone(data.phone)) newErrors.phone = 'Teléfono inválido';
    if (!validateMessage(data.message)) newErrors.message = 'El mensaje debe tener al menos 10 caracteres';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Asegúrate de usar la URL correcta:
      // - Para desarrollo: http://localhost:3000/api/contact
      // - Para producción: /api/contact (si están en el mismo dominio)
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) throw new Error(result.error || 'Error al enviar');

      setSubmitStatus({ message: 'Formulario enviado con éxito', isError: false });
      setOpenSnackbar(true);
      event.target.reset();
    } catch (error) {
      setSubmitStatus({
        message: 'Error al enviar el formulario, disculpe las molestias',
        isError: true
      });
      setOpenSnackbar(true);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setOpenSnackbar(false);
        setSubmitStatus({ message: '', isError: false });
      }, 3000);
    }
  };

  return (
    <Box sx={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      {/* Background Image with Blur */}
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0
      }}>
        <Image
          src="/images/home/contact.avif"
          alt="Oficina de contacto SISE donde atendemos consultas sobre sistemas de seguridad electrónica, alarmas y monitoreo"
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            transform: 'scale(1.1)'
          }}
          quality={85}
          priority
        />
        
        {/* Dark overlay for better content readability */}
        <Box sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.9) 100%)',
          zIndex: 1
        }} />
      </Box>
      
      <Container
        maxWidth={false}
        sx={{
          py: 8,
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '100vw',
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          alignItems: 'center'
        }}
      >
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Zoom in timeout={1000}>
            <Box
                sx={{
                  p: { xs: 5, md: 6 },
                  borderRadius: '20px',
                  background: 'rgba(0, 0, 0, 0.8)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
            >
              <Typography
                variant="h4"
                gutterBottom
                align="center"
                sx={{
                  color: '#ffff00',
                  mb: 6,
                  mt: 2,
                  fontWeight: 'bold',
                  fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                  textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                  letterSpacing: '0.02em',
                  lineHeight: { xs: 1.3, md: 1.4 }
                }}
              >
                Más información
              </Typography>
              <Typography
                variant="body1"
                align="center"
                sx={{
                  color: 'white',
                  mb: 6,
                  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                  lineHeight: { xs: 1.6, md: 1.7 },
                  letterSpacing: '0.01em',
                  px: { xs: 2, md: 3 },
                  textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
                }}
              >
                Para proteger y controlar tu negocio te ofrecemos un sistema de intrusión a medida, solo tenés que dejarnos tus datos y nos estaremos comunicando para contarte en cómo podemos ayudarte
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 3
                }}
              >
                <TextField
                  fullWidth
                  name="name"
                  placeholder="Nombre"
                  variant="outlined"
                  error={!!errors.name}
                  helperText={errors.name}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  InputProps={{
                    sx: {
                      color: 'white',
                      '& input::placeholder': {
                        color: '#ffff00',
                        opacity: 0.7
                      },
                      '& fieldset': { borderColor: errors.name ? 'error.main' : '#ffff00' },
                      '&:hover fieldset': { borderColor: errors.name ? 'error.main' : '#ffff00' },
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      '&.Mui-disabled': {
                        color: 'white',
                        opacity: 0.7
                      }
                    }
                  }}
                  FormHelperTextProps={{
                    sx: { color: 'error.main' }
                  }}
                />
                <TextField
                  fullWidth
                  name="email"
                  placeholder="Correo Electrónico"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  InputProps={{
                    sx: {
                      color: '#ffff00',
                      borderColor: '#ffff00',
                      '& fieldset': { borderColor: errors.email ? 'error.main' : '#ffff00' },
                      '&:hover fieldset': { borderColor: '#ffff00' },
                      backgroundColor: 'rgba(255, 255, 255, 0.3)'
                    }
                  }}
                  FormHelperTextProps={{
                    sx: { color: 'error.main' }
                  }}
                />
                <TextField
                  fullWidth
                  name="phone"
                  placeholder="Teléfono"
                  variant="outlined"
                  error={!!errors.phone}
                  helperText={errors.phone}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  InputProps={{
                    sx: {
                      color: '#ffff00',
                      borderColor: '#ffff00',
                      '& fieldset': { borderColor: errors.phone ? 'error.main' : '#ffff00' },
                      '&:hover fieldset': { borderColor: '#ffff00' },
                      backgroundColor: 'rgba(255, 255, 255, 0.3)'
                    }
                  }}
                  FormHelperTextProps={{
                    sx: { color: 'error.main' }
                  }}
                />
                <TextField
                  fullWidth
                  name="message"
                  placeholder="Mensaje"
                  multiline
                  rows={4}
                  variant="outlined"
                  error={!!errors.message}
                  helperText={errors.message}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  InputProps={{
                    sx: {
                      color: 'white',
                      '& textarea::placeholder': {
                        color: '#ffff00',
                        opacity: 0.7
                      },
                      '& fieldset': { borderColor: errors.message ? 'error.main' : '#ffff00' },
                      '&:hover fieldset': { borderColor: '#ffff00' },
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
                      '&.Mui-disabled': {
                        color: 'white',
                        opacity: 0.7
                      }
                    }
                  }}
                  FormHelperTextProps={{
                    sx: { color: 'error.main' }
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  disabled={isSubmitting}
                  sx={{
                    mt: 3,
                    py: 2,
                    px: 4,
                    backgroundColor: '#ffff00',
                    color: 'black',
                    fontWeight: 'bold',
                    fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                    letterSpacing: '0.02em',
                    '&:hover': {
                      backgroundColor: '#ff0000',
                      color: '#ffffff',
                      transform: 'translateY(-3px)',
                      boxShadow: '0 6px 20px rgba(255, 0, 0, 0.4)'
                    },
                    '&.Mui-disabled': {
                      backgroundColor: '#ffff00',
                      opacity: 0.7,
                      color: 'rgba(0, 0, 0, 0.7)'
                    }
                  }}
                >
                  {isSubmitting ? (
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CircularProgress size={20} sx={{ color: 'black' }} />
                      <span>Enviando...</span>
                    </Box>
                  ) : (
                    'Enviar'
                  )}
                </Button>
              </Box>
            </Box>
          </Zoom>
        </Grid>
      </Grid>
      <Slide direction="left" in timeout={1200}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            p: 2,
            borderRadius: 2,
            bgcolor: 'background.paper',
            boxShadow: 1,
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateX(10px)'
            },
            background: 'linear-gradient(135deg, #0D0D0D, #1C1C1C)',
            background: 'rgba(0, 5, 5, 0.25);' /* fondo semitransparente */,
            borderRadius: '16px',
            padding: '2rem',
            color: 'white',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(10px)' /* <- el efecto de vidrio */,
            border: '1px solid rgba(255, 255, 255, 0.18)',
            textAlign: 'center',
            marginTop: '2rem'
          }}
        >
          <Typography variant="h3" component="h2" gutterBottom align="center" sx={{ mb: 8, mt: 4, fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, textShadow: '4px 4px 8px rgba(0,0,0,0.8)', letterSpacing: '0.03em', color: '#ffff00' }}>
            ¿Por qué elegirnos?
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '900px', mx: 'auto', mb: 5, fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }, lineHeight: { xs: 1.7, md: 1.8 }, letterSpacing: '0.01em', px: { xs: 3, md: 4 }, textAlign: 'justify' }}>
            En SISE ofrecemos soluciones de seguridad personalizadas y efectivas. Contamos con un equipo técnico con más de 30 años de experiencia y utilizamos tecnología de vanguardia.{' '}
          </Typography>
          <Typography variant="body1" paragraph align="center" sx={{ maxWidth: '900px', mx: 'auto', mb: 5, fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }, lineHeight: { xs: 1.7, md: 1.8 }, letterSpacing: '0.01em', px: { xs: 3, md: 4 }, textAlign: 'justify' }}>
            Te asesoramos para diseñar e instalar sistemas a medida, preservando la estética del espacio y utilizando equipamiento de marcas líderes en el rubro.{' '}
          </Typography>
          <Typography variant="body1" align="center" sx={{ maxWidth: '900px', mx: 'auto', fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }, lineHeight: { xs: 1.7, md: 1.8 }, letterSpacing: '0.01em', px: { xs: 3, md: 4 } }}>
            <Button variant="contained" color="primary" size="large" href="/nosotros" sx={{ mt: 3, fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }, py: 2, px: 4, fontWeight: 'bold', letterSpacing: '0.02em' }}>
              Nosotros
            </Button>
          </Typography>
        </Box>
      </Slide>

      <Snackbar open={openSnackbar} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} TransitionComponent={Slide}>
        <Alert
          onClose={handleCloseSnackbar}
          severity={submitStatus.isError ? 'error' : 'success'}
          sx={{
            width: '100%',
            boxShadow: 3,
            borderRadius: 2
          }}
        >
          {submitStatus.message}
        </Alert>
      </Snackbar>
      </Container>
    </Box>
  );
}

export default Contacto;
