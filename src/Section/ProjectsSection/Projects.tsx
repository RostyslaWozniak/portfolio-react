import ImagesOfProjects from './ImagesOfProjects';


const Projects = () => {
  return(
    <section id="projects" className="py-80">
        <div className="w-sectionWidth m-auto flex flex-col laptop:flex-row items-center justify-between gap-sm">
            <div className="w-[min(400px,100%)] h-[550px] flex flex-col justify-between">
                <h2 className="text-[2rem] text-center">PROJECTS</h2>
                <div className="grid py-5 px-10 border-2 backdrop-blur-sm rounded-lg backdrop-brightness-75 scale-[.98] shadow-sm-light gap-sm hover:shadow-lg-light hover:scale-[1] duration-300">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita beatae rerum temporibus rem voluptatem facere atque reiciendis! Soluta consectetur sunt ea deleniti ab illo eaque est error corrupti facere.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam expedita beatae rerum temporibus rem voluptatem facere atque reiciendis! Soluta consectetur sunt ea deleniti ab illo eaque est error corrupti facere.</p>
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