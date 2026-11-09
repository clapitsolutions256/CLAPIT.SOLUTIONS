import { cn } from '@/utilities/ui'
import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer',
  {
    defaultVariants: {
      size: 'default',
      variant: 'default',
    },
    variants: {
      size: {
        clear: '',
        default: 'h-11 px-5',
        icon: 'h-11 w-11',
        lg: 'h-12 px-7 text-base',
        sm: 'h-9 px-4',
      },
      variant: {
        // Brand red: the one primary action per view
        default: 'bg-secondary text-white hover:bg-brand-600',
        dark: 'bg-ink text-white hover:bg-ink-700',
        outline: 'border border-zinc-300 bg-white text-ink hover:border-ink hover:bg-zinc-50',
        'outline-light': 'border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15',
        ghost: 'text-ink hover:bg-zinc-100',
        link: 'h-auto px-0 text-secondary underline-offset-4 hover:underline',
        secondary: 'bg-secondary text-white hover:bg-brand-600',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
      },
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  ref?: React.Ref<HTMLButtonElement>
}

const Button: React.FC<ButtonProps> = ({
  asChild = false,
  className,
  size,
  variant,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({ size, variant }), className)} ref={ref} {...props} />
}

export { Button, buttonVariants }
