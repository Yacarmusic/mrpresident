import { Cinzel, Inter } from "next/font/google";
import "./globals.css";
import FixedBackground from "@/components/FixedBackground";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Mr. President | El conocimiento sin contactos se queda en el aula",
  description: "Curso exclusivo de networking y contactos por Francisco Nicolás.",
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: "Mr. President | El conocimiento sin contactos se queda en el aula",
    description: "Curso exclusivo de networking y contactos por Francisco Nicolás.",
    images: [
      {
        url: '/opengraph-image.png',
        width: 800,
        height: 600,
        alt: 'Mr. President Logo',
      },
    ],
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <FixedBackground />
        <main className={`${cinzel.variable} ${inter.variable} text-white antialiased`}>{children}</main>
      </body>
    </html>
  );
}
