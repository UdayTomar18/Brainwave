import { brainwave } from '../assets';
import { navigation } from '../constants';
import { useLocation } from 'react-router-dom'
import Button from './Button';
import MenuSvg from '../assets/svg/MenuSvg'
import { HamburgerMenu } from "./design/Header";

import { useState } from 'react';
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const pathName = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation  =()=>{
    if(openNavigation){
      setOpenNavigation(false)
    }else{
      setOpenNavigation(true)
      disablePageScroll()
    }
  }

  const handleClick =()=>{
    if(!openNavigation) return;

    enablePageScroll()
    setOpenNavigation(false)
  }


  return (
    <div className={`fixed top-0 left-0 w-full border-b z-50  border-n-6 md:backdrop-blur-sm ${openNavigation ? 'bg-n-8' :'bg-n-8/90 blackdrop-blur-sm'}`}>
      <div className='flex items-center px-5 pt-2 md:px-7.5 lg:px-10 lg:py-4'>
        <a className='block w-[12rem] xl:mr-8' href="#hero">
          <img src={brainwave} alt="Brainwave" className="h-10 w-auto" />
        </a>

        <nav className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>

<div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
                  item.url === pathName.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1/50"
                } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
            <HamburgerMenu/>
        </nav>

        <a className='button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block text-base' href="#sighnup">New Account</a>

        <Button className="hidden lg:flex" href="#signin" onClick={toggleNavigation}>Sign in</Button>

        <Button className='ml-auto lg:hidden' px='px-3'onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation}/>
        </Button>

      </div>
    </div>
  );
};

export default Header;
