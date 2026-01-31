import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, BackButton, Toggle } from '../components/ui'
import { StarDecoration } from '../components/ui/StarDecoration'

export default function LoginPhone() {
  const navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] = useState('')
  const [syncContacts, setSyncContacts] = useState(true)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/login/phone/code')
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
          Log in
        </h1>
        <p className="text-[#808080] mb-8">
          Please confirm your country code and<br />
          enter your phone number.
        </p>

        {/* Country & Phone Input */}
        <div className="border-t border-[#D8DADC]">
          {/* Country Selector */}
          <button className="w-full flex items-center gap-3 py-4 border-b border-[#D8DADC]">
            <span className="text-2xl">🇫🇷</span>
            <span className="text-black font-medium">France</span>
          </button>

          {/* Phone Number Input */}
          <div className="flex items-center gap-3 py-4 border-b border-[#D8DADC]">
            <span className="text-black font-medium">+33</span>
            <div className="w-px h-6 bg-[#D8DADC]" />
            <input
              type="tel"
              placeholder="0 00 00 00 00"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
              className="flex-1 text-black placeholder:text-[#808080] outline-none text-lg"
            />
          </div>
        </div>

        {/* Sync Contacts Toggle */}
        <div className="py-4">
          <Toggle
            checked={syncContacts}
            onChange={setSyncContacts}
            label="Sync Contacts"
          />
        </div>

        <form onSubmit={handleSubmit} className="mt-8">
          <Button type="submit" variant="primary">
            Continue
          </Button>
        </form>
      </div>

      {/* Keyboard placeholder - in real app this would be the native keyboard */}
      <div className="bg-[#D3D6DC] rounded-t-lg p-2 -mx-5 -mb-8">
        <div className="grid grid-cols-3 gap-1">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
            <button
              key={num}
              onClick={() => setPhoneNumber(prev => prev + num)}
              className="h-12 flex flex-col items-center justify-center bg-white rounded-lg shadow-sm active:bg-gray-100"
            >
              <span className="text-xl font-medium">{num}</span>
              {num === 2 && <span className="text-[10px] text-gray-500">ABC</span>}
              {num === 3 && <span className="text-[10px] text-gray-500">DEF</span>}
              {num === 4 && <span className="text-[10px] text-gray-500">GHI</span>}
              {num === 5 && <span className="text-[10px] text-gray-500">JKL</span>}
              {num === 6 && <span className="text-[10px] text-gray-500">MNO</span>}
              {num === 7 && <span className="text-[10px] text-gray-500">PQRS</span>}
              {num === 8 && <span className="text-[10px] text-gray-500">TUV</span>}
              {num === 9 && <span className="text-[10px] text-gray-500">WXYZ</span>}
            </button>
          ))}
          <button className="h-12 flex items-center justify-center text-gray-500">
            +*#
          </button>
          <button
            onClick={() => setPhoneNumber(prev => prev + '0')}
            className="h-12 flex items-center justify-center bg-white rounded-lg shadow-sm active:bg-gray-100"
          >
            <span className="text-xl font-medium">0</span>
          </button>
          <button
            onClick={() => setPhoneNumber(prev => prev.slice(0, -1))}
            className="h-12 flex items-center justify-center"
          >
            <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 5L5.5 9M5.5 9L9.5 13M5.5 9H18.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
