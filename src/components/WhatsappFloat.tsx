import { MessageCircle } from 'lucide-react'
import { waLink, GENERIC_CONTACT_MESSAGE } from '@/lib/whatsapp'

export function WhatsappFloat() {
  return (
    <a
      href={waLink(GENERIC_CONTACT_MESSAGE)}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 bottom-5 z-30 flex size-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </a>
  )
}
