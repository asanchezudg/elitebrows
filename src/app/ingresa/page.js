'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';

// Componente de Loader
const Loader = () => (
  <div className="flex justify-center items-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
  </div>
);

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setIsLoading(false);

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Inicio de sesión exitoso.');
        setIsLoading(true);
        
        // Llamar a la función login del contexto
        login({ email, name: data.name, userType: data.userType });

        // Esperar 4 segundos antes de redirigir
        setTimeout(() => {
          if (data.userType === 'Trabajador') {
            router.push('/quiero-trabajar');
          } else if (data.userType === 'Empleador') {
            router.push('/quiero-contratar');
          }
        }, 4000);
      } else {
        setMessage(data.message || 'Error al iniciar sesión.');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      setMessage('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-4">
        <main className="mt-8">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-center">Iniciar Sesión</h1>
            {message && (
              <div className="text-center mb-4">
                <p className={`${message.includes('exitoso') ? 'text-green-600' : 'text-red-600'} font-semibold`}>
                  {message}
                </p>
              </div>
            )}
            {isLoading ? (
              <Loader />
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">Correo Electrónico</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-1 font-medium">Contraseña</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-600"
                    required
                  />
                </div>
                <button type="submit" className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-200">
                  Iniciar Sesión
                </button>
              </form>
            )}
            <p className="mt-4 text-center">
              ¿No tienes una cuenta? <Link href="/registrate" className="text-green-600 hover:underline">Regístrate aquí</Link>
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}