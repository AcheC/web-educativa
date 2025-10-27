"use client";

import { useEffect, useRef, useState } from 'react';
import { dmSans } from './fonts';
import Image from 'next/image';

export default function AcademicSection() {
    const offersAcademic = [
        {
            title: 'EDUCACIÓN INICIAL',
            list: [
                'Juegos recreativos',
                'Zonas preparadas para el aprendizaje',
                'Actividades lúdicas y pedagógicas',
                'Expresión artística y motricidad',
            ], 
            img: 'educacion-inicial.jpg',
        },
        {
            title: 'EDUCACIÓN GENERAL BÁSICA',
            list: [
                'Currículo actualizado y adaptado',
                'Desarrollo de habilidades cognitivas y sociales',
                'Actividades extracurriculares',
                'Laboratorios y recursos tecnológicos',
            ],
            img: 'educacion-primaria.jpg',
        },
        {
            title: 'BACHILLERATO',
            list: [
                'Programas académicos especializados',
                'Preparación para la educación superior',
                'Orientación vocacional y profesional',
                'Proyectos de investigación y emprendimiento',
                'Laboratorios especializados',
            ],
            img: 'bachillerato.jpg',
        },
    ];

    return (
        <section id="academic-offers" className={`light-section ${dmSans.className} relative w-full overflow-hidden min-h-[580px] inset-x-0 py-16 bg-white/75`}> 
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-11 gap-8 place-items-stretch">
                    {/* Left column: heading + description */}
                    <div className="lg:col-span-12">
                        {/* Bloque decorativo: marco con 4 badges SVG "ITSI" y animación on-scroll */}
                        <DecorativeFrame />

                        <h2 className="text-6xl md:text-4xl font-bold text-[var(--color-primary)] text-center">Oferta Educativa</h2>
                        <p className="mt-8 text-[var(--color-text-card)] text-center text-lg">Conoce nuestras modalidades y programas diseñados para el desarrollo integral de los estudiantes. Ofrecemos formación desde inicial hasta bachillerato con énfasis en prácticas y tecnología.</p>
                    </div>

                    {/* Right column: cards */}
                    <div className="mt-8 lg:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {offersAcademic.map((item, index) => (
                            <article
                                key={item.title}
                                className={`bg-[var(--color-muted)]/0 backdrop-blur-sm border border-white/8 rounded-2xl p-6 ${index === 2 ? 'mx-auto md:col-span-2 md:max-w-lg' : ''}`}
                            >
                                <div className="grid place-items-center gap-4">
                                    <div className="flex-shrink-0">
                                        {item.img ? (
                                            <div className="relative h-60 w-60 rounded-full overflow-hidden bg-white/5">
                                                <Image src={`/${item.img}`} alt={item.title} fill className="object-cover" />
                                            </div>
                                        ) : (
                                            <div className="h-12 w-12 rounded-full bg-[var(--color-primary-dark)]/10 flex items-center justify-center text-[var(--color-primary)]">
                                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                                                    <path d="M3 5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v13a1 1 0 0 1-1.447.894L13 17l-3.553 1.894A1 1 0 0 1 8 18V5H5a2 2 0 0 0-2 2z" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>

                                    <div>
                                        <h3 className="text-center text-lg font-semibold text-[var(--color-primary-dark)]">{item.title}</h3>
                                        <ul className="mt-4 space-y-3 text-[var(--color-text-card)] text-md">
                                            {item.list.map((li) => (
                                                <li key={li} className="flex items-center gap-2">
                                                    <img src="/check.svg" alt="check" className="h-8 w-8 mt-1" />
                                                    <span>{li}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* Section CTA */}
            <div className="mt-8 flex justify-center">
                <a href="/oferta-academica" className="inline-flex items-center gap-2 rounded-md bg-[var(--color-primary)] px-4 py-2 text-white hover:bg-[var(--color-primary-light)]">
                    → Más información
                </a>
            </div>
        </section>
    );
}

function DecorativeFrame() {
    const ref = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                });
            },
            { threshold: 0.25 }
        );
        obs.observe(ref.current);
        return () => obs.disconnect();
    }, []);

    const files = ['I.svg', 'T.svg', 'S.svg', 'I.svg'];

    return (
        <div ref={ref} className="mx-auto max-w-4xl mb-6">
            <div className="relative border-2 border-[var(--color-primary)]/30 rounded-3xl p-6 bg-[linear-gradient(90deg,var(--color-bg-card),transparent)]">
                <div className="flex items-center justify-between gap-4">
                    {files.map((file, i) => (
                        <div
                            key={i}
                            className={`flex items-center justify-center h-14 w-14 rounded-full bg-white/6 backdrop-blur-md shadow-md transform transition-all duration-700 ${
                                visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                            }`}
                            style={{
                                background: `linear-gradient(135deg, var(--color-primary) 0%, rgba(255,255,255,0.03) 100%)`,
                                transitionDelay: `${i * 120}ms`,
                            }}
                        >
                            <img src={`/${file}`} alt={file.replace('.svg', '')} className="h-8 w-8" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}