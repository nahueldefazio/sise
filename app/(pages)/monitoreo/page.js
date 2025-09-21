"use client"
import React, { useState } from 'react';
import { Container, Typography, Paper, Grid, Box, TextField, Button, Fade, Slide, Zoom, CircularProgress, Snackbar, Alert } from '@mui/material';
import Image from 'next/image';
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
          src="/images/home/alarma4.jpg"
          alt="Central de monitoreo SISE funcionando 24/7 con personal especializado atendiendo alarmas y emergencias de seguridad"
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
          <Box>
            <Box sx={{ 
              mb: 2,
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              <Typography variant="body1" component="span" sx={{ color: '#ffff00', fontWeight: 'bold' }}>
                Inicio
              </Typography>
              <Typography variant="body1" component="span" sx={{ color: '#ffff00', fontWeight: 'bold' }}>
                {' > '}
              </Typography>
              <Typography variant="body1" component="span" sx={{ color: '#ffff00', fontWeight: 'bold' }}>
                Monitoreo de Alarmas
              </Typography>
            </Box>

            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom 
              sx={{ 
                mb: 8,
                mt: 4,
                fontWeight: 'bold',
                color: '#ffff00',
                textShadow: '4px 4px 8px rgba(0,0,0,0.8)',
                letterSpacing: '0.03em',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                lineHeight: { xs: 1.3, md: 1.4 }
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
                          icon: <SecurityIcon sx={{ fontSize: 60, color: '#ffff00' }} />,
                          title: 'Seguridad Continua',
                          desc: 'Monitoreo las 24 horas, los 365 días del año'
                        },
                        {
                          icon: <CameraAltIcon sx={{ fontSize: 60, color: '#ffff00' }} />,
                          title: 'Video Verificación',
                          desc: 'Confirmación visual de eventos en tiempo real'
                        },
                        {
                          icon: <SupportAgentIcon sx={{ fontSize: 60, color: '#ffff00' }} />,
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
                          <Typography variant="h6" sx={{ my: 3, color: '#ffff00', fontWeight: 'bold', fontSize: { xs: '1.2rem', sm: '1.3rem', md: '1.4rem' }, textShadow: '3px 3px 6px rgba(0,0,0,0.7)', letterSpacing: '0.02em', lineHeight: { xs: 1.4, md: 1.5 } }}>
                            {item.title}
                          </Typography>
                          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }, lineHeight: { xs: 1.6, md: 1.7 }, letterSpacing: '0.01em', px: { xs: 2, md: 3 } }}>
                            {item.desc}
                          </Typography>
                        </Paper>
                      ))}
                    </Box>

                    <Typography variant="h4" gutterBottom sx={{ 
                      color: '#ffff00',
                      fontWeight: 'bold',
                      mb: 5,
                      mt: 3,
                      fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                      textShadow: '4px 4px 8px rgba(0,0,0,0.8)',
                      letterSpacing: '0.03em',
                      lineHeight: { xs: 1.3, md: 1.4 }
                    }}>
                      ¿Preocupado por la seguridad de tu negocio o tu hogar?
                    </Typography>

                    {/* Content sections with improved styling */}
                    <Box sx={{ 
                      px: { xs: 2, md: 3 },
                      '& .MuiTypography-body1': { 
                        color: 'rgba(255, 255, 255, 0.9)',
                        fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                        lineHeight: { xs: 1.8, md: 1.9 },
                        mb: 5,
                        letterSpacing: '0.01em',
                        textAlign: 'justify'
                      },
                      '& .MuiTypography-h5': {
                        color: '#ffff00',
                        fontWeight: 'bold',
                        mb: 4,
                        mt: 3,
                        fontSize: { xs: '1.4rem', sm: '1.6rem', md: '1.8rem' },
                        textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
                        letterSpacing: '0.02em',
                        lineHeight: { xs: 1.4, md: 1.5 }
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
                      <Typography variant="body1" sx={{ color: '#ffff00', fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' }, lineHeight: { xs: 1.7, md: 1.8 }, letterSpacing: '0.01em', px: { xs: 2, md: 3 }, textAlign: 'justify', textShadow: '2px 2px 4px rgba(0,0,0,0.6)' }}>
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
                color: '#ffff00',
                mb: 6,
                mt: 3,
                fontWeight: 'bold',
                fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                textShadow: '4px 4px 8px rgba(0,0,0,0.8)',
                letterSpacing: '0.03em',
                lineHeight: { xs: 1.3, md: 1.4 }
              }}>
               Más información
              </Typography>
              <Typography variant="body1" align="center" sx={{ 
                color: 'white',
                mb: 6,
                fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
                lineHeight: { xs: 1.7, md: 1.8 },
                letterSpacing: '0.01em',
                px: { xs: 2, md: 3 },
                textAlign: 'justify',
                textShadow: '2px 2px 4px rgba(0,0,0,0.6)'
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
                      color: '#ffff00',
                      borderColor: '#ffff00',
                      '& fieldset': { borderColor: errors.phone ? 'error.main' : '#ffff00' },
                      '&:hover fieldset': { borderColor: '#ffff00' },
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
