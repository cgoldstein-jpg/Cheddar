import { ArrowDown, Send } from 'lucide-react'
import { splitCurrency } from '../../lib/format'
import { illustrations } from '../../lib/assets'

type CardTotalSavingsProps = {
  amount?: number
  onDeposit?: () => void
  onTransfer?: () => void
  className?: string
}

export function CardTotalSavings({
  amount = 194.7,
  onDeposit,
  onTransfer,
  className = '',
}: CardTotalSavingsProps) {
  const { dollars, cents } = splitCurrency(amount)

  return (
    <div
      className={`relative flex h-[255px] w-full max-w-[382px] flex-col justify-between overflow-hidden rounded-3xl bg-maroon p-4 ${className}`}
    >
      <img
        src={illustrations.cheddarLogo}
        alt="Cheddar"
        className="absolute right-4 top-4 h-[43px] w-[58px] object-contain"
      />
      <div className="flex flex-col gap-2 text-pink">
        <p className="text-base font-medium">Total savings</p>
        <div className="flex items-start gap-1 leading-none">
          <p className="font-display text-[64px] font-semibold tracking-[-0.04em]">
            {dollars}
          </p>
          <p className="font-display pt-1 text-[48px] font-medium tracking-[-0.03em]">
            {cents}
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          type="button"
          onClick={onDeposit}
          className="flex min-h-[66px] flex-1 items-center justify-center gap-2 rounded-3xl border border-pink px-8 py-6 text-base font-medium text-pink transition-colors hover:bg-pink/10"
        >
          <ArrowDown className="size-6" strokeWidth={2} />
          Deposit
        </button>
        <button
          type="button"
          onClick={onTransfer}
          className="flex min-h-[66px] flex-1 items-center justify-center gap-2 rounded-3xl border border-pink px-8 py-6 text-base font-medium text-pink transition-colors hover:bg-pink/10"
        >
          <Send className="size-5" strokeWidth={2} />
          Transfer
        </button>
      </div>
    </div>
  )
}
