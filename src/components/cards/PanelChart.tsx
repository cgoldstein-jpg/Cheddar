import { ChevronDown } from 'lucide-react'
import { splitCurrency } from '../../lib/format'
import { illustrations } from '../../lib/assets'

type Segment = {
  label: string
  amount: number
  color: string
}

type CategoryRow = {
  label: string
  percent: number
  amount: number
  color: string
}

const defaultSegments: Segment[] = [
  { label: 'Travel', amount: 212, color: 'bg-green-400' },
  { label: 'Entertainment', amount: 56, color: 'bg-blue-400' },
  { label: 'Food', amount: 29, color: 'bg-magenta-400' },
  { label: 'Clothes', amount: 16, color: 'bg-purple-400' },
]

const defaultCategories: CategoryRow[] = [
  { label: 'Travel', percent: 65, amount: 212.2, color: 'bg-green-400' },
  { label: 'Entertainment', percent: 17, amount: 56.1, color: 'bg-blue-400' },
  { label: 'Food', percent: 10, amount: 29.34, color: 'bg-magenta-400' },
  { label: 'Clothes', percent: 9, amount: 27.24, color: 'bg-purple-400' },
]

type PanelChartProps = {
  type?: 'segmented-bar' | 'pie'
  segments?: Segment[]
  categories?: CategoryRow[]
  total?: number
  dateRange?: string
  className?: string
}

function SegmentedBarChart({ segments }: { segments: Segment[] }) {
  const total = segments.reduce((sum, s) => sum + s.amount, 0)

  return (
    <>
      <div className="flex h-[104px] w-full items-center gap-1">
        {segments.map((segment) => {
          const flex = segment.amount / total
          return (
            <div
              key={segment.label}
              className={`flex h-full flex-col justify-end overflow-hidden rounded-2xl p-2 ${segment.color}`}
              style={{ flex: `${flex} 1 0` }}
            >
              <p className="text-sm font-medium text-black/80">
                ${segment.amount}
              </p>
            </div>
          )
        })}
      </div>
      <div className="flex flex-wrap gap-4">
        {segments.map((segment) => (
          <div key={segment.label} className="flex items-center gap-1">
            <span className={`size-3 rounded-sm ${segment.color}`} />
            <span className="text-sm font-medium">{segment.label}</span>
          </div>
        ))}
      </div>
    </>
  )
}

function PieChartPanel({
  categories,
  total,
  dateRange,
}: {
  categories: CategoryRow[]
  total: number
  dateRange: string
}) {
  const { dollars, cents } = splitCurrency(total)

  return (
    <>
      <div className="flex w-full items-center justify-between">
        <p className="text-base font-medium">Total Savings</p>
        <button
          type="button"
          className="inline-flex items-center gap-1 rounded-full bg-pink-light px-4 py-2 text-sm font-medium text-link"
        >
          {dateRange}
          <ChevronDown className="size-3" />
        </button>
      </div>
      <div className="relative mx-auto size-[350px]">
        <img
          src={illustrations.pieChartFull}
          alt=""
          className="size-full object-contain"
        />
        <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-start leading-none">
          <span className="font-display text-[64px] font-semibold tracking-[-0.04em]">
            {dollars}
          </span>
          <span className="font-display pt-1 text-[48px] font-medium tracking-[-0.03em]">
            {cents}
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col gap-4">
        {categories.map((category) => (
          <div
            key={category.label}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span
                className={`flex size-8 items-center justify-center rounded-full ${category.color}`}
              >
                <span className="size-3 rounded-full bg-black/20" />
              </span>
              <div>
                <p className="text-base font-medium">{category.label}</p>
                <p className="text-sm font-medium text-muted">
                  {category.percent}%
                </p>
              </div>
            </div>
            <p className="text-base font-medium">
              ${category.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export function PanelChart({
  type = 'segmented-bar',
  segments = defaultSegments,
  categories = defaultCategories,
  total = 324.88,
  dateRange = 'Mar 2–Mar 29',
  className = '',
}: PanelChartProps) {
  return (
    <div
      className={`flex w-full max-w-[382px] flex-col gap-3 rounded-3xl border border-border bg-white p-4 ${className}`}
    >
      {type === 'segmented-bar' ? (
        <SegmentedBarChart segments={segments} />
      ) : (
        <PieChartPanel
          categories={categories}
          total={total}
          dateRange={dateRange}
        />
      )}
    </div>
  )
}
