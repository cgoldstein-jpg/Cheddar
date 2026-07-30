import { formatCurrency } from '../../lib/format'

type GoalLine = {
  name: string
  amount: number
}

type CardGoalSummaryProps = {
  goals?: GoalLine[]
  total?: number
  className?: string
}

const defaultGoals: GoalLine[] = [
  { name: 'Headphones', amount: 76.5 },
  { name: 'Sneakers', amount: 100 },
  { name: 'Ski Trip', amount: 18.2 },
]

export function CardGoalSummary({
  goals = defaultGoals,
  total = 194.7,
  className = '',
}: CardGoalSummaryProps) {
  return (
    <div
      className={`flex w-full max-w-[382px] flex-col gap-4 rounded-3xl border border-border bg-white p-4 ${className}`}
    >
      <div className="flex flex-col gap-2">
        {goals.map((goal) => (
          <div
            key={goal.name}
            className="flex items-center justify-between text-base"
          >
            <p className="font-medium">{goal.name}</p>
            <p className="font-semibold">{formatCurrency(goal.amount)}</p>
          </div>
        ))}
      </div>
      <hr className="border-border" />
      <div className="flex items-center justify-between text-base">
        <p className="font-medium">Total savings</p>
        <p className="font-semibold">{formatCurrency(total)}</p>
      </div>
    </div>
  )
}
