import Link from "next/link";

const posts = [
  {
    slug: "primer-dia-en-sierra-nevada",
    title: "Primer día en Sierra Nevada: Consejos para principiantes",
    date: "2024-07-20",
    excerpt: "¿Es tu primera vez en la nieve? Descubre cómo prepararte y aprovechar al máximo tu clase de snowboard en Sierra Nevada.",
  },
  {
    slug: "material-imprescindible-snowboard",
    title: "Material imprescindible para tu clase de snowboard",
    date: "2024-07-15",
    excerpt: "Te contamos qué llevar y cómo equiparte para disfrutar con seguridad y comodidad en la montaña.",
  },
];

export default function BlogPage() {
  return (
    <section className="container mx-auto py-12 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="border-b pb-6">
            <h2 className="text-2xl font-semibold mb-1">
              <Link href={`/blog/${post.slug}`} className="hover:underline text-primary">
                {post.title}
              </Link>
            </h2>
            <div className="text-sm text-muted-foreground mb-2">{post.date}</div>
            <p className="mb-2">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="text-primary hover:underline font-medium text-sm">Leer más →</Link>
          </article>
        ))}
      </div>
    </section>
  );
} 