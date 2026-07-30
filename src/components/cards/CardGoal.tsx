import { ProgressBar } from '../ui/ProgressBar'
import { formatCurrency } from '../../lib/format'
import { illustrations } from '../../lib/assets'

export type GoalVariant = 'headphones' | 'sneakers' | 'ski-trip' | 'goal-reached'

type GoalConfig = {
  name: string
  target: number
  saved: number
  illustration: string
  iconBg: string
  progressColor: string
  reached?: boolean
}

const goalConfigs: Record<GoalVariant, GoalConfig> = {
  headphones: {
    name: 'Headphones',
    target: 280,
    saved: 76.5,
    illustration: illustrations.headphones,
    iconBg: 'bg-magenta-500',
    progressColor: 'bg-magenta-300',
  },
  sneakers: {
    name: 'Sneakers',
    target: 120,
    saved: 100,
    illustration: illustrations.sneaker,
    iconBg: 'bg-purple-500',
    progressColor: 'bg-purple-300',
  },
  'ski-trip': {
    name: 'Freshman Trip',
    target: 500,
    saved: 18.2,
    illustration: illustrations.goggles,
    iconBg: 'bg-lime',
    progressColor: 'bg-green-300',
  },
  'goal-reached': {
    name: 'Camera',
    target: 500,
    saved: 500,
    illustration: illustrations.camera,
    iconBg: 'bg-sky-500',
    progressColor: 'bg-blue-300',
    reached: true,
  },
}

type CardGoalProps = {
  variant?: GoalVariant
  name?: string
  target?: number
  saved?: number
  className?: string
}

export function CardGoal({
  variant = 'headphones',
  name,
  target,
  saved,
  className = '',
}: CardGoalProps) {
  const config = goalConfigs[variant]
  const displayName = name ?? config.name
  const displayTarget = target ?? config.target
  const displaySaved = saved ?? config.saved
  const remaining = Math.max(0, displayTarget - displaySaved)
  const isReached = config.reached ?? displaySaved >= displayTarget

  return (
    <div
      className={`flex w-full max-w-[382px] items-center gap-2 rounded-3xl border border-border bg-white p-4 ${className}`}
    >
      <div
        className={`relative size-14 shrink-0 overflow-hidden rounded-xl border border-border ${config.iconBg}`}
      >
        <img
          src={config.illustration}
          alt=""
          className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 object-contain"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1">
        <div className="flex items-start justify-between gap-2 text-base font-medium">
          <p className="min-w-0 flex-1">{displayName}</p>
          <p className="shrink-0 whitespace-nowrap">{formatCurrency(displayTarget)}</p>
        </div>
        <ProgressBar
          value={displaySaved}
          max={displayTarget}
          color={config.progressColor}
        />
        <div className="flex items-start justify-between gap-2 text-sm font-medium text-muted">
          {isReached ? (
            <p className="flex-1">Goal reached!</p>
          ) : (
            <>
              <p>{formatCurrency(displaySaved)}</p>
              <p className="whitespace-nowrap">{formatCurrency(remaining)}</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
