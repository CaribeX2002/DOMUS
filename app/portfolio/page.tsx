import Link from 'next/link';
import Script from 'next/script';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfólio | DOMUS - Excelência em Construção e Design',
  description: 'Conheça nosso portfólio de reformas e projetos concluídos em Recife. Acompanhe nossas atualizações de trabalhos na área da construção e vidraçaria.',
};

export default function PortfolioPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f3f4f6' }}>
      
      {/* Hero Section */}
      <section style={{ 
        width: '100%', 
        height: '40vh', 
        minHeight: '350px', 
        position: 'relative', 
        marginTop: '90px',
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.4), rgba(10,10,10,1)), url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container" style={{ textAlign: 'center', color: 'white', padding: '0 24px', position: 'relative', zIndex: 2 }}>
            <span style={{ color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', display: 'block', marginBottom: '15px', fontFamily: 'var(--font-montserrat)' }}>
              Nossos Projetos
            </span>
            <h1 style={{ color: 'white', fontSize: '4rem', fontWeight: '800', marginBottom: '15px', textShadow: '0 4px 12px rgba(0,0,0,0.8)', lineHeight: 1.2, fontFamily: 'var(--font-montserrat)' }}>
              Portfólio
            </h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: '#a1a1aa', fontWeight: 300 }}>
              Aqui você encontra nossas atualizações diretamente do nosso Instagram em tempo real.
            </p>
        </div>
      </section>

      <section style={{ paddingTop: '60px', paddingBottom: '100px' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
            
            {/* Elfsight Instagram Widget */}
            <div style={{ background: '#111', padding: '30px', borderRadius: '16px', border: '1px solid #222', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', marginBottom: '50px', minHeight: '400px' }}>
                <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
                <div className="elfsight-app-174d1916-7c4a-477c-a43a-ed8e31182553" data-elfsight-app-lazy></div>
            </div>

            <div style={{ textAlign: 'center', marginTop: '60px' }}>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ backgroundColor: '#E1306C', borderColor: '#E1306C', padding: '16px 40px', fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '10px', transition: 'all 0.3s ease', borderRadius: '30px' }}>
                    <i className="fab fa-instagram" style={{ fontSize: '1.5rem' }}></i> Acompanhe nosso Instagram
                </a>
            </div>

        </div>
      </section>
    </main>
  );
}
