import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'secondary-outline'
type ButtonSize = 'large' | 'medium'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
  size?: ButtonSize
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-pink text-maroon hover:bg-pink/90',
  secondary: 'bg-maroon text-pink hover:bg-maroon/90',
  'secondary-outline':
    'border border-pink bg-transparent text-pink hover:bg-pink/10',
}

const sizeClasses: Record<ButtonSize, string> = {
  large: 'min-h-[66px] rounded-3xl px-8 py-6 text-base',
  medium: 'rounded-full px-4 py-2 text-sm',
}

export function Button({
  variant = 'primary',
  size = 'large',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={[
        'inline-flex items-center justify-center gap-2 font-medium transition-colors',
        sizeClasses[size],
        variantClasses[variant],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
