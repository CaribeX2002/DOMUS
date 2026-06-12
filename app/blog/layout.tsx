export const metadata = {
  title: 'Blog da DOMUS | Dicas e Soluções',
  description: 'Confira nossos artigos sobre reformas, vidraçaria, marcenaria e climatização em Recife.',
};

export default function BlogListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
