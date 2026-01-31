import clsx from 'clsx'

interface StarDecorationProps {
  variant?: 'large' | 'small' | 'filled'
  className?: string
}

export function StarDecoration({ variant = 'large', className }: StarDecorationProps) {
  if (variant === 'filled') {
    return (
      <svg
        className={clsx('', className)}
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 0C24 13.2548 13.2548 24 0 24C13.2548 24 24 34.7452 24 48C24 34.7452 34.7452 24 48 24C34.7452 24 24 13.2548 24 0Z"
          fill="black"
        />
      </svg>
    )
  }

  if (variant === 'small') {
    return (
      <svg
        className={clsx('', className)}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0.5C10 5.74671 5.74671 10 0.5 10C5.74671 10 10 14.2533 10 19.5C10 14.2533 14.2533 10 19.5 10C14.2533 10 10 5.74671 10 0.5Z"
          stroke="black"
          strokeWidth="1"
        />
      </svg>
    )
  }

  return (
    <svg
      className={clsx('', className)}
      width="120"
      height="120"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60 0C60 33.1371 33.1371 60 0 60C33.1371 60 60 86.8629 60 120C60 86.8629 86.8629 60 120 60C86.8629 60 60 33.1371 60 0Z"
        stroke="black"
        strokeWidth="1"
        fill="white"
      />
    </svg>
  )
}

export function StarIllustration({ className }: { className?: string }) {
  return (
    <div className={clsx('relative', className)}>
      {/* Main stars group */}
      <div className="relative w-[280px] h-[280px]">
        {/* Large star - top left */}
        <svg
          className="absolute left-8 top-4"
          width="130"
          height="140"
          viewBox="0 0 130 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M65 0C65 38.66 33.66 70 0 70C33.66 70 65 101.34 65 140C65 101.34 96.34 70 130 70C96.34 70 65 38.66 65 0Z"
            stroke="black"
            strokeWidth="1"
            fill="white"
          />
        </svg>

        {/* Large star - bottom center */}
        <svg
          className="absolute left-[70px] top-[80px]"
          width="160"
          height="180"
          viewBox="0 0 160 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M80 0C80 49.71 43.71 90 0 90C43.71 90 80 130.29 80 180C80 130.29 116.29 90 160 90C116.29 90 80 49.71 80 0Z"
            stroke="black"
            strokeWidth="1"
            fill="white"
          />
        </svg>

        {/* Small star - top left */}
        <svg
          className="absolute left-0 top-[60px]"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z"
            stroke="black"
            strokeWidth="1"
          />
        </svg>

        {/* Small star - top right */}
        <svg
          className="absolute right-[30px] top-0"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 0C14 7.732 7.732 14 0 14C7.732 14 14 20.268 14 28C14 20.268 20.268 14 28 14C20.268 14 14 7.732 14 0Z"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
      </div>
    </div>
  )
}
