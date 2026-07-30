import { formatCurrency } from '../../lib/format'
import { illustrations } from '../../lib/assets'

type CardAccountProps = {
  name?: string
  balance?: number
  accountType?: string
  lastUpdated?: string
  className?: string
}

export function CardAccount({
  name = 'Starter Account',
  balance = 1020.22,
  accountType = 'Checking ••••0999',
  lastUpdated = '1 day ago',
  className = '',
}: CardAccountProps) {
  return (
    <div className={`w-full max-w-[382px] ${className}`}>
      <div className="flex items-center gap-3 rounded-3xl border border-border bg-white p-4">
        <div className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-black bg-magenta-500">
          <img
            src={illustrations.cheddarLogo}
            alt=""
            className="h-5 w-7 object-contain"
          />
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between text-base">
            <p className="font-medium">{name}</p>
            <p className="font-semibold">{formatCurrency(balance)}</p>
          </div>
          <div className="mt-1 flex items-center justify-between text-sm font-medium text-muted">
            <p>{accountType}</p>
            <p>{lastUpdated}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
