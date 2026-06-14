import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';
import { Montserrat, Open_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '500', '700', '800'],
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  weight: ['400', '600'],
});

export const metadata: Metadata = {
  title: 'DOMUS | Excelência em Construção e Design',
  description: 'DOMUS - Referência em reformas residenciais e comerciais. Vidraçaria, Móveis Planejados e Projetos 3D.',
  icons: {
    icon: 'https://i.imgur.com/xmSqvON.png',
  },
  verification: {
    google: '8Nk9_n0EBndsWv9ic2pKwgmpuWvJ9S1IIOjEPoeg6Ck',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${openSans.variable} ${montserrat.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18196325186"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-18196325186');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
