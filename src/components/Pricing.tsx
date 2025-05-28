import React from 'react';
import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Monthly",
      price: "$9.99",
      period: "per month",
      features: [
        "Full Word ribbon integration",
        "Grammar & style checking",
        "Academic writing support",
        "Works offline",
        "Privacy-first design",
        "30-day money-back guarantee",
      ],
      cta: "Start 7-day trial",
      highlight: false
    },
    {
      name: "Annual",
      price: "$7.49",
      period: "per month, billed annually",
      discount: "Save 25%",
      features: [
        "All Monthly features",
        "Priority customer support",
        "Early access to new features",
        "Team collaboration tools",
        "Custom style guides",
        "Personal dictionary",
      ],
      cta: "Start 7-day trial",
      highlight: true
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            All plans include a 7-day free trial. No credit card required to start.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden shadow-lg border ${
                plan.highlight 
                  ? 'border-blue-500 relative shadow-xl' 
                  : 'border-gray-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 rounded-bl-lg font-medium text-sm">
                  Most Popular
                </div>
              )}
              <div className={`p-8 ${plan.highlight ? 'bg-blue-50' : 'bg-white'}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="ml-2 text-gray-600">{plan.period}</span>
                </div>
                {plan.discount && (
                  <div className="mt-2 inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {plan.discount}
                  </div>
                )}
              </div>
              <div className="bg-white p-8 border-t border-gray-100">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#trial"
                  className={`w-full block text-center px-6 py-3 rounded-md shadow-sm font-medium text-base transition-colors duration-200 ${
                    plan.highlight
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto bg-gray-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Enterprise Pricing?</h3>
          <p className="text-gray-600 mb-6">
            We offer custom plans for teams of 10+ users with advanced security, compliance, and training features.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
          >
            Contact sales
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;