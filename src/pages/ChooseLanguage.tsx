import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input, BackButton } from '../components/ui'
import { StarDecoration } from '../components/ui/StarDecoration'

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' }
]

export default function ChooseLanguage() {
  const navigate = useNavigate()
  const [selectedLanguage, setSelectedLanguage] = useState('en')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/')
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
          Choose the language
        </h1>
        <p className="text-[#808080] mb-6">
          Don't worry! It happens. Please enter the<br />
          email associated with your account.
        </p>

        {/* Search */}
        <div className="mb-4">
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            icon={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15 15L11.5 11.5" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            }
            iconPosition="left"
          />
        </div>

        {/* Language List */}
        <div className="space-y-1">
          {filteredLanguages.map(lang => (
            <button
              key={lang.code}
              type="button"
              onClick={() => setSelectedLanguage(lang.code)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-colors ${
                selectedLanguage === lang.code
                  ? 'bg-[#F5F5F5]'
                  : 'hover:bg-gray-50'
              }`}
            >
              <span className="text-2xl">{lang.flag}</span>
              <span className="flex-1 text-left text-black font-medium">{lang.name}</span>
              {selectedLanguage === lang.code && (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="black"/>
                  <path d="M6 10L9 13L14 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <form onSubmit={handleSubmit} className="pt-6">
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </form>
    </div>
  )
}
