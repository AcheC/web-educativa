'use client';

import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <div className="text-[var(--color-surface)] py-20 text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-4"
      >
        Contáctanos
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg max-w-2xl mx-auto"
      >
        ¡Estamos aquí para ayudarte! Conoce nuestras redes, visítanos en nuestras
        instalaciones o escríbenos a nuestro correo institucional.
      </motion.p>
    </div>
  );
}