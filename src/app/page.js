'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles/SpaBoutiqueLanding.module.css';
import { GOOGLE_CLIENT_ID, GOOGLE_API_KEY, REDIRECT_URI } from './config';


const testimonials = [
  { name: 'María G.', text: 'El mejor servicio de microblading que he experimentado. ¡Resultados naturales y duraderos!' },
  { name: 'Laura S.', text: 'Las extensiones de pestañas transformaron mi mirada. ¡Me siento bella todos los días!' },
  { name: 'Carlos R.', text: 'El trato profesional y los resultados superaron mis expectativas. Altamente recomendado.' }
];



const ImageCarousel = () => {
  const images = [
    '/carousel-1.jpg', '/carousel-2.jpg', '/carousel-12.jpg', '/carousel-4.jpg',
    '/carousel-5.jpg', '/carousel-6.jpg', '/carousel-7.jpg', '/carousel-8.jpg',
    '/carousel-9.jpg', '/carousel-10.jpg'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex + 1 >= images.length ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div className={styles.carouselContainer}>
      <div 
        className={styles.carouselTrack} 
        style={{ transform: `translateX(-${currentIndex * 25}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className={styles.carouselImage}>
            <Image 
              src={src}
              alt={`Carousel image ${index + 1}`}
              width={250}
              height={250}
              layout="responsive"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: ''
  });

  const availableHours = [
    '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = encodeURIComponent(
      `Hola buenas tardes, soy ${formData.name} y quiero registrar una Cita el día ${formData.date} con horario ${formData.time}. Servicio: ${formData.service}. Mi teléfono es ${formData.phone} y mi email es ${formData.email}.`
    );
    
    const whatsappUrl = `https://wa.me/5569059924?text=${message}`;
    
    // Abre WhatsApp en una nueva pestaña
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.bookingForm}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nombre"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Correo electrónico"
        required
      />
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Teléfono"
        required
      />
      <select
        name="service"
        value={formData.service}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona un servicio</option>
        <option value="microblading">Microblading</option>
        <option value="pestanas">Extensiones de Pestañas</option>
        <option value="facial">Tratamientos Faciales</option>
        <option value="maquillaje">Maquillaje</option>
      </select>
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
      />
      <select
        name="time"
        value={formData.time}
        onChange={handleChange}
        required
      >
        <option value="">Selecciona un horario</option>
        {availableHours.map((hour) => (
          <option key={hour} value={hour}>
            {hour}
          </option>
        ))}
      </select>
      <button type="submit" className={`${styles.ctaButton} ${styles.centeredButton}`}>
          Enviar solicitud
        </button>
    </form>
  );
};

const SpaBoutiqueLanding = () => (
  <>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"></link>
    <header className={styles.header}>
    <Image src="/elitebrows_logo.png" alt="Elite Brows Logo" width={800} height={200} />
      <nav>
        <ul className={styles.navList}>
          <li>Nosotros</li>
          <li>Cursos</li>
          <li>Franquicias</li>
          <li>Contacto</li>
          <li>Certificaciones</li>
        </ul>
      </nav>
    </header>
    <main>
      <section className={styles.hero}>
        <section className={styles.heroContent}>
          <h1 >NOS ENFOCAMOS EN RESULTADOS <em>NATURALES</em> QUE REALZAN TU BELLEZA</h1>
          <p>Satisfacemos y superamos las expectativas de cada cliente logrando cambios positivos a nivel físico y emocional.</p>
          <button className={styles.ctaButton}>Reserva tu cita</button>
        </section>
        <section className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/mujerflormor.png" 
              alt="Mujer hermosa con flor"
              width={500} 
              height={750} 
              layout="responsive"
              className={styles.fadeIn}
            />
          </div>
          <div className={styles.yellowCircle}></div>
          <svg className={styles.floralDrawing} width="100" height="200" viewBox="0 0 100 200">
            {/* Aquí irían los paths para el dibujo floral */}
          </svg>
        </section>
      </section>
      <section className={styles.whoWeAre}>
      <div className={styles.whoWeAreContent}>
        <div className={styles.whoWeAreImage}>
          <Image 
            src="/whoare2.jpg" 
            alt="Equipo de Elite Brows" 
            width={450} 
            height={500} 
            layout="responsive"
          />
        </div>
        <div className={styles.whoWeAreText}>
          <h2>QUIÉNES SOMOS</h2>
          <p>
            Elite Brows es un estudio de belleza de primer nivel especializado en Microblading y 
            Maquillaje Permanente, ubicado en [Ciudad], [País]. Entendemos que el maquillaje permanente 
            es una decisión importante que requiere una cuidadosa consideración.
          </p>
          <p>
            Experimenta el arte del microblading en Elite Brows, donde nuestros profesionales expertos 
            se especializan en crear cejas impresionantes y de aspecto natural. Nuestra técnica meticulosa 
            y enfoque personalizado aseguran que logres la forma y el color de cejas perfectos para realzar 
            tus rasgos únicos.
          </p>
          <p>
            Además del microblading, ofrecemos servicios excepcionales de extensión de pestañas y 
            tratamientos para la piel, mejorando tu rutina de belleza con servicios diseñados para 
            hacerte sentir segura mientras disfrutas de un estilo de vida de bajo mantenimiento.
          </p>
          <p>
            Damos una alta prioridad a la seguridad y la higiene, proporcionando nuestros servicios en 
            un entorno semi-clínico con técnicos totalmente certificados y licenciados.
          </p>
          <button className={styles.ctaButton}>CONOCE AL EQUIPO</button>
        </div>
      </div>
    </section>
      <section className={styles.heroContent}>
          <h2 >Nuestros Trabajos</h2>
      </section>
      
      <section className={styles.carouselSection}>
        <div className={styles.carouselBackground}>
          <Image 
            src="/mc.png" 
            alt="Fondo del carrusel" 
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className={styles.carouselContent}>
          <ImageCarousel />
        </div>
      </section>
      

      <section className={styles.services}>
        <h2>Nuestros Servicios</h2>
        <div className={styles.serviceGrid}>
          {['Microblading', 'Extensiones de Pestañas', 'Tratamientos Faciales', 'Maquillaje'].map((service) => (
            <div key={service} className={styles.serviceCard}>
              <Image src={`/${service.toLowerCase().replace(' ', '-')}.jpg`} alt={service} width={280} height={280} className={styles.serviceimg}/>
              <h3>{service}</h3>
              <p>Descubre cómo podemos realzar tu belleza natural con nuestro servicio de {service}.</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>Lo Que Dicen Nuestros Clientes</h2>
        <div className={styles.testimonialGrid}>
          {[
            { 
              name: 'Ana L.', 
              text: 'Mi experiencia con el microblading en Elite Brows fue increíble. La atención personalizada y la técnica precisa de la especialista hicieron que mis cejas lucieran naturales y definidas. Han pasado meses y siguen viéndose perfectas. ¡Totalmente recomendado!'
            },
            { 
              name: 'Sofía Marquez.', 
              text: 'Las extensiones de pestañas superaron mis expectativas. El proceso fue cómodo y relajante, y el resultado es asombroso. Mis ojos se ven más grandes y expresivos, y lo mejor es que me ahorra tiempo en mi rutina diaria. El equipo de Elite Brows es profesional y amable.'
            },
            { 
              name: 'Laura Rios.', 
              text: 'Nunca pensé que un tratamiento facial pudiera hacer tanta diferencia. La limpieza profunda y el masaje dejaron mi piel renovada y con un brillo que no había visto en años. El ambiente del spa es tranquilo y acogedor, y el personal realmente sabe lo que hace. Volveré sin duda.'
            }
          ].map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialName}>- {testimonial.name}</p>
              <p className={styles.testimonialName}>- {testimonial.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.booking}>
        <h2>Agenda tu Cita</h2>
        <p>Para agendar tu cita, por favor llena el siguiente formulario o selecciona una fecha en nuestro calendario.</p>
        <div className={styles.spacer4}></div>
        <BookingForm />
        <div className={styles.bookingConditions}>
          <h3>Para registrar tu cita en el calendario:</h3>
          <ul>
            <li>Hacer clic en el texto <em>Ver disponibilidad en el calendario.</em></li>
            <li>Se va a abrir el calendario de Google.</li>
            <li>Seleccionar Dia y Hora.</li>
            <li>En Añadir Titulo ingresar Nombre - Servicio y Telefono.</li>
          </ul>
        </div>
        <div className={styles.spacer}></div>
        <a 
          href="https://calendar.google.com/calendar/u/0?cid=ZWxpdGVicm93cy5teEBnbWFpbC5jb20" 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`${styles.ctaButton} ${styles.centeredButton}`}
        >
          Ver disponibilidad en el calendario
        </a>
        
        <div className={styles.bookingConditions}>
          <h3>Condiciones de reserva:</h3>
          <ul>
            <li>Se requiere un depósito no reembolsable para confirmar la cita.</li>
            <li>Por favor, llega 10 minutos antes de tu cita programada.</li>
            <li>Si no puedes asistir, notifícanos con al menos 24 horas de anticipación.</li>
            <li>El incumplimiento de los requisitos puede resultar en la cancelación de la cita sin reembolso.</li>
          </ul>
        </div>
      </section>

      <section className={styles.cta}>
        <h2>¿Lista para Resaltar tu Belleza Natural?</h2>
        <p>Agenda tu cita hoy y déjanos ayudarte a lucir tu mejor versión.</p>
        <a href="https://wa.me/5569059924" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
        <Image src="/whatsapp-icon.png" alt="WhatsApp" width={30} height={30}  />
        Contáctanos por WhatsApp
      </a>
      </section>
    </main>
    <footer className={styles.footer}>
      <p>&copy; 2024 Spa & Boutique Elite Brows. Todos los derechos reservados.</p>
      
    </footer>
  </>
);

export default SpaBoutiqueLanding;