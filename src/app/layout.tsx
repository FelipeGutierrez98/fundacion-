import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Fundación Luz Dorada",
  description: "Apoyamos a los abuelitos con amor, respeto y programas integrales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 flex flex-col min-h-screen`}
      >
        {/* NAVBAR */}
        <header className="bg-amber-600 text-white py-4 shadow-md">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
            <Link href="/" className="text-2xl font-bold">Fundación Luz Dorada</Link>
            <nav className="space-x-6 text-sm sm:text-base">
              <Link href="/" className="hover:underline">Inicio</Link>
              <Link href="/nosotros" className="hover:underline">Nosotros</Link>
              <Link href="/programas" className="hover:underline">Programas</Link>
              <Link href="/donar" className="hover:underline font-semibold">Donar</Link>
              <Link href="/contacto" className="hover:underline">Contacto</Link>
            </nav>
          </div>
        </header>

        {/* CONTENIDO */}
        <main className="flex-1">{children}</main>

        {/* FOOTER */}
        <footer className="bg-amber-700 text-white text-center py-6 mt-16">
          <p>© {new Date().getFullYear()} Fundación Luz Dorada — Todos los derechos reservados</p>
          <div className="mt-2 space-x-4">
            <Link href="https://facebook.com" target="_blank" className="hover:underline">Facebook</Link>
            <Link href="https://instagram.com" target="_blank" className="hover:underline">Instagram</Link>
            <Link href="https://wa.me/573001112233" target="_blank" className="hover:underline">WhatsApp</Link>
          </div>
        </footer>
      </body>
    </html>
  );
}

