import React from 'react'
import { testimonialsData } from '../lib/globalData'

const Testimonials = () => {
  return (
    <section
      className="bg-center bg-cover overflow-hidden relative rounded-t-[2.5rem] z-10 py-24 px-10"
      style={{ backgroundImage: `url("${testimonialsData.backgroundImage}")` }}
    >
      <div className="container-large relative z-10">
        <div className="flex flex-col items-center gap-10 text-center mb-[72px]">
          <div className="badge-workflow">
            <span>{testimonialsData.badge}</span>
          </div>
          <div className="flex flex-col items-center gap-6">
            <h2 className="display-title text-[#121116] max-w-3xl">
              {testimonialsData.headline}
            </h2>
            <p className="text-[#121116] max-w-2xl text-lg opacity-80">
              {testimonialsData.description}
            </p>
          </div>
        </div>

        {/* Testimonials Grid (Replacing carousel with grid for cleaner initial refactor) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.items.map((item, idx) => (
            <div key={idx} className="bg-[#1c1825] border border-white/10 p-8 rounded-3xl flex flex-col gap-12 h-full">
              {item.icon && (
                <img src={item.icon} alt="" className="w-16 h-auto opacity-80" />
              )}
              <blockquote className="text-[#c3c3c3] text-lg leading-relaxed flex-grow">
                {item.quote}
              </blockquote>
              <div className="flex items-center gap-6 border-t border-white/5 pt-8">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-12 h-12 rounded-full border border-white/20 object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-white font-medium">{item.author}</span>
                  <span className="text-[#c3c3c3] text-sm">{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-[15%] bg-gradient-to-t from-[#121116] to-transparent z-0"></div>
    </section>
  )
}

export default Testimonials