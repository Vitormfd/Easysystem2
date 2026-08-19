import { Reveal } from '@/components/Reveal'
import logoSymbol from '@/assets/logo/logo-symbol.png'

const STATS = [
  { value: '3', label: 'sistemas prontos' },
  { value: '6', label: 'negócios atendidos' },
  { value: '3', label: 'segmentos diferentes' },
]

export function About() {
  return (
    <section id="sobre" className="bg-muted/60 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <Reveal>
          <span className="text-xs font-semibold tracking-wide text-primary uppercase">Sobre a Easy System</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Tecnologia próxima de quem toca o negócio todos os dias
          </h2>
          <p className="mt-5 text-muted-foreground">
            A Easy System desenvolve soluções digitais para simplificar a gestão de empresas e pequenos negócios.
            Criamos sistemas práticos, intuitivos e focados em resolver problemas reais do dia a dia — de quem
            cuida do caixa, do estoque, da agenda e do delivery com as próprias mãos.
          </p>
          <p className="mt-4 text-muted-foreground">
            Trabalhamos próximos dos comerciantes da nossa região, entendendo de perto a rotina de cada negócio
            antes de sugerir uma solução.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-7">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-2xl font-extrabold text-navy">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-border bg-card p-12 text-center shadow-sm">
            <img src={logoSymbol} alt="" className="h-16 w-auto" />
            <h3 className="font-heading text-xl font-bold text-navy">Easy System</h3>
            <p className="text-sm text-muted-foreground">
              Sistemas de gestão e desenvolvimento sob medida para empresas e pequenos negócios.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
