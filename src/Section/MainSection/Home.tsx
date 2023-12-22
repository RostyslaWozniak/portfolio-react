import MainArrow from '../../Components/ArrowAnimations/MainArrow';
import './css/style.css';
const Home = () => {
  return (
  <section className="relative w-sectionWidth h-screen mx-auto "> 
    <h1 
    style={{animation: '4s 2s linear h1-animation'}}
    className="fixed top-[40%] text-[min(4rem,6vw)] font-bold tracking-widest leading-[min(6rem,10vw)] z-[-1]">
      Hi, <br/>
      My Name is Rostik<br/>
      and I'm Web Developer.<br/>
    </h1>
    <a href="#about" className="fixed bottom-0 tablet:hidden">
      <MainArrow/>
    </a>
  </section>
  );
};
export default Home;