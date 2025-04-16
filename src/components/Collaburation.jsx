import React from 'react'
import { collabApps, collabContent, collabText } from '../constants'
import { brainwaveSymbol, check } from '../assets'
import Section from './Section'
import Button from './Button'
import {LeftCurve,RightCurve} from './design/Collaboration'

const Collaburation = () => {
  return (
    <Section >
      <div className='container lg:flex'>
        <div className='max-w-[25rem]'>
          <h2 className='mb-6 md:mb-8 h2'>
            AI Chat App for seamless collaburation
          </h2>
          <ul className='max-w-[22rem] mb-10 md:mb-14'>
            {collabContent.map((item) => {
              return (
                <li key={item.id} className='mb-3 py-3'>
                  <div className='flex items-center'>
                    <img src={check} alt='check' height={24} width={24} />
                    <h6 className='body-2 ml-5'>{item.title}</h6>
                  </div>
                  {item.text && (
                    <p className='body-2 mt-3 text-n-4'>
                      {item.text}
                    </p>
                  )}

                </li>
              )
            })}

          </ul>
          <Button>Try it now</Button>
        </div>
        <div className='lg:ml-auto xl:w-[38rem] mt-4'>
          <p className='body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto'>{collabText}</p>

          <div className='mt-4 relative flex left-1/2 ml-2 aspect-square border border-n-6 m-auto w-[22rem] -translate-x-1/2 scale-75 md:scale-100 rounded-full'>
            <div className='flex aspect-square border border-n-6 w-60 scale-75 rounded-full m-auto'>
              <div className='w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full'>
                <div className='flex items-center justify-center w-full h-full bg-n-8 rounded-full'>
                  <img src={brainwaveSymbol} alt="brainwave" height={48} width={48} />
                </div>
              </div>
            </div>
            <ul>
              {collabApps.map((app, index) => {
                return (
                  <li key={app.id} className={`absolute left-1/2 top-0 h-1/2 -ml-[1.6rem] origin-bottom rotate-${index * 45}`}>
                    <div className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] border border-n-1/15 bg-n-7 rounded-xl -rotate-${index * 45}`}>
                      <img className='m-auto' height={app.height} width={app.width} src={app.icon} alt={app.title} />
                    </div>
                  </li>

                )
              })}
            </ul>
            <LeftCurve/>
            <RightCurve/>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Collaburation
