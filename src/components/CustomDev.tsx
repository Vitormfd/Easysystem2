import { LayoutDashboard, Globe } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'

const CARDS = [
  {
    icon: LayoutDashboard,
    title: 'Sistemas personalizados',
    description: 'Para empresas que precisam de algo feito sob medida, além dos nossos sistemas prontos.',
    tags: [
      'Gestão e administrativo',
      'Dashboards',
      'Automações',
      'Controle financeiro',
      'Controle de clientes',
      'Estoque e vendas',
      'Agendamentos',
      'Pedidos',
      'Integrações',
    ],
  },
  {
    icon: Globe,
    title: 'Sites',
    description: 'Desenvolvimento de sites e páginas para apresentar a sua empresa e vender mais.',
    tags: [
      'Sites institucionais',
      'Landing pages',
      'Páginas de vendas',
      'Sites para empresas',
      'Cardápios digitais',
      'Páginas de apresentação',
      'Outros projetos web',
    ],
  },
]

export function CustomDev() {
  return (
    <section id="personalizado" className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-wide text-primary uppercase">
            Desenvolvimento sob medida
          </span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Não encontrou o que precisa? Nós desenvolvemos para você.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Quando um sistema pronto não resolve, a Easy System também desenvolve projetos personalizados — do
            zero, focados no que o seu negócio realmente precisa.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CARDS.map((card, i) => (
            <Reveal key={card.title} delay={i * 100}>
              <Card className="h-full gap-0 p-8">
                <CardContent className="flex h-full flex-col p-0">
                  <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <card.icon className="size-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-navy">{card.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="h-auto rounded-full px-2.5 py-1 font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <a
                    href="#orcamento"
                    className={cn(buttonVariants(), 'mt-7 h-10 self-start px-5')}
                  >
                    Solicitar orçamento
                  </a>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
