import Link from 'next/link'
import Image from 'next/image'

export default function Register() {
  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-4">
       <main className="mt-8">
          <section className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Impulsaaaaa tu negocio con el <br />
              <span className="text-green-600">mejor talento remoto</span><br />
              de América Latina
            </h1>
            <p className="mb-4">
              Desarrolla tu negocio de manera rápida y segura.<br />
              Te conectamos con miles de talentos en tu idioma y zona horaria
            </p>
            <Link href="/quiero-contratar" className="bg-green-600 text-white px-6 py-3 rounded-full text-lg">Quiero contratar</Link>
            <Link href="/quiero-trabajar" className="ml-4 text-green-600">¿Quieres trabajar? →</Link>
          </section>

          <div className="flex justify-around mb-12">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-40 h-40 rounded-full overflow-hidden">
                <Image
                  src={`/${i + 1}.png`} 
                  alt={`Imagen ${i + 1}`}
                  width={1000} 
                  height={1000}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="border p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-200 rounded-full mb-4"></div>
              <h2 className="text-2xl font-bold mt-4 mb-2">FREELANCERS</h2>
              <p>Contrata talento de distintas disciplinas para trabajar por objetivos u horas, recibiendo múltiples propuestas y acordando un precio.</p>
            </div>
            <div className="border p-6 rounded-lg">
              <div className="w-12 h-12 bg-green-200 rounded-full mb-50"></div>
              <h2 className="text-2xl font-bold mt-4 mb-2">JUNIORS</h2>
              <p>Contrata talento de distintas disciplinas para trabajar por objetivos u horas, recibiendo múltiples propuestas y acordando un precio.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}