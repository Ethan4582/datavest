import React from 'react'
import { footerData } from '../lib/globalData'

const Footer = () => {
   return (
      <footer
         className="bg-center bg-no-repeat bg-cover overflow-hidden relative rounded-b-[2.5rem] z-10 py-24 px-10"
         style={{ backgroundImage: `url("${footerData.backgroundImage}")` }}
      >
         <div className="container-large relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
               {/* Logo & Info */}
               <div className="flex flex-col gap-4">
                  <a href="/" className="block">
                     <img
                        src={footerData.logo}
                        alt="Datavest Logo"
                        className="h-10 w-auto object-contain"
                     />
                  </a>
                  <p className="text-[#c3c3c3] text-sm max-w-xs leading-relaxed">
                     {footerData.description}
                  </p>
               </div>

               {/* Links Grid */}
               <div className="grid grid-cols-2 gap-8 w-full">
                  <div className="flex flex-col gap-8">
                     {footerData.links.slice(0, 3).map((link, idx) => (
                        <FooterLink key={idx} href={link.href} label={link.label} />
                     ))}
                  </div>
                  <div className="flex flex-col gap-8">
                     {footerData.links.slice(3).map((link, idx) => (
                        <FooterLink key={idx} href={link.href} label={link.label} />
                     ))}
                  </div>
               </div>
            </div>
         </div>

         {/* Top background blend gradient */}
         <div
            className="absolute inset-x-0 top-0 h-[15%] pointer-events-none z-0 rotate-180"
            style={{ backgroundImage: 'linear-gradient(rgba(18, 17, 22, 0), #121116)' }}
         />
      </footer>
   )
}

const FooterLink = ({ href, label }: { href: string; label: string }) => (
   <a href={href} className="group relative flex flex-col items-start w-fit">
      <span className="text-white transition-opacity group-hover:opacity-80">{label}</span>
      <span className="h-[1px] w-full bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
   </a>
)

export default Footer