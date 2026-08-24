import { UtensilsCrossed, ShoppingCart, Scissors } from 'lucide-react'
import foodhubCardapio from '@/assets/img/foodhub-cardapio.jpg'
import foodhubDesempenho from '@/assets/img/foodhub-desempenho.jpg'
import pdvCaixa from '@/assets/img/pdv-caixa.jpg'
import pdvEstoque from '@/assets/img/pdv-estoque.jpg'
import pdvRelatorios from '@/assets/img/pdv-relatorios.jpg'
import studioDashboard from '@/assets/img/studio-dashboard.jpg'
import studioServicos from '@/assets/img/studio-servicos.jpg'
import studioRelatorios from '@/assets/img/studio-relatorios.jpg'

export type ProductShot = { src: string; alt: string }

export type Product = {
  id: string
  name: string
  icon: typeof UtensilsCrossed
  tagLabel: string
  tagline: string
  description: string
  price: string
  priceNote: string
  features: string[]
  highlightFeatures: number[]
  images: {
    type: 'browser' | 'phone'
    shots: ProductShot[]
  }
}

// Enquanto vazio, "Contratar agora" abre o WhatsApp com mensagem pronta.
export const paymentLinks: Record<string, string> = {
  easyfoodhub: 'https://easy-food-hub-lp.vercel.app/',
  easypdv: '',
  easystudio: 'https://geteasystudio.com.br',
}

export const products: Product[] = [
  {
    id: 'easyfoodhub',
    name: 'Easy Food Hub',
    icon: UtensilsCrossed,
    tagLabel: 'Para restaurantes e food service',
    tagline:
      'Para hamburguerias, lanchonetes e food service que vivem entre salão, delivery e WhatsApp',
    description:
      'Painel completo que junta salão, delivery, retirada, cardápio online, caixa, financeiro e marketing em um só lugar — para você parar de controlar o restaurante em três apps e um caderno diferentes.',
    price: '179,90',
    priceNote: 'por mês',
    features: [
      'Mesas e salão: abrir conta, lançar pedidos, pagamento parcial e fechar conta',
      'Delivery e retirada com fila do dia e status de pedido em tempo real',
      'Cardápio online próprio, com link exclusivo para o cliente pedir sozinho',
      'Adicionais em grupos e opções, inclusive em cascata',
      'Cupons, promoções (combo, compre e leve, frete grátis) e fidelidade com pontos',
      'Financeiro com fornecedores, compras, contas a pagar, caixa e relatório de lucro',
      'Relatórios de faturamento, ticket médio, mix e ranking de produtos',
      'WhatsApp integrado: notificação automática de status + chatbot de pedidos',
      'Alerta sonoro e por notificação a cada novo pedido do delivery',
    ],
    highlightFeatures: [0, 1, 2, 4, 7],
    images: {
      type: 'browser',
      shots: [
        { src: foodhubCardapio, alt: 'Painel do cardápio online do Easy Food Hub, com categorias e produtos' },
        { src: foodhubDesempenho, alt: 'Painel de desempenho do Easy Food Hub com faturamento e pedidos do dia' },
      ],
    },
  },
  {
    id: 'easypdv',
    name: 'Easy PDV',
    icon: ShoppingCart,
    tagLabel: 'Para mercados, lojas e comércio em geral',
    tagline: 'PDV completo para vender rápido, controlar estoque e fechar o caixa certo',
    description:
      'Sistema de ponto de venda para mercados, mercearias, lojas e outros comércios, com caixa, estoque, clientes e fiado — funciona online e continua vendendo mesmo se a internet cair.',
    price: '69,90',
    priceNote: 'por mês',
    features: [
      'Frente de caixa com leitor de código de barras e busca por nome ou código',
      'Venda por peso (kg) e por unidade, com desconto por item ou por venda',
      'Pagamento dividido entre dinheiro, PIX, cartão de débito, crédito e fiado',
      'Abertura e fechamento de caixa com conferência de diferença (esperado x contado)',
      'Estoque com baixa automática na venda, entrada de produtos e alerta de estoque mínimo',
      'Controle de validade, com alerta de produtos próximos do vencimento',
      'Cadastro de clientes com fiado, limite de crédito e cobrança por WhatsApp',
      'Relatórios de faturamento, lucro, ticket médio, formas de pagamento e mais vendidos',
      'Funciona offline e sincroniza na nuvem assim que a internet volta',
    ],
    highlightFeatures: [0, 2, 3, 4, 6],
    images: {
      type: 'browser',
      shots: [
        { src: pdvCaixa, alt: 'Tela de caixa do Easy PDV com carrinho de venda e totais por forma de pagamento' },
        { src: pdvEstoque, alt: 'Tela de estoque do Easy PDV listando produtos, preços e quantidades' },
        { src: pdvRelatorios, alt: 'Tela de relatórios do Easy PDV com faturamento, lucro e produtos mais vendidos' },
      ],
    },
  },
  {
    id: 'easystudio',
    name: 'EasyS Studio',
    icon: Scissors,
    tagLabel: 'Para profissionais da beleza',
    tagline: 'Agenda, clientes e financeiro em um só app para quem vive de beleza',
    description:
      'Feito para lash designer, manicure, esteticista, barbeiro e outros profissionais da beleza organizarem a agenda, os clientes e o financeiro direto do celular — com link próprio para o cliente agendar sozinho.',
    price: '29,90',
    priceNote: 'por mês',
    features: [
      'Agenda em visão de dia, semana e mês, com bloqueio de horário e aviso de conflito',
      'Status do atendimento (pendente, confirmado, concluído) com pagamento registrado na hora',
      'Link público de agendamento, sem o cliente precisar instalar nada ou criar login',
      'Cadastro de clientes com histórico de atendimentos e quanto cada um já gastou',
      'Cadastro de serviços com preço, custo e cor própria na agenda',
      'Controle de estoque de produtos com alerta de estoque mínimo',
      'Financeiro do mês com faturamento, custo, lucro e ticket médio, além do caixa do dia',
      'Relatórios por período com ranking dos serviços mais vendidos',
      'Funciona como app direto do celular (PWA), sem precisar baixar de loja de aplicativo',
    ],
    highlightFeatures: [0, 2, 3, 6, 8],
    images: {
      type: 'phone',
      shots: [
        { src: studioDashboard, alt: 'Painel inicial do EasyS Studio com resumo do dia' },
        { src: studioServicos, alt: 'Lista de serviços cadastrados no EasyS Studio com preços' },
        { src: studioRelatorios, alt: 'Relatório anual do EasyS Studio com faturamento por dia e por serviço' },
      ],
    },
  },
]
