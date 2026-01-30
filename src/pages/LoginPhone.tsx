import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import BackButton from '../components/ui/BackButton';

export default function LoginPhone() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate('/login-phone-code');
  };

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
      <div className="max-w-md w-full mx-auto flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between pt-4 pb-12">
          <BackButton />
          <div className="absolute top-12 right-8">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 0L26.472 17.528L24 48L21.528 17.528L24 0Z" fill="black"/>
              <path d="M48 24L30.472 26.472L0 24L30.472 21.528L48 24Z" fill="black"/>
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-black mb-3">
          Log in with<br />phone number
        </h1>
        <p className="text-base text-gray-500 mb-12">
          We'll send you a code to verify
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="flex-1">
            <Input
              label="Phone number"
              type="tel"
              placeholder="+33 2 94 27 84 11"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <Button type="submit" loading={loading}>
            Send code
          </Button>
        </form>
      </div>
    </div>
  );
}
