import { MessageCircle } from 'lucide-react'
import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { waLink, GENERIC_CONTACT_MESSAGE, CONTACT } from '@/lib/whatsapp'
import logoHorizontal from '@/assets/logo/logo-horizontal.png'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <img src={logoHorizontal} alt="Easy System" className="h-7 w-auto" />
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              Sistemas de gestão prontos e desenvolvimento de sistemas e sites sob medida para empresas e pequenos
              negócios.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener"
                aria-label="Instagram da Easy System"
                className="flex size-9 items-center justify-center rounded-full border border-border text-navy transition-colors hover:border-primary hover:text-primary"
              >
                <InstagramIcon className="size-4" />
              </a>
              <a
                href={waLink(GENERIC_CONTACT_MESSAGE)}
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp da Easy System"
                className="flex size-9 items-center justify-center rounded-full border border-border text-navy transition-colors hover:border-primary hover:text-primary"
              >
                <MessageCircle className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-navy">Navegação</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li><a href="#inicio" className="hover:text-primary">Início</a></li>
              <li><a href="#sistemas" className="hover:text-primary">Sistemas</a></li>
              <li><a href="#orcamento" className="hover:text-primary">Orçamento</a></li>
              <li><a href="#contato" className="hover:text-primary">Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold text-navy">Contato</h4>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted-foreground">
              <li>
                <a href={waLink(GENERIC_CONTACT_MESSAGE)} target="_blank" rel="noopener" className="hover:text-primary">
                  WhatsApp: (74) 99934-8744
                </a>
              </li>
              <li>
                <a href={CONTACT.instagramUrl} target="_blank" rel="noopener" className="hover:text-primary">
                  Instagram: {CONTACT.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Easy System. Todos os direitos reservados.</span>
          <span>Sistemas e soluções para empresas.</span>
        </div>
      </div>
    </footer>
  )
}
