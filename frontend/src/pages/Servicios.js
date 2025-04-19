import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';

function Servicios() {
  const services = [
    {
      title: "VIDEO-VERIFICACIÓN",
      content: "Ante un disparo de alarma, el operador de la central de monitoreo podrá verificar previamente mediante la visualización de las cámaras del lugar, si existe un evento real o una falsa alarma y asi se lo podrá comunicar a la policía o al propietario."
    },
    {
      title: "CONTROL DE HORARIOS",
      content: "Los servicios de control horario para alarmas se refieren a sistemas o servicios diseñados para gestionar y controlar el tiempo en el que se activan y desactivan las alarmas, asegurando que se ajusten a las necesidades específicas de un entorno determinado. Estos servicios son fundamentales para una gestión eficiente de alarmas, ya que permiten establecer horarios específicos en los que las alarmas deben estar activas o desactivadas, evitando falsas alarmas y optimizando la seguridad."
    },
    {
      title: "ENVÍO DE RESÚMENES MENSUALES",
      content: "Son una funcionalidad que ofrecen algunos sistemas de seguridad y monitoreo de alarmas. Estos servicios generan y envían un informe detallado sobre los eventos de seguridad registrados durante un período determinado (generalmente mensual), proporcionando a los usuarios un resumen de todas las incidencias y eventos relevantes relacionados con la alarma."
    },
    {
      title: "CONSORCIOS",
      content: "Ofrecemos diferentes herramientas de control y gestión que permite a los propietarios incrementar su seguridad. Reduce los gastos en seguridad, conserjerías y reparaciones, reemplazando en múltiples ocasiones a la seguridad física o haciendo más eficaz su labor. Es un potente sistema de disuasión, la presencia de cámaras intimida a los intrusos y vándalos, consiguiendo que desistan. Logra bajar los peligros habituales, los robos a personas y pisos, los destrozos y robos de vehículos en garajes y Bauleras, la preocupación de los padres y las personas mayores, disuade a los merodeadores, acaba con la impunidad con la que actúan algunos individuos, reduce los gastos de reparaciones, mejora la convivencia, incrementa el respeto a las instalaciones y disuade a la rotura de buzones, puertas, cristales, vaciado de extintores, etc."
    },
    {
      title: "ALARMA DE PÁNICO",
      content: "Una alarma de pánico es un dispositivo que se activa manualmente para enviar una alerta rápida y discreta en situaciones de emergencia, también se le conoce como \"alarma de coacción\", \"alarma de atraco\" o \"botón de pánico\" las alarmas de pánico se pueden activar mediante un botón físico o virtual, que puede estar integrado en aplicaciones móviles, o llevarse en forma de llavero o pulsera, se lo pueden usar en situaciones como Intrusión en un inmueble, peligro para la seguridad, necesidad de ayuda de las autoridades, peligro para personas mayores o niños y emergencia médica entre otros. Las alarmas de pánico son útiles cuando puede ser incómodo o inseguro pedir ayuda de otras formas."
    },
    {
      title: "BOTÓN DE AYUDA",
      content: "También conocido como Botón SOS para adultos mayores, este sistema puede ayudar a solicitar servicios de emergencia médica y contactar a personas para solicitar atención, a través de un control remoto, pulsera o de una aplicación en el celular, normalmente está dedicado a las personas mayores para poder pedir auxilio ante una eventualidad o accidente en el hogar. Excelente como sistema de alerta médica"
    },
    {
      title: "ALARMAS VECINALES",
      content: "Es un sistema de seguridad que se basa en la colaboración de los vecinos de un barrio o urbanización para proteger el área, este tipo de alarmas se componen de un dispositivo central que emite luces y sonidos, y de un botón de pánico que los vecinos pueden presionar en caso de detectar una situación de emergencia, las alarmas vecinales pueden ayudar a prevenir robos y otros actos delictivos, y a mejorar la sensación de seguridad en la comunidad, algunos de los elementos que pueden incluir una alarma vecinal son: Sirena, Reflectores, Control remoto, Luz estroboscópica, Luz disuasiva, Luz LED de estado, Avisos hablados."
    },
    {
      title: "CONTROL DE ACCESO",
      content: "Con este sistema nos permite controlar el ingreso y egreso de personas a todas las zonas restringidas del lugar y así puede tener un control y monitoreo de accesos, tráfico y movimientos en sus instalaciones, permite la captura de datos de empleados y/o visitantes, un almacenamiento de datos referidos al ingreso y egreso de personas, vehículos y bienes en general. Tipos de lectores: Lector de tarjetas de proximidad, lectores PIN (código), lectores biométricos (Huella dactilar), reconocimiento facial, o reconocimientos de combinaciones de los mismos. Estos dispositivos accionan la apertura de puertas, molinetes o barreras vehiculares. Los sistemas de control de accesos son instrumentos altamente flexibles que permiten administrar los accesos de personas según exigencias específicas de cada usuario, rango horario, perfil, etc."
    },
    {
      title: "DETECCIÓN DE INCENDIOS",
      content: "Nos permite detectar automáticamente a través de dispositivos electrónicos fijos, un principio de incendio o temperatura y poder comunicárnoslo por diferentes medios, inclusive en forma sonora a través de un sistema de detección (alarma)."
    },
    {
      title: "PORTEROS, PORTEROS VISORES, PORTEROS IP Y PORTERÍA MULTIFAMILIAR",
      content: "Brindamos diferentes soluciones de comunicación al interior del establecimiento, diferentes formatos y tecnologías dependiendo del lugar y la cantidad de usuarios."
    },
    {
      title: "SEGURIDAD PERIMETRAL",
      content: "Utilizamos la más avanzada tecnología para la protección perimetral con una variedad tecnológica aplicada en cada caso según requerimientos de seguridad y presupuesto como ser entre otros, Barreras infrarrojas / Cable sensor microfónico / Detección por video / Barreras de microondas / Cerco eléctrico no letal con alarma, etc."
    },
    {
      title: "CERCO ELÉCTRICO",
      content: "Es un sistema basado en un cerco de alambre eléctrico no letal, cuando una persona o un animal entra en contacto con los cables del cerco eléctrico, la corriente pasa a través de su cuerpo, lo que provoca una descarga eléctrica momentánea, esta descarga no es letal, pero es lo suficientemente fuerte como para causar una sensación de choque doloroso, lo que generalmente provoca que la persona o el animal se aleje rápidamente."
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Otros Servicios
      </Typography>

      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Paper 
              elevation={3} 
              sx={{ 
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Typography 
                variant="h5" 
                gutterBottom 
                color="primary"
                sx={{ mb: 2 }}
              >
                {service.title}
              </Typography>
              <Typography variant="body1">
                {service.content}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Servicios;