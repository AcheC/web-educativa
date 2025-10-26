import { dmSans } from "@/components/fonts";
import AnimatedReveal from '@/components/AnimatedReveal';

export default function AboutUS() {
    return (
        <main className="snap-start">
            {/* Hero */}
            <section className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] text-[var(--color-surface)] py-20">
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <AnimatedReveal className={`${dmSans.className} space-y-6`}>
                        <h1 className="text-4xl md:text-5xl font-extrabold">Instituto Superior Tecnológico de Chone</h1>
                        <p className="mt-4 text-lg max-w-xl">Formando profesionales competentes y emprendedores que contribuyen al desarrollo social, cultural y productivo de la región.</p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <a href="#mission" className="inline-block bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md">Nuestra misión</a>
                            <a href="#history" className="inline-block bg-white/10 hover:bg-white/20 px-4 py-2 rounded-md">Leer historia</a>
                        </div>
                    </AnimatedReveal>

                    <div className="flex items-center justify-center">
                        <img src="/itsi.png" alt="Logo ITSI" className="h-48 w-48 rounded-full object-cover shadow-2xl" />
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission" className="py-16 bg-[var(--color-bg-card)]">
                <div className={`${dmSans.className} max-w-6xl mx-auto px-6`}>
                    <h2 className="text-3xl font-bold text-[var(--color-primary)] text-center">Misión, Visión y Valores</h2>

                                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                                    <AnimatedReveal>
                                        <article className="bg-[var(--color-surface)]/60 rounded-2xl p-6 shadow-md">
                                            <div className="flex items-center gap-3">
                                                <span className="p-2 rounded-md bg-[var(--color-primary)]/10">
                                                    <svg className="h-6 w-6 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" aria-hidden>
                                                        <path d="M12 2l3 6 6 .5-4.5 3.5L19 20l-7-4-7 4 1.5-7L2 8.5 8 8 12 2z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <h3 className="font-semibold text-lg text-[var(--color-primary-dark)]">Misión</h3>
                                            </div>
                                            <p className="mt-3 text-sm text-[var(--color-text-card)] leading-relaxed text-justify">
                                                Ser una institución formada por estudiantes íntegros que conjuguen ciencia y tecnología, comprometidos con la comunidad, generadores de expectativas de progreso y deseos de superación.
                                            </p>
                                        </article>
                                    </AnimatedReveal>

                                    <AnimatedReveal>
                                        <article className="bg-[var(--color-surface)]/60 rounded-2xl p-6 shadow-md">
                                            <div className="flex items-center gap-3">
                                                <span className="p-2 rounded-md bg-[var(--color-primary)]/10">
                                                    <svg className="h-6 w-6 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" aria-hidden>
                                                        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 5v6l4 2" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <h3 className="font-semibold text-lg text-[var(--color-primary-dark)]">Visión</h3>
                                            </div>
                                            <p className="mt-3 text-sm text-[var(--color-text-card)] leading-relaxed text-justify">
                                                Es la visión de autoridades, profesores, padres de familia y estudiantes lograr que la institución sea un referente en la formación de bachilleres de prestigio, tanto en el desarrollo de aplicaciones informáticas como en los conocimientos de las ciencias básicas.
                                            </p>
                                        </article>
                                    </AnimatedReveal>

                                    <AnimatedReveal>
                                        <article className="bg-[var(--color-surface)]/60 rounded-2xl p-6 shadow-md">
                                            <div className="flex items-center gap-3">
                                                <span className="p-2 rounded-md bg-[var(--color-primary)]/10">
                                                    <svg className="h-6 w-6 text-[var(--color-primary)]" viewBox="0 0 24 24" fill="none" aria-hidden>
                                                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" fill="currentColor" />
                                                    </svg>
                                                </span>
                                                <h3 className="font-semibold text-lg text-[var(--color-primary-dark)]">Compromisos</h3>
                                            </div>
                                            <ul className="mt-3 space-y-2 text-sm text-[var(--color-text-card)]">
                                                <li className="text-justify">Calidad educativa con pertinencia territorial.</li>
                                                <li className="text-justify">Ética, transparencia y servicio a la comunidad.</li>
                                                <li className="text-justify">Impulsar el emprendimiento y la innovación.</li>
                                            </ul>
                                        </article>
                                    </AnimatedReveal>
                                </div>
                </div>
            </section>

            {/* History teaser */}
            <section id="history" className={`${dmSans.className} py-16`}>
                <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <AnimatedReveal>
                        <div>
                            <h2 className="text-3xl font-bold text-[var(--color-primary)]">Nuestra Historia</h2>
                            <p className="mt-4 text-[var(--color-text-secondary)]">La historia del instituto está estrechamente ligada a Chone, un centro tradicional de conexión entre la Sierra y la Costa. Desde sus raíces precolombinas hasta su crecimiento agrícola y comercial en la era colonial, Chone ha sido motor del desarrollo regional.</p>

                            <ol className="mt-6 space-y-3 text-sm text-[var(--color-text-secondary)]">
                                <li><strong>S. XIX – XX:</strong> Crecimiento como centro agrícola y comercial.</li>
                                <li><strong>Décadas recientes:</strong> Consolidación educativa y expansión de programas técnicos.</li>
                                <li><strong>Hoy:</strong> Formación con enfoque en tecnología, emprendimiento y desarrollo local.</li>
                            </ol>

                            <a href="/nosotros/historia" className="inline-block mt-6 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md">Leer la historia completa</a>
                        </div>
                    </AnimatedReveal>

                    <AnimatedReveal>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src="/images/chone-historic.jpg" alt="Chone histórico" className="w-full h-64 object-cover" />
                        </div>
                    </AnimatedReveal>
                </div>
            </section>

            {/* Quick stats / CTA */}
            <section className="py-12 bg-gradient-to-r from-[var(--color-secondary)] to-[var(--color-primary)] text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h3 className="text-2xl font-semibold">¿Quieres saber más?</h3>
                    <p className="mt-3">Visítanos, conoce nuestros programas y descubre cómo formar parte de la comunidad ITSI.</p>
                    <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="/admisiones" className="bg-white text-[var(--color-primary)] px-5 py-3 rounded-md font-semibold">Admisiones</a>
                        <a href="/contactos" className="border border-white/30 px-5 py-3 rounded-md">Contáctanos</a>
                    </div>
                </div>
            </section>
        </main>
    );
}