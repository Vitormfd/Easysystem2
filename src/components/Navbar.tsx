import { useEffect, useState } from 'react'
import { Menu, MessageCircle } from 'lucide-react'
import { Button, buttonVariants } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { waLink, GENERIC_CONTACT_MESSAGE } from '@/lib/whatsapp'
import logoHorizontal from '@/assets/logo/logo-horizontal.png'

const NAV_LINKS = [
  { href: '#inicio', label: 'Início' },
  { href: '#sistemas', label: 'Sistemas' },
  { href: '#personalizado', label: 'Soluções Personalizadas' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#contato', label: 'Contato' },
]

const whatsappClass =
  'bg-[#25D366] text-white hover:bg-[#1fb959] focus-visible:ring-[#25D366]/50'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-all duration-200',
        scrolled ? 'bg-white/90 shadow-sm backdrop-blur-sm' : 'bg-white/0',
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="flex items-center">
          <img src={logoHorizontal} alt="Easy System" className="h-7 w-auto sm:h-8" />
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy/80 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a href="#orcamento" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }))}>
            Solicitar orçamento
          </a>
          <a
            href={waLink(GENERIC_CONTACT_MESSAGE)}
            target="_blank"
            rel="noopener"
            className={cn(buttonVariants({ size: 'lg' }), whatsappClass)}
          >
            <MessageCircle data-icon="inline-start" />
            Falar no WhatsApp
          </a>
        </div>

        <Sheet>
          <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" aria-label="Abrir menu" />}>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="flex items-center border-b border-border p-4">
              <img src={logoHorizontal} alt="Easy System" className="h-7 w-auto" />
            </div>
            <nav className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose key={link.href} render={<a href={link.href} />}>
                  <span className="block rounded-lg px-2 py-2.5 text-base font-medium text-navy hover:bg-muted">
                    {link.label}
                  </span>
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2.5 p-4">
              <a href="#orcamento" className={cn(buttonVariants({ variant: 'outline', size: 'lg' }), 'w-full')}>
                Solicitar orçamento
              </a>
              <a
                href={waLink(GENERIC_CONTACT_MESSAGE)}
                target="_blank"
                rel="noopener"
                className={cn(buttonVariants({ size: 'lg' }), whatsappClass, 'w-full')}
              >
                <MessageCircle data-icon="inline-start" />
                Falar no WhatsApp
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
