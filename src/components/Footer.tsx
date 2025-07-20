import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground border-t border-border py-8 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
        <div className="flex flex-col gap-2 text-sm">
          <span>© {new Date().getFullYear()} Escuela de Snowboard Sierra Nevada</span>
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/aviso-legal" className="hover:underline">Aviso legal</Link>
          <Link href="/privacidad" className="hover:underline">Privacidad</Link>
          <Link href="/contacto" className="hover:underline">Contacto</Link>
        </div>
        <div className="flex gap-4">
          <a href="mailto:snowboardsierranevada.info@gmail.com" aria-label="Email" className="hover:text-primary transition-colors">📧</a>
          <a href="https://wa.me/34617354031" target="_blank" rel="noopener" aria-label="WhatsApp" className="hover:text-primary transition-colors">🟢</a>
          <a href="https://instagram.com/escuelasnowboard" target="_blank" rel="noopener" aria-label="Instagram" className="hover:text-primary transition-colors">📸</a>
        </div>
      </div>
    </footer>
  );
} 