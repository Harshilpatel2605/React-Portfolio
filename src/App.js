import './App.css';
import About from './Components/About';
import Clients from './Components/Clients';
import Contact from './Components/Contact';
import Intro from './Components/Intro';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <About/>
      <Portfolio/>
      <Clients/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
