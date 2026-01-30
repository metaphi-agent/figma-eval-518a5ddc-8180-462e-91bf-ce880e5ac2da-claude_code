import SocialButton from '../components/ui/SocialButton';

export default function SignInOptions() {
  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
      <div className="max-w-md w-full mx-auto flex-1 flex flex-col">
        {/* Header */}
        <div className="pt-8 pb-12">
          <h1 className="text-3xl font-bold text-black">
            Hi, Welcome! 👋
          </h1>
        </div>

        {/* Social sign-in options */}
        <div className="flex-1 space-y-4">
          <SocialButton provider="google" />
          <SocialButton provider="apple" />
          <SocialButton provider="email" />
          <SocialButton provider="facebook" />
          <SocialButton provider="github" />
          <SocialButton provider="dropbox" />
          <SocialButton provider="linkedin" />
          <SocialButton provider="microsoft" />
          <SocialButton provider="instagram" />
        </div>
      </div>
    </div>
  );
}
