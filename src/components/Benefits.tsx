import { Boxes, Sparkles, Cloud, Headset, Wrench } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Reveal } from '@/components/Reveal'

const BENEFITS = [
  {
    icon: Boxes,
    title: 'Feito para o seu negócio',
    description: 'Soluções práticas pensadas na rotina real de restaurantes, comércios e salões — não um sistema genérico.',
  },
  {
    icon: Sparkles,
    title: 'Fácil de usar',
    description: 'Interfaces simples, para que qualquer pessoa da equipe consiga usar sem complicação, sem treinamento longo.',
  },
  {
    icon: Cloud,
    title: 'Acesso online',
    description: 'Acompanhe seu negócio de diferentes dispositivos, quando aplicável — sem depender de estar no balcão.',
  },
  {
    icon: Headset,
    title: 'Suporte próximo',
    description: 'Contato direto com quem desenvolveu o sistema, para implantação e suporte de verdade — sem SAC genérico.',
  },
  {
    icon: Wrench,
    title: 'Soluções personalizadas',
    description: 'Se um sistema pronto não resolve, desenvolvemos uma solução específica para o seu caso.',
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-wide text-primary uppercase">Por que a Easy System</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Feito para a rotina real do seu negócio
          </h2>
          <p className="mt-4 text-muted-foreground">
            Sistemas simples de usar, pensados para quem toca o dia a dia do comércio — não só para quem entende
            de tecnologia.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map((benefit, i) => (
            <Reveal key={benefit.title} delay={(i % 3) * 80}>
              <Card className="h-full gap-0 p-7">
                <CardContent className="p-0">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <benefit.icon className="size-5" />
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-navy">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
