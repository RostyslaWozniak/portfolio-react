import Loader from '../../Components/Loader/Loader';
import Header from './Header/Header';
import Home from './Home';
import HomeBackground from './HomeBackground';


const Main = () => {

  return (
    <div id="main" className="relative h-xl-screen">
      <Loader/>
      <Header/>
      <Home/>
      <HomeBackground/>
    </div>
  );
};
export default Main;