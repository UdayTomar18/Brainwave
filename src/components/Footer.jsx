import React from 'react'
import Section from './Section'
import { socials } from '../constants'

const Footer = () => {
  return (
    <Section crosses className='!px-0 !py-10' >
      <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
<p className='caption text-n-4 lg:block'>{new Date().getFullYear()},All right reserved.</p>

<ul className='flex gap-5 flex-wrap'>
    {socials.map((item)=>{
        return(
            <a href={item.url} className='flex items-center justify-center rounded-full w-10 h-10 bg-n-7 transition-colors hover:bg-n-6'key={item.id}>
                <img src={item.iconUrl} height={16} width={16} alt={item.title} />
            </a>
        )
    })}
</ul>
      </div>
    </Section>
  )
}

export default Footer
