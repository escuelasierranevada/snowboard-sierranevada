import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section className="relative min-h-[60vh] flex items-center justify-center bg-cover bg-center" style={{backgroundImage: 'url(/hero-snow.jpg)'}}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white flex flex-col items-center gap-6 py-24 px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold drop-shadow-lg">Escuela de Snowboard Sierra Nevada</h1>
          <p className="text-lg sm:text-2xl max-w-xl mx-auto drop-shadow">Aprende, mejora y disfruta en la mejor nieve del sur. Clases para todos los niveles, instructores expertos y ambiente único.</p>
          <Button asChild size="lg" className="text-lg font-bold px-8 py-4 mt-2 shadow-lg">
            <Link href="/reservas">Reserva tu clase</Link>
          </Button>
        </div>
      </section>
      <section className="container mx-auto py-10 px-4 max-w-2xl">
        <div className="bg-primary/10 border-l-4 border-primary p-4 rounded mb-4 text-lg font-semibold text-primary">
          ¡15% de descuento en tu primera clase reservando online!
        </div>
        {/* Aquí irán más secciones: info, testimonios, logos, etc. */}
      </section>
    </>
  );
}
