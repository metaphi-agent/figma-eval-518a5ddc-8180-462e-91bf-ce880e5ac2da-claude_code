import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, BackButton, RadioButton } from '../components/ui'
import { StarDecoration } from '../components/ui/StarDecoration'

type Plan = 'monthly' | 'annual' | 'free'

const plans = [
  {
    id: 'monthly' as Plan,
    name: 'Monthly',
    price: '$29,99 / mo',
    description: ''
  },
  {
    id: 'annual' as Plan,
    name: 'Annual',
    price: '$15,99 / mo ($192 / year)',
    description: ''
  },
  {
    id: 'free' as Plan,
    name: 'Free trial',
    price: '1 month free',
    description: ''
  }
]

export default function ChoosePlan() {
  const navigate = useNavigate()
  const [selectedPlan, setSelectedPlan] = useState<Plan>('monthly')

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
          Choose your plan
        </h1>
        <p className="text-[#808080] mb-8">
          To complete the sign up process, please<br />
          make the payment
        </p>

        {/* Plan Options */}
        <div className="space-y-3">
          {plans.map(plan => (
            <button
              key={plan.id}
              type="button"
              onClick={() => setSelectedPlan(plan.id)}
              className={`w-full p-4 rounded-xl border-2 text-left transition-colors ${
                selectedPlan === plan.id
                  ? 'border-black'
                  : 'border-[#D8DADC]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-black">{plan.name}</h3>
                  <p className="text-[#808080] text-sm">{plan.price}</p>
                </div>
                <RadioButton
                  checked={selectedPlan === plan.id}
                  onChange={() => setSelectedPlan(plan.id)}
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* CTA */}
      <form onSubmit={handleSubmit} className="pt-6">
        <Button type="submit" variant="primary">
          Send code
        </Button>
      </form>
    </div>
  )
}
