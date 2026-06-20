'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Home() {
  useEffect(() => {
    // Scroll Reveal
    function reveal() {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    }
    window.addEventListener('scroll', reveal);
    reveal();

    return () => window.removeEventListener('scroll', reveal);
  }, []);

  useEffect(() => {
    // Contadores
    const statsSection = document.querySelector('#stats');
    let statsAnimated = false;
    
    const animateStats = () => {
      if (!statsSection) return;
      const sectionPos = statsSection.getBoundingClientRect().top;
      const screenPos = window.innerHeight / 1.3;
      if (sectionPos < screenPos && !statsAnimated) {
        const counters = document.querySelectorAll('.stat-item h3');
        const speed = 200;
        counters.forEach(counter => {
          const updateCount = () => {
            const target = +(counter.getAttribute('data-target') || 0);
            const count = +(counter.innerHTML.replace('+', '') || 0);
            const inc = target / speed;
            if (count < target) {
              counter.innerHTML = Math.ceil(count + inc).toString();
              setTimeout(updateCount, 20);
            } else {
              counter.innerHTML = target + "+";
            }
          };
          updateCount();
        });
        statsAnimated = true;
      }
    };
    
    window.addEventListener('scroll', animateStats);
    
    return () => window.removeEventListener('scroll', animateStats);
  }, []);

  const enviarParaWhatsapp = () => {
    // 1. Captura valores
    const nome = (document.getElementById('form-nome') as HTMLInputElement).value;
    const email = (document.getElementById('form-email') as HTMLInputElement).value;
    const tel = (document.getElementById('form-tel') as HTMLInputElement).value;
    const assunto = (document.getElementById('form-assunto') as HTMLSelectElement).value;
    const msg = (document.getElementById('form-msg') as HTMLTextAreaElement).value;

    // 2. Validação
    if (!nome || !email || !tel || !msg) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // 3. DISPARAR CONVERSÃO DO GOOGLE ADS (Snippet de Evento)
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-17942261129/DdoqCLiNg_cbEInbxOtC'
        });
    }

    // 4. Formata mensagem e abre WhatsApp
    const textoFormatado = `*Novo Contato via Site DOMUS*%0A%0A*Nome:* ${nome}%0A*Email:* ${email}%0A*Telefone:* ${tel}%0A*Assunto:* ${assunto}%0A*Mensagem:* ${msg}`;
    const urlWhatsapp = `https://wa.me/5581995194622?text=${textoFormatado}`;
    
    // Abre em nova aba
    window.open(urlWhatsapp, '_blank');
  };

  return (
    <>
      <section id="hero">
          <div className="container">
              <div className="hero-content reveal">
                  <h1>Transformamos Ambientes,<br />Elevamos Padrões.</h1>
                  <p>Especialistas em reformas de alto padrão, vidraçaria, móveis planejados, climatização e projetos 3D. A solidez que sua obra precisa com o design que você sonha.</p>
                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                      <Link href="/contato" className="btn btn-primary">Solicitar Orçamento</Link>
                      <Link href="/portfolio" className="btn btn-outline">Ver Projetos</Link>
                  </div>
              </div>
          </div>
          <a href="#stats" className="scroll-down"><i className="fas fa-chevron-down"></i></a>
      </section>

      <section id="stats">
          <div className="container">
              <div className="stats-grid">
                  <div className="stat-item reveal">
                      <h3 data-target="10">0</h3>
                      <p>Anos de Experiência</p>
                  </div>
                  <div className="stat-item reveal">
                      <h3 data-target="250">0</h3>
                      <p>Projetos Entregues</p>
                  </div>
                  <div className="stat-item reveal">
                      <h3 data-target="98">0</h3>
                      <p>Clientes Satisfeitos</p>
                  </div>
                  <div className="stat-item reveal">
                      <h3 data-target="1000">0</h3>
                      <p>Horas de Suporte</p>
                  </div>
              </div>
          </div>
      </section>

      <section id="servicos-home" className="section-padding">
          <div className="container">
              <div className="section-title reveal">
                  <span>O que fazemos</span>
                  <h2>Soluções 360º para sua Obra</h2>
                  <p>Centralize sua reforma com uma única empresa. Gestão, execução e acabamento.</p>
              </div>
              <div className="services-grid">
                  
                  {/* Service Card 1: Vidraçaria */}
                  <Link href="/contato?servico=Vidraçaria" className="home-service-card reveal" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="icon-box"><i className="fas fa-layer-group"></i></div>
                      <h3>Vidraçaria</h3>
                      <ul className="home-service-list">
                          <li><i className="fas fa-check"></i> Escritórios em vidro</li>
                          <li><i className="fas fa-check"></i> Portas e janelas</li>
                          <li><i className="fas fa-check"></i> Sacadas e fachadas</li>
                          <li><i className="fas fa-check"></i> Espelhos decorativos</li>
                      </ul>
                  </Link>

                  {/* Service Card 2: Móveis Planejados */}
                  <Link href="/contato?servico=Móveis%20Planejados" className="home-service-card reveal" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="icon-box"><i className="fas fa-couch"></i></div>
                      <h3>Móveis Planejados</h3>
                      <ul className="home-service-list">
                          <li><i className="fas fa-check"></i> Marcenaria Sob Medida</li>
                          <li><i className="fas fa-check"></i> Acabamentos Premium</li>
                          <li><i className="fas fa-check"></i> Design Exclusivo</li>
                          <li><i className="fas fa-check"></i> Visualização 3D do projeto</li>
                      </ul>
                  </Link>

                  {/* Service Card 3: Climatização */}
                  <Link href="/contato?servico=Climatização" className="home-service-card reveal" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="icon-box"><i className="fas fa-snowflake"></i></div>
                      <h3>Climatização</h3>
                      <ul className="home-service-list">
                          <li><i className="fas fa-check"></i> Instalação de ar-condicionado</li>
                          <li><i className="fas fa-check"></i> Manutenção de ar-condicionado</li>
                          <li><i className="fas fa-check"></i> Instalação de infraestrutura</li>
                          <li><i className="fas fa-check"></i> PMOC</li>
                      </ul>
                  </Link>

                  {/* Service Card 4: Projetos e Reformas */}
                  <Link href="/contato?servico=Reforma" className="home-service-card reveal" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <div className="icon-box"><i className="fas fa-hard-hat"></i></div>
                      <h3>Projetos e Reformas Completas</h3>
                      <ul className="home-service-list">
                          <li><i className="fas fa-check"></i> Pinturas e efeitos</li>
                          <li><i className="fas fa-check"></i> Gesso e drywall</li>
                          <li><i className="fas fa-check"></i> Projetos de iluminação</li>
                          <li><i className="fas fa-check"></i> Projeto de ambiente completo</li>
                      </ul>
                  </Link>

              </div>
              <div style={{ textAlign: 'center', marginTop: '40px' }}>
                  <Link href="/servicos" className="btn btn-outline" style={{ color: 'var(--primary)', borderColor: 'var(--primary)' }}>Ver todos os serviços</Link>
              </div>
          </div>
      </section>

      <section id="diferenciais" className="section-padding">
          <div className="container">
              <div className="features-container">
                  <div className="features-image reveal">
                      <img src="https://i.imgur.com/WunxSo0.jpeg" alt="Arquiteto na obra" />
                  </div>
                  <div className="features-text reveal">
                      <div className="section-title" style={{ textAlign: 'left', marginBottom: '40px' }}>
                          <span>Por que a DOMUS?</span>
                          <h2 style={{ color: 'white' }}>Excelência é o nosso padrão</h2>
                          <p style={{ color: '#ccc', margin: 0 }}>Não vendemos apenas reformas, entregamos garantia qualidade de serviço.</p>
                      </div>
                      
                      <div className="feature-row">
                          <div className="f-icon"><i className="fas fa-hard-hat"></i></div>
                          <div className="f-content">
                              <h3>Equipe Especializada</h3>
                              <p>Profissionais registrados e treinados para executar com precisão.</p>
                          </div>
                      </div>
                      <div className="feature-row">
                          <div className="f-icon"><i className="fas fa-stopwatch"></i></div>
                          <div className="f-content">
                              <h3>Entrega no Prazo</h3>
                              <p>Cronograma rigoroso monitorado via aplicativo para o cliente.</p>
                          </div>
                      </div>
                      <div className="feature-row">
                          <div className="f-icon"><i className="fas fa-file-contract"></i></div>
                          <div className="f-content">
                              <h3>Contrato Transparente</h3>
                              <p>Sem letras miúdas. Orçamento detalhado sem custos surpresa.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      <section id="galeria" className="gallery-grid">
          <div className="gallery-item">
              <img src="https://i.imgur.com/OzJsv4o.png" alt="Projeto 1" />
              <div className="gallery-overlay">
                  <h4 style={{ fontSize: '1.2rem' }}>Portas Pivotantes</h4>
                  <p style={{ fontSize: '0.9rem' }}>Vidros temperados</p>
              </div>
          </div>
          <div className="gallery-item">
              <img src="https://i.imgur.com/I71dlg3.png" alt="Projeto 2" />
              <div className="gallery-overlay">
                  <h4 style={{ fontSize: '1.2rem' }}>Escritório</h4>
                  <p style={{ fontSize: '0.9rem' }}>Reforma Completa</p>
              </div>
          </div>
          <div className="gallery-item">
              <img src="https://i.imgur.com/hC5oegz.png" alt="Projeto 3" />
              <div className="gallery-overlay">
                  <h4 style={{ fontSize: '1.2rem' }}>Climatização</h4>
                  <p style={{ fontSize: '0.9rem' }}>Manutenção preventiva</p>
              </div>
          </div>
          <div className="gallery-item">
              <img src="https://i.imgur.com/SlbEPlj.png" alt="Projeto 4" />
              <div className="gallery-overlay">
                  <h4 style={{ fontSize: '1.2rem' }}>Banheiros</h4>
                  <p style={{ fontSize: '0.9rem' }}>Box e Espelhos</p>
              </div>
          </div>
      </section>

      <section id="depoimentos" className="section-padding">
          <div className="container">
              <div className="section-title reveal">
                  <span>O que dizem</span>
                  <h2>Satisfação Garantida</h2>
              </div>
              <div className="testimonials-grid">
                  <div className="testimonial-card reveal">
                      <i className="fas fa-quote-right quote-icon"></i>
                      <span className="t-text">&quot;Profissional extremamente competente e responsável. O serviço de instalação de ar-condicionado foi feito com muita qualidade, cuidado e dentro do prazo. Demonstrou conhecimento técnico, organização e deixou tudo funcionando perfeitamente. Recomendo de olhos fechados pelo excelente trabalho e atendimento.&quot;</span>
                      <div className="t-author">
                          <img src="https://i.imgur.com/bmdGMpC.png" alt="Cliente" className="t-avatar" />
                          <div className="t-info">
                              <h5>Cleber Lucas</h5>
                              <span>Climatização</span>
                          </div>
                      </div>
                  </div>
                  <div className="testimonial-card reveal">
                      <i className="fas fa-quote-right quote-icon"></i>
                      <span className="t-text">&quot;Contratei para o projeto do meu escritório de advocacia. O design 3D ajudou muito a visualizar o resultado final. A sala em vidro e os móveis ficaram perfeitos, profissionais nota 10.&quot;</span>
                      <div className="t-author">
                          <img src="https://i.imgur.com/x0NVtTZ.jpeg" alt="Cliente" className="t-avatar" />
                          <div className="t-info">
                              <h5>Rodolfo Medeiros</h5>
                              <span>Reforma Corporativa</span>
                          </div>
                      </div>
                  </div>
                  <div className="testimonial-card reveal">
                      <i className="fas fa-quote-right quote-icon"></i>
                      <span className="t-text">&quot;Profissionalismo raro no mercado. A gestão da obra foi transparente e não tive dor de cabeça com materiais.&quot;</span>
                      <div className="t-author">
                          <img src="https://randomuser.me/api/portraits/men/85.jpg" alt="Cliente" className="t-avatar" />
                          <div className="t-info">
                              <h5>Ricardo Souza</h5>
                              <span>Sala de vidro</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
}
