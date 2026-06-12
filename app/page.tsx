'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Menu Mobile
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    if (burger && nav) {
      const toggleMenu = () => {
        nav.classList.toggle('active');
        burger.classList.toggle('fa-times');
        burger.classList.toggle('fa-bars');
      };
      
      burger.addEventListener('click', toggleMenu);

      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          nav.classList.remove('active');
          burger.classList.remove('fa-times');
          burger.classList.add('fa-bars');
        });
      });

      return () => {
        burger.removeEventListener('click', toggleMenu);
      };
    }
  }, []);

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
      <header>
          <div className="container">
              <nav>
                  <div className="logo"><img src="https://i.imgur.com/a7mZ64Q.png" alt="DOMUS Logo" /></div>
                  <ul className="nav-links">
                      <li><a href="#hero">Início</a></li>
                      <li><a href="#servicos">Serviços</a></li>
                      <li><a href="#galeria">Portfólio</a></li>
                      <li><a href="#depoimentos">Clientes</a></li>
                      <li><a href="#contato" className="btn btn-primary">Orçamento</a></li>
                  </ul>
                  <div className="burger"><i className="fas fa-bars"></i></div>
              </nav>
          </div>
      </header>

      <section id="hero">
          <div className="container">
              <div className="hero-content reveal">
                  <h1>Transformamos Ambientes,<br />Elevamos Padrões.</h1>
                  <p>Especialistas em reformas de alto padrão, vidraçaria, móveis planejados, climatização e projetos 3D. A solidez que sua obra precisa com o design que você sonha.</p>
                  <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                      <a href="#contato" className="btn btn-primary">Solicitar Orçamento</a>
                      <a href="#galeria" className="btn btn-outline">Ver Projetos</a>
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

      <section id="servicos" className="section-padding">
          <div className="container">
              <div className="section-title reveal">
                  <span>O que fazemos</span>
                  <h2>Soluções 360º para sua Obra</h2>
                  <p>Centralize sua reforma com uma única empresa. Gestão, execução e acabamento.</p>
              </div>
              <div className="services-grid">
                  <div className="service-card reveal">
                      <div className="icon-box"><i className="fas fa-drafting-compass"></i></div>
                      <h3>Projetos & Design 3D</h3>
                      <ul className="service-list">
                          <li><i className="fas fa-check"></i> Visualização realista</li>
                          <li><i className="fas fa-check"></i> Otimização de espaços</li>
                          <li><i className="fas fa-check"></i> Compatibilização técnica</li>
                      </ul>
                  </div>
                  <div className="service-card reveal">
                      <div className="icon-box"><i className="fas fa-hammer"></i></div>
                      <h3>Reformas Completas</h3>
                      <ul className="service-list">
                          <li><i className="fas fa-check"></i> Vidraçaria</li>
                          <li><i className="fas fa-check"></i> Climatização</li>
                          <li><i className="fas fa-check"></i> Pinturas e efeitos</li>
                          <li><i className="fas fa-check"></i> Gesso e Iluminação</li>
                      </ul>
                  </div>
                  <div className="service-card reveal">
                      <div className="icon-box"><i className="fas fa-couch"></i></div>
                      <h3>Móveis Planejados</h3>
                      <ul className="service-list">
                          <li><i className="fas fa-check"></i> Marcenaria Sob Medida</li>
                          <li><i className="fas fa-check"></i> Acabamentos Premium</li>
                          <li><i className="fas fa-check"></i> Design Exclusivo</li>
                      </ul>
                  </div>
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

      <section id="galeria">
          <div className="gallery-grid">
              <div className="gallery-item">
                  <img src="https://i.imgur.com/OzJsv4o.png" alt="Projeto 1" />
                  <div className="gallery-overlay">
                      <h4>Portas Pivotante</h4>
                      <p>Vidros temperados</p>
                  </div>
              </div>
              <div className="gallery-item">
                  <img src="https://i.imgur.com/I71dlg3.png" alt="Projeto 2" />
                  <div className="gallery-overlay">
                      <h4>Escritório de Advocacia</h4>
                      <p>Reforma Completa</p>
                  </div>
              </div>
              <div className="gallery-item">
                  <img src="https://i.imgur.com/hC5oegz.png" alt="Projeto 3" />
                  <div className="gallery-overlay">
                      <h4>Instalações e manutenções</h4>
                      <p>Climatização</p>
                  </div>
              </div>
              <div className="gallery-item">
                  <img src="https://i.imgur.com/SlbEPlj.png" alt="Projeto 4" />
                  <div className="gallery-overlay">
                      <h4>Banheiros</h4>
                      <p>Box + Espelho</p>
                  </div>
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

      <section id="contato" className="section-padding">
          <div className="container">
              <div className="section-title reveal">
                  <span>Contato</span>
                  <h2>Vamos falar sobre seu projeto?</h2>
              </div>
              <div className="contact-wrapper reveal">
                  <div className="contact-info">
                      <div>
                          <h3>Informações de Contato</h3>
                          <p style={{ opacity: 0.8, marginBottom: '30px' }}>Preencha o formulário e nossa equipe técnica entrará em contato em até 24 horas.</p>
                          
                          <div className="info-item">
                              <i className="fas fa-map-marker-alt"></i>
                              <div>
                                  <h5>Endereço</h5>
                                  <p>Av. Presidente Eurico Gaspar Dultra, 510 - Recife, PE</p>
                              </div>
                          </div>
                          <div className="info-item">
                              <i className="fas fa-phone-alt"></i>
                              <div>
                                  <h5>Telefone</h5>
                                  <p>(81) 99519-4622</p>
                              </div>
                          </div>
                          <div className="info-item">
                              <i className="fas fa-envelope"></i>
                              <div>
                                  <h5>E-mail</h5>
                                  <p>suportedomus25@gmail.com</p>
                              </div>
                          </div>
                      </div>
                      <div>
                          <a href="https://www.instagram.com/domus_oficiall?igsh=cWVhMGIxMWI3dGcw" target="_blank" rel="noreferrer" style={{ color: 'white', marginRight: '15px' }}><i className="fab fa-instagram fa-lg"></i></a>
                          <a href="https://www.facebook.com/profile.php?id=61582030342127" target="_blank" rel="noreferrer" style={{ color: 'white', marginRight: '15px' }}><i className="fab fa-facebook fa-lg"></i></a>
                          <a href="#" style={{ color: 'white' }}><i className="fab fa-linkedin fa-lg"></i></a>
                      </div>
                  </div>
                  <div className="contact-form">
                      <form onSubmit={(e) => { e.preventDefault(); enviarParaWhatsapp(); }}>
                          <div className="form-group">
                              <label>Nome Completo</label>
                              <input type="text" id="form-nome" className="form-control" placeholder="Seu nome" required />
                          </div>
                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                              <div className="form-group">
                                  <label>E-mail</label>
                                  <input type="email" id="form-email" className="form-control" placeholder="Seu e-mail" required />
                              </div>
                              <div className="form-group">
                                  <label>Telefone</label>
                                  <input type="tel" id="form-tel" className="form-control" placeholder="(00) 00000-0000" required />
                              </div>
                          </div>
                          <div className="form-group">
                              <label>Assunto</label>
                              <select id="form-assunto" className="form-control">
                                  <option>Orçamento de Reforma</option>
                                  <option>Móveis Planejados</option>
                                  <option>Vidraçaria</option>
                                  <option>Climatização</option>
                                  <option>Projeto 3D</option>
                                  <option>Outros</option>
                              </select>
                          </div>
                          <div className="form-group">
                              <label>Mensagem</label>
                              <textarea id="form-msg" className="form-control" placeholder="Descreva brevemente seu projeto..." required></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Enviar Mensagem</button>
                      </form>
                  </div>
              </div>
          </div>
      </section>

      <footer>
          <div className="container">
              <div className="footer-top">
                  <div className="footer-grid">
                      <div className="footer-brand">
                          <img src="https://i.imgur.com/a7mZ64Q.png" alt="DOMUS Logo" />
                          <p>Construindo sonhos com bases sólidas. Sua parceira definitiva em engenharia e design de interiores.</p>
                          <div className="social-links">
                              <a href="https://www.instagram.com/domus_oficiall?igsh=cWVhMGIxMWI3dGcw" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                              <a href="https://www.facebook.com/profile.php?id=61582030342127" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                              <a href="#"><i className="fab fa-linkedin-in"></i></a>
                          </div>
                      </div>
                      <div className="footer-col">
                          <h4>Empresa</h4>
                          <ul>
                              <li><a href="#hero">Sobre Nós</a></li>
                              <li><a href="#galeria">Nossos Projetos</a></li>
                              <li><a href="#depoimentos">Depoimentos</a></li>
                              <li><a href="#contato">Trabalhe Conosco</a></li>
                          </ul>
                      </div>
                      <div className="footer-col">
                          <h4>Serviços</h4>
                          <ul>
                              <li><a href="#">Reformas</a></li>
                              <li><a href="#">Móveis planejados</a></li>
                              <li><a href="#">Projetos de Interiores</a></li>
                              <li><a href="#">Vidraçaria Especializada</a></li>
                              <li><a href="#">Climatização</a></li>
                          </ul>
                      </div>
                      <div className="footer-col">
                          <h4>Atendimento</h4>
                          <ul>
                              <li>Seg - Sex: 8h às 17h</li>
                              <li>Sáb: 8h às 12h</li>
                              <li>Domingo: Fechado</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className="copyright">
              <p>&copy; 2023 DOMUS Engenharia e Design. Todos os direitos reservados.</p>
          </div>
      </footer>

      <a href="https://wa.me/5581995194622" className="whatsapp-float" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}
