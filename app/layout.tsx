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
    <html lang="es">
      <body>
        <Navbar />
        <main className="pt-30">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
