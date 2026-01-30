import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SocialButton from '../components/ui/SocialButton';

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white p-6 flex flex-col">
      <div className="max-w-md w-full mx-auto flex-1 flex flex-col">
        {/* Illustration */}
        <div className="flex justify-center pt-8 pb-12">
          <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
            <g opacity="0.4">
              <circle cx="100" cy="100" r="80" fill="#E0E7FF"/>
            </g>
            {/* Abstract sparkle shape */}
            <path d="M100 30C100 30 120 70 160 90C120 110 100 150 100 150C100 150 80 110 40 90C80 70 100 30 100 30Z"
              stroke="black" strokeWidth="2" fill="none"/>
            <path d="M85 50C85 50 95 70 115 80C95 90 85 110 85 110C85 110 75 90 55 80C75 70 85 50 85 50Z"
              stroke="black" strokeWidth="2" fill="none"/>
            {/* Small sparkles */}
            <circle cx="45" cy="70" r="2" fill="black"/>
            <circle cx="145" cy="120" r="2" fill="black"/>
            <path d="M155 60L157 65L155 70L153 65L155 60Z" fill="black"/>
            <path d="M155 60L160 62L155 64L150 62L155 60Z" fill="black"/>
          </svg>
        </div>

        {/* Text */}
        <h1 className="text-3xl font-bold text-black mb-3 text-center">
          Explore the app
        </h1>
        <p className="text-base text-gray-500 text-center mb-12">
          Now your finances are in one place
        </p>

        {/* Social buttons */}
        <div className="space-y-4 flex-1">
          <SocialButton provider="google" />
          <SocialButton provider="apple" />
          <SocialButton provider="email" onClick={() => navigate('/signup-2')} />
        </div>

        {/* Sign in link */}
        <p className="text-center text-sm text-gray-500 pt-6">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-black font-semibold underline hover:no-underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}
