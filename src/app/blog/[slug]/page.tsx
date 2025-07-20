import { notFound } from "next/navigation";

const posts = {
  "primer-dia-en-sierra-nevada": {
    title: "Primer día en Sierra Nevada: Consejos para principiantes",
    date: "2024-07-20",
    content: `
      <p>¿Es tu primera vez en la nieve? Aquí tienes algunos consejos para que tu experiencia sea inolvidable:</p>
      <ul>
        <li>Vístete por capas y usa ropa impermeable.</li>
        <li>Llega con tiempo para conocer a tu instructor.</li>
        <li>No tengas miedo de preguntar y disfrutar.</li>
      </ul>
    `,
  },
  "material-imprescindible-snowboard": {
    title: "Material imprescindible para tu clase de snowboard",
    date: "2024-07-15",
    content: `
      <p>Para disfrutar al máximo, no olvides traer:</p>
      <ul>
        <li>Tabla y botas (puedes alquilar en la estación).</li>
        <li>Guantes, gafas de sol y protector solar.</li>
        <li>Muchas ganas de pasarlo bien.</li>
      </ul>
    `,
  },
};

type Props = { params: { slug: string } };

export default function BlogPostPage({ params }: Props) {
  const { slug } = params;
  const post = posts[slug as keyof typeof posts];
  if (!post) return notFound();
  return (
    <section className="container mx-auto py-12 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-muted-foreground mb-6">{post.date}</div>
      <article className="prose prose-neutral max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </section>
  );
} 