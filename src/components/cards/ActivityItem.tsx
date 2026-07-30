import { TransactionIcon } from '../ui/TransactionIcon'
import { formatCurrency } from '../../lib/format'

export type ActivityItemProps = {
  type: 'deposit' | 'withdrawal'
  label?: string
  timestamp: string
  amount: number
  className?: string
}

export function ActivityItem({
  type,
  label,
  timestamp,
  amount,
  className = '',
}: ActivityItemProps) {
  const displayLabel = label ?? (type === 'deposit' ? 'Deposit' : 'Withdrawal')
  const isDeposit = type === 'deposit'

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <TransactionIcon type={type} />
      <div className="flex min-w-0 flex-1 items-center justify-between">
        <div className="flex flex-col gap-1">
          <p className="text-base font-medium text-black">{displayLabel}</p>
          <p className="text-sm font-medium text-muted">{timestamp}</p>
        </div>
        {isDeposit ? (
          <span className="rounded-lg bg-pink-light px-1 py-0.5 text-base font-medium text-link">
            {formatCurrency(amount)}
          </span>
        ) : (
          <span className="flex items-center gap-0.5 text-base text-black">
            <span className="font-semibold">–</span>
            <span className="font-medium">{formatCurrency(amount)}</span>
          </span>
        )}
      </div>
    </div>
  )
}
