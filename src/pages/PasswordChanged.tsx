import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui'
import { StarDecoration } from '../components/ui/StarDecoration'

export default function PasswordChanged() {
  const navigate = useNavigate()

  return (
    <div className="mobile-container flex flex-col items-center justify-center min-h-screen px-5 py-8">
      {/* Success Icon */}
      <div className="flex items-center gap-1 mb-6">
        <StarDecoration variant="filled" className="w-12 h-12" />
        <StarDecoration variant="filled" className="w-8 h-8 mt-6" />
      </div>

      {/* Message */}
      <h1 className="text-[32px] font-bold text-black text-center mb-3">
        Password changed
      </h1>
      <p className="text-[#808080] text-center mb-8">
        Your password has been changed<br />
        succesfully
      </p>

      {/* CTA */}
      <div className="w-full">
        <Button variant="primary" onClick={() => navigate('/login')}>
          Back to login
        </Button>
      </div>
    </div>
  )
}
