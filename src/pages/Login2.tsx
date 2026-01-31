import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, BackButton, Checkbox } from '../components/ui'
import { StarDecoration } from '../components/ui/StarDecoration'

export default function Login2() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email'
    if (!password) newErrors.password = 'Password is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      navigate('/')
    }
  }

  return (
    <div className="mobile-container flex flex-col min-h-screen px-5 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <BackButton />
        <StarDecoration variant="filled" className="w-12 h-12" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h1 className="text-[32px] font-bold text-black mb-2">
          Log in
        </h1>
        <p className="text-[#808080] mb-8">
          Please log in to continue
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Email address"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={errors.email}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            showPasswordToggle
            error={errors.password}
          />

          <div className="flex items-center justify-between py-2">
            <Checkbox
              checked={rememberMe}
              onChange={setRememberMe}
              label="Remember me"
            />
            <Link to="/forgot-password" className="text-sm text-black font-medium">
              Forgot password?
            </Link>
          </div>

          <div className="pt-2">
            <Button type="submit" variant="primary">
              Log in
            </Button>
          </div>
        </form>

        {/* Or Login with */}
        <div className="mt-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-[#D8DADC]" />
            <span className="text-[#808080] text-sm">Or Login with</span>
            <div className="flex-1 h-px bg-[#D8DADC]" />
          </div>

          <div className="flex gap-3">
            <button className="flex-1 h-14 flex items-center justify-center rounded-[10px] border border-[#D8DADC] bg-white hover:bg-gray-50 transition-colors">
              <img src="./assets/icons/facebook.svg" alt="Facebook" className="w-6 h-6" />
            </button>
            <button className="flex-1 h-14 flex items-center justify-center rounded-[10px] border border-[#D8DADC] bg-white hover:bg-gray-50 transition-colors">
              <img src="./assets/icons/google.svg" alt="Google" className="w-6 h-6" />
            </button>
            <button className="flex-1 h-14 flex items-center justify-center rounded-[10px] border border-[#D8DADC] bg-white hover:bg-gray-50 transition-colors">
              <img src="./assets/icons/apple.svg" alt="Apple" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Don't have account */}
      <div className="flex justify-center pt-6 pb-4">
        <p className="text-[#808080]">
          Don't have an account?{' '}
          <Link to="/signup" className="text-black font-semibold">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
