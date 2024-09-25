import { AuthProvider } from './context/AuthContext';
import Navigation from './components/Navigation';
import Link from 'next/link';
import './globals.css';
import Image from 'next/image';  // Asegúrate de que este archivo exista con tus estilos globales

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <AuthProvider>
          <div className="min-h-screen bg-white text-black">
            <div className="container mx-auto px-4">
              <header className="flex justify-between items-center py-4">
              <div className="logo text-2xl font-bold">
                <Link href="/">
                  {/* Asegúrate de ajustar el 'src' a la ruta de tu imagen y 'alt' para accesibilidad */}
                  <Image src="/tw_logo.jpg" alt="TechWork Remote Logo" width={100} height={50} className="text-green-600" />
                </Link>
              </div>
                <Navigation />
              </header>
              <main className="mt-8">
                {children}
              </main>
              <footer className="mt-16 text-center">
                <h2 className="text-2xl font-bold mb-4 text-green-600">Proyecto V</h2>
                <h3 className="text-xl font-semibold mb-2 text-green-600">Alumnos:</h3>
                <p className="mb-1">Erika Nathaly Pacheco Espíndola</p>
                <p className="mb-1">Angel Francisco Sánchez De Tagle Márquez</p>
                <p className="mb-4">Ramiro Cesar Vargas Cárdenas</p>
                <div className="flex justify-center">
                  <img 
                    src="/udg-virtual-logo.png" 
                    alt="UDG Virtual Logo" 
                    width={150} 
                    height={150}
                  />
                </div>
              </footer>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}