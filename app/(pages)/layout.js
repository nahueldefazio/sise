import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ThemeRegistry from '../components/ThemeRegistry';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffff00'
};

export const metadata = {
  title: 'SISE - Servicios Integrales en Seguridad Electrónica | Alarmas, Monitoreo 24/7, Cámaras',
  description: 'SISE ofrece servicios integrales de seguridad electrónica en Argentina: sistemas de alarmas residenciales y comerciales, monitoreo 24/7, cámaras de seguridad, control de acceso, video-verificación. Más de 30 años de experiencia protegiendo hogares y empresas con tecnología de vanguardia.',
  keywords: 'SISE, seguridad electrónica Argentina, alarmas residenciales, alarmas comerciales, monitoreo 24/7, cámaras seguridad, control acceso, video verificación, sistemas intrusión, seguridad hogar, seguridad empresarial, central monitoreo, instalación alarmas, videovigilancia',
  authors: [{ name: 'SISE - Servicios Integrales en Seguridad Electrónica' }],
  creator: 'SISE',
  publisher: 'SISE',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://sise.com.ar',
    title: 'SISE - Servicios Integrales en Seguridad Electrónica',
    description: 'Protegemos tu hogar y negocio con sistemas de seguridad de última tecnología. Monitoreo 24/7, alarmas, cámaras y control de acceso en Argentina.',
    siteName: 'SISE',
    images: [
      {
        url: 'https://sise.com.ar/images/home/sise.jpg',
        width: 1200,
        height: 630,
        alt: 'SISE - Empresa líder en seguridad electrónica'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SISE - Servicios Integrales en Seguridad Electrónica',
    description: 'Protegemos tu hogar y negocio con sistemas de seguridad de última tecnología. Monitoreo 24/7, alarmas y cámaras.',
    images: ['https://sise.com.ar/images/home/sise.jpg']
  },
  alternates: {
    canonical: 'https://sise.com.ar'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SISE - Servicios Integrales en Seguridad Electrónica",
              "description": "Empresa especializada en sistemas de seguridad electrónica, alarmas, monitoreo 24/7 y cámaras de seguridad",
              "url": "https://sise.com.ar",
              "telephone": "+54-11-XXXX-XXXX",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AR",
                "addressLocality": "Argentina"
              },
              "sameAs": [
                "https://www.facebook.com/sise",
                "https://www.instagram.com/sise"
              ],
              "serviceType": [
                "Sistemas de Alarmas",
                "Monitoreo 24/7",
                "Cámaras de Seguridad",
                "Control de Acceso",
                "Video Verificación"
              ]
            })
          }}
        />
      </head>
      <body>
        <ThemeRegistry>
          <Navbar />
          {children}
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}