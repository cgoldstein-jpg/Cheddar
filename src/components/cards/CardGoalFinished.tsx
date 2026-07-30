import { formatCurrency } from '../../lib/format'
import { illustrations } from '../../lib/assets'

export type GoalFinishedVariant = 'skateboard' | 'camera' | 'art-book'

type FinishedConfig = {
  name: string
  amount: number
  headerBg: string
  illustration: string
}

const finishedConfigs: Record<GoalFinishedVariant, FinishedConfig> = {
  skateboard: {
    name: 'Skateboard',
    amount: 120,
    headerBg: 'bg-magenta-400',
    illustration: illustrations.skateboard,
  },
  camera: {
    name: 'Camera',
    amount: 260,
    headerBg: 'bg-blue-400',
    illustration: illustrations.cameraFinished,
  },
  'art-book': {
    name: 'Art Book',
    amount: 80,
    headerBg: 'bg-green-400',
    illustration: illustrations.books,
  },
}

type CardGoalFinishedProps = {
  variant?: GoalFinishedVariant
  name?: string
  amount?: number
  className?: string
}

export function CardGoalFinished({
  variant = 'skateboard',
  name,
  amount,
  className = '',
}: CardGoalFinishedProps) {
  const config = finishedConfigs[variant]

  return (
    <article
      className={`flex w-[159px] flex-col overflow-hidden rounded-3xl border border-border bg-white ${className}`}
    >
      <div
        className={`flex h-32 items-center justify-center ${config.headerBg}`}
      >
        <div className="relative size-[110px]">
          <img
            src={config.illustration}
            alt=""
            className="size-full object-contain"
          />
        </div>
      </div>
      <div className="p-4 text-center">
        <p className="text-base font-semibold">{name ?? config.name}</p>
        <p className="mt-1 text-sm font-medium text-muted">
          {formatCurrency(amount ?? config.amount)}
        </p>
      </div>
    </article>
  )
}
