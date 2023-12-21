import { useEffect } from 'react';
import ShowLogo from '../../../Components/Logo/Logo';
import { useAppContext } from '../../../Context/AppContext';
import HomeBackground from '../HomeBackground';
import BurgerButton from './Navigation/BurgerButton';


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

    window.addEventListener('scroll', () => {
      
      if(window.scrollY < window.innerHeight - 100){
        if(window.innerWidth > 650) setIsLogoActive(true);
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
      className="fixed w-screen z-[30] overflow-hidden duration-200" 
      style={{
        top: isHeaderActive ? '0' : '-100px', 
        backdropFilter: isHeaderActive ? 'brightness(100%)' : 'brightness(100%)'
      }}>
      <div className="w-sectionWidth mx-auto py-4 flex justify-between items-center text-[1.2rem] ">
        <ShowLogo/>
        <BurgerButton/>
      </div>
      {hasHeaderBackground && <HomeBackground/>}
    </header>
  );
};
export default Header;