import Link from 'next/link';

export default function Footer() {
  return (
    <>
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
                              <li><Link href="/">Sobre Nós</Link></li>
                              <li><Link href="/portfolio">Nossos Projetos</Link></li>
                              <li><Link href="/blog">Blog / Novidades</Link></li>
                              <li><Link href="/contato">Trabalhe Conosco</Link></li>
                          </ul>
                      </div>
                      <div className="footer-col">
                          <h4>Serviços</h4>
                          <ul>
                              <li><Link href="/servicos">Vidraçaria</Link></li>
                              <li><Link href="/servicos">Móveis Planejados</Link></li>
                              <li><Link href="/servicos">Climatização</Link></li>
                              <li><Link href="/servicos">Projetos e Reformas Completas</Link></li>
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
              <p>&copy; {new Date().getFullYear()} DOMUS Engenharia e Design. Todos os direitos reservados.</p>
          </div>
      </footer>

      <a href="https://wa.me/5581995194622" className="whatsapp-float" target="_blank" rel="noreferrer">
          <i className="fab fa-whatsapp"></i>
      </a>
    </>
  );
}
