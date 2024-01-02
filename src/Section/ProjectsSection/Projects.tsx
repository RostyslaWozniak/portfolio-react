import ProjectElement from './ProjectElement';
import project1Img from '../../asets/images/projects/img-1.png';
import project2Img from '../../asets/images/projects/img-2.png';
import project3Img from '../../asets/images/projects/img-3.png';


const Projects = () => {
    const projects = [
        { 
            name: 'Restaurant', 
            imgSrc: project1Img, 
            technologies: [
                'CSS3', 'React.js', 'Express.js', 'MongoDB', 'VSCode'
            ],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, unde corrupti distinctio nisi ducimus illum doloribus, eius quae perferendis quasi, vel quo? Corrupti blanditiis ad vitae assumenda fugit quisquam sunt',
            github: 'https://github.com/RostyslaWozniak/my-app'
        },
        { 
            name: 'Landing Page', 
            imgSrc: project2Img,
            technologies: [
                'Figma', 'React.js', 'Tailwind', 'TypeScript', 'VSCode'
            ],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, unde corrupti distinctio nisi ducimus illum doloribus, eius quae perferendis quasi, vel quo? Corrupti blanditiis ad vitae assumenda fugit quisquam sunt',
            github: 'https://github.com/RostyslaWozniak/landing-page'
        },
        { 
            name: 'Gallery', 
            imgSrc: project3Img,
            technologies: [
                'HTML5', 'CSS3', 'JavaScript', 'VSCode'
            ],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, unde corrupti distinctio nisi ducimus illum doloribus, eius quae perferendis quasi, vel quo? Corrupti blanditiis ad vitae assumenda fugit quisquam sunt',
            github: 'https://github.com/RostyslaWozniak/image-component'
        },
    ];
  return(
    <section id="projects" className="relative py-80">
        <div className="w-sectionWidth m-auto flex flex-col laptop:flex-row items-center justify-between gap-sm">
            <div className="w-[min(400px,100%)] h-[550px] flex flex-col justify-between">
                <h2 className="text-[2rem] text-center my-20">PROJECTS</h2>
                <div className="grid  py-5 px-10 border-2 backdrop-blur-sm rounded-lg backdrop-brightness-50 scale-[.98] shadow-sm-light gap-sm hover:shadow-lg-light hover:scale-[1] duration-300">
                    <p className="text-[1.2rem] indent-10  text-justify">Explore the portfolio to discover content-rich websites that go beyond the ordinary, offering a glimpse into the future of my web skills. Each project is bringing creativity, functionality, and a passion for delivering exceptional digital experiences. 
                    You can check out my websites on <a href="https://github.com/RostyslaWozniak" target="_blank" className="bold underline">GitHub</a>. Enjoy the graphics!</p>
                </div>
            </div>
            <div className="grid grid-cols-1 tablet:grid-cols-2 gap-sm place-items-center">
                {projects.map((project, id) => (
                    <ProjectElement 
                        key={id} id={id} 
                        name={project.name} 
                        imgSrc={project.imgSrc} 
                        technologies={project.technologies} 
                        description={project.description}
                        github={project.github}
                    />
                ))}
            </div>
        </div>
    </section>
);
  };
  export default Projects;