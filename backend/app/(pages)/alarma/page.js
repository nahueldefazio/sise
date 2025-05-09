"use client"
import React, { useState } from 'react';
import { Container, Typography, Paper, Grid, Box, TextField, Button, Snackbar, Alert, CircularProgress, Fade, Slide } from '@mui/material';
import { validateEmail, validateName, validatePhone, validateMessage } from '../../utils/validations';
import SecurityIcon from '@mui/icons-material/Security';
import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SensorsIcon from '@mui/icons-material/Sensors';

function Alarma() {
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

  const features = [
    {
      icon: <SecurityIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />,
      text: "Un gabinete en donde se aloja la placa madre donde se realizan todos los procesos electrónicos"
    },
    {
      icon: <BatteryChargingFullIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />,
      text: "Un transformador y batería para que el sistema siga operando aún ante un corte de luz"
    },
    {
      icon: <NotificationsActiveIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />,
      text: "También se instala una sirena interna con opción de agregar otra externa"
    },
    {
      icon: <SensorsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 1 }} />,
      text: "Se pueden instalar diferentes tipos de sensores de detección (de movimiento, de apertura, de rotura de vidrio, de vibración, etc.)"
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Fade in timeout={1000}>
        <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6 }}>
          Sistema de Alarmas
        </Typography>
      </Fade>

      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Slide direction="right" in timeout={1000}>
            <Paper elevation={3} sx={{ 
              p: 4, 
              height: '100%',
              background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}>
              <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 4 }}>
                ¿Querés tener el control de tu negocio?
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                Te ofrecemos un sistema de intrusión que consiste de varios elementos:
              </Typography>

              <Grid container spacing={3}>
                {features.map((feature, index) => (
                  <Grid item xs={12} key={index}>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      p: 2,
                      borderRadius: 2,
                      bgcolor: 'background.paper',
                      boxShadow: 1,
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(10px)'
                      }
                    }}>
                      {feature.icon}
                      <Typography sx={{ ml: 2 }}>{feature.text}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>

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
          </Slide>
        </Grid>

        <Grid item xs={12} md={5}>
          <Slide direction="left" in timeout={1000}>
            <Paper elevation={3} sx={{ 
              p: 4,
              background: 'linear-gradient(145deg, #ffffff 0%, #f5f5f5 100%)',
              borderRadius: 2
            }}>
              <Typography variant="h4" gutterBottom color="primary" align="center" sx={{
                fontWeight: 'bold',
                mb: 3
              }}>
                CONSTRUYE UNA
              </Typography>
              
              <Typography variant="body1" paragraph align="center">
                Para proteger y controlar tu negocio te ofrecemos un sistema de intrusión a medida, solo tenés que dejarnos tus datos y nos estaremos comunicando para contarte en cómo podemos ayudarte
              </Typography>
              
              <Box 
                component="form" 
                onSubmit={handleSubmit}
                noValidate 
                sx={{ mt: 4 }}
              >
                <TextField
                  fullWidth
                  name="name"
                  label="Nombre"
                  margin="normal"
                  required
                  error={!!errors.name}
                  helperText={errors.name}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
                <TextField
                  fullWidth
                  name="email"
                  label="Correo Electrónico"
                  margin="normal"
                  required
                  type="email"
                  error={!!errors.email}
                  helperText={errors.email}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
                <TextField
                  fullWidth
                  name="phone"
                  label="Teléfono"
                  margin="normal"
                  error={!!errors.phone}
                  helperText={errors.phone}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
                <TextField
                  fullWidth
                  name="message"
                  label="Mensaje"
                  margin="normal"
                  required
                  multiline
                  rows={4}
                  error={!!errors.message}
                  helperText={errors.message}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  disabled={isSubmitting}
                  sx={{ mt: 3 }}
                >
                  {isSubmitting ? (
                    <>
                      <CircularProgress size={24} color="inherit" sx={{ mr: 1 }} />
                      Enviando...
                    </>
                  ) : (
                    'Quiero construir mi aplicación'
                  )}
                </Button>
              </Box>
            </Paper>
          </Slide>
        </Grid>
      </Grid>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000}
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
  );
}

export default Alarma;