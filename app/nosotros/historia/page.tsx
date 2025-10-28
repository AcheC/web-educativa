'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { dmSans } from '@/components/fonts';
import Link from 'next/link';

export default function HistoriaITSI() {
  return (
    <>
        <div className={`${dmSans.className} bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-secondary)]`}>
            {/* Hero section */}
            <section className={`relative py-20 text-center overflow-hidden`}>
                <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
                className="relative z-10 max-w-4xl mx-auto px-6"
                >
                <h1 className="text-4xl md:text-5xl text-[var(--color-surface)] font-extrabold mb-6">Historia del ITSI Chone</h1>
                <p className="text-lg md:text-xl text-[var(--color-surface)] leading-relaxed">
                    Tres décadas formando generaciones de estudiantes, guiados por la innovación, la tecnología y el compromiso con el desarrollo de nuestra comunidad.
                </p>
                </motion.div>

                {/* Fondo decorativo con gradiente y luz */}
                <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-primary)]/30 to-transparent blur-3xl opacity-70" />
            </section>

            {/* Historia */}
            <section className="relative z-10 max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                <Image 
                    src="/ITSI-History.jpg"
                    alt="Historia ITSI Chone"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-2xl object-cover w-full"
                    priority
                />
                </motion.div>

                <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                >
                <h2 className="text-3xl font-bold mb-4 text-[var(--color-surface)]">Un camino de evolución</h2>
                <p className="text-[var(--color-surface)] leading-relaxed text-justify">
                    La historia del Instituto Técnico y Superior Interdisciplinario (ITSI) Chone se caracteriza por sus <strong>30 años de servicio y evolución</strong>, siempre buscando innovar y mantenerse al día con los avances tecnológicos. 
                </p>
                <p className="mt-4 text-[var(--color-surface)] text-justify">
                    Como centro educativo, ha crecido con el tiempo, adaptándose a los cambios y sirviendo a la comunidad de Chone y sus alrededores. Su trayectoria demuestra una historia de compromiso, <strong>innovación y modernización</strong> en su oferta educativa.
                </p>
                <ul className="mt-6 list-disc list-inside space-y-2 text-[var(--color-surface)]">
                    <li><strong>Larga trayectoria:</strong> 30 años de educación y servicio continuo.</li>
                    <li><strong>Innovación y tecnología:</strong> adaptación constante a los avances modernos.</li>
                    <li><strong>Evolución:</strong> una institución que “ha hecho camino al andar”.</li>
                </ul>
                </motion.div>
            </section>
        </div>
      {/* Himno */}
      <section className="light-section relative bg-white/75 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-[var(--color-primary-dark)] mb-8"
          >
            Himno al ITSI Chone
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-[var(--color-surface)] backdrop-blur-sm rounded-2xl p-8 shadow-lg"
          >
            <p className="font-semibold text-lg mb-4 text-[var(--color-primary)]">Coro</p>
            <p className="italic text-[var(--color-text-card)] mb-6 leading-relaxed">
              Con fervor y civismo sublime <br />
              Evoquemos al ITSI y sus glorias <br />
              Entonando este canto que redime <br />
              Y enaltece con honor sus victorias <br />
              Entonando este canto que redime <br />
              ITSI CHONE cantamos tus victorias.
            </p>

            <p className="font-semibold text-lg mb-4 text-[var(--color-primary)]">I</p>
            <p className="italic text-[var(--color-text-card)] mb-6 leading-relaxed">
              En tus entrañas se forja el deber <br />
              Del que estudia y desea superar <br />
              Oh sagrado templo del saber <br />
              Es tu misión mejor futura forma.
            </p>

            <p className="font-semibold text-lg mb-4 text-[var(--color-primary)]">II</p>
            <p className="italic text-[var(--color-text-card)] leading-relaxed">
              Soberano ITSI CHONE te levantas <br />
              Impartiendo a la niñez y juventud <br />
              Deporte, ciencia, arte y tecnología <br />
              Te debemos por siempre gratitud.
            </p>
            <p className="italic mt-6 text-[var(--color-text-card)]">(Se repite el coro)</p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold mb-4">Orgullo ITSI Chone</h3>
          <p className="text-white/90 max-w-2xl mx-auto">
            Continuamos formando generaciones que dejan huella en la sociedad, inspirados en los valores del conocimiento, la innovación y la solidaridad.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/nosotros" className="bg-white text-[var(--color-primary)] px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition">Volver a Nosotros</Link>
            <Link href="/admisiones" className="border border-white/40 px-6 py-3 rounded-md text-white hover:bg-white/10 transition">Unirme al ITSI</Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}