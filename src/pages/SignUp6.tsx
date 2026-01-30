import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CodeInput from '../components/ui/CodeInput';
import Button from '../components/ui/Button';
import BackButton from '../components/ui/BackButton';

export default function SignUp6() {
  const navigate = useNavigate();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (code.length !== 5) return;

    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    navigate('/choose-plan');
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

        <h1 className="text-3xl font-bold text-black mb-3">Enter code</h1>
        <p className="text-base text-gray-500 mb-12">
          We've sent an SMS with an activation<br />
          code to your phone +1 555 000 0000
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="flex-1">
            <CodeInput
              value={code}
              onChange={setCode}
              length={5}
            />

            <div className="mt-12 text-center">
              <button
                type="button"
                className="text-sm text-gray-500 hover:text-black transition-colors"
              >
                Send code again <span className="text-black">00:30</span>
              </button>
            </div>
          </div>

          <Button type="submit" loading={loading} disabled={code.length !== 5}>
            Verify
          </Button>
        </form>
      </div>
    </div>
  );
}
