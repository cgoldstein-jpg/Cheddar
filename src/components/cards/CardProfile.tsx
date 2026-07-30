import { illustrations } from '../../lib/assets'

type CardProfileProps = {
  name?: string
  handle?: string
  onEdit?: () => void
  onShare?: () => void
  className?: string
}

export function CardProfile({
  name = 'Jamie K.',
  handle = '@jamieh',
  onEdit,
  onShare,
  className = '',
}: CardProfileProps) {
  return (
    <div
      className={`flex h-[310px] w-full max-w-[382px] flex-col justify-between rounded-3xl bg-maroon p-4 ${className}`}
    >
      <div className="flex flex-col items-center gap-4 pt-2">
        <div className="relative size-20">
          <img
            src={illustrations.avatar}
            alt=""
            className="size-full rounded-full object-cover"
          />
        </div>
        <div className="text-center">
          <p className="font-display text-[48px] leading-none tracking-[-0.03em] text-pink">
            {name}
          </p>
          <p className="mt-1 text-base font-medium text-white/60">{handle}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onEdit}
          className="flex min-h-[66px] flex-1 items-center justify-center rounded-3xl border border-pink text-base font-medium text-pink transition-colors hover:bg-pink/10"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={onShare}
          className="flex min-h-[66px] flex-1 items-center justify-center rounded-3xl border border-pink text-base font-medium text-pink transition-colors hover:bg-pink/10"
        >
          Share
        </button>
      </div>
    </div>
  )
}
