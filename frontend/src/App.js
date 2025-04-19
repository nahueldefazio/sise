import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, ThemeProvider } from '@mui/material';
import Footer from './components/Footer';
import theme from './theme/theme';

import Navbar from './components/Navbar';

// Create basic page components (you'll need to create these files)
import Home from './pages/Home';
import Camaras from './pages/Camaras';
import Alarma from './pages/Alarma';
import Monitoreo from './pages/Monitoreo';
import Servicios from './pages/Servicios';
import Clientes from './pages/Clientes';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/camaras" element={<Camaras />} />
            <Route path="/alarma" element={<Alarma />} />
            <Route path="/monitoreo" element={<Monitoreo />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/clientes" element={<Clientes />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
