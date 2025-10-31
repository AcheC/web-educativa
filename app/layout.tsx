import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Unidad Educativa ITSI Chone",
  description: "Pagina web informativa y educativa de la Unidad Educativa ITSI Chone",
  icons: {
    icon: "/itsi.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body>
        <Navbar />
        <main className="
            min-h-screen snap-y snap-mandatory overflow-y-auto pt-16 md:pt-28
          ">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
