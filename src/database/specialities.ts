export interface Speciality {
  name: string,
  id: number,
  description: string
  waysToHelp: [
    {
      title: string,
      helpDescription: string,
    },
    {
      title: string,
      helpDescription: string,
    },
    {
      title: string,
      helpDescription: string,
    },
  ],
  abstract: string,
  link: string
}


export const specalities: Speciality[] = [
  {
    abstract: 'Você sabe quais são os seus direitos como consumidor? Você já se sentiu lesado por alguma empresa ou prestador de serviço? Se você precisa de orientação ou defesa em casos de cobranças indevidas, empréstimos fraudulentos, revisional de financiamentos com juros abusivos, defeitos em produtos ou serviços, propaganda enganosa, cancelamento de contrato, entre outros, conte com a nossa ajuda especializada em Direito do Consumidor. Nós vamos lutar pelos seus direitos e buscar a melhor solução para o seu problema.',
    waysToHelp: [
      {
        title: 'maneira 1',
        helpDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'maneira 2',
        helpDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'maneira 3',
        helpDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ],
    description: 'Ea quidem vitae est galisum animi qui eligendi autem est adipisci fugiat eum rerum tempore.',
    id: 1,
    name: 'Direito do Consumidor',
    link: '/atuacao/direito-do-consumidor'
  },
  {
    abstract: 'A Previdência Social é um direito de todos os trabalhadores que contribuem para o sistema. Mas nem sempre é fácil garantir os benefícios a que se tem direito, como aposentadoria, pensão por morte, auxílio-doença, salário-maternidade, entre outros. Por isso, é importante contar com o apoio de um advogado que conhece as leis e as normas que regem o assunto. Nós podemos te ajudar a requerer, revisar ou restabelecer o seu benefício previdenciário, de forma rápida e segura.',
    waysToHelp: [
      {
        title: 'maneira 1',
        helpDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'maneira 2',
        helpDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'maneira 3',
        helpDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ],
    description: 'Ea quidem vitae est galisum animi qui eligendi autem est adipisci fugiat eum rerum tempore.',
    id: 2,
    name: 'Direito Previdenciário',
    link: '/atuacao/direito-previdenciario'
  },
  {
    abstract: 'O Direito Cível é o ramo do direito que trata das relações entre as pessoas, tanto físicas quanto jurídicas. Ele abrange diversas áreas, como contratos, responsabilidade civil, propriedade, família, sucessões, entre outras. Se você precisa de assessoria ou representação em questões cíveis, como cobranças, indenizações, inventários, divórcios, reconhecimento de paternidade, entre outras, você pode contar conosco. Nós vamos defender os seus interesses e buscar a melhor solução para o seu caso.',
    waysToHelp: [
      {
        title: 'maneira 1',
        helpDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'maneira 2',
        helpDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'maneira 3',
        helpDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ],
    description: 'Ea quidem vitae est galisum animi qui eligendi autem est adipisci fugiat eum rerum tempore.',
    id: 3,
    name: 'Direito Civil',
    link: '/atuacao/direito-civil'
  },
  {
    abstract: 'O Direito Trabalhista é o ramo do direito que regula as relações entre empregados e empregadores. Ele visa garantir os direitos e deveres de ambas as partes, bem como a harmonia e a justiça no ambiente de trabalho. Se você precisa de orientação ou defesa em questões trabalhistas, como rescisão contratual, verbas rescisórias, horas extras, férias, décimo terceiro salário, adicional noturno, insalubridade, periculosidade, assédio moral ou sexual, entre outras, você pode contar também com essa nossa especialidade em Direito Trabalhista. Nós vamos defender os seus direitos e buscar a melhor solução para o seu caso.',
    waysToHelp: [
      {
        title: 'Maneira 1',
        helpDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'Maneira 2',
        helpDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      },
      {
        title: 'Maneira 3',
        helpDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }
    ],
    description: 'Ea quidem vitae est galisum animi qui eligendi autem est adipisci fugiat eum rerum tempore.',
    id: 4,
    name: 'Direito Trabalhista',
    link: '/atuacao/direito-trabalhista'
  }
]