import React from 'react';
import { CheckCircle2, Edit, Maximize2, ShieldCheck, Zap, Laptop } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Edit className="h-10 w-10 text-blue-600" />,
      title: "Native Ribbon Integration",
      description: "Access all editing tools directly from Word's ribbon interface — no need to switch between windows or chase floating widgets."
    },
    {
      icon: <Maximize2 className="h-10 w-10 text-blue-600" />,
      title: "Docked Review Panel",
      description: "Our clean, docked panel scrolls with your content, making it easy to review edits in context, even in long documents."
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-600" />,
      title: "Lightning Fast Performance",
      description: "Engineered for speed and efficiency. No lag, no freezing, even with large academic or business documents."
    },
    {
      icon: <ShieldCheck className="h-10 w-10 text-blue-600" />,
      title: "Privacy-First Design",
      description: "Works offline with no background keylogging. Your documents remain private and secure at all times."
    },
    {
      icon: <Laptop className="h-10 w-10 text-blue-600" />,
      title: "Academic Writing Support",
      description: "Specialized features for citations, technical terminology, and formal writing styles academics depend on."
    },
    {
      icon: <CheckCircle2 className="h-10 w-10 text-blue-600" />,
      title: "Corporate Compliance",
      description: "Customizable rules to ensure all company documents adhere to your organization's style guidelines."
    }
  ];

  return (
    <section id="features" className="py-16 bg-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Writing Assistant Word Users Deserve</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            RibbonEdit restores what Grammarly removed, while solving the problems their floating widget created.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="mb-5">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="bg-blue-50 rounded-2xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 flex items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    Why Users Are Switching from Grammarly
                  </h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700">Native ribbon integration vs. floating widget that blocks content</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700">50% faster Word performance without resource-heavy background processes</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700">Works seamlessly with multi-monitor setups and custom Word layouts</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <CheckCircle2 className="h-5 w-5 text-green-500" />
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-700">Designed for professional and academic writing, not just casual content</p>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="#trial" 
                    className="inline-flex items-center px-5 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  >
                    Try RibbonEdit free
                  </a>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <img 
                  src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg" 
                  alt="Professional using Microsoft Word" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;