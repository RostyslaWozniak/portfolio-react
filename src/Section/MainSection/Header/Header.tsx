import { useEffect } from 'react';
import ShowLogo from '../../../Components/Logo/Logo';
import { useAppContext } from '../../../Context/AppContext';
import BurgerButton from './Navigation/BurgerButton';
import Navigation from './Navigation/Navigation';
import { font } from '../../../utilities/colors';


const Header = () => {
  const { 
    hasHeaderBackground,
    isHeaderActive, 
    isNavActive,
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
  //for burger nav 

  const navOpacity = isNavActive ? 1 : .8;
  return (
    <header 
      className="fixed w-screen z-[30] duration-200" 
      style={{
        top: isHeaderActive ? '0' : '-100px', 
        opacity: hasHeaderBackground ? navOpacity : '1',
        height: isNavActive ? '100dvh' : '60px',
        backgroundColor: hasHeaderBackground ? font : 'transparent',
      }}>
      <div className="w-sectionWidth mx-auto py-4 flex justify-between items-center text-[1.2rem]">
        <ShowLogo/>
        <Navigation/>
        <BurgerButton/>
      </div>
    </header>
  );
};
export default Header;