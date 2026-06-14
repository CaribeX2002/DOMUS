import { blogPosts } from '../../../data/blog-posts';
import Link from 'next/link';
import Image from 'next/image';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: 'Artigo não encontrado | DOMUS' };
  
  return {
    title: `${post.title} | Blog da DOMUS`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div style={{ paddingTop: '150px', textAlign: 'center', minHeight: '60vh' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '20px' }}>Artigo não encontrado</h1>
        <Link href="/blog" className="btn btn-primary" style={{ display: 'inline-block' }}>
          Voltar para o blog
        </Link>
      </div>
    );
  }

  return (
    <main style={{ paddingBottom: '80px', backgroundColor: '#f9fafb', minHeight: '100vh' }}>
      {/* Hero Image Section */}
      <section style={{ width: '100%', height: '50vh', minHeight: '400px', position: 'relative', marginTop: '90px' }}>
        <img 
          src={post.imageUrl || "https://images.unsplash.com/photo-1541888081688-6625807afb24?q=80&w=1470&auto=format&fit=crop"} 
          alt={post.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)' }} />
        <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', padding: '0 24px' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', color: 'white', marginTop: '40px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '20px' }}>
              {post.keywords.slice(0, 3).map(kw => (
                 <span key={kw} style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '4px 12px', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                   {kw}
                 </span>
              ))}
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold', lineHeight: '1.2', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
              {post.title}
            </h1>
            <div style={{ marginTop: '20px', fontSize: '1rem', opacity: 0.9, fontWeight: '500' }}>
              Publicado em: {post.date}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <article className="container" style={{ maxWidth: '800px', margin: '-50px auto 0', position: 'relative', padding: '0 24px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '50px', boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}>
          <div 
            className="blog-content"
            style={{ 
              lineHeight: '1.8', 
              color: '#374151', 
              fontSize: '1.1rem' 
            }}
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #e5e7eb', display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/contato" className="btn btn-primary" style={{ padding: '12px 24px', display: 'inline-block', borderRadius: '8px', fontWeight: 'bold', transition: 'all 0.3s ease' }}>
               <i className="fas fa-file-invoice-dollar" style={{ marginRight: '8px' }}></i> Solicitar Orçamento
            </Link>
            <Link href="/blog" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)', padding: '12px 24px', display: 'inline-block', borderRadius: '8px', fontWeight: 'bold', transition: 'all 0.3s ease' }}>
               <i className="fas fa-arrow-left" style={{ marginRight: '8px' }}></i> Voltar para os Artigos
            </Link>
          </div>
        </div>
      </article>
      
      <style dangerouslySetInnerHTML={{__html: `
        .blog-content h2 { font-size: 1.8rem; color: #111827; margin-top: 2rem; margin-bottom: 1rem; border-bottom: 2px solid var(--primary); padding-bottom: 0.5rem; display: inline-block; }
        .blog-content h3 { font-size: 1.4rem; color: #111827; margin-top: 1.5rem; margin-bottom: 0.8rem; }
        .blog-content p { margin-bottom: 1.5rem; font-size: 1.1rem; line-height: 1.8; color: #4b5563; }
        .blog-content ul { margin-bottom: 1.5rem; padding-left: 1.5rem; list-style-type: none; }
        .blog-content ul li { position: relative; margin-bottom: 0.8rem; padding-left: 1.5rem; }
        .blog-content ul li::before { content: "•"; color: var(--primary); font-weight: bold; font-size: 1.5em; position: absolute; left: 0; top: -5px; }
        .blog-content strong { color: #111827; font-weight: 600; }
      `}} />
    </main>
  );
}
