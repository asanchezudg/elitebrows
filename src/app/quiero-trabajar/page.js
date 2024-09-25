'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const jobListings = [
  { 
    id: 1, 
    title: "Desarrollador Full Stack", 
    company: "TechCo", 
    rate: "$30-50/hora", 
    skills: ["React", "Node.js", "MongoDB"],
    date: "2024-09-15",
    location: "Remoto",
    urgent: true,
    contractType: "Freelance"
  },
  { 
    id: 2, 
    title: "Diseñador UX/UI", 
    company: "DesignHub", 
    rate: "$25-40/hora", 
    skills: ["Figma", "Adobe XD", "Sketch"],
    date: "2024-09-20",
    location: "Híbrido",
    urgent: false,
    contractType: "Tiempo completo"
  },
  { 
    id: 3, 
    title: "Especialista en Marketing Digital", 
    company: "GrowthMax", 
    rate: "$20-35/hora", 
    skills: ["SEO", "Google Ads", "Social Media"],
    date: "2024-09-18",
    location: "Remoto",
    urgent: true,
    contractType: "Proyecto"
  },
  { 
    id: 4, 
    title: "Ingeniero de DevOps", 
    company: "CloudSystems", 
    rate: "$40-60/hora", 
    skills: ["AWS", "Docker", "Kubernetes"],
    date: "2024-09-25",
    location: "Remoto",
    urgent: false,
    contractType: "Tiempo completo"
  },
  { 
    id: 5, 
    title: "Escritor de Contenido Técnico", 
    company: "TechWrite", 
    rate: "$25-40/hora", 
    skills: ["Redacción técnica", "SEO", "Markdown"],
    date: "2024-09-22",
    location: "Remoto",
    urgent: false,
    contractType: "Freelance"
  },
];

export default function WorkPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [salaryFilter, setSalaryFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [urgentFilter, setUrgentFilter] = useState(false);
  const [contractTypeFilter, setContractTypeFilter] = useState('');

  const filteredJobs = jobListings.filter(job => 
    (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
     job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))) &&
    (dateFilter === '' || job.date >= dateFilter) &&
    (salaryFilter === '' || parseInt(job.rate) >= parseInt(salaryFilter)) &&
    (locationFilter === '' || job.location === locationFilter) &&
    (!urgentFilter || job.urgent) &&
    (contractTypeFilter === '' || job.contractType === contractTypeFilter)
  );

  return (
    <div className="bg-white text-black">
      <div className="container mx-auto px-4">
        <main className="mt-8">
          <h1 className="text-4xl font-bold mb-8 text-center">
            Encuentra tu próximo <span className="text-green-600">trabajo remoto</span>
          </h1>

          <div className="max-w-4xl mx-auto mb-12">
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Buscar trabajos (ej. desarrollador, diseñador)"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Salario mínimo por hora"
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  value={salaryFilter}
                  onChange={(e) => setSalaryFilter(e.target.value)}
                />
                <select
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  <option value="">Todas las ubicaciones</option>
                  <option value="Remoto">Remoto</option>
                  <option value="Híbrido">Híbrido</option>
                </select>
                <select
                  className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                  value={contractTypeFilter}
                  onChange={(e) => setContractTypeFilter(e.target.value)}
                >
                  <option value="">Todos los tipos de contrato</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Tiempo completo">Tiempo completo</option>
                  <option value="Proyecto">Proyecto</option>
                </select>
              </div>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={urgentFilter}
                  onChange={(e) => setUrgentFilter(e.target.checked)}
                  className="form-checkbox h-5 w-5 text-green-600"
                />
                <span>Solo mostrar trabajos urgentes</span>
              </label>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Trabajos disponibles</h2>
            {filteredJobs.length === 0 ? (
              <p className="text-center text-gray-600">No se encontraron trabajos que coincidan con tu búsqueda.</p>
            ) : (
              filteredJobs.map((job) => (
                <div key={job.id} className="mb-6 p-6 border rounded-lg hover:shadow-lg transition duration-200">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <span className="text-green-600 font-semibold">{job.rate}</span>
                  </div>
                  <p className="text-gray-600 mb-2">{job.company}</p>
                  <p className="text-gray-600 mb-2">Fecha: {job.date}</p>
                  <p className="text-gray-600 mb-2">Ubicación: {job.location}</p>
                  <p className="text-gray-600 mb-2">Tipo de contrato: {job.contractType}</p>
                  {job.urgent && <p className="text-red-600 font-semibold mb-2">URGENTE</p>}
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-200 text-gray-800 px-2 py-1 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <Link href={`/trabajo/${job.id}`} className="inline-block mt-4 text-green-600 hover:text-green-800 transition duration-200">
                    Ver detalles
                  </Link>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </div>
  )
}