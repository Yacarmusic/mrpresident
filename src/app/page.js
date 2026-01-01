import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import VSL from "@/components/VSL";
import Modules from "@/components/Modules";
import Pricing from "@/components/Pricing";
import Newsletter from "@/components/Newsletter";
import NewsletterPopup from "@/components/NewsletterPopup";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <VSL />
      <Manifesto />
      <Modules />
      <Pricing />
      <FAQ />
      <Newsletter />
      <NewsletterPopup />

      <footer className="footer" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <Link href="/aviso-legal" style={{ color: '#888', fontSize: '0.85rem', marginRight: '1.5rem' }}>
            Aviso Legal
          </Link>
          <Link href="/politica-privacidad" style={{ color: '#888', fontSize: '0.85rem', marginRight: '1.5rem' }}>
            Política de Privacidad
          </Link>
          <Link href="/politica-cookies" style={{ color: '#888', fontSize: '0.85rem' }}>
            Política de Cookies
          </Link>
        </div>
        <p style={{ color: '#666', fontSize: '0.8rem' }}>
          &copy; {new Date().getFullYear()} Instituto Internacional de Conexiones Estratégicas. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  );
}
