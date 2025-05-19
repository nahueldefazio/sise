"use client"
import React, { useState } from 'react';
import { Container, Typography, Paper, Grid, Box, TextField, Button, Snackbar, Alert, CircularProgress, Fade, Slide } from '@mui/material';
import { validateEmail, validateName, validatePhone, validateMessage } from '../../utils/validations';
import { getImagePath } from '../../utils/imagePath';
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
    <Box sx={{
      width: '100vw',
      marginLeft: 'calc(-50vw + 50%)',
      marginRight: 'calc(-50vw + 50%)',
      py: 6,
      backgroundImage: `url("${getImagePath('/images/home/alarma2.jpeg')}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Container disableGutters maxWidth={false} sx={{ 
        px: { xs: 2, sm: 3, md: 4 },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <Fade in timeout={1000}>
          <Typography variant="h2" component="h1" gutterBottom align="center" sx={{ mb: 6,color: "#FDEC06" }}>
            Sistema de Alarmas
          </Typography>
        </Fade>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <Slide direction="right" in timeout={1000}>
            <Paper elevation={3} sx={{ 
              p: 4, 
              height: '100%',
              background: 'unset',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.02)'
              }
            }}>
              <Typography variant="h4" gutterBottom color="primary" sx={{ mb: 4 }}>
                ¿Querés tener el control de tu negocio?
              </Typography>

              <Typography variant="body1" paragraph sx={{ mb: 4, color: 'primary.main' }}>
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
                      },
                      background: 'linear-gradient(135deg, #0D0D0D, #1C1C1C)',
                      background: 'rgba(0, 5, 5, 0.25);', /* fondo semitransparente */
                      borderRadius: '16px',
                      padding: '2rem',
                      color: 'white',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
                      backdropFilter: 'blur(10px)',/* <- el efecto de vidrio */
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      textAlign: 'center',
                    }}>
                      {feature.icon}
                      <Typography sx={{ ml: 2 }}>{feature.text}</Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Box sx={{
              backgroundColor: 'background.paper',
              background: 'linear-gradient(135deg, #0D0D0D, #1C1C1C)',
                      background: 'rgba(0, 5, 5, 0.25);', /* fondo semitransparente */
                      borderRadius: '16px',
                      padding: '2rem',
                      color: 'white',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
                      backdropFilter: 'blur(10px)',/* <- el efecto de vidrio */
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      textAlign: 'center',
                      my: 8
              }}>
                 <Typography variant="body1" paragraph sx={{ mt: 3 }}>
                Este gabinete suele estar instalado en un lugar oculto, ya que es el corazón del sistema de alarma. A esta central, normalmente se le conecta un teclado cerca de la puerta para poder realizar las activaciones, desactivaciones y monitorear otras funciones más.
                </Typography>

                <Typography variant="body1" paragraph>
                  Ante una intrusión no deseada, el sensor se detecta, envía la señal a la central, la misma está programada para dar el tiempo necesario para realizar la desactivación del mismo o dispara la sirena alertando de la intrusión.
                </Typography>

                <Typography variant="body1" paragraph>
                  Los sistemas de seguridad hoy en día nos dan muchísimas más opciones en funcionalidad y para nuestra comodidad, como son los controles remotos, sensores inalámbricos y comunicadores a nuestros celulares o a una estación de monitoreo.
                </Typography>
              </Box>



              <Typography variant="h6" sx={{ mt: 4, color: 'primary.main', fontStyle: 'italic' }}>
                Te asesoramos para que encuentres el sistema que más se adecue a tus necesidades.
              </Typography>
            </Paper>
          </Slide>
        </Grid>



              {/* Price Section */}
      <Fade in timeout={1200}>
        <Box sx={{ 
          textAlign: 'center', 
          mb: 6,
          background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.9))',
          py: 3,
          borderRadius: 2,
          color: 'white',
          boxShadow: 3,
          animation: 'pulse 2s infinite',
          '@keyframes pulse': {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.02)' },
            '100%': { transform: 'scale(1)' }
          },
          '&:hover': {
            transform: 'translateY(-10px)',
            transition: 'transform 0.3s ease-out',
            boxShadow: 6
          },
          width: '100%',
        }}>
          <Typography 
            variant="h4" 
            component="p" 
            sx={{ 
              color: '#888',
              mb: 1,
              animation: 'slideIn 1s ease-out',
              '@keyframes slideIn': {
                from: { transform: 'translateX(-100%)', opacity: 0 },
                to: { transform: 'translateX(0)', opacity: 1 }
              }
            }}
          >
            Por solo u$s
          </Typography>
          <Typography 
            variant="h2" 
            component="p" 
            sx={{ 
              color: '#4CAF50',
              fontWeight: 'bold',
              display: 'inline-block',
              animation: 'fadeInUp 1s ease-out',
              '@keyframes fadeInUp': {
                from: { transform: 'translateY(20px)', opacity: 0 },
                to: { transform: 'translateY(0)', opacity: 1 }
              }
            }}
          >
            254
          </Typography>
        </Box>
      </Fade>

        <Grid item xs={12} md={5}>
          <Slide direction="left" in timeout={1000}>
            <Paper elevation={3} sx={{ 
              p: 4,

              borderRadius: 2,
              background: 'linear-gradient(135deg, #0D0D0D, #1C1C1C)',
                      background: 'rgba(0, 5, 5, 0.25);', /* fondo semitransparente */
                      borderRadius: '16px',
                      padding: '2rem',
                      color: 'white',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
                      backdropFilter: 'blur(10px)',/* <- el efecto de vidrio */
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      textAlign: 'center',
                      my: 8
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
                sx={{ 
                  mt: 4,
                  '& .MuiInputLabel-root': {
                    color: '#FFD700',
                  },
                  '& .MuiInputBase-input': {
                    color: '#FFD700',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#FFD700',
                    },
                    '&:hover fieldset': {
                      borderColor: '#DAA520',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#FFD700',
                    },
                  },
                  '& .MuiFormHelperText-root': {
                    color: '#FFD700',
                  },
                }}
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
    </Box> 
  );
}

export default Alarma;
