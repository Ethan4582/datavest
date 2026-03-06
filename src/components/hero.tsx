import React from 'react'
import { heroData } from '../lib/globalData'

const Hero = () => {
  return (
    <div className="min-h-full">
      <div className="overflow-clip p-4">
        {/* Navbar */}
        <div role="banner" className="navbar -translate-y-full">
          <div className="navbar-container">
            <a href={heroData.logo.href} aria-label={heroData.logo.alt} className="block">
              <img
                src={heroData.logo.src}
                alt={heroData.logo.alt}
                className="inline-block max-w-full align-middle h-auto"
              />
            </a>

            <div className="hidden md:flex items-center gap-12">
              <nav role="navigation" className="flex items-center">
                <div className="flex items-center gap-5">
                  {heroData.navigation.map((item, idx) => (
                    <a key={idx} href={item.href} className="nav-link">
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>
            </div>

            <div className="flex items-center">
              <a href={heroData.cta.href} className="btn-primary">
                {heroData.cta.label}
              </a>
            </div>
          </div>
          <div className="navbar-blur"></div>
        </div>

        {/* Main Content */}
        <main className="flex flex-col gap-4">
          <section className="hero-section">
            <div className="fade-overlay"></div>

            <div className="relative px-10 z-10">
              <div className="container-large">
                <div className="flex flex-col items-center gap-10">
                  <div className="badge-light">
                    <span>{heroData.badge}</span>
                  </div>

                  <div className="flex flex-col items-center gap-6 max-w-4xl text-center">
                    <h1 className="hero-headline">
                      {heroData.headline}
                    </h1>
                    <div className="hero-description text-lg">
                      {heroData.description}
                    </div>
                  </div>

                  <div>
                    <a href={heroData.cta.href} className="btn-primary">
                      {heroData.cta.label}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-[191.75px]"></div>
            </div>

            {/* Dashboard Image */}
            <div className="container-large w-[85%] mb-[-25%]">
              <div className="overflow-clip relative pt-[85.6%]">
                <img
                  src={heroData.mainImage}
                  alt="Dashboard Preview"
                  className="absolute inset-0 size-full object-cover align-middle"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Hero