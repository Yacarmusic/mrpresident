import { Cinzel, Inter } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import { esES } from '@clerk/localizations'
import "./globals.css";
import FixedBackground from "@/components/FixedBackground";

const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  metadataBase: new URL('https://mrpresident.es'),
  title: "Mr. President | El conocimiento sin contactos se queda en el aula",
  description: "Curso exclusivo de networking y contactos por Francisco Nicolás.",
  icons: {
    icon: '/icon.png',
  },
  openGraph: {
    title: "Mr. President | El conocimiento sin contactos se queda en el aula",
    description: "Curso exclusivo de networking y contactos por Francisco Nicolás.",
    url: 'https://mrpresident.es',
    siteName: 'Mr. President',
    images: [
      {
        url: '/opengraph-image.png',
        width: 800,
        height: 600,
        alt: 'Mr. President Logo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      localization={{
        ...esES,
        unstable__errors: {
          ...esES.unstable__errors,
          device_verification_required: "Estás iniciando sesión desde un dispositivo nuevo. Estamos pidiendo verificación para mantener tu cuenta segura. SI NO LLEGA EL CÓDIGO, REVISE LA BANDEJA DE SPAM."
        }
      }}
      appearance={{
        variables: {
          colorPrimary: '#c5a059',
          colorBackground: '#1a1a1a',
          colorText: '#ffffff',
          colorInputBackground: '#2d2d2d',
          colorInputText: '#ffffff'
        },
        layout: {
          socialButtonsPlacement: 'bottom',
          privacyPageUrl: 'https://mrpresident.es/politica-privacidad',
          termsPageUrl: 'https://mrpresident.es/aviso-legal'
        }
      }}>
      <html lang="es">
        <body>
          <FixedBackground />
          <main className={`${cinzel.variable} ${inter.variable} text-white antialiased`}>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
