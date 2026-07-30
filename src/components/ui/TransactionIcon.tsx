import { ArrowDown, ArrowUp } from 'lucide-react'

type TransactionIconProps = {
  type: 'deposit' | 'withdrawal'
  className?: string
}

export function TransactionIcon({ type, className = '' }: TransactionIconProps) {
  const Icon = type === 'deposit' ? ArrowDown : ArrowUp

  return (
    <div
      className={`flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-pink-light ${className}`}
    >
      <Icon className="size-5 text-link" strokeWidth={2.5} />
    </div>
  )
}
