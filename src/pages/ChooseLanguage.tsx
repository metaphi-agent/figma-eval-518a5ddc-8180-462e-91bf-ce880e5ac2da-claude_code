import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import BackButton from '../components/ui/BackButton';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Spanish', flag: '🇪🇸' },
  { code: 'fr', name: 'French', flag: '🇫🇷' },
  { code: 'de', name: 'German', flag: '🇩🇪' },
  { code: 'it', name: 'Italian', flag: '🇮🇹' },
  { code: 'pt', name: 'Portuguese', flag: '🇵🇹' },
  { code: 'ru', name: 'Russian', flag: '🇷🇺' },
  { code: 'zh', name: 'Chinese', flag: '🇨🇳' },
  { code: 'ja', name: 'Japanese', flag: '🇯🇵' },
  { code: 'ko', name: 'Korean', flag: '🇰🇷' },
];

export default function ChooseLanguage() {
  const navigate = useNavigate();
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-6 flex flex-col">
      <div className="max-w-md w-full mx-auto flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-center justify-between pt-4 pb-8">
          <BackButton />
          <div className="absolute top-12 right-8">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
              <path d="M24 0L26.472 17.528L24 48L21.528 17.528L24 0Z" fill="black"/>
              <path d="M48 24L30.472 26.472L0 24L30.472 21.528L48 24Z" fill="black"/>
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-black mb-8">
          Choose the language
        </h1>

        {/* Search */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-4 pl-12 rounded-2xl border border-gray-200 focus:border-gray-400 focus:outline-none transition-all"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8.5" cy="8.5" r="5.5"/>
            <path d="M13 13l4 4"/>
          </svg>
        </div>

        {/* Language List */}
        <div className="flex-1 space-y-3 overflow-y-auto">
          {filteredLanguages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => setSelectedLanguage(lang.code)}
              className={`w-full flex items-center justify-between px-6 py-4 rounded-2xl border-2 transition-all duration-150
                ${selectedLanguage === lang.code ? 'border-black bg-white' : 'border-gray-200 hover:border-gray-300'}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{lang.flag}</span>
                <span className="text-base font-medium text-black">{lang.name}</span>
              </div>
              {selectedLanguage === lang.code && (
                <div className="w-6 h-6 rounded-full border-2 border-black flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-black"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Continue Button */}
        <div className="pt-6">
          <Button onClick={() => navigate('/choose-plan')}>
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
