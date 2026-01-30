import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function OpeningScreen() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-between p-6">
      {/* Sparkle decoration */}
      <div className="absolute top-16 right-8">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 0L26.472 17.528L24 48L21.528 17.528L24 0Z" fill="black"/>
          <path d="M48 24L30.472 26.472L0 24L30.472 21.528L48 24Z" fill="black"/>
        </svg>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-md w-full">
        {/* Illustration */}
        <div className="mb-12">
          <svg width="240" height="240" viewBox="0 0 240 240" fill="none">
            <g opacity="0.1">
              <circle cx="120" cy="120" r="100" fill="#E5E7EB"/>
            </g>
            {/* Abstract sparkle shape */}
            <path d="M120 40C120 40 140 80 180 100C140 120 120 160 120 160C120 160 100 120 60 100C100 80 120 40 120 40Z"
              stroke="black" strokeWidth="2" fill="none"/>
            <path d="M100 60C100 60 110 80 130 90C110 100 100 120 100 120C100 120 90 100 70 90C90 80 100 60 100 60Z"
              stroke="black" strokeWidth="2" fill="none"/>
            {/* Small sparkles */}
            <circle cx="60" cy="80" r="3" fill="black"/>
            <circle cx="160" cy="140" r="3" fill="black"/>
            <path d="M180 70L182 75L180 80L178 75L180 70Z" fill="black"/>
            <path d="M180 70L185 72L180 74L175 72L180 70Z" fill="black"/>
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-3xl font-bold text-black mb-3 text-center">
          Explore the app
        </h1>
        <p className="text-base text-gray-500 text-center mb-12 px-4">
          Now your finances are in one place<br />
          and always under control
        </p>

        {/* Buttons */}
        <div className="w-full space-y-4">
          <Button variant="primary" onClick={() => navigate('/login')}>
            Sign In
          </Button>
          <Button variant="secondary" onClick={() => navigate('/signup')}>
            Create account
          </Button>
        </div>
      </div>
    </div>
  );
}
