import { Reveal } from '@/components/Reveal'

const STEPS = [
  { title: 'Conte o que você precisa', description: 'Você fala com a gente pelo site ou direto pelo WhatsApp.' },
  { title: 'Entendemos seu negócio', description: 'Analisamos a sua necessidade e buscamos a melhor solução disponível.' },
  { title: 'Escolha uma solução', description: 'Podemos implantar um dos nossos sistemas prontos ou desenvolver um projeto específico.' },
  { title: 'Colocamos para funcionar', description: 'Implantação e suporte para você começar a usar sem dor de cabeça.' },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-wide text-primary uppercase">Como funciona</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Do primeiro contato ao sistema funcionando
          </h2>
          <p className="mt-4 text-muted-foreground">
            Um processo simples, sem burocracia, para você começar a usar o quanto antes.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="absolute top-5 right-0 left-0 hidden h-px bg-border lg:block" aria-hidden />
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100} className="relative">
              <div className="flex size-10 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-primary-foreground">
                {i + 1}
              </div>
              <h3 className="mt-4 font-heading text-lg font-bold text-navy">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
