import { Check } from 'lucide-react'

type DayStatus = 'completed' | 'pending'

type SavingsStreakProps = {
  days?: { label: string; status: DayStatus }[]
  className?: string
}

const defaultDays: SavingsStreakProps['days'] = [
  { label: 'S', status: 'completed' },
  { label: 'M', status: 'completed' },
  { label: 'T', status: 'completed' },
  { label: 'W', status: 'pending' },
  { label: 'T', status: 'completed' },
  { label: 'F', status: 'completed' },
  { label: 'S', status: 'pending' },
]

function DayIndicator({ status }: { status: DayStatus }) {
  if (status === 'completed') {
    return (
      <div className="flex size-10 items-center justify-center rounded-full border border-border bg-link">
        <Check className="size-4 text-white" strokeWidth={3} />
      </div>
    )
  }

  return (
    <div className="size-10 rounded-full bg-black/5" />
  )
}

export function SavingsStreak({
  days = defaultDays,
  className = '',
}: SavingsStreakProps) {
  return (
    <div
      className={`flex w-full max-w-[382px] flex-col gap-2 rounded-3xl border border-border bg-white p-4 ${className}`}
    >
      <div className="flex items-start justify-between">
        {days?.map((day, index) => (
          <div
            key={`${day.label}-${index}`}
            className="flex w-10 flex-col items-center gap-1"
          >
            <p className="text-sm font-medium text-muted">{day.label}</p>
            <DayIndicator status={day.status} />
          </div>
        ))}
      </div>
    </div>
  )
}
