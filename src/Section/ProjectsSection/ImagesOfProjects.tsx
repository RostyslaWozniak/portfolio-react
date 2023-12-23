import projext1Img from '../../asets/images/projects/img-1.png';
import projext2Img from '../../asets/images/projects/img-2.png';
import projext3Img from '../../asets/images/projects/img-3.png';

const ImagesOfProjects = () => {

    return ( 
        <>
            <div  
                className=" w-[min(400px,100%)] tablet:w-[300px] h-[300px] tablet:h-[570px] grid place-items-center rounded-lg shadow-sm-light overflow-hidden border-2 scale-[.98] hover:scale-[1] hover:shadow-lg-light duration-300 backdrop-blur" 
                style={{
                    gridColumn: '1/2',
                    gridRow: '1/3'
                }}
                >
                <img 
                    className="hover:scale-110 opacity-60 brightness-75 hover:opacity-100 hover:brightness-100 duration-300" 
                    src={projext1Img} 
                    alt="Restaurant" 
                />
            </div>
            <div  
                className="w-[min(400px,100%)] tablet:w-[300px] grid place-items-center rounded-lg shadow-sm-light overflow-hidden border-2 scale-[.98] hover:scale-[1] hover:shadow-lg-light duration-300 backdrop-blur"
                >
                <img 
                    className="hover:scale-110 opacity-60 brightness-75 hover:brightness-100 hover:opacity-100 duration-300" 
                    src={projext2Img} 
                    alt="Landing Page" 
                />
            </div>
            <div  
                className="w-[min(400px,100%)] tablet:w-[300px] grid place-items-center rounded-lg shadow-sm-light overflow-hidden border-2 scale-[.98] hover:scale-[1] hover:shadow-lg-light duration-300 backdrop-blur"
                >
                <img 
                    className="hover:scale-110 opacity-60 brightness-75 hover:opacity-100 hover:brightness-100 duration-300" 
                    src={projext3Img} 
                    alt="E-Commerce" 
                />
            </div>
        </>
     );
};
 
export default ImagesOfProjects;