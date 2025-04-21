import React from 'react';
import { Container, Typography, Paper, Box, Grid } from '@mui/material';

function Nosotros() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography 
        variant="h2" 
        component="h1" 
        gutterBottom 
        align="center"
        sx={{ mb: 8 }}  // Increased bottom margin
      >
        Nosotros
      </Typography>

      {/* Por qué Elegirnos Section */}
      <Paper elevation={3} sx={{ p: 3, mb: 8 }}>  {/* Reduced padding from 4 to 3 */}
        <Typography variant="h3" gutterBottom color="primary">
          ¿POR QUÉ ELEGIRNOS?
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="body1" paragraph>
            SISE es una empresa joven con especialistas técnicos con 30 años de experiencia en instalaciones y puesta en marcha de sistemas electrónicos de seguridad utilizando lo último en tecnología.
          </Typography>
          <Typography variant="body1" paragraph>
            En SISE nos interesa brindar soluciones efectivas y de manera personalizada para satisfacer cada una de las necesidades de nuestros clientes. También contamos con personal técnico propio especialmente capacitados en las instalaciones, mantenimiento y reparación de sistemas electrónicos de seguridad para darles tranquilidad, profesionalismo y confiabilidad del personal que ingresa a su propiedad en cada instalación.
          </Typography>
          <Typography variant="body1" paragraph>
            Nuestros especialistas te asesorarán para realizar un proyecto de instalación a medida y así determinar el equipamiento más adecuado a utilizar, luego se procede a la instalación de los mismos, preservando la estética del espacio protegido dentro de tu hogar o empresa. El equipamiento consiste en marcas líderes en seguridad electrónica, todas con garantía y soporte en el pais.
          </Typography>
          <Typography variant="body1" paragraph>
            Al ser una empresa joven todos los inicios son difíciles porque ya que existe una amplia variedad de soluciones en el mercado, pero nos mantenemos en el camino de la honestidad, la confianza y transparencia, brindando la respuesta necesaria en tiempo y forma a cada uno de nuestros trabajos; podemos decir que formamos una empresa seria y consolidada en este mercado. Por todo esto es que hoy en día, el que tenga un sistema instalado SISE sabrá de esta experiencia, la honestidad y calidad de profesionales que se sienten orgullosos de hacer realidad su vocación.
          </Typography>
        </Box>
      </Paper>

      {/* Mission Vision Objective Grid */}
      <Grid container spacing={4}>  {/* Reduced spacing from 6 to 4 */}
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>  {/* Reduced padding from 4 to 3 */}
            <Typography variant="h4" gutterBottom color="primary" align="center">
              OBJETIVO
            </Typography>
            <Typography variant="body1">
              Sencillamente, seguir ganando la confianza de aquellos que nos han entregado la responsabilidad de protegerlos y seguir dándoles la seguridad a sus seres queridos y sus bienes.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>  {/* Reduced padding from 4 to 3 */}
            <Typography variant="h4" gutterBottom color="primary" align="center">
              MISIÓN
            </Typography>
            <Typography variant="body1">
              Seguir aprendiendo, mejorando y creciendo día a día acompañando el avance tecnológico en materia de Seguridad Electrónica, es por ello que contamos con capacitación constante del personal técnico porque creemos que el conocimiento es el bien más preciado del ser humano y así poder brindar una mejor solución a los problemas cotidianos en seguridad.
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>  {/* Reduced padding from 4 to 3 */}
            <Typography variant="h4" gutterBottom color="primary" align="center">
              VISIÓN
            </Typography>
            <Typography variant="body1">
              Actualmente la seguridad paso de ser un lujo para unos pocos a una necesidad mundial y gracias a la tecnología hoy se pueden contar con sistemas muy eficientes a bajo costo realizando instalaciones sencillas y agiles o aprovechando alguna existente. La realidad de nuestro país exige que cualquier ciudadano tenga un sistema Disuasivo de Seguridad. La inseguridad es una sensación de amenaza constante, estadísticamente al instalar un sistema de alarma en un hogar; el grupo familiar que habita en él, siente tranquilidad y en definitiva es eso lo que necesitamos sentir, un poco de alivio frente a tantas amenazas de seguridad.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Nosotros;