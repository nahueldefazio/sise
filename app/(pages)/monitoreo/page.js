"use client"
import React, { useState } from 'react';
import { Container, Typography, Paper, Grid, Box, TextField, Button, Fade, Slide, Zoom, CircularProgress, Snackbar, Alert } from '@mui/material';
import { useInView } from 'react-intersection-observer';
import SecurityIcon from '@mui/icons-material/Security';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

function Monitoreo() {
  const [ref1, inView1] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ref2, inView2] = useInView({ threshold: 0.2, triggerOnce: true });

  // Add validation functions at the beginning
  const validateName = (value) => value && value.length >= 2;
  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  // Update the phone validation to be more permissive
  const validatePhone = (value) => {
    if (!value) return false;
    const cleanNumber = value.replace(/[\s\-\(\)]/g, '');
    return /^\d{8,15}$/.test(cleanNumber); // Accepts 8-15 digits
  };

  const validateMessage = (value) => value && value.length >= 10;

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
      const response = await fetch('/api/contact', {  // Update this URL
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
        background: 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)',
        minHeight: '100vh',
        pt: 4,
        color: 'white'
      }}>
      <Container disableGutters maxWidth={false} sx={{
        py: 10, 
        px: { xs: 2, md: 20 },
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/home/alarma4.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}>
        <Fade in timeout={1000}>
          <Box>
            <Box sx={{ 
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Typography variant="body1" component="span" sx={{ color: '#FFD700' }}>
                Inicio
              </Typography>
              <Typography variant="body1" component="span" sx={{ color: '#FFD700' }}>
                {' > '}
              </Typography>
              <Typography variant="body1" component="span" sx={{ color: '#FFD700', fontWeight: 'bold' }}>
                Monitoreo de Alarmas
              </Typography>
            </Box>

            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                mb: 6,
                fontWeight: 'bold',
                background: 'linear-gradient(45deg, #FFD700 30%, #FFA500 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                letterSpacing: '2px'
              }}
            >
              Monitoreo de Alarmas 24/7
            </Typography>

            {/* Service Cards */}
            <Grid container spacing={6}>
              <Grid item xs={12} md={7} ref={ref1}>
                <Slide direction="right" in={inView1} timeout={1000}>
                  <Box>
                    <Box sx={{
                      display: 'flex',
                      gap: 3,
                      mb: 6,
                      flexDirection: { xs: 'column', md: 'row' }
                    }}>
                      {[
                        {
                          icon: <SecurityIcon sx={{ fontSize: 60, color: '#FFD700' }} />,
                          title: 'Seguridad Continua',
                          desc: 'Monitoreo las 24 horas, los 365 días del año'
                        },
                        {
                          icon: <CameraAltIcon sx={{ fontSize: 60, color: '#FFD700' }} />,
                          title: 'Video Verificación',
                          desc: 'Confirmación visual de eventos en tiempo real'
                        },
                        {
                          icon: <SupportAgentIcon sx={{ fontSize: 60, color: '#FFD700' }} />,
                          title: 'Soporte Inmediato',
                          desc: 'Personal capacitado para cada emergencia'
                        }
                      ].map((item, index) => (
                        <Paper
                          key={index}
                          elevation={3}
                          sx={{
                            p: 4,
                            flex: 1,
                            textAlign: 'center',
                            background: 'rgba(255, 255, 255, 0.1)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '16px',
                            border: '1px solid rgba(255, 255, 255, 0.18)',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                              transform: 'translateY(-10px)',
                              background: 'rgba(255, 255, 255, 0.15)',
                            }
                          }}
                        >
                          {item.icon}
                          <Typography variant="h6" sx={{ my: 2, color: '#FFD700' }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                            {item.desc}
                          </Typography>
                        </Paper>
                      ))}
                    </Box>

                    <Typography variant="h4" gutterBottom sx={{ 
                      color: '#FFD700',
                      fontWeight: 'bold',
                      mb: 3
                    }}>
                      ¿Preocupado por la seguridad de tu negocio o tu hogar?
                    </Typography>

                    {/* Content sections with improved styling */}
                    <Box sx={{ 
                      '& .MuiTypography-body1': { 
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        mb: 4
                      },
                      '& .MuiTypography-h5': {
                        color: '#FFD700',
                        fontWeight: 'bold',
                        mb: 3
                      }
                    }}>
                      <Typography variant="h5">
                        Monitoreo Profesional
                      </Typography>
                      <Typography variant="body1">
                        Nuestro servicio de monitoreo de alarmas está disponible las 24 horas del día, los 365 días del año. Contamos con personal altamente capacitado y la última tecnología en sistemas de seguridad para garantizar una respuesta inmediata ante cualquier emergencia.
                      </Typography>

                      <Typography variant="h5">
                        Respuesta Inmediata
                      </Typography>
                      <Typography variant="body1">
                        Al recibir una señal de alarma, nuestro centro de monitoreo actúa de inmediato siguiendo protocolos establecidos: verificación del evento, contacto con el usuario y, si es necesario, despacho de personal de seguridad y aviso a las autoridades correspondientes.
                      </Typography>

                      <Typography variant="h5">
                        Tecnología Avanzada
                      </Typography>
                      <Typography variant="body1">
                        Utilizamos equipos de última generación con múltiples vías de comunicación (IP, GPRS, SMS) que garantizan que las señales de alarma lleguen a nuestra central de monitoreo incluso si alguna vía de comunicación falla.
                      </Typography>

                      <Typography variant="h5">
                        Servicio Personalizado
                      </Typography>
                      <Typography variant="body1">
                        Cada cliente es único, por eso desarrollamos protocolos de actuación personalizados según sus necesidades específicas. Además, brindamos asesoramiento continuo y soporte técnico especializado para mantener su sistema funcionando óptimamente.
                      </Typography>
                    </Box>

                    <Box sx={{ 
                      bgcolor: 'rgba(255, 215, 0, 0.1)',
                      p: 4,
                      mt: 4,
                      borderRadius: '16px',
                      border: '1px solid rgba(255, 215, 0, 0.3)',
                      backdropFilter: 'blur(10px)'
                    }}>
                      <Typography variant="body1" sx={{ color: '#FFD700' }}>
                        No solo ofrecemos tecnología de avanzada sino también al personal altamente capacitado para cubrir todo tipo de emergencia.
                      </Typography>
                    </Box>
                  </Box>
                </Slide>
              </Grid>

              {/* Contact Form */}
              <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Zoom in timeout={1000}>
            <Box sx={{ 
              p: 4,
              borderRadius: '16px',
              background: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
            }}>
              <Typography variant="h4" gutterBottom align="center" sx={{ 
                color: '#FFD700',
                mb: 4,
                fontWeight: 'bold'
              }}>
               Más información
              </Typography>
              <Typography variant="body1" align="center" sx={{ 
                color: 'white',
                mb: 4 
              }}>
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
                        color: '#FFD700',
                        opacity: 0.7
                      },
                      '& fieldset': { borderColor: errors.name ? 'error.main' : '#FFD700' },
                      '&:hover fieldset': { borderColor: errors.name ? 'error.main' : '#FFD700' },
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
                      color: '#FFD700',
                      borderColor: '#FFD700',
                      '& fieldset': { borderColor: errors.email ? 'error.main' : '#FFD700' },
                      '&:hover fieldset': { borderColor: '#FFD700' },
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
                      color: '#FFD700',
                      borderColor: '#FFD700',
                      '& fieldset': { borderColor: errors.phone ? 'error.main' : '#FFD700' },
                      '&:hover fieldset': { borderColor: '#FFD700' },
                      backgroundColor: 'rgba(255, 255, 255, 0.3)',
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
                        color: '#FFD700',
                        opacity: 0.7
                      },
                      '& fieldset': { borderColor: errors.message ? 'error.main' : '#FFD700' },
                      '&:hover fieldset': { borderColor: '#FFD700' },
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
                    mt: 2,
                    py: 1.5,
                    backgroundColor: '#FFD700',
                    color: 'black',
                    fontWeight: 'bold',
                    '&:hover': {
                      backgroundColor: '#FFD700',
                      opacity: 0.9
                    },
                    '&.Mui-disabled': {
                      backgroundColor: '#FFD700',
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
            </Grid>
          </Box>
        </Fade>
        <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={submitStatus.isError ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {submitStatus.message}
        </Alert>
      </Snackbar>
      </Container>
    </Box>
  );
}

export default Monitoreo;
