import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

export default function LoginVariant() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
      {/* Sparkle decoration */}
      <div className="absolute top-12 right-8">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
          <path d="M24 0L26.472 17.528L24 48L21.528 17.528L24 0Z" fill="black"/>
          <path d="M48 24L30.472 26.472L0 24L30.472 21.528L48 24Z" fill="black"/>
        </svg>
      </div>

      <div className="max-w-md w-full mx-auto flex flex-col flex-1">
        {/* Header */}
        <div className="pt-8 pb-12">
          <h1 className="text-3xl font-bold text-black">Hi, Welcome! 👋</h1>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 flex flex-col">
          <div className="space-y-6 flex-1">
            <Input
              label="Email address"
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Remember me and Forgot password row */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-5 h-5 rounded border-2 border-gray-300 text-black focus:ring-2 focus:ring-black cursor-pointer"
                />
                <span className="text-sm text-black">Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-sm text-black hover:underline"
              >
                Forgot password?
              </button>
            </div>
          </div>

          {/* Submit button */}
          <div className="space-y-6 pt-6">
            <Button type="submit" loading={loading}>
              Log in
            </Button>

            {/* Divider */}
            <div className="flex items-center gap-4">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-sm text-gray-400">Or with</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Social login buttons with labels */}
            <div className="flex gap-4">
              <button
                type="button"
                className="flex-1 h-14 flex items-center justify-center gap-3 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12C24 5.373 18.627 0 12 0S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953h-1.514c-1.491 0-1.955.925-1.955 1.874V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z"/>
                </svg>
                <span className="text-sm font-medium text-black">Facebook</span>
              </button>
              <button
                type="button"
                className="flex-1 h-14 flex items-center justify-center gap-3 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M23.766 11.2227C23.766 10.2614 23.6849 9.51977 23.5125 8.75684H12.24V13.2597H18.7219C18.5594 14.4638 17.7272 16.1819 15.9404 17.3327L15.9173 17.4845L19.7863 20.436L20.0523 20.4619C22.4509 18.2556 23.766 14.9454 23.766 11.2227Z" fill="#4285F4"/>
                  <path d="M12.2398 23.5C15.4764 23.5 18.2058 22.4773 20.0521 20.4619L15.9402 17.3327C14.8906 18.0364 13.4839 18.5114 12.2398 18.5114C9.07144 18.5114 6.37524 16.3045 5.38567 13.2864L5.24427 13.2977L1.22707 16.3398L1.17773 16.4716C3.01343 20.0887 7.31815 23.5 12.2398 23.5Z" fill="#34A853"/>
                  <path d="M5.38594 13.2864C5.07144 12.5284 4.89144 11.7023 4.89144 10.8523C4.89144 9.99886 5.07144 9.17614 5.37594 8.41818L5.36769 8.25568L1.30519 5.16477L1.17799 5.22727C0.42799 6.70568 0 8.33182 0 10.8523C0 13.3727 0.42799 14.9989 1.17799 16.4773L5.38594 13.2864Z" fill="#FBBC05"/>
                  <path d="M12.2399 3.19318C13.8691 3.19318 15.0074 3.86364 15.6563 4.46136L19.3326 0.904545C18.1971 -0.327273 15.4765 -1.13636 12.2399 -1.13636C7.31822 -1.13636 3.01343 2.27727 1.17773 5.89091L5.37568 9.18182C6.37524 6.16364 9.07144 3.19318 12.2399 3.19318Z" fill="#EB4335"/>
                </svg>
                <span className="text-sm font-medium text-black">Google</span>
              </button>
            </div>

            {/* Sign up link */}
            <p className="text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="text-black font-semibold underline hover:no-underline"
              >
                Sign up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
