import { Heart } from 'lucide-react'

type CardGuideProps = {
  title?: string
  description?: string
  readTime?: string
  liked?: boolean
  onLike?: () => void
  className?: string
}

export function CardGuide({
  title = 'Savings 101',
  description = 'Learn how to get started with simple savings techniques.',
  readTime = '20 min',
  liked = false,
  onLike,
  className = '',
}: CardGuideProps) {
  return (
    <article
      className={`flex size-[270px] flex-col justify-between overflow-hidden rounded-3xl bg-maroon p-4 ${className}`}
    >
      <h2 className="font-display text-[48px] leading-none tracking-[-0.03em] text-pink">
        {title}
      </h2>
      <div className="flex flex-col gap-2">
        <p className="text-base font-semibold text-white">{description}</p>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-white/60">{readTime}</p>
          <button
            type="button"
            onClick={onLike}
            aria-label={liked ? 'Unlike guide' : 'Like guide'}
            className="text-white/60 transition-colors hover:text-pink"
          >
            <Heart
              className="size-6"
              fill={liked ? 'currentColor' : 'none'}
              strokeWidth={1.75}
            />
          </button>
        </div>
      </div>
    </article>
  )
}
