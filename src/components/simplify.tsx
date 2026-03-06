import React from 'react'
import { simplifyData } from '../lib/globalData'

const Simplify = () => {
   return (
      <section
         className="relative flex flex-col justify-center overflow-hidden bg-cover bg-no-repeat rounded-b-[2.5rem] min-h-[821px] z-10 py-24 px-10"
         style={{ backgroundImage: `url("${simplifyData.backgroundImage}")`, backgroundPosition: '50% 0px' }}
      >
         <div className="container-large relative z-10">
            <div className="flex flex-col items-center gap-9 text-center">
               <div className="badge-light">
                  <span>{simplifyData.badge}</span>
               </div>

               <div className="flex flex-col items-center gap-6">
                  <h2 className="display-title max-w-2xl">
                     {simplifyData.headline}
                  </h2>
                  <p className="text-[#c3c3c3] max-w-[528px] mx-auto text-lg leading-relaxed">
                     {simplifyData.description}
                  </p>
               </div>

               <a href={simplifyData.cta.href} className="btn-primary">
                  {simplifyData.cta.label}
               </a>
            </div>
         </div>

         {/* Top transition gradient */}
         <div
            className="absolute inset-x-0 top-0 h-[15%] pointer-events-none z-0 rotate-180"
            style={{ backgroundImage: 'linear-gradient(rgba(18, 17, 22, 0), #121116)' }}
         />
      </section>
   )
}

export default Simplify