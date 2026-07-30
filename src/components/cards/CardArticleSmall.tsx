import { Heart } from 'lucide-react'
import { illustrations } from '../../lib/assets'

export type ArticleTopic = 'credit' | 'expenses' | '5030' | 'emergency'

type ArticleConfig = {
  title: string
  readTime: string
  headerBg: string
  illustration: string
}

const articleConfigs: Record<ArticleTopic, ArticleConfig> = {
  credit: {
    title: 'How to choose your first credit card',
    readTime: '5 min',
    headerBg: 'bg-green-400',
    illustration: illustrations.coin,
  },
  expenses: {
    title: 'Cut expenses without cutting joy',
    readTime: '5 min',
    headerBg: 'bg-magenta-400',
    illustration: illustrations.partyPopper,
  },
  '5030': {
    title: 'Save more with the 50/30/20 rule',
    readTime: '5 min',
    headerBg: 'bg-blue-400',
    illustration: illustrations.pieChart,
  },
  emergency: {
    title: 'The importance of an emergency fund',
    readTime: '5 min',
    headerBg: 'bg-purple-400',
    illustration: illustrations.wallet,
  },
}

type CardArticleSmallProps = {
  topic?: ArticleTopic
  title?: string
  readTime?: string
  liked?: boolean
  onLike?: () => void
  className?: string
}

export function CardArticleSmall({
  topic = 'credit',
  title,
  readTime,
  liked = false,
  onLike,
  className = '',
}: CardArticleSmallProps) {
  const config = articleConfigs[topic]

  return (
    <article
      className={`flex w-[187px] flex-col overflow-hidden rounded-3xl border border-border bg-white ${className}`}
    >
      <div
        className={`flex h-[150px] items-center justify-center ${config.headerBg}`}
      >
        <div className="relative size-[110px]">
          <img
            src={config.illustration}
            alt=""
            className="size-full object-contain"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h3 className="text-base font-semibold leading-snug">
          {title ?? config.title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium text-muted">
            {readTime ?? config.readTime}
          </p>
          <button
            type="button"
            onClick={onLike}
            aria-label={liked ? 'Unlike article' : 'Like article'}
            className="text-muted transition-colors hover:text-link"
          >
            <Heart
              className="size-5"
              fill={liked ? 'currentColor' : 'none'}
              strokeWidth={1.75}
            />
          </button>
        </div>
      </div>
    </article>
  )
}
