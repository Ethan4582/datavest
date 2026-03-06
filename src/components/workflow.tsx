import React from 'react'
import { workflowData } from '../lib/globalData'

const Workflow = () => {
  return (
    <section
      className="bg-center bg-no-repeat bg-cover overflow-hidden relative rounded-t-[2.5rem] z-10 py-24 px-10"
      style={{ backgroundImage: `url("${workflowData.backgroundImage}")` }}
    >
      <div className="container-large">
        <div className="flex flex-col items-center gap-10 text-center relative z-10 mb-[72px]">
          <div className="badge-workflow">
            <span>{workflowData.badge}</span>
          </div>
          <h2 className="display-title text-[#121116] max-w-4xl">
            {workflowData.headline}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workflowData.steps.map((step, idx) => (
            <div
              key={idx}
              className={`workflow-card ${step.gridSpan}`}
            >
              {/* Image Section */}
              {step.image && (
                <div className="workflow-image-container">
                  <div className="workflow-image-inner">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="absolute inset-0 size-full object-cover"
                    />
                  </div>
                  <div
                    className="absolute inset-x-0 bottom-0 h-[60px]"
                    style={{ backgroundImage: 'linear-gradient(rgba(28, 24, 37, 0), #1c1825)' }}
                  />
                </div>
              )}

              {/* Content Section */}
              <div className="flex flex-col text-center gap-4 p-8">
                <h3 className="stat-label mb-0">{step.title}</h3>
                <p className="text-[#c3c3c3] text-base">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fade overlay at bottom to transition back to background */}
      <div className="absolute inset-x-0 bottom-0 h-[15%] bg-gradient-to-t from-[#121116] to-transparent z-0"></div>
    </section>
  )
}

export default Workflow