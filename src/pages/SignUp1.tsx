import { Link } from 'react-router-dom'
import { SocialButton } from '../components/ui'
import { StarIllustration } from '../components/ui/StarDecoration'

export default function SignUp1() {
  return (
    <div className="mobile-container flex flex-col min-h-screen">
      {/* Blue card section */}
      <div className="bg-[#EEF2FF] rounded-b-[32px] px-5 pt-8 pb-10 flex-shrink-0">
        <div className="flex flex-col items-center">
          <StarIllustration className="mb-4 scale-90" />

          <h1 className="text-[32px] font-bold text-black text-center mb-2">
            Explore the app
          </h1>
          <p className="text-[#808080] text-center leading-relaxed mb-8">
            Now your finances are in one place<br />
            and always under control
          </p>

          {/* Social Sign Up Options */}
          <div className="w-full space-y-3">
            <SocialButton provider="google" />
            <SocialButton provider="apple" />
            <SocialButton provider="email" text="Continue with Email" onClick={() => window.location.href = '#/signup/email'} />
          </div>
        </div>
      </div>

      {/* Already have account */}
      <div className="flex-1 flex items-end justify-center pb-8 pt-6">
        <p className="text-[#808080]">
          Already have an account?{' '}
          <Link to="/login" className="text-black font-medium underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
