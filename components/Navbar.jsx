'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { dmSans } from './fonts';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { href: '/', label: 'Inicio' },
  { href: '/nosotros', label: 'Nosotros' },
  { href: '/admisiones', label: 'Admisiones' },
  { href: '/contactos', label: 'Contactos' },
  { href: '/club-deportivo', label: 'Club Deportivo' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onLightSection, setOnLightMode] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
    }
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Detectar si el navbar está sobre una sección clara u oscura
  useEffect(() => {
    const sections = document.querySelectorAll('.light-section');
    if(sections.length == 0){
      // Si no hay secciones claras en la nueva ruta
      setOnLightSection(false);
    return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // si el navbar toca una sección clara, cambia el color del texto
          if (entry.isIntersecting) {
            setOnLightMode(true);
          }
          else {
            setOnLightMode(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((sec) => observer.observe(sec));

    return () => observer.disconnect();
  }, [pathname]);

  return (
  <header className={`fixed inset-x-0 top-0 z-50 backdrop-blur-sm transition-colors duration-300 ${scrolled ? 'bg-[rgba(255,255,255,0.06)] border-b border-white/10' : 'bg-transparent border-b-0'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between py-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12 md:h-24 md:w-24 mr-3 rounded-full bg-[var(--color-surface)] p-1 shadow-sm flex items-center justify-center">
              <Image 
                src="/logo-itsi.png" 
                alt="Logo ITSI" 
                width={100} 
                height={100} 
                className="object-contain rounded-full" 
              />
            </div>
            <span
              className={`${dmSans.className} font-bold text-base md:text-xl transition-colors duration-300 ${
                onLightSection
                  ? 'text-[var(--color-primary)]'
                  : 'text-[var(--color-surface)]'
              }`}
            >
              Unidad Educativa ITSI Chone
            </span>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group font-medium focus:outline-none focus:ring-2 focus:ring-brand-300 rounded transition-colors duration-300 ${
                    onLightSection
                      ? 'text-[var(--color-primary-dark)] hover:text-[var(--color-primary-light)]'
                      : 'text-[var(--color-surface)]'
                  }`}
                >
                  <span className={`${dmSans.className} relative inline-block pb-1`}>
                    {item.label}
                    <span className="absolute left-0 bottom-0 h-[2px] bg-[var(--color-primary)] w-full transform scale-x-0 group-hover:scale-x-100 origin-left md:origin-center transition-transform duration-200"></span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              {isOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transform transition-all origin-top ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}
        aria-hidden={!isOpen}
      >
        <div className="px-4 pb-6 pt-2 space-y-2 bg-white/95 border-t border-gray-100">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="block text-gray-700 hover:text-brand-600 font-medium py-2 transition-colors duration-150 group"
            >
              <span className={`${dmSans.className} relative inline-block pb-1`}>
                {item.label}
                <span className="absolute left-0 bottom-0 h-[2px] bg-[var(--color-primary)] w-full transform scale-x-0 group-hover:scale-x-100 origin-left md:origin-center transition-transform duration-200"></span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}