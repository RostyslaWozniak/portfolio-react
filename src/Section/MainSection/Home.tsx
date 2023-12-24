import { useEffect, useState } from 'react';
import MainArrow from '../../Components/ArrowAnimations/MainArrow';
import './css/style.css';
const Home = () => {
  const [showHeadingDelay, setShowHeadingDelay] = useState(2);
  const tabletWidth = 650;
  useEffect(() => {
    //Logo
    
    if(window.innerWidth < tabletWidth) setShowHeadingDelay(0);
}, []);
  return (
  <section className="relative w-sectionWidth h-screen mx-auto"> 
    <h1 
    style={{animation: `4s ${showHeadingDelay}s linear h1-animation`}}
    className="fixed bottom-[25vh] text-[min(4rem,8vw)] laptop:font-bold laptop:tracking-widest leading-[min(6rem,15vw)] z-[-1]">
      Hi, <br/>
      My Name is Rostik<br/>
      and I'm Web Developer.<br/>
    </h1>
    <div className="fixed w-full h-[200px] left-0 bottom-0 laptop:hidden">
      <MainArrow/>
    </div>
  </section>
  );
};
export default Home;