'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function AdmisionHero(){
    const CARDS_Especialidades = [
        {
            title: "Informática",
            desc: "Aprende programación, redes y soporte técnico con prácticas reales en laboratorios modernos.",
            icon: "/icons/pc.svg",
        },
        {
            title: "Ciencias",
            desc: "Descubre, experimenta y comprende la naturaleza. La ciencia es la clave para innovar y construir un mejor mañana.",
            icon: "/icons/science.svg",
        },
        {
            title: "Contabilidad y Administración",
            desc: "Forma tu futuro profesional con conocimientos contables, financieros y empresariales.",
            icon: "/icons/accounting.svg",
        },
        {
            title: "Deportes",
            desc: "Fomenta la disciplina, el trabajo en equipo y la salud física a través del deporte.",
            icon: "/icons/sports.svg",
        },
    ]
    return(
        <>
            {/* Sección principal */}
            <div className="text-[var(--color-surface)] py-16 text-center px-6">
                <motion.h1
                    initial={{ opacity:0, y:40 }}
                    animate={{ opacity:1, y:0 }}
                    transition={{ duration:0.9 }}
                    className="text-4xl md:text-5xl font-extrabold mb-4"
                >
                    Registro de Inscripción
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    className="text-lg text-justify max-w-2xl mx-auto py-10"
                >
                    Formamos el futuro con excelencia y tecnología.
                    Ofrecemos Educación Inicial, Básica, Bachillerato en Ciencias y Técnico en diversas especialidades como Informática, Electromecánica Automotriz, Contabilidad, Turismo, Ventas y Deportes.
                    Contamos con laboratorios equipados, biblioteca, sala de inglés y granja educativa.
                </motion.p>
                <motion.p
                    initial={{ opacity:0, y:0 }}
                    animate={{ 
                        opacity:1,
                        y: [0, -10, 0] //sube y baja
                    }}
                    transition={{ 
                        delay: 1,
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "easeInOut"
                    }}
                    className="text-cente"
                >
                    <Image
                        src="/arrow-double-end.svg"
                        alt="Imagen flecha Hero Admisiones"
                        width={60}
                        height={60}
                        className="inline-block"
                        priority
                    />
                </motion.p>
            </div>
            {/* Sección de especialidades */}
            <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-6xl mx-auto">
                {CARDS_Especialidades.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[var(--color-surface)]/10 rounded-2xl p-8 shadow-lg hover:shadow-xl hover:bg-[var(--color-surface)]/20 transition-all"
                >
                    <Image
                    src={item.icon}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="mx-auto mb-4"
                    />
                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-sm text-[var(--color-surface)]/90">{item.desc}</p>
                </motion.div>
                ))}
            </div>
            {/* Sección final */}
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            viewport={{ once: true }}
            className="text-center mt-24 max-w-3xl mx-auto"
            >
            <h2 className="text-3xl font-bold mb-4">
                ¡Forma parte de una institución con visión tecnológica y humana!
            </h2>
            <p className="text-lg opacity-90">
                En ITSI Chone brindamos educación con valores, innovación y compromiso.  
                Te invitamos a conocer nuestras instalaciones y a ser parte de nuestra familia educativa.
            </p>
            </motion.div>
        </>
    );
}