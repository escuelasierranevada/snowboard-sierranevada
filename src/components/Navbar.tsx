"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/clases", label: "Clases" },
  { href: "/precios", label: "Precios" },
  { href: "/reservas", label: "Reservas" },
  { href: "/sobre-nosotros", label: "Sobre nosotros" },
  { href: "/contacto", label: "Contacto" },
  { href: "/blog", label: "Blog" },
  { href: "/video-del-dia", label: "Tu vídeo del día" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-black/80 backdrop-blur border-b border-border shadow-sm">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
          <Image src="/next.svg" alt="Logo Escuela Snowboard" width={32} height={32} priority />
          <span className="hidden sm:inline">Escuela de Snowboard</span>
        </Link>
        <ul className="hidden md:flex gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="hover:text-primary transition-colors">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild className="ml-4 px-5 py-2 text-base font-semibold">
          <Link href="/reservas">Reserva online</Link>
        </Button>
      </nav>
    </header>
  );
} 