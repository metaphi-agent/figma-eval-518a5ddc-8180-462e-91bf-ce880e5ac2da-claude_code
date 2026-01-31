import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, BackButton } from '../components/ui'
import { StarDecoration } from '../components/ui/StarDecoration'

export default function ForgotPassword() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) {
      setError('Email is required')
      return
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Invalid email address')
      return
    }
    setError('')
    navigate('/forgot-password/code')
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
          Forgot password?
        </h1>
        <p className="text-[#808080] mb-8">
          Don't worry! It happens. Please enter the<br />
          email associated with your account.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email address"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={error}
          />

          <Button type="submit" variant="primary">
            Send code
          </Button>
        </form>
      </div>

      {/* Remember password */}
      <div className="flex justify-center pt-6 pb-4">
        <p className="text-[#808080]">
          Remember password?{' '}
          <Link to="/login" className="text-black font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
