const SYSTEMS = ['Easy Food Hub', 'Easy PDV', 'EasyS Studio']

export function TrustStrip() {
  return (
    <div className="border-y border-border bg-muted/60">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6 py-5 sm:justify-between">
        <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
          Sistemas Easy System em uso
        </span>
        <div className="flex flex-wrap items-center gap-6">
          {SYSTEMS.map((name) => (
            <span key={name} className="font-heading text-sm font-bold text-navy/70">
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
