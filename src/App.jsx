
import Header from './components/Header'
import ButtonGradient from "./assets/svg/ButtonGradient";
import Hero from './components/Hero';
import Benifits from './components/Benifits';
import Collaburation from './components/Collaburation';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App = () => {
  return (
    <>

      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>

        <Header />
        <Hero />
        <Benifits />
        <Collaburation/>
        <Services/>
        <Pricing/>
        <Roadmap/>
        <Footer/>
      </div>
        <ButtonGradient />

    </>


  )
}

export default App
