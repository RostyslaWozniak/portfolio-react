import video from '../../asets/video/video-webm.webm';
import image from '../../asets/images/background/loader/loader-bg.png';

const HomeBackground = () => {
    return ( 

        <video 
          autoPlay 
          loop 
          muted 
          className="h-xl-screen fixed top-0 left-0 w-screen object-cover brightness-[60%] z-[-10]">
          <source 
            src={video || image} 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

     );
};
 
export default HomeBackground;