export function BrowserFrame({
  shots,
  className = '',
}: {
  shots: { src: string; alt: string }[]
  className?: string
}) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {shots.map((shot) => (
        <div
          key={shot.src}
          className="overflow-hidden rounded-xl border border-border bg-card shadow-[0_20px_50px_-25px_rgba(5,23,54,0.35)]"
        >
          <div className="flex items-center gap-1.5 border-b border-border bg-muted px-3 py-2">
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
            <span className="size-2.5 rounded-full bg-border" />
          </div>
          <img src={shot.src} alt={shot.alt} loading="lazy" className="block h-auto w-full" />
        </div>
      ))}
    </div>
  )
}

export function PhoneFrame({
  shots,
  className = '',
}: {
  shots: { src: string; alt: string }[]
  className?: string
}) {
  return (
    <div className={`flex items-end justify-center gap-4 ${className}`}>
      {shots.map((shot, i) => (
        <div
          key={shot.src}
          className={`overflow-hidden rounded-[2rem] border-[6px] border-navy bg-navy shadow-[0_20px_50px_-25px_rgba(5,23,54,0.45)] ${
            i === 0 ? 'w-[46%] shrink-0' : 'hidden w-[27%] shrink-0 sm:block'
          }`}
        >
          <img src={shot.src} alt={shot.alt} loading="lazy" className="block h-auto w-full rounded-[1.4rem]" />
        </div>
      ))}
    </div>
  )
}
