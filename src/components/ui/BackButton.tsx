import { useNavigate } from 'react-router-dom'

interface BackButtonProps {
  onClick?: () => void
}

export function BackButton({ onClick }: BackButtonProps) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (onClick) {
      onClick()
    } else {
      navigate(-1)
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-10 h-10 flex items-center justify-center rounded-[10px] border border-[#D8DADC] bg-white hover:bg-gray-50 transition-colors duration-150"
    >
      <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1L1 7L7 13" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  )
}
