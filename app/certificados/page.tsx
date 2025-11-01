'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { dmSans } from '@/components/fonts';

const certificados = [
  {
    id: 1,
    title: 'Certificado de Matrícula',
    description: 'Documento oficial que acredita la inscripción del estudiante.',
    file: '/certificados/certificado-matricula.pdf',
    icon: '/icons/certificado.svg',
  },
  {
    id: 2,
    title: 'Certificado de Promoción',
    description: 'Acredita que el estudiante ha aprobado el año lectivo correspondiente.',
    file: '/certificados/certificado-promocion.pdf',
    icon: '/icons/certificado.svg',
  },
  {
    id: 3,
    title: 'Certificado de Conducta',
    description: 'Reconoce el comportamiento ejemplar del estudiante.',
    file: '/certificados/certificado-conducta.pdf',
    icon: '/icons/certificado.svg',
  },
];

export default function CertificadosPage() {
  return (
    <section className={`${dmSans.className} min-h-screen`}>
      {/* Hero */}
      <div className="bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-secondary)] text-[var(--color-surface)] py-20 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold mb-4"
        >
          Certificados Institucionales
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg max-w-2xl mx-auto"
        >
          Descarga aquí los certificados académicos y administrativos de la Unidad Educativa ITSI Chone.
        </motion.p>
      </div>

      {/* Tarjetas de certificados */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {certificados.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[var(--color-primary-dark)] shadow-lg rounded-2xl p-6 flex flex-col justify-between items-center text-center hover:scale-105 transition-transform"
          >
            <Image
              src={cert.icon}
              alt={cert.title}
              width={70}
              height={70}
              className="mb-4"
            />
            <h3 className="text-2xl font-semibold text-[var(--color-primary-dark)] dark:text-[var(--color-surface)] mb-2">
              {cert.title}
            </h3>
            <p className="text-[var(--color-text)] dark:text-[var(--color-surface)]/90 mb-6 text-sm">
              {cert.description}
            </p>
            <a
              href={cert.file}
              download
              className="bg-[var(--color-primary)] text-[var(--color-surface)] font-semibold px-5 py-2 rounded-full hover:bg-[var(--color-secondary)] transition-colors"
            >
              Descargar PDF
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
