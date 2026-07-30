type ProgressBarProps = {
  value: number
  max?: number
  color?: string
  className?: string
}

export function ProgressBar({
  value,
  max = 100,
  color = 'bg-magenta-300',
  className = '',
}: ProgressBarProps) {
  const percent = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div
      className={`h-2 w-full overflow-hidden rounded-full bg-border ${className}`}
    >
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${percent}%` }}
      />
    </div>
  )
}
