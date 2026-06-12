import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços | DOMUS - Excelência em Construção e Design',
  description: 'Conheça nossos serviços: Vidraçaria, Móveis Planejados, Climatização e Reformas Completas em Recife e região.',
};

export default function ServicosPage() {
  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#0a0a0a', color: '#f3f4f6' }}>
      {/* Hero Section */}
      <section style={{ 
        width: '100%', 
        height: '50vh', 
        minHeight: '400px', 
        position: 'relative', 
        marginTop: '90px',
        background: 'linear-gradient(to bottom, rgba(10,10,10,0.6), rgba(10,10,10,1)), url("https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container" style={{ textAlign: 'center', color: 'white', padding: '0 24px', position: 'relative', zIndex: 2 }}>
            <span style={{ color: 'white', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.9rem', display: 'block', marginBottom: '20px', fontFamily: 'var(--font-montserrat)' }}>
              Nossas Especialidades
            </span>
            <h1 style={{ color: 'white', fontSize: '3.5rem', fontWeight: '800', marginBottom: '20px', textShadow: '0 4px 12px rgba(0,0,0,0.8)', lineHeight: 1.2, fontFamily: 'var(--font-montserrat)' }}>
              Design, Engenharia e <br/>Execução Impecável
            </h1>
            <p style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', color: '#a1a1aa', fontWeight: 300 }}>
              A excelência que sua obra merece. Da concepção do projeto arquitetônico à entrega das chaves.
            </p>
        </div>
      </section>

      {/* Services Content Section */}
      <section id="servicos" style={{ paddingTop: '80px', paddingBottom: '100px' }}>
          <div className="container" style={{ maxWidth: '1400px', padding: '0 24px' }}>
              
              <div className="services-grid">
                  
                  {/* Service Card 1: Vidraçaria */}
                  <Link href="/contato?servico=Vidraçaria" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                      <div className="card-image-wrapper">
                          <img src="https://i.imgur.com/ZoRzhHx.jpeg" alt="Vidraçaria" className="card-img" />
                          <div className="icon-badge">
                              <i className="fas fa-layer-group"></i>
                          </div>
                      </div>
                      <div className="card-content">
                          <h3>Vidraçaria</h3>
                          <ul className="service-list">
                              <li><i className="fas fa-check"></i> Escritórios em vidro</li>
                              <li><i className="fas fa-check"></i> Portas e janelas</li>
                              <li><i className="fas fa-check"></i> Sacadas e fachadas</li>
                              <li><i className="fas fa-check"></i> Espelhos decorativos</li>
                          </ul>
                      </div>
                  </Link>

                  {/* Service Card 2: Móveis Planejados */}
                  <Link href="/contato?servico=Móveis%20Planejados" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                      <div className="card-image-wrapper">
                          <img src="https://i.imgur.com/erSDNc2.jpeg" alt="Móveis Planejados" className="card-img" />
                          <div className="icon-badge">
                              <i className="fas fa-couch"></i>
                          </div>
                      </div>
                      <div className="card-content">
                          <h3>Móveis Planejados</h3>
                          <ul className="service-list">
                              <li><i className="fas fa-check"></i> Marcenaria Sob Medida</li>
                              <li><i className="fas fa-check"></i> Acabamentos Premium</li>
                              <li><i className="fas fa-check"></i> Design Exclusivo</li>
                              <li><i className="fas fa-check"></i> Visualização 3D do projeto</li>
                          </ul>
                      </div>
                  </Link>

                  {/* Service Card 3: Climatização */}
                  <Link href="/contato?servico=Climatização" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                      <div className="card-image-wrapper">
                          <img src="https://i.imgur.com/uvFyH6B.jpeg" alt="Climatização" className="card-img" />
                          <div className="icon-badge">
                              <i className="fas fa-snowflake"></i>
                          </div>
                      </div>
                      <div className="card-content">
                          <h3>Climatização</h3>
                          <ul className="service-list">
                              <li><i className="fas fa-check"></i> Instalação de ar-condicionado</li>
                              <li><i className="fas fa-check"></i> Manutenção de ar-condicionado</li>
                              <li><i className="fas fa-check"></i> Instalação de infraestrutura</li>
                              <li><i className="fas fa-check"></i> PMOC</li>
                          </ul>
                      </div>
                  </Link>

                  {/* Service Card 4: Projetos e Reformas */}
                  <Link href="/contato?servico=Reforma" className="service-card" style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                      <div className="card-image-wrapper">
                          <img src="https://i.imgur.com/T1TpkUC.jpeg" alt="Projetos e Reformas" className="card-img" />
                          <div className="icon-badge">
                              <i className="fas fa-hard-hat"></i>
                          </div>
                      </div>
                      <div className="card-content">
                          <h3>Projetos e Reformas</h3>
                          <ul className="service-list">
                              <li><i className="fas fa-check"></i> Pinturas e efeitos</li>
                              <li><i className="fas fa-check"></i> Gesso e drywall</li>
                              <li><i className="fas fa-check"></i> Projetos de iluminação</li>
                              <li><i className="fas fa-check"></i> Projeto de ambiente completo</li>
                          </ul>
                      </div>
                  </Link>

              </div>

              {/* Call to action */}
              <div className="cta-banner">
                <div className="cta-content">
                    <h3>Pronto para iniciar sua obra?</h3>
                    <p>
                      Entre em contato conosco hoje mesmo e agende uma consultoria grátis para o seu projeto. Trabalhamos para tornar as ideias em realidade.
                    </p>
                    <Link href="/contato" className="btn btn-primary" style={{ padding: '16px 40px', fontSize: '1.2rem', fontWeight: 'bold' }}>
                      Solicitar Orçamento <i className="fas fa-arrow-right" style={{ marginLeft: '12px' }}></i>
                    </Link>
                </div>
              </div>

          </div>
      </section>

      <style dangerouslySetInnerHTML={{__html: `
        .cta-banner {
           margin-top: 100px;
           border-radius: 20px;
           padding: 80px 40px;
           text-align: center;
           background: linear-gradient(135deg, rgba(16,16,16,0.95), rgba(10,10,10,0.98)), url("https://images.unsplash.com/photo-1541888081688-6625807afb24?q=80&w=2000&auto=format&fit=crop");
           background-size: cover;
           background-position: center;
           border: 1px solid #222;
           position: relative;
           overflow: hidden;
        }
        .cta-banner::before {
           content: "";
           position: absolute;
           top: 0; left: 0; right: 0; bottom: 0;
           background: radial-gradient(circle at center, rgba(200, 100, 0, 0.05) 0%, transparent 100%);
           pointer-events: none;
        }
        .cta-content {
           position: relative;
           z-index: 2;
        }
        .cta-content h3 {
           font-family: var(--font-montserrat);
           font-size: 2.5rem;
           margin-bottom: 20px;
           color: #fff;
           font-weight: 800;
        }
        .cta-content p {
           color: #a1a1aa;
           margin-bottom: 40px;
           font-size: 1.2rem;
           max-width: 700px;
           margin-left: auto;
           margin-right: auto;
        }
      `}} />
    </main>
  );
}
