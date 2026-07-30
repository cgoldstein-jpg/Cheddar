export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount)
}

export function splitCurrency(amount: number): { dollars: string; cents: string } {
  const [dollars, cents = '00'] = amount.toFixed(2).split('.')
  return { dollars: `$${dollars}`, cents: `.${cents}` }
}
