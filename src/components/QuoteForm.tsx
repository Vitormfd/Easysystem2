import { useRef, useState, type FormEvent } from 'react'
import { Check } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Reveal } from '@/components/Reveal'
import { waLink } from '@/lib/whatsapp'

const TIPOS = ['Sistema personalizado', 'Site', 'Landing Page', 'Automação', 'Outro']

const FAIXAS = [
  'Até R$ 1.000',
  'R$ 1.000 a R$ 3.000',
  'R$ 3.000 a R$ 7.000',
  'Acima de R$ 7.000',
]

const POINTS = [
  'Resposta rápida direto no seu WhatsApp',
  'Sem compromisso — só pra entender sua necessidade',
  'Vale tanto para um sistema pronto quanto para um projeto personalizado',
]

export function QuoteForm() {
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [faixa, setFaixa] = useState('')
  const [tipo, setTipo] = useState('')
  const [descricao, setDescricao] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)
  const successTimeout = useRef<ReturnType<typeof setTimeout>>(undefined)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!nome.trim() || !whatsapp.trim() || !tipo || !descricao.trim()) {
      e.currentTarget.reportValidity()
      return
    }

    const linhas = [
      'Olá! Vim pelo site da Easy System e gostaria de solicitar um orçamento.',
      '',
      `Nome: ${nome.trim()}`,
    ]
    if (empresa.trim()) linhas.push(`Empresa/negócio: ${empresa.trim()}`)
    linhas.push(`WhatsApp: ${whatsapp.trim()}`, `Projeto: ${tipo}`)
    if (faixa) linhas.push(`Faixa de orçamento: ${faixa}`)
    linhas.push('', 'Descrição:', descricao.trim())

    window.open(waLink(linhas.join('\n')), '_blank', 'noopener')

    setNome('')
    setEmpresa('')
    setWhatsapp('')
    setFaixa('')
    setTipo('')
    setDescricao('')
    setShowSuccess(true)
    clearTimeout(successTimeout.current)
    successTimeout.current = setTimeout(() => setShowSuccess(false), 8000)
  }

  return (
    <section id="orcamento" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <span className="text-xs font-semibold tracking-wide text-primary uppercase">Fale com a gente</span>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Solicite um orçamento
            </h2>
            <p className="mt-4 text-muted-foreground">
              Conte rapidamente o que você precisa. Ao enviar, abrimos o WhatsApp com uma mensagem já organizada
              para agilizar o seu atendimento.
            </p>
            <ul className="mt-7 flex flex-col gap-3">
              {POINTS.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span className="text-navy">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={100}>
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="f-nome">Nome</Label>
                  <Input id="f-nome" required placeholder="Seu nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="f-empresa">Empresa ou negócio</Label>
                  <Input id="f-empresa" placeholder="Nome do seu negócio" value={empresa} onChange={(e) => setEmpresa(e.target.value)} />
                </div>
              </div>

              <div className="mt-5 grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="f-whatsapp">WhatsApp</Label>
                  <Input
                    id="f-whatsapp"
                    type="tel"
                    required
                    placeholder="(00) 00000-0000"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="f-faixa">
                    Faixa de orçamento <span className="font-normal text-muted-foreground">(opcional)</span>
                  </Label>
                  <Select value={faixa} onValueChange={(value) => setFaixa(value ?? '')}>
                    <SelectTrigger id="f-faixa" className="w-full">
                      <SelectValue placeholder="Prefiro não informar" />
                    </SelectTrigger>
                    <SelectContent>
                      {FAIXAS.map((f) => (
                        <SelectItem key={f} value={f}>
                          {f}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <Label>O que você precisa?</Label>
                <ToggleGroup
                  variant="outline"
                  value={tipo ? [tipo] : []}
                  onValueChange={(value: string[]) => setTipo(value[0] ?? '')}
                  className="flex-wrap justify-start"
                >
                  {TIPOS.map((t) => (
                    <ToggleGroupItem key={t} value={t} className="rounded-full px-4 text-sm data-[state=on]:bg-primary data-[state=on]:text-primary-foreground">
                      {t}
                    </ToggleGroupItem>
                  ))}
                </ToggleGroup>
              </div>

              <div className="mt-5 flex flex-col gap-2">
                <Label htmlFor="f-descricao">Conte um pouco sobre o que você precisa</Label>
                <Textarea
                  id="f-descricao"
                  required
                  rows={4}
                  placeholder="Explique rapidamente como você imagina o sistema ou site e quais problemas deseja resolver."
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>

              <Button type="submit" size="lg" className="mt-6 h-11 w-full text-base">
                Solicitar orçamento
              </Button>
              <p className="mt-3 text-center text-xs text-muted-foreground">
                Ao enviar, o WhatsApp abre automaticamente com sua mensagem pronta para envio.
              </p>
              {showSuccess && (
                <p className="mt-3 rounded-lg bg-primary/10 px-3 py-2 text-center text-sm font-medium text-primary">
                  Mensagem pronta! Se o WhatsApp não abriu automaticamente, verifique as permissões de pop-up do
                  seu navegador.
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
