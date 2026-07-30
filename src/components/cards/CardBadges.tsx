import { ProgressBar } from '../ui/ProgressBar'
import { badgeIcons } from '../../lib/assets'

export type BadgeVariant = 'finance-nerd' | 'double-down' | 'stack-master'

type BadgeConfig = {
  title: string
  subtitle: string
  progress: number
  progressColor: string
  iconBg: string
  icons: { outer: string; inner: string }
}

const badgeConfigs: Record<BadgeVariant, BadgeConfig> = {
  'finance-nerd': {
    title: 'Finance Nerd',
    subtitle: '8 of 10 Articles read',
    progress: 80,
    progressColor: 'bg-green-300',
    iconBg: 'bg-lime',
    icons: badgeIcons.financeNerd,
  },
  'double-down': {
    title: 'Double Down',
    subtitle: '1 of 2 goals this month',
    progress: 50,
    progressColor: 'bg-blue-300',
    iconBg: 'bg-blue-400',
    icons: badgeIcons.doubleDown,
  },
  'stack-master': {
    title: 'Stack Master',
    subtitle: '$194.70 of $500.00 total savings',
    progress: 39,
    progressColor: 'bg-magenta-300',
    iconBg: 'bg-pink',
    icons: badgeIcons.stackMaster,
  },
}

type CardBadgesProps = {
  variant?: BadgeVariant
  title?: string
  subtitle?: string
  progress?: number
  className?: string
}

export function CardBadges({
  variant = 'finance-nerd',
  title,
  subtitle,
  progress,
  className = '',
}: CardBadgesProps) {
  const config = badgeConfigs[variant]

  return (
    <div
      className={`flex w-full max-w-[382px] items-center gap-2 rounded-3xl border border-border bg-white p-4 ${className}`}
    >
      <div
        className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-border ${config.iconBg}`}
      >
        <img
          src={config.icons.outer}
          alt=""
          className="absolute left-1/2 top-1/2 size-[53px] -translate-x-1/2 -translate-y-1/2"
        />
        <img
          src={config.icons.inner}
          alt=""
          className="absolute left-1/2 top-1/2 h-[26px] w-[25px] -translate-x-1/2 -translate-y-1/2"
        />
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-6">
        <div className="flex flex-col gap-2">
          <p className="text-base font-medium">{title ?? config.title}</p>
          <ProgressBar
            value={progress ?? config.progress}
            color={config.progressColor}
          />
        </div>
        <p className="text-sm font-medium text-muted">
          {subtitle ?? config.subtitle}
        </p>
      </div>
    </div>
  )
}
