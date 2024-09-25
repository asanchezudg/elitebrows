// app/trabajo/[id]/page.js
import Link from 'next/link';
import Image from 'next/image'

// Simulated database of job listings
// Expanded jobDatabase with 5 job listings
const jobDatabase = {
    1: {
      id: 1,
      title: "Desarrollador Full Stack",
      company: "TechCo",
      location: "Remoto (América Latina)",
      rate: "$30-50/hora",
      type: "Contrato - Tiempo completo",
      posted: "Hace 2 días",
      skills: ["React", "Node.js", "MongoDB", "AWS", "TypeScript"],
      description: `
        Estamos buscando un Desarrollador Full Stack experimentado para unirse a nuestro equipo dinámico en TechCo. El candidato ideal tendrá una sólida experiencia en desarrollo web tanto en front-end como en back-end, con un enfoque particular en tecnologías modernas de JavaScript.
  
        Responsabilidades:
        - Desarrollar y mantener aplicaciones web escalables utilizando React y Node.js
        - Trabajar con bases de datos MongoDB y diseñar APIs RESTful
        - Colaborar con diseñadores UX/UI para implementar interfaces de usuario atractivas y funcionales
        - Participar en revisiones de código y contribuir a la mejora continua de nuestras prácticas de desarrollo
        - Optimizar aplicaciones para máximo rendimiento y escalabilidad
  
        Requisitos:
        - Al menos 3 años de experiencia en desarrollo full stack
        - Sólidos conocimientos de JavaScript, incluyendo ES6+ y TypeScript
        - Experiencia comprobada con React, Node.js, y MongoDB
        - Familiaridad con servicios de AWS y prácticas de DevOps
        - Excelentes habilidades de comunicación y capacidad para trabajar en un equipo remoto
        - Inglés profesional (escrito y hablado)
      `,
      companyInfo: "TechCo es una startup en rápido crecimiento que se especializa en soluciones de software innovadoras para empresas de todos los tamaños."
    },
    2: {
      id: 2,
      title: "Diseñador UX/UI Senior",
      company: "DesignHub",
      location: "Remoto (Global)",
      rate: "$40-60/hora",
      type: "Contrato - Tiempo parcial o completo",
      posted: "Hace 5 días",
      skills: ["Figma", "Adobe XD", "Sketch", "User Research", "Prototyping"],
      description: `
        DesignHub está en busca de un Diseñador UX/UI Senior para unirse a nuestro equipo creativo. Buscamos a alguien que pueda liderar proyectos de diseño, desde la conceptualización hasta la implementación, creando experiencias de usuario excepcionales.
  
        Responsabilidades:
        - Liderar el proceso de diseño UX/UI para aplicaciones web y móviles
        - Realizar investigaciones de usuarios y crear personas, mapas de viaje y flujos de usuario
        - Desarrollar wireframes, mockups y prototipos interactivos
        - Colaborar estrechamente con desarrolladores para asegurar una implementación fiel del diseño
        - Mantenerse actualizado con las últimas tendencias y mejores prácticas en diseño UX/UI
  
        Requisitos:
        - 5+ años de experiencia en diseño UX/UI para productos digitales
        - Portafolio que demuestre excelencia en diseño y pensamiento estratégico
        - Dominio de herramientas de diseño como Figma, Adobe XD y Sketch
        - Experiencia en la realización de investigaciones de usuarios y pruebas de usabilidad
        - Habilidades sólidas de comunicación y presentación
      `,
      companyInfo: "DesignHub es una agencia de diseño digital líder que trabaja con marcas innovadoras en todo el mundo."
    },
    3: {
      id: 3,
      title: "Especialista en Marketing Digital",
      company: "GrowthMax",
      location: "Remoto (España y Latinoamérica)",
      rate: "$25-40/hora",
      type: "Contrato - Tiempo completo",
      posted: "Hace 1 semana",
      skills: ["SEO", "SEM", "Google Analytics", "Content Marketing", "Social Media"],
      description: `
        GrowthMax busca un Especialista en Marketing Digital experimentado para impulsar nuestras estrategias de crecimiento online. El candidato ideal combinará habilidades analíticas con creatividad para desarrollar y ejecutar campañas de marketing efectivas.
  
        Responsabilidades:
        - Planificar y ejecutar campañas de marketing digital en múltiples canales
        - Optimizar estrategias de SEO y SEM para aumentar el tráfico y las conversiones
        - Analizar datos de campañas y proponer mejoras basadas en insights
        - Crear y gestionar contenido para redes sociales y blog corporativo
        - Colaborar con el equipo de ventas para generar y nutrir leads
  
        Requisitos:
        - 3+ años de experiencia en marketing digital
        - Conocimientos avanzados en herramientas de análisis web y publicidad online
        - Experiencia demostrable en la gestión de campañas de SEO, SEM y redes sociales
        - Excelentes habilidades de redacción y comunicación
        - Capacidad para trabajar de forma autónoma y en equipo en un entorno remoto
      `,
      companyInfo: "GrowthMax es una agencia de marketing digital en rápido crecimiento, especializada en ayudar a startups y pymes a escalar su presencia online."
    },
    4: {
      id: 4,
      title: "Ingeniero DevOps",
      company: "CloudSys",
      location: "Remoto (América)",
      rate: "$45-70/hora",
      type: "Contrato - Tiempo completo",
      posted: "Hace 3 días",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Python", "Terraform"],
      description: `
        CloudSys está buscando un Ingeniero DevOps experimentado para unirse a nuestro equipo de infraestructura. El candidato ideal tendrá una sólida experiencia en la implementación y gestión de infraestructuras cloud escalables y seguras.
  
        Responsabilidades:
        - Diseñar, implementar y mantener infraestructuras cloud en AWS
        - Automatizar procesos de despliegue y gestión de configuraciones
        - Implementar y mantener pipelines de CI/CD
        - Monitorizar y optimizar el rendimiento de los sistemas
        - Colaborar con equipos de desarrollo para mejorar las prácticas de DevOps
  
        Requisitos:
        - 5+ años de experiencia en roles de DevOps o SRE
        - Amplia experiencia con AWS y sus servicios principales
        - Sólidos conocimientos en contenedores (Docker) y orquestación (Kubernetes)
        - Experiencia en la implementación de pipelines de CI/CD
        - Habilidades de scripting en Python o Bash
        - Conocimientos de IaC, preferiblemente con Terraform
      `,
      companyInfo: "CloudSys es una empresa líder en soluciones de infraestructura cloud, ayudando a empresas de todos los tamaños a modernizar y escalar sus operaciones tecnológicas."
    },
    5: {
      id: 5,
      title: "Data Scientist",
      company: "DataMinds",
      location: "Remoto (Global)",
      rate: "$50-80/hora",
      type: "Contrato - Tiempo completo",
      posted: "Hace 4 días",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "Data Visualization"],
      description: `
        DataMinds está en busca de un Data Scientist talentoso para unirse a nuestro equipo de análisis avanzado. Buscamos a alguien que pueda transformar datos complejos en insights accionables y modelos predictivos precisos.
  
        Responsabilidades:
        - Desarrollar y aplicar modelos de machine learning y técnicas estadísticas avanzadas
        - Procesar, limpiar y validar la integridad de los datos
        - Realizar análisis exploratorio de datos para descubrir patrones y tendencias
        - Crear visualizaciones de datos efectivas para comunicar resultados
        - Colaborar con equipos de producto y negocio para implementar soluciones basadas en datos
  
        Requisitos:
        - Maestría o Doctorado en Ciencias de la Computación, Estadística o campo relacionado
        - 3+ años de experiencia profesional en ciencia de datos
        - Dominio de Python y sus bibliotecas de análisis de datos y machine learning
        - Experiencia con big data y computación distribuida (Spark)
        - Sólidos conocimientos en estadística y modelado predictivo
        - Excelentes habilidades de comunicación y capacidad para explicar conceptos técnicos a audiencias no técnicas
      `,
      companyInfo: "DataMinds es una consultora especializada en big data y análisis avanzado, ayudando a empresas a tomar decisiones basadas en datos y a implementar soluciones de IA innovadoras."
    }
  };

// Function to get job details (simulates fetching from an API or database)
function getJobDetails(id) {
  return jobDatabase[id] || null;
}

export default function JobDetailsPage({ params }) {
  const jobId = parseInt(params.id);
  const job = getJobDetails(jobId);

  if (!job) {
    return (
      <div className="min-h-screen bg-white text-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Trabajo no encontrado</h1>
          <Link href="/quiero-trabajar" className="text-green-600 hover:text-green-800">
            Volver a la búsqueda de trabajos
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-4 py-8">


        <main>
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
            <p className="text-xl text-gray-600 mb-4">{job.company}</p>
            
            <div className="mb-6">
              <p className="text-gray-600 mb-2"><strong>Ubicación:</strong> {job.location}</p>
              <p className="text-gray-600 mb-2"><strong>Tarifa:</strong> {job.rate}</p>
              <p className="text-gray-600 mb-2"><strong>Tipo:</strong> {job.type}</p>
              <p className="text-gray-600 mb-2"><strong>Publicado:</strong> {job.posted}</p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Habilidades requeridas:</h2>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Descripción del trabajo:</h2>
              <div className="whitespace-pre-wrap">{job.description}</div>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Sobre la empresa:</h2>
              <p>{job.companyInfo}</p>
            </div>

            <div className="mt-8">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-200">
                Aplicar a este trabajo
              </button>
            </div>
          </div>
        </main>

      </div>
    </div>
  );
}