import video from '../../asets/video/video-webm.webm';
import image from '../../asets/video/image.png';

const HomeBackground = () => {
    return ( 
        <video 
          autoPlay 
          loop 
          muted 
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
          }}
          className="h-xl-screen fixed top-0 left-0 w-screen object-cover brightness-[60%] z-[-10]"
          >
          <source 
            src={video} 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>

     );
};
 
export default HomeBackground;