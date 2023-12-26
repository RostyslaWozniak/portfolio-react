import ImagesOfProjects from './ImagesOfProjects';


const Projects = () => {
  return(
    <section id="projects" className="py-80">
        <div className="w-sectionWidth m-auto flex flex-col laptop:flex-row items-center justify-between gap-sm">
            <div className="w-[min(400px,100%)] h-[550px] flex flex-col justify-between">
                <h2 className="text-[2rem] text-center my-20">PROJECTS</h2>
                <div className="grid  py-5 px-10 border-2 backdrop-blur-sm rounded-lg backdrop-brightness-50 scale-[.98] shadow-sm-light gap-sm hover:shadow-lg-light hover:scale-[1] duration-300">
                    <p className="text-[1.2rem] indent-10  text-justify">Explore the portfolio to discover content-rich websites that go beyond the ordinary, offering a glimpse into the future of my web skills. Each project is bringing creativity, functionality, and a passion for delivering exceptional digital experiences. 
                    You can check out my websites on <a href="https://github.com/RostyslaWozniak" className="bold underline">GitHub</a>. Enjoy the graphics!</p>
                </div>
            </div>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-sm place-items-center">
                <ImagesOfProjects/>
            </div>
        </div>
    </section>
);
  };
  export default Projects;