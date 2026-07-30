import { Heart } from 'lucide-react'
import { illustrations } from '../../lib/assets'

export type CustomerArticleContent = 'credit-card' | 'friends'

type ContentConfig = {
  title: string
  readTime: string
  headerBg: string
  image: string
}

const contentConfigs: Record<CustomerArticleContent, ContentConfig> = {
  'credit-card': {
    title: 'How to choose your first credit card',
    readTime: '5 min',
    headerBg: 'bg-green-200',
    image: illustrations.creditCardStory,
  },
  friends: {
    title: 'Friends who started saving together',
    readTime: '7 min',
    headerBg: 'bg-purple-200',
    image: illustrations.friendsStory,
  },
}

type CardCustomerArticleProps = {
  content?: CustomerArticleContent
  title?: string
  readTime?: string
  liked?: boolean
  onLike?: () => void
  className?: string
}

export function CardCustomerArticle({
  content = 'credit-card',
  title,
  readTime,
  liked = false,
  onLike,
  className = '',
}: CardCustomerArticleProps) {
  const config = contentConfigs[content]

  return (
    <article
      className={`flex w-[187px] flex-col overflow-hidden rounded-3xl border border-border bg-white ${className}`}
    >
      <div
        className={`relative flex h-[177px] items-center justify-center overflow-hidden ${config.headerBg}`}
      >
        <img
          src={config.image}
          alt=""
          className="size-full object-cover"
        />
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
