"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  nombre: z.string().min(2, "Introduce tu nombre"),
  email: z.string().email("Email no válido"),
  mensaje: z.string().min(10, "El mensaje es demasiado corto"),
});

type ContactoForm = z.infer<typeof schema>;

export default function ContactoPage() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactoForm>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: ContactoForm) {
    // Simula envío
    await new Promise((res) => setTimeout(res, 800));
    setSuccess(true);
    reset();
  }

  return (
    <section className="container mx-auto py-12 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Contacto</h1>
      <div className="mb-6 space-y-2">
        <div><strong>Email:</strong> snowboardsierranevada.info@gmail.com</div>
        <div><strong>Teléfono:</strong> +34 617354031</div>
        <div><strong>Ubicación:</strong> Sierra Nevada, Granada</div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white/80 p-6 rounded shadow max-w-lg">
        {success && (
          <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 rounded mb-4">
            ¡Mensaje enviado! Te responderemos pronto.
          </div>
        )}
        <div>
          <label className="block mb-1 font-medium">Nombre</label>
          <input type="text" {...register("nombre")}
            className="w-full border rounded px-3 py-2 focus:outline-primary" />
          {errors.nombre && <span className="text-red-600 text-sm">{errors.nombre.message}</span>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input type="email" {...register("email")}
            className="w-full border rounded px-3 py-2 focus:outline-primary" />
          {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Mensaje</label>
          <textarea rows={4} {...register("mensaje")}
            className="w-full border rounded px-3 py-2 focus:outline-primary" />
          {errors.mensaje && <span className="text-red-600 text-sm">{errors.mensaje.message}</span>}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </section>
  );
} 