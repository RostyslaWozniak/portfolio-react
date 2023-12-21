import ShowLanguages from './Languages/ShowLanguages';
import UseTechnologies from './TechnologyUse/UseTechnologies';
import gear from '../../asets/images/background/about/gear.svg';
import './css/style.css';

const About = () => {
    return (
    <section 
        id="about" 
        className="relative bg-primary bg-no-repeat text-font shadow-primary-shadow ">
        <img 
            src={gear} 
            className="absolute hidden laptop:block" 
            style={{
                animation: '60s linear infinite gearRotate'
            }}
        />
        <div className="w-sectionWidth mx-auto flex flex-col gap-lg pt-[200px] ">
            <div className="flex flex-col laptop:flex-row gap-lg">
                <div className="w-[min(600px,100%)] flex flex-col gap-md p-10 text-justify mx-auto border rounded-lg backdrop-blur-md scale-[.98] shadow-sm hover:shadow-lg duration-300 hover:scale-[1]">
                    <h1 className="text-[2rem] text-center z-[1]">ABOUT</h1>
                    <p className="z-[1]">Hi, welcome to my profile. As a passionate freelance Frontend JavaScript Developer, I bring expertise in creating dynamic and user-friendly interfaces using the powerful combination of React for the frontend, Node.js and Express for server-side logic, and MongoDB for seamless database integration.</p>
                        
                    <p>Database Integration with MongoDB: As a frontend developer, I understand the importance of seamless data management. With MongoDB, I ensure your application's data is stored and retrieved efficiently, providing a solid foundation for dynamic and data-driven web applications.</p>
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