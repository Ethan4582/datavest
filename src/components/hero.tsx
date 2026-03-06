import React from 'react'
import { heroData } from '../lib/globalData'

const Hero = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#00030a] text-white">
      {/* Background Image Layer (Cyan Glow) */}
      <div
        className="absolute inset-0 w-full h-[150%] pointer-events-none z-0 bg-no-repeat bg-cover bg-bottom opacity-100 mix-blend-screen"
        style={{ backgroundImage: `url("${heroData.backgroundImage}")` }}
      >
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navbar */}
        <div role="banner" className="w-full pt-8 pb-4">
          <div className="container-large px-6 md:px-10 flex items-center justify-between">
            <a href={heroData.logo.href} aria-label={heroData.logo.alt} className="block w-28 drop-shadow-md">
              <img
                src={heroData.logo.src}
                alt={heroData.logo.alt}
                className="inline-block w-full h-auto brightness-0 invert opacity-90"
              />
            </a>

            <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-white/70">
              <nav role="navigation" className="flex items-center gap-8">
                {heroData.navigation.map((item, idx) => (
                  <a key={idx} href={item.href} className="hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="hidden md:flex items-center gap-6">
              <a href={heroData.ctaSecondary.href} className="text-[15px] font-medium text-white/80 hover:text-white transition-colors">
                {heroData.ctaSecondary.label}
              </a>
              <a href={heroData.ctaPrimary.href} className="text-[15px] font-medium bg-white text-black px-5 py-2 rounded-lg hover:bg-white/90 transition-colors shadow-lg">
                {heroData.ctaPrimary.label}
              </a>
            </div>
          </div>
        </div>

        {/* Hero Content Section */}
        <main className="flex-grow flex flex-col w-full relative pt-20 md:pt-32 pb-32">
          <section className="container-large px-6 md:px-10 z-10 w-full flex flex-col items-start text-left">
            <div className="flex flex-col items-start gap-8 max-w-[800px]">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full pl-1.5 pr-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-md">
                <span className="text-white font-bold bg-[#f26522] w-[22px] h-[22px] rounded-full flex items-center justify-center text-[11px]">Y</span>
                {heroData.badge}
              </div>

              {/* Headline & Description */}
              <div className="flex flex-col items-start gap-6">
                <h1 className="text-5xl md:text-6xl lg:text-[80px] leading-[1.05] -tracking-[0.03em] font-medium text-white drop-shadow-sm">
                  {heroData.headline}
                </h1>
                <div className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed font-light">
                  {heroData.description}
                </div>
              </div>

              {/* CTAs */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href={heroData.heroButtons.primary.href}
                  className="inline-flex items-center justify-center whitespace-nowrap bg-[#0f0f13] border border-white/10 text-white font-medium text-[15px] px-8 py-3.5 rounded-[12px] transition-transform hover:scale-[1.02] shadow-xl hover:bg-black"
                >
                  {heroData.heroButtons.primary.label}
                </a>

                <a
                  href={heroData.heroButtons.secondary.href}
                  className="inline-flex items-center justify-center whitespace-nowrap bg-transparent text-white font-medium text-[15px] px-6 py-3.5 rounded-[12px] transition-colors hover:text-white/80"
                >
                  {heroData.heroButtons.secondary.label}
                </a>
              </div>
            </div>

            {/* Dashboard / Hero Image Layout */}
            <div className="w-full mt-24 md:mt-32 relative">
              <div className="relative w-full rounded-2xl md:rounded-3xl border border-white/10 overflow-hidden bg-white/5 backdrop-blur-3xl shadow-[0_0_120px_rgba(0,180,255,0.15)] ring-1 ring-white/10">
                {/* Desktop Window Top Bar Mockup */}
                <div className="w-full h-[52px] bg-[#1a1b26]/60 backdrop-blur-md border-b border-white/10 flex items-center px-6 gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-sm"></div>
                </div>

                {/* Image Wrap */}
                <img
                  src={heroData.mainImage}
                  alt="Dashboard Preview"
                  className="w-full h-auto block object-cover object-top opacity-95"
                />
              </div>
            </div>

          </section>
        </main>

        <div className="absolute inset-x-0 bottom-0 h-[30vh] bg-gradient-to-t from-[#00030a] via-[#00030a]/80 to-transparent pointer-events-none z-0"></div>
      </div>
    </div>
  )
}

export default Hero