import { useState } from 'react'
import { Check } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { ProductSection } from '@/components/ProductSection'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'
import { waLink, hireMessage, infoMessage } from '@/lib/whatsapp'
import { products, paymentLinks, type Product } from '@/data/products'

const whatsappClass = 'bg-[#25D366] text-white hover:bg-[#1fb959] focus-visible:ring-[#25D366]/50'

export function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)

  function handleHire(product: Product) {
    const link = paymentLinks[product.id]
    if (link) {
      window.open(link, '_blank', 'noopener')
    } else {
      window.open(waLink(hireMessage(product.name)), '_blank', 'noopener')
    }
  }

  return (
    <section id="sistemas" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold tracking-wide text-primary uppercase">Nossos sistemas</span>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
            Um sistema pronto para cada tipo de negócio
          </h2>
          <p className="mt-4 text-muted-foreground">
            Três soluções completas, já em uso por comércios reais da região. Escolha a que combina com o seu
            negócio, teste e comece a usar.
          </p>
        </Reveal>

        <div className="mt-14 divide-y divide-border">
          {products.map((product, index) => (
            <ProductSection
              key={product.id}
              product={product}
              index={index}
              onHire={handleHire}
              onLearnMore={setActiveProduct}
            />
          ))}
        </div>
      </div>

      <Dialog open={!!activeProduct} onOpenChange={(open) => !open && setActiveProduct(null)}>
        <DialogContent className="sm:max-w-md">
          {activeProduct && (
            <>
              <DialogHeader>
                <Badge variant="secondary" className="h-auto w-fit rounded-full px-3 py-1.5 text-xs">
                  {activeProduct.tagLabel}
                </Badge>
                <DialogTitle className="text-xl">{activeProduct.name}</DialogTitle>
                <p className="text-sm text-muted-foreground">{activeProduct.tagline}</p>
              </DialogHeader>
              <ul className="flex max-h-72 flex-col gap-2.5 overflow-y-auto px-4">
                {activeProduct.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-navy">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2.5 px-4 pb-4 sm:flex-row">
                <button
                  type="button"
                  onClick={() => handleHire(activeProduct)}
                  className={cn(buttonVariants(), 'flex-1')}
                >
                  Contratar agora
                </button>
                <a
                  href={waLink(infoMessage(activeProduct.name))}
                  target="_blank"
                  rel="noopener"
                  className={cn(buttonVariants(), whatsappClass, 'flex-1')}
                >
                  Falar no WhatsApp
                </a>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
