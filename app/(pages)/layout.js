import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ThemeRegistry from '../components/ThemeRegistry';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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