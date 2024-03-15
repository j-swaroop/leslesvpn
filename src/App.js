import Header from './components/Header'
import Home from './components/Home'
import Features from './components/Features';
import About from './components/About';
import Pricing from './components/Pricing'
import GlobalNetwork from './components/GlobalNetwork'
import Testimonials from './components/Testimonials';
import SubscribeCard from './components/SubscribeCard'
import Help from './components/Help'
import './App.css';

const App = () => (
  <>
    <Header />
    <Home />
    <About />
    <Features /> 
    <Pricing />
    <GlobalNetwork/>
    <Testimonials />
    <SubscribeCard/>
    <Help/>
  </>
)


export default App;
