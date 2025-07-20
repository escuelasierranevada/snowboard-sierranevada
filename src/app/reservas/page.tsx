"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const schema = z.object({
  nombre: z.string().min(2, "Introduce tu nombre"),
  email: z.string().email("Email no válido"),
  fecha: z.string().min(1, "Selecciona una fecha"),
  personas: z.number().min(1, "Al menos 1 persona"),
  tipo: z.enum(["Individual", "Grupo"]),
  nivel: z.enum(["Principiante", "Intermedio", "Avanzado"]),
});

type ReservaForm = z.infer<typeof schema>;

export default function ReservasPage() {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ReservaForm>({
    resolver: zodResolver(schema),
    defaultValues: { personas: 1, tipo: "Individual", nivel: "Principiante" },
  });

  async function onSubmit(data: ReservaForm) {
    await axios.post("/api/reservas", data as ReservaForm);
    setSuccess(true);
    reset();
  }

  return (
    <section className="container mx-auto py-12 px-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-6">Reserva tu clase</h1>
      {success && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 rounded mb-6">
          ¡Reserva enviada con éxito! Te contactaremos pronto.
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 bg-white/80 p-6 rounded shadow">
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
          <label className="block mb-1 font-medium">Fecha</label>
          <input type="date" {...register("fecha")}
            className="w-full border rounded px-3 py-2 focus:outline-primary" />
          {errors.fecha && <span className="text-red-600 text-sm">{errors.fecha.message}</span>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Número de personas</label>
          <input type="number" min={1} {...register("personas", { valueAsNumber: true })}
            className="w-full border rounded px-3 py-2 focus:outline-primary" />
          {errors.personas && <span className="text-red-600 text-sm">{errors.personas.message}</span>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Tipo de clase</label>
          <select {...register("tipo")}
            className="w-full border rounded px-3 py-2 focus:outline-primary">
            <option value="Individual">Individual</option>
            <option value="Grupo">Grupo</option>
          </select>
          {errors.tipo && <span className="text-red-600 text-sm">{errors.tipo.message}</span>}
        </div>
        <div>
          <label className="block mb-1 font-medium">Nivel</label>
          <select {...register("nivel")}
            className="w-full border rounded px-3 py-2 focus:outline-primary">
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
          {errors.nivel && <span className="text-red-600 text-sm">{errors.nivel.message}</span>}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Reservar"}
        </Button>
      </form>
    </section>
  );
} 