import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';

export default function PasswordChanged() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col items-center justify-center">
      <div className="max-w-md w-full mx-auto text-center">
        {/* Success Icon */}
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M10 24L20 34L38 14" stroke="#10B981" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>

        {/* Text */}
        <h1 className="text-3xl font-bold text-black mb-3">
          Password changed!
        </h1>
        <p className="text-base text-gray-500 mb-12">
          Your password has been changed<br />
          successfully
        </p>

        {/* Button */}
        <Button onClick={() => navigate('/login')}>
          Back to Login
        </Button>
      </div>
    </div>
  );
}
