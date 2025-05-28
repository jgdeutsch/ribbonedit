import React from 'react';
import { CheckCircle, Edit3, Layout, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center relative z-10">
          <div className="lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="inline-flex items-center bg-blue-500/10 border border-blue-300/20 rounded-full px-4 py-2 mb-6">
              <Edit3 className="h-4 w-4 text-blue-400 mr-2" />
              <span className="text-blue-300 text-sm">Microsoft Word Integration</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              The AI writing partner "they" took away from MS Word.
              <span className="block text-blue-400 mt-2">Now back — faster and better than ever.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
              RibbonEdit brings professional writing assistance back to where it belongs — right in Microsoft Word's ribbon interface, with no floating widgets slowing you down.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Layout className="h-6 w-6 text-green-400 flex-shrink-0 mr-3" />
                <p className="text-gray-300">Native Word ribbon integration — no floating widgets</p>
              </div>
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-green-400 flex-shrink-0 mr-3" />
                <p className="text-gray-300">Works offline with complete privacy protection</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mr-3" />
                <p className="text-gray-300">Perfect for academic and professional writing</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="#trial" 
                className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                Start my 7-day trial
              </a>
              <a 
                href="#features" 
                className="inline-flex justify-center items-center px-6 py-3 border border-gray-600 shadow-sm text-base font-medium rounded-md text-gray-300 bg-gray-800/50 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              >
                See how it works
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            {/* Word interface mockup */}
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-700 bg-white">
              {/* Word ribbon */}
              <div className="bg-[#2B579A] text-white p-2 flex items-center">
                <div className="flex items-center space-x-4">
                  <Edit3 className="h-5 w-5" />
                  <span className="font-semibold">RibbonEdit</span>
                </div>
              </div>
              
              {/* Word document interface */}
              <div className="bg-white p-6">
                <div className="border-b border-gray-200 pb-4 mb-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <button className="px-3 py-1 bg-[#2B579A] text-white rounded text-sm hover:bg-[#1e3f6f] transition-colors">
                      Check Document
                    </button>
                    <button className="px-3 py-1 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                      Style Guide
                    </button>
                  </div>
                  
                  <p className="text-gray-800">Writing with professional assistance, right where you need it.</p>
                </div>
                
                {/* Active suggestion panel */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start">
                    <Edit3 className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div>
                      <p className="text-blue-700 font-medium mb-2">Suggestion</p>
                      <p className="text-gray-600">Consider revising for clarity</p>
                      <div className="mt-3 flex space-x-2">
                        <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700 transition-colors">
                          Accept
                        </button>
                        <button className="px-3 py-1 bg-white border border-gray-300 text-gray-700 rounded text-sm hover:bg-gray-50 transition-colors">
                          Ignore
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Statistics panel */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-600 text-sm">Document Score</span>
                      <span className="text-green-600 text-sm font-medium">98/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Grammar: Perfect</span>
                    </div>
                    <div className="flex items-center space-x-2 mt-2 text-gray-600">
                      <Shield className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Style: Professional</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;