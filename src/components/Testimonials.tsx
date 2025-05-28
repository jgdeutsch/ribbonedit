import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Finally, no lag in Word again. RibbonEdit saved my sanity while working on my dissertation.",
      author: "Dr. Sarah Chen",
      role: "University Professor",
      rating: 5
    },
    {
      quote: "This saved my writing flow. The docked panel is exactly what I needed for my multiple monitor setup.",
      author: "James Wilson",
      role: "Technical Writer",
      rating: 5
    },
    {
      quote: "RibbonEdit is what Grammarly should have been. Clean, fast, and respectful of my privacy.",
      author: "Michael Torres",
      role: "Legal Professional",
      rating: 5
    },
    {
      quote: "Our entire editorial team switched to RibbonEdit. The academic formatting support is unmatched.",
      author: "Emma Rodriguez",
      role: "Journal Editor",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Professionals
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from writers who switched from Grammarly to RibbonEdit and never looked back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="text-xl text-gray-800 italic mb-6 flex-grow">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-auto">
                <div className="font-semibold text-gray-900">{testimonial.author}</div>
                <div className="text-gray-600 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                The solution thousands of Word users have been waiting for
              </h3>
              <p className="text-gray-600 mb-8">
                Join professionals across industries who have reclaimed their Microsoft Word experience with RibbonEdit's seamless integration.
              </p>
              <div className="inline-flex flex-wrap justify-center gap-2">
                <div className="px-4 py-1 rounded-full bg-blue-100 text-blue-800 font-medium text-sm">98% satisfaction rate</div>
                <div className="px-4 py-1 rounded-full bg-green-100 text-green-800 font-medium text-sm">4.9 average rating</div>
                <div className="px-4 py-1 rounded-full bg-purple-100 text-purple-800 font-medium text-sm">85% reduction in Word crashes</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;