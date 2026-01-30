import { useState } from 'react';
import CodeInput from '../components/ui/CodeInput';
import BackButton from '../components/ui/BackButton';

export default function LoginPhoneCodeError() {
  const [code, setCode] = useState('25017');

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
      <div className="max-w-md w-full mx-auto flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between pt-4 pb-12">
          <BackButton />
          <div className="absolute top-12 right-8">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 0L26.472 17.528L24 48L21.528 17.528L24 0Z" fill="black"/>
              <path d="M48 24L30.472 26.472L0 24L30.472 21.528L48 24Z" fill="black"/>
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-black mb-3">Enter code</h1>
        <p className="text-base text-gray-500 mb-12">
          We've sent an SMS with an activation<br />
          code to your phone +33 2 94 27 84 11
        </p>

        {/* Code Input with Error */}
        <div className="flex-1">
          <CodeInput
            value={code}
            onChange={setCode}
            length={5}
            error={true}
          />

          <p className="mt-4 text-center text-sm text-red-500">
            Wrong code, please try again
          </p>

          <div className="mt-12 text-center">
            <button
              type="button"
              className="text-sm text-gray-500 hover:text-black transition-colors"
            >
              Send code again <span className="text-black">00:20</span>
            </button>
          </div>
        </div>

        {/* Keyboard simulation (decorative) */}
        <div className="grid grid-cols-3 gap-2 bg-gray-50 p-4 rounded-2xl">
          {['1', '2', '3', '4', '5', '6', '7', '8', '9', '+*#', '0', '←'].map((key, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                if (key === '←') {
                  setCode(code.slice(0, -1));
                } else if (key.length === 1 && /\d/.test(key) && code.length < 5) {
                  setCode(code + key);
                }
              }}
              className={`h-14 rounded-xl font-semibold transition-colors
                ${key === '0' ? 'col-start-2' : ''}
                ${key.length === 1 && /\d/.test(key) ? 'bg-white hover:bg-gray-100 text-black' : 'bg-gray-100 hover:bg-gray-200 text-gray-500'}`}
            >
              {key === '←' ? (
                <svg className="w-6 h-6 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 14l-4-4 4-4"/>
                  <path d="M5 10h11a4 4 0 010 8h-1"/>
                </svg>
              ) : (
                <div>
                  <div className="text-xl">{key.charAt(0)}</div>
                  {key.length > 1 && <div className="text-xs text-gray-400">{key.slice(1)}</div>}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
