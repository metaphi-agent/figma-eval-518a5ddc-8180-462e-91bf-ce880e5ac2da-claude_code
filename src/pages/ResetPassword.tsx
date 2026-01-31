import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, BackButton } from '../components/ui'
import { StarDecoration } from '../components/ui/StarDecoration'

export default function ResetPassword() {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!password) newErrors.password = 'Password is required'
    else if (password.length < 8) newErrors.password = 'Must be 8 characters'
    if (password !== confirmPassword) newErrors.confirmPassword = 'Passwords don\'t match'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      navigate('/password-changed')
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
          Reset password
        </h1>
        <p className="text-[#808080] mb-8">
          Please type something you'll remember
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="New password"
            type="password"
            placeholder="must be 8 characters"
            value={password}
            onChange={e => setPassword(e.target.value)}
            showPasswordToggle
            error={errors.password}
          />
          <Input
            label="Confirm new password"
            type="password"
            placeholder="repeat password"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            showPasswordToggle
            error={errors.confirmPassword}
          />

          <div className="pt-4">
            <Button type="submit" variant="primary">
              Reset password
            </Button>
          </div>
        </form>
      </div>

      {/* Already have account */}
      <div className="flex justify-center pt-6 pb-4">
        <p className="text-[#808080]">
          Already have an account?{' '}
          <Link to="/login" className="text-black font-semibold">
            Log in
          </Link>
        </p>
      </div>
    </div>
  )
}
