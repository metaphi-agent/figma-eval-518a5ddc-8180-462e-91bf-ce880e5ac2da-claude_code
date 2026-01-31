import { SocialButton } from '../components/ui'

const providers = [
  { id: 'google', provider: 'google' as const },
  { id: 'apple', provider: 'apple' as const },
  { id: 'email', provider: 'email' as const },
  { id: 'facebook', provider: 'facebook' as const },
  { id: 'github', provider: 'github' as const },
  { id: 'dropbox', provider: 'dropbox' as const },
  { id: 'linkedin', provider: 'linkedin' as const },
  { id: 'microsoft', provider: 'microsoft' as const },
  { id: 'instagram', provider: 'instagram' as const }
]

export default function SignInOptions() {
  return (
    <div className="mobile-container flex flex-col min-h-screen px-5 py-12">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-[32px] font-bold text-black">
          Hi, Welcome! 👋
        </h1>
      </div>

      {/* Social Sign In Options */}
      <div className="flex-1 space-y-3">
        {providers.map(({ id, provider }) => (
          <SocialButton
            key={id}
            provider={provider}
            text={`Sign in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`}
            onClick={() => {
              // Handle social sign in
              console.log(`Signing in with ${provider}`)
            }}
          />
        ))}
      </div>
    </div>
  )
}
