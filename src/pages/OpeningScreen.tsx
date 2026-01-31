import { Link } from 'react-router-dom'
import { Button } from '../components/ui'
import { StarIllustration } from '../components/ui/StarDecoration'

export default function OpeningScreen() {
  return (
    <div className="mobile-container flex flex-col px-5 py-8">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center pt-12">
        <StarIllustration className="mb-8" />

        <h1 className="text-[32px] font-bold text-black text-center mb-3">
          Explore the app
        </h1>
        <p className="text-[#808080] text-center leading-relaxed">
          Now your finances are in one place<br />
          and always under control
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="space-y-3 pb-8">
        <Link to="/login">
          <Button variant="primary">Sign In</Button>
        </Link>
        <Link to="/signup">
          <Button variant="secondary">Create account</Button>
        </Link>
      </div>
    </div>
  )
}
