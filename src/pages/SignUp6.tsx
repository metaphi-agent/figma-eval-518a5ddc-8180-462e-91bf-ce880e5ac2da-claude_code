import { Link } from 'react-router-dom'
import { Button, BackButton } from '../components/ui'
import { StarDecoration } from '../components/ui/StarDecoration'

export default function SignUp6() {
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
          Congratulations!
        </h1>
        <p className="text-[#808080] mb-8">
          Your account has been created,<br />
          enjoy our service!
        </p>

        <Button variant="primary" onClick={() => window.location.href = '#/login'}>
          Log in
        </Button>
      </div>
    </div>
  )
}
