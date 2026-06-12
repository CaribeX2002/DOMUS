import { blogPosts } from '../../../data/blog-posts';

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) {
    return { title: 'Post não encontrado' };
  }
  return {
    title: `${post.title} | Blog DOMUS`,
    description: post.excerpt,
    keywords: post.keywords.join(', '),
  };
}

export default function BlogSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
