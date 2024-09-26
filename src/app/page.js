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
    }, 5000); // Aumentado a 3 segundos para una transición más suave

    return () => clearInterval(timer);
  }, []);

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
          <h1>Resalta Tu Belleza De Manera Natural</h1>
          <p>Satisfacemos y superamos las expectativas de cada cliente logrando cambios positivos a nivel físico y emocional.</p>
          <button className={styles.ctaButton}>Reserva tu cita</button>
        </section>
        <section className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image 
              src="/mujerflor.png" 
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
          <h2>Nuestros Trabajos</h2>
          <ImageCarousel />
        </div>
      </section>
      

      <section className={styles.services}>
        <h2>Nuestros Servicios</h2>
        <div className={styles.serviceGrid}>
          {['Microblading', 'Extensiones de Pestañas', 'Tratamientos Faciales', 'Maquillaje Profesional'].map((service) => (
            <div key={service} className={styles.serviceCard}>
              <Image src={`/${service.toLowerCase().replace(' ', '-')}.png`} alt={service} width={100} height={100} />
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