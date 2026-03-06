import React from 'react'
import { statisticsData } from '../lib/globalData'

const Statistics = () => {
  return (
    <section className="section-padding py-24">
      <div className="container-large">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="badge-light">
            <span>{statisticsData.badge}</span>
          </div>
          <h2 className="display-title max-w-4xl">
            {statisticsData.headline}
          </h2>
        </div>

        <div className="h-[72px]" aria-hidden="true"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statisticsData.items.map((item, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-value">{item.value}</div>
              <div>
                <h3 className="stat-label">{item.label}</h3>
                <p className="stat-desc">{item.description}</p>
              </div>
              <img
                src={item.blurImage}
                alt=""
                className="pointer-events-none absolute w-[361px] h-[316px] -left-1/2 bottom-0 blur-[110px] opacity-70 z-[-1]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics