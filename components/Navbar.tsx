'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuActive, setMenuActive] = useState(false);
  const pathname = usePathname();

  const isDarkBg = pathname !== '/';

  return (
    <header style={{ backgroundColor: isDarkBg ? 'rgba(10, 10, 10, 0.95)' : 'transparent', position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
        <div className="container" style={{ padding: '0 24px', maxWidth: '1240px', margin: '0 auto' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '90px' }}>
                <div className="logo"><Link href="/"><img src="https://i.imgur.com/a7mZ64Q.png" alt="DOMUS Logo" style={{ height: '65px' }}/></Link></div>
                <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
                    <li><Link href="/" style={{ fontWeight: 600, color: pathname === '/' ? 'var(--primary)' : 'inherit' }} onClick={() => setMenuActive(false)}>Início</Link></li>
                    <li><Link href="/servicos" style={{ fontWeight: 600, color: pathname === '/servicos' ? 'var(--primary)' : 'inherit' }} onClick={() => setMenuActive(false)}>Serviços</Link></li>
                    <li><Link href="/portfolio" style={{ fontWeight: 600, color: pathname === '/portfolio' ? 'var(--primary)' : 'inherit' }} onClick={() => setMenuActive(false)}>Portfólio</Link></li>
                    <li><Link href="/blog" style={{ fontWeight: 600, color: pathname.startsWith('/blog') ? 'var(--primary)' : 'inherit' }} onClick={() => setMenuActive(false)}>Blog</Link></li>
                    <li><Link href="/contato" className="btn btn-primary" style={{ padding: '10px 20px', borderRadius: '4px', minWidth: '120px', textAlign: 'center' }} onClick={() => setMenuActive(false)}>Contato</Link></li>
                </ul>
                <div className="burger" onClick={() => setMenuActive(!menuActive)}>
                    <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </nav>
        </div>
    </header>
  );
}
