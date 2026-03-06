import React from 'react'
import { articlesData } from '../lib/globalData'

const Articles = () => {
   return (
      <section className="section-padding py-24 bg-[#121116]">
         <div className="container-large">
            <div className="flex flex-col items-center gap-10 text-center mb-12">
               <div className="badge-light">
                  <span>{articlesData.badge}</span>
               </div>
               <div className="flex flex-col items-center gap-6">
                  <h2 className="display-title max-w-2xl">{articlesData.headline}</h2>
                  <p className="text-[#c3c3c3] max-w-2xl">{articlesData.description}</p>
               </div>
            </div>

            <div className="grid grid-cols-1 gap-12">
               {articlesData.items.map((article, idx) => (
                  <div key={idx} className="group">
                     <a
                        href={article.href}
                        className="grid grid-cols-1 md:grid-cols-2 items-stretch border bg-[#1c1825] border-white/10 gap-6 p-6 rounded-3xl transition-colors hover:border-white/20"
                     >
                        <div className="relative pt-[70%] md:pt-0 overflow-hidden rounded-2xl border border-white/10">
                           <img
                              src={article.image}
                              alt={article.title}
                              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
                           />
                        </div>
                        <div className="flex flex-col justify-center items-start gap-10">
                           <div className="flex flex-col gap-4">
                              <h3 className="stat-label mb-0 text-white leading-tight">{article.title}</h3>
                              <p className="text-[#c3c3c3] text-base">{article.description}</p>
                           </div>
                           <div className="btn-primary">
                              <span>Read More</span>
                           </div>
                        </div>
                     </a>
                  </div>
               ))}
            </div>
         </div>
      </section>
   )
}

export default Articles