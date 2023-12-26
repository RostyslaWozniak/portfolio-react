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
    setIsNavActive,
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

  function handleHeaderClick(){
    setIsNavActive(false);
    setIsLogoActive(false);
  }
  const navOpacity = isNavActive ? 1 : .7;
  const headerBackground = isNavActive ? '' : font;
  const haderPositionWhenNavIsActive = isNavActive ? '0' : '-100px';
  return (
    <header 
      onClick={handleHeaderClick}
      className="fixed w-screen z-[30] duration-200" 
      style={{
        top: isHeaderActive ? '0' : haderPositionWhenNavIsActive, 
        opacity: hasHeaderBackground ? navOpacity : '1',
        height: isNavActive ? '100dvh' : '80px',
        backgroundColor: hasHeaderBackground ? headerBackground : 'transparent',
        backdropFilter:  isNavActive ? 'blur(2px) brightness(70%)' : 'blur(0) brightness(100%)',
      }}>
      <div className=" relative w-sectionWidth mx-auto py-4 flex justify-between text-[1.2rem]">
        <ShowLogo/>
        <Navigation/>
        <BurgerButton/>
      </div>
    </header>
  );
};
export default Header;