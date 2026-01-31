import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input } from '../components/ui'
import { StarIllustration } from '../components/ui/StarDecoration'

export default function SignUp2() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!email) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Invalid email'
    if (!password) newErrors.password = 'Password is required'
    else if (password.length < 8) newErrors.password = 'Must be 8 characters'
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords don\'t match'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      navigate('/signup/verify')
    }
  }

  return (
    <div className="mobile-container flex flex-col min-h-screen">
      {/* Blue card section */}
      <div className="bg-[#EEF2FF] rounded-b-[32px] px-5 pt-8 pb-10 flex-shrink-0">
        <div className="flex flex-col items-center">
          <StarIllustration className="mb-4 scale-75" />

          <h1 className="text-[32px] font-bold text-black text-center mb-6">
            Create account
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              error={errors.email}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              showPasswordToggle
              error={errors.password}
            />
            <Input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              showPasswordToggle
              error={errors.confirmPassword}
            />

            <Button type="submit" variant="primary">
              Create account
            </Button>
          </form>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex-1 flex items-end justify-center pb-8 pt-6 px-5">
        <p className="text-[#808080] text-center text-sm">
          By creating an account or signing you<br />
          agree to our{' '}
          <Link to="#" className="text-black underline font-medium">
            Terms and Conditions
          </Link>
        </p>
      </div>
    </div>
  )
}
