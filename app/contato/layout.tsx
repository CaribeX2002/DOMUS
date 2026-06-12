import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato | DOMUS - Excelência em Construção e Design',
  description: 'Entre em contato com nossa equipe em Recife para orçamentos de reformas, vidraçaria, climatização e móveis planejados.',
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
