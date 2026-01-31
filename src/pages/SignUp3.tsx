import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, BackButton } from '../components/ui'
import { StarDecoration } from '../components/ui/StarDecoration'

export default function SignUp3() {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!firstName.trim()) newErrors.firstName = 'First name is required'
    if (!lastName.trim()) newErrors.lastName = 'Last name is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      navigate('/signup/profile')
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
          Sign up
        </h1>
        <p className="text-[#808080] mb-8">
          Create an account to continue!
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="First Name"
            placeholder="First Name"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
            error={errors.firstName}
          />
          <Input
            label="Last Name"
            placeholder="Last Name"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
            error={errors.lastName}
          />

          <div className="pt-4">
            <Button type="submit" variant="primary">
              Continue
            </Button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <div className="flex justify-center pb-4">
        <p className="text-[#808080] text-center text-sm">
          By creating an account or signing you<br />
          agree to our{' '}
          <span className="text-black underline font-medium">
            Terms and Conditions
          </span>
        </p>
      </div>
    </div>
  )
}
