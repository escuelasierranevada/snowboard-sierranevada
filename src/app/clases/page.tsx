export default function ClasesPage() {
  return (
    <section className="container mx-auto py-12 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Clases de Snowboard</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Tipos de clases</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Individual</li>
          <li>Grupo</li>
        </ul>
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Niveles</h2>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Principiante</li>
          <li>Intermedio</li>
          <li>Avanzado</li>
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Horarios y duración</h2>
        <p>Las clases se adaptan a tu nivel y disponibilidad. Consulta horarios y duración al reservar. ¡Aprende a tu ritmo!</p>
      </div>
    </section>
  );
} 