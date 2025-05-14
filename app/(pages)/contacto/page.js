"use client"
import React from 'react'; // Añade esta línea
import { Container, Typography, Paper, Grid, Box, Link, TextField, Button, Snackbar, Alert } from '@mui/material';
import { CircularProgress, Fade, Zoom, Slide } from '@mui/material';  // Updated imports
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TikTokIcon from '@mui/icons-material/MusicVideo'; // Using MusicVideo as TikTok icon
import { useState } from 'react';
import { validateEmail, validateName, validatePhone, validateMessage } from '../../utils/validations';

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
    setErrors(prev => ({
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
    <Container maxWidth="md" sx={{ py: 8, minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Fade in timeout={1000}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          align="center" 
          sx={{ 
            mb: 8,
            fontWeight: 500,
            color: 'primary.main'
          }}
        >
          Contacto
        </Typography>
      </Fade>

      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={10} md={6}>
          <Zoom in timeout={800}>
            <Paper elevation={3} sx={{ 
              p: 4,
              height: '100%',
              borderRadius: 2,
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 8
              }
            }}>
              <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 4, fontWeight: 500 }}>
                Información de Contacto
              </Typography>

              {/* Contact sections with enhanced animations */}
              {/* WhatsApp */}
              <Box sx={{ mb: 4 }}>
                <Link 
                  href="https://wa.me/XXXXXXXXXXX" 
                  target="_blank" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    color: '#25D366',
                    textDecoration: 'none',
                    '&:hover': { textDecoration: 'underline' }
                  }}
                >
                  <WhatsAppIcon sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h5">WhatsApp</Typography>
                </Link>
                <Typography variant="body1" sx={{ ml: 6 }}>+54 XX XXXX-XXXX</Typography>
              </Box>
  
              {/* Phone */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <PhoneIcon sx={{ mr: 2 }} />
                  <Typography variant="h6">Teléfono</Typography>
                </Box>
                <Typography variant="body1" sx={{ ml: 6 }}>011-3221-5517</Typography>
              </Box>
  
              {/* Email Addresses */}
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <EmailIcon sx={{ mr: 2 }} />
                  <Typography variant="h6">Correo Electrónico</Typography>
                </Box>
                <Box sx={{ ml: 6 }}>
                  <Typography variant="body1">Info: info@sise.com.ar</Typography>
                  <Typography variant="body1">Administración: administracion@sise.com.ar</Typography>
                  <Typography variant="body1">Ventas: ventas@sise.com.ar</Typography>
                </Box>
              </Box>
  
              {/* Social Media */}
              <Box>
                <Typography variant="h6" gutterBottom>Redes Sociales</Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Link 
                    href="https://www.facebook.com/sise.com.ar" 
                    target="_blank" 
                    sx={{ 
                      color: '#1877F2',
                      '&:hover': { 
                        transform: 'scale(1.1)',
                        transition: 'transform 0.2s'
                      }
                    }}
                  >
                    <FacebookIcon sx={{ fontSize: 40 }} />
                  </Link>
                  <Link 
                    href="https://www.instagram.com/sise_seguridad" 
                    target="_blank" 
                    sx={{ 
                      color: '#E4405F',
                      '&:hover': { 
                        transform: 'scale(1.1)',
                        transition: 'transform 0.2s'
                      }
                    }}
                  >
                    <InstagramIcon sx={{ fontSize: 40 }} />
                  </Link>
                  <Link 
                    href="https://www.tiktok.com/@sise.com.ar" 
                    target="_blank" 
                    sx={{ 
                      color: '#000000',
                      '&:hover': { 
                        transform: 'scale(1.1)',
                        transition: 'transform 0.2s'
                      }
                    }}
                  >
                    <TikTokIcon sx={{ fontSize: 40 }} />
                  </Link>
                </Box>
              </Box>
            </Paper>
          </Zoom>
        </Grid>

        <Grid item xs={12} sm={10} md={6}>
          <Zoom in timeout={1000}>
            <Paper elevation={3} sx={{ 
              p: 4,
              height: '100%',
              borderRadius: 2,
              background: 'linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)',
              transition: 'all 0.3s ease',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 8
              }
            }}>
              <Typography variant="h5" gutterBottom color="primary" sx={{ mb: 4, fontWeight: 500 }}>
                Envíanos un mensaje
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
                  label="Nombre"
                  variant="outlined"
                  error={!!errors.name}
                  helperText={errors.name}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
                <TextField
                  fullWidth
                  name="email"
                  label="Email"
                  type="email"
                  variant="outlined"
                  error={!!errors.email}
                  helperText={errors.email}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
                <TextField
                  fullWidth
                  name="phone"
                  label="Teléfono"
                  variant="outlined"
                  error={!!errors.phone}
                  helperText={errors.phone}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
                <TextField
                  fullWidth
                  name="message"
                  label="Mensaje"
                  multiline
                  rows={4}
                  variant="outlined"
                  error={!!errors.message}
                  helperText={errors.message}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
                <Button 
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  sx={{ 
                    mt: 2,
                    py: 1.5,
                    background: theme => `linear-gradient(45deg, ${theme.palette.primary.main} 30%, ${theme.palette.primary.light} 90%)`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: 4
                    }
                  }}
                >
                  {isSubmitting ? (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CircularProgress size={20} color="inherit" sx={{ mr: 1 }} />
                      Enviando...
                    </Box>
                  ) : (
                    'ENVIAR MENSAJE'
                  )}
                </Button>
              </Box>
            </Paper>
          </Zoom>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        TransitionComponent={Slide}
      >
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
  );
}

export default Contacto;