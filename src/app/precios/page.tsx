export default function PreciosPage() {
  return (
    <section className="container mx-auto py-12 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Precios</h1>
      <table className="w-full mb-8 border border-border rounded-lg overflow-hidden">
        <thead className="bg-muted">
          <tr>
            <th className="p-3 text-left">Personas</th>
            <th className="p-3 text-left">Precio/hora</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="p-3">1-2</td>
            <td className="p-3 font-semibold">60 €</td>
          </tr>
          <tr className="border-t">
            <td className="p-3">+1 persona</td>
            <td className="p-3">+10 €/hora/persona</td>
          </tr>
          <tr className="border-t">
            <td className="p-3">Medio día / Día completo</td>
            <td className="p-3">Consultar</td>
          </tr>
        </tbody>
      </table>
      <div className="bg-primary/10 border-l-4 border-primary p-4 rounded mb-4">
        <strong>¡Promoción!</strong> 15% de descuento en tu primera clase reservando online.
      </div>
    </section>
  );
} 