export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  keywords: string[];
  imageUrl: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'vidracaria-em-recife-solucoes-em-vidro',
    title: 'Vidraçaria em Recife: Soluções em Vidro para sua Casa e Empresa',
    excerpt: 'Procurando por vidraçaria em Recife? Descubra as melhores soluções em vidro, desde fechamento de varandas até portas e janelas de vidro temperado.',
    date: '2023-10-01',
    keywords: ['Vidraçaria', 'Vidraçaria em Recife', 'Soluções em vidro', 'Vidraceiro', 'Vidro Temperado', 'Pele de Vidro'],
    imageUrl: 'https://i.imgur.com/a9OgnJM.jpeg',
    content: `
      <h2>A Importância de uma Boa Vidraçaria em Recife</h2>
      <p>Quando se trata de modernizar e trazer sofisticação para ambientes residenciais e comerciais, o vidro é um material indispensável. Uma <strong>vidraçaria em Recife</strong> de confiança, como a DOMUS, pode transformar completamente o seu espaço.</p>
      
      <h3>Nossas Soluções em Vidro</h3>
      <p>Oferecemos diversas <strong>soluções em vidro</strong> para atender às suas necessidades:</p>
      <ul>
        <li><strong>Fechamento de Varandas e Sacadas:</strong> Proteja sua varanda da chuva e vento sem perder a vista privilegiada.</li>
        <li><strong>Portas e Janelas de Vidro:</strong> Elegância e iluminação natural para sua sala ou escritório.</li>
        <li><strong>Pele de Vidro (Fachadas):</strong> Modernidade e destaque para fachadas comerciais.</li>
      </ul>

      <h3>Por que contratar nosso Vidraceiro em Recife?</h3>
      <p>Contamos com uma equipe qualificada. Nosso <strong>vidraceiro em Recife</strong> possui vasta experiência para garantir uma instalação segura e com acabamento impecável, seguindo todas as normas técnicas.</p>
      <p>Entre em contato com a DOMUS e solicite seu orçamento para serviços de vidraçaria!</p>
    `
  },
  {
    slug: 'moveis-planejados-em-recife-marcenaria',
    title: 'Móveis Planejados em Recife: Transforme e Otimize seu Ambiente',
    excerpt: 'Saiba como os móveis planejados em Recife podem otimizar o espaço do seu apartamento ou escritório com qualidade e design.',
    date: '2023-10-05',
    keywords: ['Móveis planejados', 'Móveis planejados em Recife', 'Marcenaria', 'Design de Interiores'],
    imageUrl: 'https://i.imgur.com/erSDNc2.jpeg',
    content: `
      <h2>Móveis Planejados: A Solução para Cada Espaço</h2>
      <p>Otimizar espaços nunca foi tão importante. Com os apartamentos cada vez menores, investir em <strong>móveis planejados em Recife</strong> é a melhor forma de garantir elegância, conforto e praticidade.</p>
      
      <h3>Vantagens da Marcenaria Sob Medida</h3>
      <p>Na DOMUS, nossos serviços de <strong>móveis planejados</strong> oferecem:</p>
      <ul>
        <li>Aproveitamento de 100% do espaço, do chão ao teto.</li>
        <li>Material de alta qualidade, resistente à umidade (ideal para o clima de Recife).</li>
        <li>Design sofisticado e integrado ao projeto arquitetônico.</li>
      </ul>

      <h3>Marcenaria de Alto Padrão em Recife</h3>
      <p>Se você busca exclusividade para sua cozinha, quarto ou escritório, nossa marcenaria projeta tudo detalhadamente em 3D antes da execução.</p>
    `
  },
  {
    slug: 'instalador-de-ar-condicionado-em-recife-climatizacao',
    title: 'Instalador de Ar-Condicionado em Recife: Climatização Ideal para o Verão',
    excerpt: 'Precisa de um refrigerista ou instalador de ar-condicionado em Recife? Veja a importância de uma instalação profissional e climatização adequada.',
    date: '2023-10-10',
    keywords: ['Climatização', 'Instalador de ar-condicionado', 'Refrigerista em Recife', 'Instalador de ar-condicionado em Recife'],
    imageUrl: 'https://i.imgur.com/uvFyH6B.jpeg',
    content: `
      <h2>O Calor Exige a Melhor Climatização</h2>
      <p>Recife possui altas temperaturas na maior parte do ano. Ter um projeto de <strong>climatização</strong> eficiente em casa ou no escritório é essencial para o conforto e a produtividade.</p>

      <h3>O Papel do Instalador de Ar-Condicionado em Recife</h3>
      <p>A instalação inadequada de um ar-condicionado (Split ou Cassete) pode causar vazamentos, consumo excessivo de energia e perda da garantia. Por isso, ao procurar um <strong>instalador de ar-condicionado em Recife</strong>, confie na equipe especializada da DOMUS.</p>

      <h3>Refrigerista Especializado</h3>
      <p>Nosso <strong>refrigerista em Recife</strong> também realiza manutenção preventiva e corretiva, limpeza e higienização, e dimensionamento de carga térmica. Tudo para garantir que sua máquina dure mais e entregue o máximo de conforto.</p>
    `
  },
  {
    slug: 'reformas-residenciais-e-comerciais-em-recife',
    title: 'Reformas Residenciais e Comerciais em Recife: Guia Completo',
    excerpt: 'Dicas indispensáveis para quem vai realizar reformas residenciais ou comerciais em Recife. Como evitar dor de cabeça com empreiteiros.',
    date: '2023-10-15',
    keywords: ['Reformas', 'Reformas residenciais', 'Reformas comerciais', 'Empreiteira em Recife', 'Construção civil'],
    imageUrl: 'https://i.imgur.com/T1TpkUC.jpeg',
    content: `
      <h2>Reformas Sem Dor de Cabeça</h2>
      <p>Planejar <strong>reformas</strong> pode parecer um desafio. Atrasos, custos extras e profissionais desqualificados são as maiores queixas de quem não contrata uma empresa séria em Recife.</p>

      <h3>Nossa Gestão de Reformas em Recife</h3>
      <p>Seja para projetos residenciais ou comerciais, a DOMUS cuida de tudo. Integramos os serviços de alvenaria, gesso, elétrica, pintura, vidraçaria e climatização em um só contrato.</p>
      <ul>
        <li>Cronograma transparente.</li>
        <li>Acompanhamento diário da obra.</li>
        <li>Garantia de serviço e equipe técnica responsável.</li>
      </ul>
      <p>Evite transtornos. Conte com a DOMUS para a sua próxima reforma.</p>
    `
  },
  {
    slug: 'box-de-vidro-para-banheiro-em-recife',
    title: 'Box de Vidro para Banheiro em Recife: Elegância e Segurança',
    excerpt: 'Entenda os modelos de box de vidro para banheiro disponíveis no mercado e porque é a melhor escolha para a sua reforma em Recife.',
    date: '2023-10-20',
    keywords: ['Box de banheiro', 'Vidraçaria em Recife', 'Vidro Temperado', 'Box Elegance', 'Vidraceiro em Recife'],
    imageUrl: 'https://i.imgur.com/ZXIaGh2.jpeg',
    content: `
      <h2>Segurança e Beleza no Banheiro</h2>
      <p>O banheiro deixou de ser apenas um ambiente funcional para se tornar um espaço de relaxamento. A escolha de um <strong>box de vidro temperado</strong> adequado faz toda a diferença.</p>

      <h3>Modelos Mais Procurados em Recife</h3>
      <ul>
        <li><strong>Box Frontal (Reto):</strong> Ideal para a maioria dos banheiros, fácil operação e limpeza.</li>
        <li><strong>Box de Canto (Em L):</strong> Excelente para banheiros pequenos.</li>
        <li><strong>Box Elegance (Roldanas Aparentes):</strong> Sofisticação pura, com trilhos e peças em inox maciço.</li>
      </ul>

      <h3>Instalação Segura com Vidraceiro Profissional</h3>
      <p>Nosso <strong>vidraceiro em Recife</strong> realiza a medição precisa e a instalação conforme as normas da ABNT, utilizando vidros temperados de alta resistência. Sua família merece esse cuidado e beleza.</p>
    `
  },
  {
    slug: 'marceneiro-em-recife-projetos-sob-medida',
    title: 'Marceneiro em Recife: Qualidade em MDF e Projetos Sob Medida',
    excerpt: 'Conheça o trabalho do nosso marceneiro em Recife, especializado em móveis em MDF de alto padrão e projetos 3D perfeitos.',
    date: '2023-10-25',
    keywords: ['Marceneiro', 'Marceneiro em Recife', 'Projetos sob medida', 'Marcenaria fina'],
    imageUrl: 'https://i.imgur.com/Tl5ECnh.jpeg',
    content: `
      <h2>A Arte da Marcenaria Fina</h2>
      <p>A contratação de um bom <strong>marceneiro em Recife</strong> garante que seu projeto saia exatamente como no papel (ou na tela 3D). Trabalhamos apenas com o que há de melhor no mercado em termos de MDF, ferragens e acabamentos.</p>

      <h3>Projetos Sob Medida e Exclusivos</h3>
      <p>Do rústico ao contemporâneo, da sala à cozinha, projetos bem executados trazem valorização ao seu imóvel. A DOMUS aplica fitas de borda bem coladas, corrediças invisíveis com amortecimento e sistemas de iluminação embutida nos móveis (perfis de LED).</p>
      <p>Fale conosco e agende uma visita técnica do nosso time de marcenaria.</p>
    `
  },
  {
    slug: 'vidraceiro-em-recife-fechamento-de-varandas',
    title: 'Vidraceiro em Recife: Opções Elegantes para Fechamento de Varandas',
    excerpt: 'O fechamento de varanda em Recife protege e valoriza seu imóvel. Saiba tudo sobre a instalação com nosso vidraceiro especializado.',
    date: '2023-10-30',
    keywords: ['Vidraceiro em Recife', 'Fechamento de varandas', 'Cortina de vidro', 'Envidraçamento', 'Vidraçaria'],
    imageUrl: 'https://i.imgur.com/ZoRzhHx.jpeg',
    content: `
      <h2>Integre a Varanda à sua Sala</h2>
      <p>O envidraçamento (ou cortina de vidro) é um dos serviços mais solicitados na nossa <strong>vidraçaria em Recife</strong>. Ele proporciona proteção contra o vento, a chuva e a maresia, comum na nossa região costeira, além de isolamento acústico.</p>

      <h3>Cortina de Vidro: Tecnologia e Praticidade</h3>
      <p>Nosso <strong>vidraceiro em Recife</strong> aplica o sistema de envidraçamento de sacadas com trilhos de alta performance, que garantem a abertura total dos vidros, deslizando suavemente.</p>
      <p>Esse serviço requer laudo e muita responsabilidade técnica, e a DOMUS oferece toda a assessoria e a instalação impecável.</p>
    `
  },
  {
    slug: 'refrigerista-em-recife-manutencao-preventiva',
    title: 'Refrigerista em Recife: A Importância da Manutenção Preventiva do Ar-Condicionado',
    excerpt: 'O consumo de energia está alto? O refrigerista em Recife da DOMUS explica por que a manutenção preventiva do ar-condicionado é vital.',
    date: '2023-11-04',
    keywords: ['Refrigerista em Recife', 'Manutenção preventiva', 'Instalador de ar-condicionado em Recife', 'Climatização'],
    imageUrl: 'https://i.imgur.com/EzlCD4e.png',
    content: `
      <h2>Seu Ar-Condicionado Está Limpo?</h2>
      <p>Os dutos e filtros do ar-condicionado são locais ideais para acúmulo de bactérias, ácaros e fungos. Isso causa alergias e agrava doenças respiratórias. Além disso, equipamentos sujos gastam muito mais energia.</p>

      <h3>Quando Chamar o Refrigerista em Recife?</h3>
      <p>A manutenção não deve ocorrer apenas quando a máquina quebra (corretiva). A manutenção preventiva mensal ou semestral, executada por nosso <strong>refrigerista em Recife</strong>, previne problemas graves:</p>
      <ul>
        <li>Monitoramento de fluido refrigerante (gás).</li>
        <li>Limpeza de evaporadoras e condensadoras.</li>
        <li>Verificação dos componentes elétricos.</li>
      </ul>
      <p>Chame a DOMUS e tenha um parceiro para cuidar da <strong>climatização</strong> de sua empresa ou casa.</p>
    `
  },
  {
    slug: 'moveis-sob-medida-para-apartamentos-pequenos',
    title: 'Móveis Sob Medida para Apartamentos Pequenos em Recife',
    excerpt: 'Dicas de marcenaria de como móveis planejados sob medida transformam e ampliam apartamentos pequenos e compactos.',
    date: '2023-11-10',
    keywords: ['Móveis sob medida', 'Móveis planejados em Recife', 'Marcenaria', 'Marceneiro em Recife', 'Apartamento pequeno'],
    imageUrl: 'https://i.imgur.com/EkA11bm.png',
    content: `
      <h2>Grandes Ideias para Espaços Pequenos</h2>
      <p>Se você tem um apartamento compacto em Boa Viagem, Piedade, ou Graças, sabe que cada centímetro importa. E é aqui que os <strong>móveis planejados em Recife</strong> fazem "mágica".</p>

      <h3>O Segredo é o Projeto</h3>
      <p>Um bom projeto de marcenaria, executado pelo nosso melhor <strong>marceneiro em Recife</strong>, irá incorporar funções duplas nos móveis:</p>
      <ul>
        <li>Painéis de TV com nichos embutidos.</li>
        <li>Camas com baú ou gavetas na base.</li>
        <li>Cozinhas com armários até o teto para máximo armazenamento.</li>
      </ul>
      <p>A DOMUS faz o estudo 3D garantindo a perfeita integração dos espaços, tornando o seu lar muito mais amplo e bem resolvido.</p>
    `
  },
  {
    slug: 'espelhos-decorativos-e-vidros-temperados-recife',
    title: 'Espelhos Decorativos e Vidros Temperados na Decoração em Recife',
    excerpt: 'Como usar espelhos e vidros temperados fornecidos por uma boa vidraçaria em Recife para trazer luz e amplitude ao ambiente.',
    date: '2023-11-15',
    keywords: ['Espelhos decorativos', 'Vidros temperados', 'Vidraçaria', 'Vidraçaria em Recife', 'Soluções em vidro'],
    imageUrl: 'https://i.imgur.com/cHkdURU.jpeg',
    content: `
      <h2>Amplitude e Sofisticação no Design</h2>
      <p>Quem trabalha com design de interiores e reformas sabe o poder de um espelho bem posicionado. Nossa <strong>vidraçaria em Recife</strong> produz espelhos bisotados, facetados ou orgânicos, peças-chave para transformar halls de entrada e salas de jantar.</p>

      <h3>Aplicações e Soluções em Vidro Temperado</h3>
      <p>Os <strong>vidros temperados</strong> são cinco vezes mais resistentes que o vidro comum. São a melhor escolha para:</p>
      <ul>
        <li>Guarda-corpos de escadas e varandas.</li>
        <li>Divisórias de ambientes em vidro.</li>
        <li>Portas de passagem deslizantes (com perfil de alumínio ou roldanas aparentes).</li>
      </ul>
      <p>Para qualquer projeto exigente, a DOMUS tem as melhores <strong>soluções em vidro</strong>.</p>
    `
  }
];
