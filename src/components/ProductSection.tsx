import { Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/Reveal'
import { BrowserFrame, PhoneFrame } from '@/components/DeviceFrame'
import { cn } from '@/lib/utils'
import { waLink, infoMessage } from '@/lib/whatsapp'
import type { Product } from '@/data/products'

const whatsappClass = 'bg-[#25D366] text-white hover:bg-[#1fb959] focus-visible:ring-[#25D366]/50'

export function ProductSection({
  product,
  index,
  onHire,
  onLearnMore,
}: {
  product: Product
  index: number
  onHire: (product: Product) => void
  onLearnMore: (product: Product) => void
}) {
  const reversed = index % 2 === 1
  const Icon = product.icon

  return (
    <div
      id={`produto-${product.id}`}
      className="grid items-center gap-12 py-16 first:pt-0 last:pb-0 lg:grid-cols-2 lg:gap-16"
    >
      <Reveal className={reversed ? 'lg:order-2' : ''}>
        <Badge variant="secondary" className="h-auto gap-1.5 rounded-full px-3 py-1.5 text-xs">
          <Icon className="size-3.5" />
          {product.tagLabel}
        </Badge>
        <h3 className="mt-4 font-heading text-2xl font-extrabold text-navy sm:text-3xl">{product.name}</h3>
        <p className="mt-2 text-base font-medium text-primary">{product.tagline}</p>
        <p className="mt-4 text-muted-foreground">{product.description}</p>

        <ul className="mt-6 flex flex-col gap-2.5">
          {product.features.map((feature, i) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm">
              <Check
                className={cn(
                  'mt-0.5 size-4 shrink-0',
                  product.highlightFeatures.includes(i) ? 'text-primary' : 'text-muted-foreground',
                )}
              />
              <span className={product.highlightFeatures.includes(i) ? 'text-navy' : 'text-muted-foreground'}>
                {feature}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-7 flex items-baseline gap-1.5">
          <span className="font-heading text-3xl font-extrabold text-navy">R$ {product.price}</span>
          <span className="text-sm text-muted-foreground">/ {product.priceNote}</span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={() => onHire(product)} className={cn(buttonVariants({ size: 'lg' }), 'h-11 px-6 text-base')}>
            Contratar agora
          </button>
          <button
            type="button"
            onClick={() => onLearnMore(product)}
            className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'h-11 px-6 text-base')}
          >
            Saber mais
          </button>
          <a
            href={waLink(infoMessage(product.name))}
            target="_blank"
            rel="noopener"
            className={cn(buttonVariants({ variant: 'ghost', size: 'lg' }), whatsappClass, 'h-11 px-6 text-base')}
          >
            Falar no WhatsApp
          </a>
        </div>
      </Reveal>

      <Reveal delay={100} className={reversed ? 'lg:order-1' : ''}>
        {product.images.type === 'phone' ? (
          <PhoneFrame shots={product.images.shots} />
        ) : (
          <BrowserFrame shots={product.images.shots} />
        )}
      </Reveal>
    </div>
  )
}
