export default function AvisoLegalPage() {
  return (
    <section className="container mx-auto py-12 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Aviso Legal</h1>
      <div className="space-y-4 text-sm">
        <p>Este sitio web es propiedad de Escuela de Snowboard Sierra Nevada. El acceso y uso de este sitio implica la aceptación de las siguientes condiciones:</p>
        <ul className="list-disc ml-6">
          <li>La información contenida en esta web es meramente informativa y puede estar sujeta a cambios sin previo aviso.</li>
          <li>Queda prohibida la reproducción total o parcial de los contenidos sin autorización expresa.</li>
          <li>Para cualquier consulta, puede contactar en <a href="mailto:snowboardsierranevada.info@gmail.com" className="text-primary underline">snowboardsierranevada.info@gmail.com</a>.</li>
        </ul>
        <p>© {new Date().getFullYear()} Escuela de Snowboard Sierra Nevada. Todos los derechos reservados.</p>
      </div>
    </section>
  );
} 