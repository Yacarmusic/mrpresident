import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import VSL from "@/components/VSL";
import Modules from "@/components/Modules";
import Pricing from "@/components/Pricing";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <VSL />
      <Modules />
      <Pricing />
      <FAQ />
      <Newsletter />

      <footer className="footer">
        &copy; {new Date().getFullYear()} Mr. President. Todos los derechos reservados.
      </footer>
    </main>
  );
}
