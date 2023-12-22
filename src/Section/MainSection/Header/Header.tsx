import { useEffect } from 'react';
import ShowLogo from '../../../Components/Logo/Logo';
import { useAppContext } from '../../../Context/AppContext';
import BurgerButton from './Navigation/BurgerButton';
import Navigation from './Navigation/Navigation';


const Header = () => {
  const { 
    hasHeaderBackground,
    isHeaderActive, 
    setIsHeaderActive,
    setIsLogoActive,
    setHasHeaderBackground,
  } = useAppContext();
  

  useEffect(() => {
    let screenArray : number[] = [];
    const tabletWidth = 650;
    window.addEventListener('scroll', () => {
      
      if(window.scrollY < window.innerHeight){
        if(window.innerWidth > tabletWidth) setIsLogoActive(true);
        setIsHeaderActive(true);
        setHasHeaderBackground(false);
      } else{
        setHasHeaderBackground(true);
        screenArray.push(window.scrollY);
        const maxNum = Math.max(...screenArray);
        if(maxNum > window.scrollY) {
            screenArray = [];
            setIsHeaderActive(true);
        }
        if(screenArray.length > 30){
          setIsHeaderActive(false);
        }
        setIsLogoActive(false);
      }
    });

  }, [setIsHeaderActive, setIsLogoActive, setHasHeaderBackground]);

  return (
    <header 
      className="fixed w-screen z-[30] duration-200" 
      style={{
        top: isHeaderActive ? '0' : '-100px', 
        backdropFilter: hasHeaderBackground ? 'brightness(40%)' : 'brightness(100%)'
      }}>
      <div className="w-sectionWidth mx-auto py-4 flex justify-between items-center text-[1.2rem] ">
        <ShowLogo/>
        <Navigation/>
        <BurgerButton/>
      </div>
    </header>
  );
};
export default Header;