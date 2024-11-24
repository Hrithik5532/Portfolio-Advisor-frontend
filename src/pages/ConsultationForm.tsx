import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    investmentGoal: '',
    riskTolerance: '',
    timeHorizon: '',
    initialInvestment: '',
    monthlyContribution: '',
    experience: '',
    additionalInfo: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm p-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Get Professional Advice</h1>
          <p className="mt-2 text-gray-600">
            Complete this form to receive personalized financial advice from our expert advisors.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            {/* Investment Goal */}
            <div>
              <label htmlFor="investmentGoal" className="block text-sm font-medium text-gray-700">
                What is your primary investment goal?
              </label>
              <select
                id="investmentGoal"
                name="investmentGoal"
                value={formData.investmentGoal}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select a goal</option>
                <option value="retirement">Retirement Planning</option>
                <option value="wealth">Wealth Accumulation</option>
                <option value="education">Education Funding</option>
                <option value="house">House Purchase</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Risk Tolerance */}
            <div>
              <label htmlFor="riskTolerance" className="block text-sm font-medium text-gray-700">
                What is your risk tolerance?
              </label>
              <select
                id="riskTolerance"
                name="riskTolerance"
                value={formData.riskTolerance}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select risk level</option>
                <option value="conservative">Conservative</option>
                <option value="moderate">Moderate</option>
                <option value="aggressive">Aggressive</option>
              </select>
            </div>

            {/* Time Horizon */}
            <div>
              <label htmlFor="timeHorizon" className="block text-sm font-medium text-gray-700">
                Investment Time Horizon
              </label>
              <select
                id="timeHorizon"
                name="timeHorizon"
                value={formData.timeHorizon}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select time horizon</option>
                <option value="short">Short Term (0-3 years)</option>
                <option value="medium">Medium Term (3-7 years)</option>
                <option value="long">Long Term (7+ years)</option>
              </select>
            </div>

            {/* Initial Investment */}
            <div>
              <label htmlFor="initialInvestment" className="block text-sm font-medium text-gray-700">
                Initial Investment Amount ($)
              </label>
              <input
                type="number"
                id="initialInvestment"
                name="initialInvestment"
                value={formData.initialInvestment}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter amount"
                required
              />
            </div>

            {/* Monthly Contribution */}
            <div>
              <label htmlFor="monthlyContribution" className="block text-sm font-medium text-gray-700">
                Monthly Contribution ($)
              </label>
              <input
                type="number"
                id="monthlyContribution"
                name="monthlyContribution"
                value={formData.monthlyContribution}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Enter amount"
                required
              />
            </div>

            {/* Investment Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                Investment Experience
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                required
              >
                <option value="">Select experience level</option>
                <option value="none">No Experience</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>

            {/* Additional Information */}
            <div>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700">
                Additional Information
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                placeholder="Any other details you'd like to share..."
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Send className="h-4 w-4 mr-2" />
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;