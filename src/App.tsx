import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

// Lazy load all pages for better performance
const OpeningScreen = lazy(() => import('./pages/OpeningScreen'))
const SignUp1 = lazy(() => import('./pages/SignUp1'))
const SignUp2 = lazy(() => import('./pages/SignUp2'))
const SignUp3 = lazy(() => import('./pages/SignUp3'))
const SignUp4 = lazy(() => import('./pages/SignUp4'))
const SignUp5 = lazy(() => import('./pages/SignUp5'))
const SignUp6 = lazy(() => import('./pages/SignUp6'))
const Login1 = lazy(() => import('./pages/Login1'))
const Login2 = lazy(() => import('./pages/Login2'))
const LoginPhone = lazy(() => import('./pages/LoginPhone'))
const LoginPhoneCode = lazy(() => import('./pages/LoginPhoneCode'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const ForgotPasswordCode = lazy(() => import('./pages/ForgotPasswordCode'))
const ResetPassword = lazy(() => import('./pages/ResetPassword'))
const PasswordChanged = lazy(() => import('./pages/PasswordChanged'))
const ChoosePlan = lazy(() => import('./pages/ChoosePlan'))
const ChooseLanguage = lazy(() => import('./pages/ChooseLanguage'))
const SignInOptions = lazy(() => import('./pages/SignInOptions'))

// Loading component
function Loading() {
  return (
    <div className="mobile-container flex items-center justify-center min-h-screen">
      <div className="animate-spin h-8 w-8 border-2 border-black border-t-transparent rounded-full" />
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Opening Screen */}
          <Route path="/" element={<OpeningScreen />} />

          {/* Sign Up Flow */}
          <Route path="/signup" element={<SignUp1 />} />
          <Route path="/signup/email" element={<SignUp2 />} />
          <Route path="/signup/name" element={<SignUp3 />} />
          <Route path="/signup/profile" element={<SignUp4 />} />
          <Route path="/signup/verify" element={<SignUp5 />} />
          <Route path="/signup/success" element={<SignUp6 />} />

          {/* Login Flow */}
          <Route path="/login" element={<Login1 />} />
          <Route path="/login/alt" element={<Login2 />} />
          <Route path="/login/phone" element={<LoginPhone />} />
          <Route path="/login/phone/code" element={<LoginPhoneCode />} />
          <Route path="/login/phone/code-filled" element={<LoginPhoneCode filled />} />
          <Route path="/login/phone/code-error" element={<LoginPhoneCode error filled />} />

          {/* Password Reset Flow */}
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/forgot-password/code" element={<ForgotPasswordCode />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/password-changed" element={<PasswordChanged />} />

          {/* Other Screens */}
          <Route path="/choose-plan" element={<ChoosePlan />} />
          <Route path="/choose-language" element={<ChooseLanguage />} />
          <Route path="/signin-options" element={<SignInOptions />} />
        </Routes>
      </Suspense>
    </div>
  )
}
