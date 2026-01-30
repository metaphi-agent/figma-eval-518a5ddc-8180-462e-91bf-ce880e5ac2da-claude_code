import { Routes, Route } from 'react-router-dom';

// Pages
import OpeningScreen from './pages/OpeningScreen';
import SignInOptions from './pages/SignInOptions';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import SignUp2 from './pages/SignUp2';
import SignUp3 from './pages/SignUp3';
import SignUp4 from './pages/SignUp4';
import SignUp5 from './pages/SignUp5';
import SignUp6 from './pages/SignUp6';
import LoginPhone from './pages/LoginPhone';
import LoginPhoneCode from './pages/LoginPhoneCode';
import LoginPhoneCodeFilled from './pages/LoginPhoneCodeFilled';
import LoginPhoneCodeError from './pages/LoginPhoneCodeError';
import ForgotPassword from './pages/ForgotPassword';
import ForgotPasswordCode from './pages/ForgotPasswordCode';
import ResetPassword from './pages/ResetPassword';
import PasswordChanged from './pages/PasswordChanged';
import ChooseLanguage from './pages/ChooseLanguage';
import ChoosePlan from './pages/ChoosePlan';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<OpeningScreen />} />
      <Route path="/signin-options" element={<SignInOptions />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signup-2" element={<SignUp2 />} />
      <Route path="/signup-3" element={<SignUp3 />} />
      <Route path="/signup-4" element={<SignUp4 />} />
      <Route path="/signup-5" element={<SignUp5 />} />
      <Route path="/signup-6" element={<SignUp6 />} />
      <Route path="/login-phone" element={<LoginPhone />} />
      <Route path="/login-phone-code" element={<LoginPhoneCode />} />
      <Route path="/login-phone-code-filled" element={<LoginPhoneCodeFilled />} />
      <Route path="/login-phone-code-error" element={<LoginPhoneCodeError />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/forgot-password-code" element={<ForgotPasswordCode />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/password-changed" element={<PasswordChanged />} />
      <Route path="/choose-language" element={<ChooseLanguage />} />
      <Route path="/choose-plan" element={<ChoosePlan />} />
    </Routes>
  );
}
