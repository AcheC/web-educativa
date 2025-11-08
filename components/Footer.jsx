"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setEmail('');
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <footer className="mt-16 w-full overflow-hidden bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl sm:py-4 lg:py-12 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-full bg-white/70 flex items-center justify-center">
              <Image src="/logo-itsi.png" alt="ITSI" width={45} height={45} />
            </div>
            <span className="font-bold text-lg">Unidad Educativa Particular ITSI Chone</span>
          </div>
          <p className="text-sm text-white/90">Formando líderes con valores y talento tecnológico. Educación desde inicial hasta bachillerato.</p>
          <div className="flex gap-3 mt-2">
            <a href="https://www.facebook.com/people/Unidad-Educativa-ITSI-CHONE/100039950594756/" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20">
              <Image src="/icons/facebook.svg" alt='Facebook' width={30} height={30} />
            </a>
            <a href="https://www.instagram.com/ue_itsichone/" className="inline-flex items-center justify-center h-9 w-9 rounded-full bg-white/10 hover:bg-white/20">
              <Image src="/icons/instagram.svg" alt='Instagram' width={25} height={25} />
            </a>
          </div>
        </div>

        <div className="md:col-span-2 grid grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold">Enlaces rápidos</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Inicio</a></li>
              <li><a href="#academic-offers" className="hover:underline">Oferta educativa</a></li>
              <li><a href="#" className="hover:underline">Admisiones</a></li>
              <li><a href="/contactos" className="hover:underline">Contacto</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Suscríbete</h4>
            <p className="mt-3 text-sm">Recibe novedades y eventos directos al correo.</p>
            <form className="mt-4 flex gap-2" onSubmit={handleSubmit}>
              <input aria-label="Correo" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="tu@correo.com" className="rounded-l-md px-3 py-2 text-[var(--color-surface)]" />
              <button className="rounded-r-md bg-[var(--color-accent)] px-4 py-2 font-semibold" type="submit">Enviar</button>
            </form>
            {sent && <p className="mt-2 text-sm text-white/90">Gracias — tu correo se ha registrado (demo).</p>}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-white/80">
          <span>© {new Date().getFullYear()} Unidad Educativa ITSI Chone — Todos los derechos reservados</span>
          <div className="mt-2 md:mt-0">Desarrollado con ❤️ por el equipo ITSI</div>
        </div>
      </div>
    </footer>
  );
}
