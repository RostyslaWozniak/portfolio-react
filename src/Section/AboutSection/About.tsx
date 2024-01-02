import ShowLanguages from './Languages/ShowLanguages';
import UseTechnologies from './TechnologyUse/UseTechnologies';
import './css/style.css';

const About = () => {
    return (
    <section 
        id="about" 
        className="relative bg-primary bg-no-repeat text-font shadow-primary-shadow ">
        <div className="w-sectionWidth mx-auto flex flex-col gap-lg pt-[200px] ">
            <div className="flex flex-col laptop:flex-row gap-lg">
                <div className="w-[min(600px,100%)] flex flex-col gap-[20px] p-10 text-justify mx-auto border rounded-lg backdrop-blur-md scale-[.98] shadow-sm hover:shadow-lg duration-300 hover:scale-[1]">
                    <h1 className="text-[2rem] text-center">ABOUT</h1>
                    <p className="text-[1.1rem] indent-10">Welcome to my portfolio, where I showcase a collection of innovative web projects designed to leave a lasting impression.  My role is mainly based on bringing Web design to life and visually appealing user experience.  As a Front-end Developer, my mission is to provide users  with an experience that is not only functional but also enjoyable.</p> 
                    <p className="text-[1.1rem] indent-10 ">My days are filled with lines of code that transform static design into interactive, responsive, and user-friendly interfaces. I see challenges as opportunities for growth. Each bug I encounter is a puzzle to solve. Every project is a chance to refine my skill and expand my knowledge.</p>
                </div>
                <div className="w-[min(500px,100%)] flex flex-col justify-around py-5 gap-sm mx-auto">
                    <h2 className="text-[1.8rem] text-center">Languages</h2>
                    <ShowLanguages/>
                </div>
            </div>
            <div className="flex flex-col justify-between gap-sm">
                <h2 className="text-[1.8rem] text-center z-[1]">Technologies I Use</h2>
                <UseTechnologies/>
            </div>
        </div>
      </section>
    );
  };
  export default About;