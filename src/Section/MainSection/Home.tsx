import { useEffect, useState } from 'react';
import MainArrow from '../../Components/ArrowAnimations/MainArrow';
import './css/style.css';
import TypeWriter from '../../Components/TypeWriter/Typewriter';
const Home = () => {
  const [showHeadingDelay, setShowHeadingDelay] = useState(5000);
  const tabletWidth = 650;
  useEffect(() => {
    //Logo
    
    if(window.innerWidth < tabletWidth) setShowHeadingDelay(500);
}, []);

  const speed = 100;
 

  const text1 = TypeWriter({ text: 'Hi,', startDelay: showHeadingDelay, speed });
  const text2 = TypeWriter({ text: 'My Name is Rostik', startDelay: showHeadingDelay + 1100, speed });
  const text3 = TypeWriter({ text: 'and I\'m Web Developer.', startDelay: showHeadingDelay + 4000, speed });

  return (
  <section className="relative w-sectionWidth h-screen mx-auto"> 
    <div 
    className="fixed h-[min(40dvw,300px)] bottom-[25dvh] laptop:bottom-[10dvh] text-[min(4rem,8vw)] laptop:font-bold laptop:tracking-widest leading-[min(6rem,15vw)] z-[-1]">
      <p>{text1}</p>
      <p>{text2}</p>
      <p>{text3}</p>
    </div>
    <div className="fixed w-full h-[200px] left-0 bottom-0 laptop:hidden">
      <MainArrow/>
    </div>
  </section>
  );
};
export default Home;