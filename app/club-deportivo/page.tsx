'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { dmSans } from '@/components/fonts';

const galeria = [
  { src: '/club/entrenamiento.jpg', alt: 'Entrenamiento del equipo' },
  { src: '/club/partido.jpg', alt: 'Partido amistoso del club' },
  { src: '/club/campeonato.jpg', alt: 'Campeonato intercolegial' },
  { src: '/club/equipacion.jpg', alt: 'Uniforme oficial del club' },
  { src: '/club/victoria.jpg', alt: 'Celebración de victoria' },
];

export default function ClubDeportivoPage() {
  return (
    <section className={`${dmSans.className} min-h-screen`}>
      {/* HERO */}
      <div className="bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-secondary)] text-[var(--color-surface)] py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Club Deportivo ITSI Chone
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg max-w-2xl mx-auto"
        >
          Promovemos la disciplina, el trabajo en equipo y la excelencia deportiva.
          Nuestro club forma parte esencial de la vida estudiantil, fomentando valores y bienestar físico en cada competencia.
        </motion.p>
      </div>

      {/* SECCIÓN DESCRIPTIVA */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-[var(--color-primary-dark)] mb-4">
            Más que un club, una familia deportiva
          </h2>
          <p className="text-[var(--color-text)] text-justify leading-relaxed mb-4">
            El Club Deportivo ITSI Chone impulsa la participación de nuestros estudiantes en diferentes disciplinas:
            fútbol, básquet, atletismo, voleibol y más. A través del deporte, fortalecemos la mente, el cuerpo y los valores institucionales.
          </p>
          <p className="text-[var(--color-text)] text-justify leading-relaxed">
            Contamos con entrenadores calificados, espacios adecuados para el entrenamiento y un espíritu de superación
            que motiva a cada integrante a alcanzar su máximo potencial dentro y fuera de la cancha.
          </p>
        </motion.div>

        {/* Imagen principal */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Image
            src="/club/equipo.jpg"
            alt="Equipo Club Deportivo ITSI"
            width={500}
            height={350}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* GALERÍA */}
      <div className="light-section bg-[var(--color-surface)] py-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-[var(--color-primary-dark)] mb-12"
        >
          Galería del Club Deportivo
        </motion.h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {galeria.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={400}
                height={300}
                className="object-cover w-full h-64 hover:scale-105 transition-transform duration-500"
                priority
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}