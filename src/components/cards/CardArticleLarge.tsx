import { Button } from '../ui/Button'
import { illustrations } from '../../lib/assets'

type CardArticleLargeProps = {
  title?: string
  description?: string
  actionLabel?: string
  onAction?: () => void
  className?: string
}

export function CardArticleLarge({
  title = 'How to decide what to save for',
  description = 'With so much noise, figure out what\u2019s actually worth saving and what you can let go of.',
  actionLabel = 'Read more',
  onAction,
  className = '',
}: CardArticleLargeProps) {
  return (
    <article
      className={`flex h-[535px] w-full max-w-[382px] flex-col items-center justify-center gap-8 overflow-hidden rounded-3xl bg-maroon px-4 pb-4 pt-8 ${className}`}
    >
      <div className="relative size-[200px]">
        <img
          src={illustrations.piggyBankShape}
          alt=""
          className="absolute inset-0 size-full"
        />
        <img
          src={illustrations.piggyBank}
          alt=""
          className="absolute left-1/2 top-[10px] size-[185px] -translate-x-1/2 object-contain"
        />
      </div>
      <div className="flex flex-col gap-4 text-center">
        <h2 className="font-display text-[48px] leading-none tracking-[-0.03em] text-pink">
          {title}
        </h2>
        <p className="text-base font-medium text-white">{description}</p>
      </div>
      <Button variant="primary" onClick={onAction} className="w-full">
        {actionLabel}
      </Button>
    </article>
  )
}
