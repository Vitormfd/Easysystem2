import { MessageCircle } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'
import { waLink, GENERIC_CONTACT_MESSAGE } from '@/lib/whatsapp'

const whatsappClass = 'bg-[#25D366] text-white hover:bg-[#1fb959] focus-visible:ring-[#25D366]/50'

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden bg-navy py-20 md:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, color-mix(in oklab, white 10%, transparent) 1.5px, transparent 1.5px)',
          backgroundSize: '26px 26px',
          maskImage: 'radial-gradient(ellipse 70% 60% at 50% 0%, black 0%, transparent 75%)',
        }}
      />
      <Reveal className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Pronto para simplificar a gestão do seu negócio?
        </h2>
        <p className="mt-4 text-white/70">Conheça nossas soluções ou conte para nós o que você precisa.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={waLink(GENERIC_CONTACT_MESSAGE)}
            target="_blank"
            rel="noopener"
            className={cn(buttonVariants({ size: 'lg' }), whatsappClass, 'h-11 px-6 text-base')}
          >
            <MessageCircle data-icon="inline-start" />
            Falar no WhatsApp
          </a>
          <a href="#orcamento" className={cn(buttonVariants({ variant: 'secondary', size: 'lg' }), 'h-11 px-6 text-base')}>
            Solicitar orçamento
          </a>
        </div>
      </Reveal>
    </section>
  )
}
