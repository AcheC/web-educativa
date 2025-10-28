import { dmSans } from "@/components/fonts";
import AnimatedReveal from "@/components/AnimatedReveal";
import ContactHero from "@/components/ContactHero";
import MapContact from "@/components/MapContact";
import Image from "next/image";

export default function Contact(){
    return(
        <>
            <section className={`${dmSans.className} min-h-screen`}>
                {/* Hero con fondo degradado */}
                <div className="bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-secondary)] text-[var(--color-surface)] py-20 text-center px-6">
                    <ContactHero />
                </div>

                {/* Sección de información */}
                <div className="light-section max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <AnimatedReveal>
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold text-[var(--color-primary-dark)]">
                        Información de Contacto
                        </h2>

                        <div className="space-y-4 text-[var(--color-text)]">
                        <p>
                            <strong>📍 Dirección:</strong> Avenida Carlos Alberto Aray, Chone – Ecuador
                        </p>
                        <p>
                            <strong>📧 Correo:</strong>{" "}
                            <a
                            href="mailto:info@itsichone.edu.ec"
                            className="text-[var(--color-surface)] hover:underline"
                            >
                            info@itsichone.edu.ec
                            </a>
                        </p>
                        <p>
                            <strong>📞 Teléfono:</strong> +593 5 268 0000
                        </p>
                        </div>

                        {/* Redes sociales */}
                        <div>
                        <h3 className="text-2xl font-semibold text-[var(--color-primary)] mb-4">
                            Síguenos en redes sociales
                        </h3>
                        <div className="flex gap-5">
                            <a
                            href="https://www.facebook.com/people/Unidad-Educativa-ITSI-CHONE/100039950594756/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                            >
                            <Image
                                src="/icons/facebook.svg"
                                alt="Facebook"
                                width={40}
                                height={40}
                                className="group-hover:scale-110 transition-transform"
                            />
                            </a>
                            <a
                            href="https://www.instagram.com/ue_itsichone/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                            >
                            <Image
                                src="/icons/instagram.svg"
                                alt="Instagram"
                                width={40}
                                height={40}
                                className="group-hover:scale-110 transition-transform"
                            />
                            </a>
                        </div>
                        </div>
                    </div>
                    </AnimatedReveal>

                    {/* Mapa de Google */}
                    <MapContact />
                </div>
            </section>
        </>
    );
    
}