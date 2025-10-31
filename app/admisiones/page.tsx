import { dmSans } from "@/components/fonts";
import AdmisionHero from "@/components/AdmisionHero";

export default function Admision() {
    return(
        <>
            <section className={`${dmSans.className} min-h-screen`}>
                <div className="bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-secondary)] text-[var(--color-text)] py-20 text-center px-6">
                    <AdmisionHero />
                </div>
            </section>
        </>
    );
}