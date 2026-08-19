import { buttonVariants } from '@/components/ui/button'
import { BrowserFrame } from '@/components/DeviceFrame'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'
import pdvRelatorios from '@/assets/img/pdv-relatorios.jpg'

const STATS = [
  { value: '3', label: 'sistemas prontos' },
  { value: '6', label: 'negócios usando hoje' },
  { value: '100%', label: 'foco em negócios locais' },
]

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'radial-gradient(circle, color-mix(in oklab, var(--primary) 14%, transparent) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 60% 50% at 80% 10%, black 0%, transparent 70%)',
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <span className="text-xs font-semibold tracking-wide text-primary uppercase">
            Sistemas de gestão + desenvolvimento sob medida
          </span>
          <h1 className="mt-4 font-heading text-4xl leading-[1.08] font-extrabold tracking-tight text-navy sm:text-5xl">
            Tecnologia simples para <span className="text-primary">fazer seu negócio crescer</span>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-muted-foreground">
            Sistemas completos para gestão do seu negócio e soluções personalizadas desenvolvidas de acordo com a
            sua necessidade.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#sistemas" className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-6 text-base')}>
              Conhecer nossos sistemas
            </a>
            <a href="#orcamento" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-6 text-base')}>
              Solicitar orçamento
            </a>
          </div>
          <div className="mt-11 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-7">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl font-extrabold text-navy">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <BrowserFrame
            shots={[{ src: pdvRelatorios, alt: 'Painel de relatórios do Easy PDV mostrando faturamento e produtos mais vendidos' }]}
          />
        </Reveal>
      </div>
    </section>
  )
}
