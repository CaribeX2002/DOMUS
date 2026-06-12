import { blogPosts } from '../../data/blog-posts';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <main style={{ paddingTop: '120px', paddingBottom: '80px', minHeight: '80vh', backgroundColor: '#f9fafb' }}>
      <div className="container" style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
           <span style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>Nosso Blog</span>
           <h2 style={{ fontSize: '2.5rem', color: '#111827', marginTop: '10px', marginBottom: '15px' }}>Conteúdos sobre Obras, Vidros e Móveis</h2>
           <p style={{ color: '#6b7280', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Acompanhe novidades, tendências e informações úteis para quem vai construir ou reformar em Recife e Região.
           </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px' }}>
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none' }} className="blog-card-link">
              <article className="blog-card">
                <div style={{ position: 'relative', width: '100%', height: '240px' }}>
                  <img 
                    src={post.imageUrl || "https://images.unsplash.com/photo-1541888081688-6625807afb24?q=80&w=1470&auto=format&fit=crop"} 
                    alt={post.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: 'var(--primary)', color: 'white', padding: '6px 14px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold', letterSpacing: '0.5px' }}>
                    {post.keywords[0] || 'Artigo'}
                  </div>
                </div>
                
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <span style={{ fontSize: '0.85rem', color: '#6b7280', display: 'block', marginBottom: '10px' }}>
                    {post.date}
                  </span>
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: '#111827', lineHeight: '1.4' }}>
                    {post.title}
                  </h3>
                  <p style={{ color: '#4b5563', marginBottom: '25px', fontSize: '1rem', lineHeight: '1.6', flexGrow: 1 }}>
                    {post.excerpt}
                  </p>
                  <div className="read-more" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', fontSize: '0.9rem', transition: 'gap 0.3s ease' }}>
                    <span>Ler artigo completo</span> <i className="fas fa-arrow-right icon-arrow" style={{ marginLeft: '8px', transition: 'transform 0.3s ease' }}></i>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .blog-card {
           background-color: white;
           border-radius: 16px;
           overflow: hidden;
           box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
           transition: transform 0.3s ease, box-shadow 0.3s ease;
           display: flex;
           flex-direction: column;
           height: 100%;
        }
        .blog-card-link:hover .blog-card {
           transform: translateY(-10px);
           box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .blog-card-link:hover .icon-arrow {
           transform: translateX(5px);
        }
      `}} />
    </main>
  );
}
