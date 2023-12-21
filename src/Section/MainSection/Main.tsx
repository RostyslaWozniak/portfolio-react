import Loader from '../../Components/Loader/Loader';
import Header from './Header/Header';
import Navigation from './Header/Navigation/BurgerNavigation';
import Home from './Home';
import HomeBackground from './HomeBackground';


const Main = () => {

  return (
    <div id="main" className="relative h-xl-screen">
      <Loader/>
      <Header/>
      <Navigation/>
      <Home/>
      <HomeBackground/>
    </div>
  );
};
export default Main;