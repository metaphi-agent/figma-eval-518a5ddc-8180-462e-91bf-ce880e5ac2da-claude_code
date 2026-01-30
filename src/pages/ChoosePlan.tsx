import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import BackButton from '../components/ui/BackButton';
import RadioCard from '../components/ui/RadioCard';

export default function ChoosePlan() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    // Navigate to success or dashboard
    console.log('Plan selected:', selectedPlan);
  };

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

        <h1 className="text-3xl font-bold text-black mb-3">
          Choose your plan
        </h1>
        <p className="text-base text-gray-500 mb-8">
          To complete the sign up process, please<br />
          make the payment
        </p>

        {/* Plans */}
        <div className="flex-1 space-y-4">
          <RadioCard
            name="plan"
            value="monthly"
            checked={selectedPlan === 'monthly'}
            onChange={setSelectedPlan}
            title="Monthly"
            description="$29,99 / mo"
          />
          <RadioCard
            name="plan"
            value="annual"
            checked={selectedPlan === 'annual'}
            onChange={setSelectedPlan}
            title="Annual"
            description="$15,99 / mo ($192 / year)"
          />
          <RadioCard
            name="plan"
            value="free"
            checked={selectedPlan === 'free'}
            onChange={setSelectedPlan}
            title="Free trial"
            description="1 month free"
          />
        </div>

        {/* Continue Button */}
        <div className="pt-6">
          <Button onClick={handleSubmit} loading={loading}>
            Send code
          </Button>
        </div>
      </div>
    </div>
  );
}
