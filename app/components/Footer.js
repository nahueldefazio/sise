"use client";
import React from 'react';
import { Container, Typography, Box, Link, TextField, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { useState } from 'react';
import { validateEmail, validateName } from '../utils/validations';
import { getNavPath, getNonNavbarPath, getApiUrl } from '../utils/getNavPath';

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
      const response = await fetch(getApiUrl('api/contact'), {
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
    <Box sx={{ 
      bgcolor: '#1a1a1a', 
      color: 'white', 
      py: 4, 
      mt: 'auto',
      borderTop: '3px solid #ffff00',
      boxShadow: '0 -4px 20px rgba(255, 255, 0, 0.2)'
    }}>
      <Container maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          justifyContent: 'space-between',
          gap: 4 
        }}>
          {/* SISE Information */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ 
              mb: 2, 
              color: '#ffff00',
              borderBottom: '2px solid #ffff00',
              pb: 1,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 'bold'
            }}>
              SISE
            </Typography>
            <Typography variant="body2" sx={{ 
              mb: 2, 
              lineHeight: 1.8,
              fontStyle: 'italic',
              color: 'rgba(255,255,255,0.8)'
            }}>
              Nuestro objetivo es ganarnos la confianza de aquellos que nos han entregado la responsabilidad
              de protegerlos y seguir dándoles la seguridad a sus seres queridos y sus bienes.
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Conocé nuestras <Link href={getNonNavbarPath("/politicas-de-privacidad")} sx={{ 
                color: '#ffff00', 
                textDecoration: 'none',
                fontWeight: 'bold',
                '&:hover': { 
                  color: '#ff0000',
                  textDecoration: 'underline',
                  textShadow: '0 0 5px #ff0000'
                },
                transition: 'all 0.3s ease'
              }}>
                políticas de privacidad
              </Link>
            </Typography>
            <Box sx={{ mt: 2 }}>
              <Typography variant="body2" sx={{ 
                mb: 2,
                color: 'rgba(255,255,255,0.8)'
              }}>
                Encontranos también en
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <Link 
                  href="https://www.facebook.com/sise.com.ar" 
                  target="_blank" 
                  sx={{ 
                    bgcolor: '#ffff00',
                    borderRadius: '50%',
                    p: 1,
                    display: 'flex',
                    border: '2px solid #ffff00',
                    '&:hover': { 
                      bgcolor: '#ff0000',
                      borderColor: '#ff0000',
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 10px #ff0000'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <FacebookIcon sx={{ color: '#000000', fontSize: 20 }} />
                </Link>
                <Link 
                  href="https://www.instagram.com/sise_seguridad" 
                  target="_blank" 
                  sx={{ 
                    bgcolor: '#ffff00',
                    borderRadius: '50%',
                    p: 1,
                    display: 'flex',
                    border: '2px solid #ffff00',
                    '&:hover': { 
                      bgcolor: '#ff0000',
                      borderColor: '#ff0000',
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 10px #ff0000'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  <InstagramIcon sx={{ color: '#000000', fontSize: 20 }} />
                </Link>
              </Box>
            </Box>
          </Box>

          {/* Contact Information */}
          <Box sx={{ flex: 1 }}>
            <Typography variant="h6" sx={{ 
              mb: 2, 
              color: '#ffff00',
              borderBottom: '2px solid #ffff00',
              pb: 1,
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontWeight: 'bold'
            }}>
              Contacto
            </Typography>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Oficina <Box component="span" sx={{ color: '#ffff00', fontWeight: 'bold' }}>+54 11 3221-5517</Box>
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Fax <Box component="span" sx={{ color: '#ffff00', fontWeight: 'bold' }}>+54 11 3221 2100-5517</Box>
            </Typography>

            <Box sx={{ mb: 3 }}>
              <Typography variant="body2" component="a" href="mailto:ventas@sise.com.ar" sx={{ 
                display: 'block',
                color: '#ffff00',
                textDecoration: 'none',
                mb: 1,
                fontWeight: 'bold',
                '&:hover': { 
                  color: '#ff0000',
                  textShadow: '0 0 5px #ff0000'
                },
                transition: 'all 0.3s ease'
              }}>
                ventas@sise.com.ar
              </Typography>
              <Typography variant="body2" component="a" href="mailto:info@sise.com.ar" sx={{ 
                display: 'block',
                color: '#ffff00',
                textDecoration: 'none',
                mb: 1,
                fontWeight: 'bold',
                '&:hover': { 
                  color: '#ff0000',
                  textShadow: '0 0 5px #ff0000'
                },
                transition: 'all 0.3s ease'
              }}>
                info@sise.com.ar
              </Typography>
              <Typography variant="body2" component="a" href="mailto:administracion@sise.com.ar" sx={{ 
                display: 'block',
                color: '#ffff00',
                textDecoration: 'none',
                fontWeight: 'bold',
                '&:hover': { 
                  color: '#ff0000',
                  textShadow: '0 0 5px #ff0000'
                },
                transition: 'all 0.3s ease'
              }}>
                administracion@sise.com.ar
              </Typography>
            </Box>

            <Box>
              <Typography variant="body2" sx={{ 
                fontStyle: 'italic',
                mb: 1
              }}>
                Horario de oficina
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }}>
                de lunes a viernes de 9:00 a 18:00
              </Typography>
              <Typography variant="body2" sx={{ 
                textDecoration: 'underline',
                fontStyle: 'italic'
              }}>
                Servicio técnico las 24 horas
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
