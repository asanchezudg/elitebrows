'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './styles/SpaBoutiqueLanding.module.css';


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
            src="/whoare1.jpg" 
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
            { name: 'María G.', text: 'El mejor servicio de microblading que he experimentado. ¡Resultados naturales y duraderos!' },
            { name: 'Laura S.', text: 'Las extensiones de pestañas transformaron mi mirada. ¡Me siento bella todos los días!' },
            { name: 'Carlos R.', text: 'El trato profesional y los resultados superaron mis expectativas. Altamente recomendado.' }
          ].map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.testimonialName}>- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.cta}>
        <h2>¿Lista para Resaltar tu Belleza Natural?</h2>
        <p>Agenda tu cita hoy y déjanos ayudarte a lucir tu mejor versión.</p>
        <button className={styles.ctaButton}>Reserva Ahora</button>
      </section>
    </main>
    <footer className={styles.footer}>
      <p>&copy; 2024 Spa & Boutique Elite Brows. Todos los derechos reservados.</p>
    </footer>
  </>
);

export default SpaBoutiqueLanding;