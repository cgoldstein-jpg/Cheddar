import type { ReactNode } from 'react'
import { ActivityItem, type ActivityItemProps } from './ActivityItem'

type CardActivityProps = {
  items?: ActivityItemProps[]
  children?: ReactNode
  className?: string
}

const defaultItems: ActivityItemProps[] = [
  { type: 'deposit', timestamp: 'Today, 11:17am', amount: 20 },
  { type: 'deposit', timestamp: 'Today, 1:34pm', amount: 45 },
  { type: 'withdrawal', timestamp: 'Mon, 8:22am', amount: 13.75 },
  { type: 'deposit', timestamp: 'Sat, 11:00am', amount: 16 },
  { type: 'withdrawal', timestamp: 'Thu, 1:15pm', amount: 7 },
  { type: 'deposit', timestamp: 'Wed, 9:02am', amount: 25 },
  { type: 'deposit', timestamp: 'Tue, 4:15pm', amount: 32 },
]

export function CardActivity({
  items = defaultItems,
  children,
  className = '',
}: CardActivityProps) {
  return (
    <div
      className={`flex w-full max-w-[382px] flex-col gap-6 rounded-3xl border border-border bg-white px-4 py-6 ${className}`}
    >
      <div className="flex w-full flex-col gap-6">
        {children ??
          items.map((item, index) => (
            <ActivityItem key={`${item.type}-${item.timestamp}-${index}`} {...item} />
          ))}
      </div>
    </div>
  )
}
