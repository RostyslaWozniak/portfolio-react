import { AppContextProvider } from './Context/AppContext';
import About from './Section/AboutSection/About';
import Contact from './Section/Contact/Contact';
import Empty from './Section/Empty';
import Footer from './Section/Footer';
import Projects from './Section/ProjectsSection/Projects';
import Main from './Section/MainSection/Main';

function App() {
  return (
    <AppContextProvider>
      <Main/>
      <About/>
      <Projects/>
      <Empty/>
      <Contact/>
      <Footer/>
    </AppContextProvider>
  );
}

export default App;
