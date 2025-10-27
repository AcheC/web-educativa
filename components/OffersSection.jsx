'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import { dmSans } from './fonts';

export default function OffersSection() {
    const CARD_ITEMS = [
        {
            href: '/certificados',
            title: 'Certificados en Línea',
            description: 'Solicita tus certificados sin salir de casa.',
            icon: '/documents.svg',
            btnname: 'Solicitar',
        },
        {
            href: '/admisiones',
            title: 'Admisiones Abiertas',
            description: 'Inscríbete para el próximo año académico.',
            icon: '/admisions.svg',
            btnname: 'Inscribirse',
        },
    ];

    return (
        <section
  id="offers"
  className={`${dmSans.className} relative w-full overflow-hidden min-h-[580px] flex items-center text-[var(--color-surface)]`}
  aria-labelledby="offers-heading"
>
    {/* Fondo de la sección */}
    <div className="absolute inset-0 z-0">
        <Image
            src="/ITSI-Chone.jpg"
            alt="Imagen Ofertas"
            fill
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-black/20" />
    </div>

      {/* Capa de fade con gradiente */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

  {/* Contenido de la sección */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Título animado de bienvenida */}
        <motion.h2
          id="offers-heading"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-bg-card)] to-[var(--color-primary)] text-transparent bg-clip-text"
        >
          ¡Bienvenidos a la Unidad Educativa ITSI Chone!
        </motion.h2>
        {/* Subtítulo opcional */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-4 text-[var(--color-surface)] text-lg md:text-xl font-medium"
        >
          Formación académica con excelencia, innovación y valores.
        </motion.p>

    <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-20"
        >
      {CARD_ITEMS.map((item) => (
        <article
          key={item.href}
          role="article"
          className="group bg-[var(--color-bg-card)]/70 rounded-xl p-6 shadow-lg/20 hover:shadow-2xl transform hover:-translate-y-2 transition duration-200"
        >
          <div className="relative h-28 w-full mb-4">
            <Image
              src={item.icon}
              alt={item.title}
              fill
              className="object-contain"
            />
          </div>

          <h3 className="text-lg font-semibold text-[var(--color-text-card)]">
            {item.title}
          </h3>
          <p className="mt-2 text-[var(--color-text-secondary)] text-sm">
            {item.description}
          </p>

          <Link
            href={item.href}
            className="mt-4 inline-flex items-center rounded-md bg-[var(--color-primary)] px-3 py-1.5 text-white hover:shadow-lg hover:bg-[var(--color-primary-light)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary)]"
          >
            {item.btnname}
          </Link>
        </article>
      ))}
    </motion.div>
  </div>
</section>

    );
}