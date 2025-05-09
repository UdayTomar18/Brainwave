
import Section from './Section'
import { smallSphere, stars } from '../assets'
import Heading from './Heading'


import PricingList from "./PricingList";

const Pricing = () => {
    return (
        <Section id='pricing' className='overflow-hidden'>
            <div className='container z-2'>
                <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>
                    <img src={smallSphere} alt="sphere" className='relative z-1' width={255} height={255} />
                    <div className='absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none'>
                        <img src={stars} alt="" className='w-full' />
                    </div>

                </div>
                <Heading 
                    tag='Get started with Brainwave'
                    title='Pay once,use forever' 

                />
                <div className='relative'>
                    <PricingList />
                </div>
                <div className='flex justify-center mt-10'>
                    <a href="/pricing" className='text-xs font-code font-bold tracking-wider uppercase border-b'>see full details</a>

                </div>

            </div>
        </Section>
    )
}

export default Pricing
