import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'DOMUS | Excelência em Construção e Design',
  description: 'DOMUS - Referência em reformas residenciais e comerciais. Vidraçaria, Móveis Planejados e Projetos 3D.',
  icons: {
    icon: 'https://i.imgur.com/xmSqvON.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
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

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />

        {/* FontAwesome */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
