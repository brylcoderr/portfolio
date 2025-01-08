import { cva } from 'class-variance-authority'

export const containerStyle = cva([
  'container',
  'mx-auto',
  'px-4',
  'sm:px-6',
  'lg:px-8'
])

export const sectionStyle = cva([
  'py-16',
  'md:py-24',
  'lg:py-32'
])

export const headingStyle = cva([
  'text-3xl',
  'font-bold',
  'tracking-tight',
  'sm:text-4xl',
  'md:text-5xl'
])

export const subheadingStyle = cva([
  'mt-4',
  'text-xl',
  'text-muted-foreground'
])

export const cardStyle = cva([
  'rounded-lg',
  'border',
  'bg-card',
  'text-card-foreground',
  'shadow-sm'
])

export const buttonStyle = cva([
  'inline-flex',
  'items-center',
  'justify-center',
  'rounded-md',
  'text-sm',
  'font-medium',
  'transition-colors',
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-ring',
  'focus-visible:ring-offset-2',
  'disabled:opacity-50',
  'disabled:pointer-events-none',
  'ring-offset-background'
], {
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'h-10 py-2 px-4',
      sm: 'h-9 px-3 rounded-md',
      lg: 'h-11 px-8 rounded-md',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export const gridStyle = cva([
  'grid',
  'gap-6',
  'sm:grid-cols-2',
  'lg:grid-cols-3'
])

export const flexCenterStyle = cva([
  'flex',
  'items-center',
  'justify-center'
])

export const textInputStyle = cva([
  'flex',
  'h-10',
  'w-full',
  'rounded-md',
  'border',
  'border-input',
  'bg-transparent',
  'px-3',
  'py-2',
  'text-sm',
  'ring-offset-background',
  'file:border-0',
  'file:bg-transparent',
  'file:text-sm',
  'file:font-medium',
  'placeholder:text-muted-foreground',
  'focus-visible:outline-none',
  'focus-visible:ring-2',
  'focus-visible:ring-ring',
  'focus-visible:ring-offset-2',
  'disabled:cursor-not-allowed',
  'disabled:opacity-50'
])

export const labelStyle = cva([
  'text-sm',
  'font-medium',
  'leading-none',
  'peer-disabled:cursor-not-allowed',
  'peer-disabled:opacity-70'
])

export const skillBubbleStyle = cva([
  'bg-primary',
  'text-primary-foreground',
  'rounded-full',
  'p-4',
  'text-center',
  'font-bold',
  'transition-all',
  'duration-300',
  'ease-in-out',
  'hover:scale-110'
])

export const skillDescriptionStyle = cva([
  'absolute',
  'top-full',
  'left-1/2',
  'transform',
  '-translate-x-1/2',
  'mt-2',
  'p-2',
  'bg-secondary',
  'text-secondary-foreground',
  'rounded',
  'shadow-lg',
  'text-sm',
  'w-48',
  'z-10',
  'opacity-0',
  'transition-all',
  'duration-300',
  'ease-in-out'
])

