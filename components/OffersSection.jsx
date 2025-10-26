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
            src="/offers-bg.jpg"
            alt="Imagen Ofertas"
            fill
            className="object-cover"
            priority
        />
        <div className="absolute inset-0 bg-black/20" />
    </div>

  {/* Contenido de la sección */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <h2
      id="offers-heading"
      className="text-center md:text-4xl font-bold text-white"
    >
      Ofertas Académicas
    </h2>

    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-20">
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
    </div>
  </div>
</section>

    );
}