'use client';

import { useEffect } from 'react';

export default function ContatoPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const servico = urlParams.get('servico');
      if (servico) {
        const select = document.getElementById('form-assunto') as HTMLSelectElement;
        if (select) {
          for (let i = 0; i < select.options.length; i++) {
            if (select.options[i].value.toLowerCase().includes(servico.toLowerCase())) {
              select.selectedIndex = i;
              break;
            }
          }
        }
      }
    }
  }, []);

  const enviarParaWhatsapp = () => {
    const nome = (document.getElementById('form-nome') as HTMLInputElement).value;
    const email = (document.getElementById('form-email') as HTMLInputElement).value;
    const tel = (document.getElementById('form-tel') as HTMLInputElement).value;
    const assunto = (document.getElementById('form-assunto') as HTMLSelectElement).value;
    const msg = (document.getElementById('form-msg') as HTMLTextAreaElement).value;

    if (!nome || !email || !tel || !msg) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'conversion', {
            'send_to': 'AW-17942261129/DdoqCLiNg_cbEInbxOtC'
        });
    }

    const textoFormatado = `*Novo Contato via Site DOMUS*%0A%0A*Nome:* ${nome}%0A*Email:* ${email}%0A*Telefone:* ${tel}%0A*Assunto:* ${assunto}%0A*Mensagem:* ${msg}`;
    const urlWhatsapp = `https://wa.me/5581995194622?text=${textoFormatado}`;
    
    window.open(urlWhatsapp, '_blank');
  };

  return (
    <main style={{ paddingTop: '120px', paddingBottom: '60px', minHeight: '80vh', backgroundColor: 'var(--white)' }}>
      <section id="contato" className="section-padding">
          <div className="container">
              <div className="section-title reveal active">
                  <span>Contato</span>
                  <h2>Vamos falar sobre seu projeto?</h2>
              </div>
              <div className="contact-wrapper reveal active" style={{ backgroundColor: 'var(--gray-light)', borderRadius: '8px', overflow: 'hidden' }}>
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
    </main>
  );
}
