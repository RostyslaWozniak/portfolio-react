import MainArrow from '../../Components/ArrowAnimations/MainArrow';
import './css/style.css';
const Home = () => {
  return (
  <section className="relative w-sectionWidth h-screen mx-auto"> 
    <h1 
    style={{animation: '4s 2s linear h1-animation'}}
    className="fixed bottom-[25vh] text-[min(4rem,8vw)] laptop:font-bold laptop:tracking-widest leading-[min(6rem,15vw)] z-[-1]">
      Hi, <br/>
      My Name is Rostik<br/>
      and I'm Web Developer.<br/>
    </h1>
    <a href="#about" className="fixed w-full h-[200px] left-0 bottom-0 tablet:hidden">
      <MainArrow/>
    </a>
  </section>
  );
};
export default Home;