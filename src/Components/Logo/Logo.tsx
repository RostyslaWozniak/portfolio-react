/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useAppContext } from '../../Context/AppContext';
import './Logo.css';

function showLogo(){
  const { isLogoActive, setIsLogoActive, setIsNavActive } = useAppContext();
  useEffect(() => {
    //Logo
    if(window.innerWidth < 650) return;
    setTimeout(() => setIsLogoActive(true), 4000);

}, [setIsLogoActive]);
  function handleClickLogo(){
    setIsNavActive(false);
    setIsLogoActive(!isLogoActive);
    scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  const activeLogo = isLogoActive && 'active';
    return(
      <div 
        className={`logo-container ${activeLogo} tablet:scale-110 z-[10]`}
        onClick={handleClickLogo}
       >
        <div className="R">R</div>
        <div className="name">ostysla</div>
        <div className="V-1 ">V</div>
        <div className="full-surname">
          <div className="V-2">V</div>
          <div className="surname">ozniak</div>
        </div>
      </div>
    );
  }

export default showLogo;