import { Footer, InfoBar ,MenuBar } from '../components';
import { About, Philosophy, Wohin, Event, Hero, Drinks, Team, Sportarena, World } from '../sections';
import { NavTest } from '../utils'
import ScrollToTop, { ScrollTop } from'../components/BackToTop/ScrollToTop.js';
const Page = () => (
  <>

  <div className="bg-primary-black overflow-hidden flex-col">
    <NavTest />  
    <InfoBar/> 
    <div className='flex-grow'>
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0"></div>
      <Philosophy />
    </div>
    <div className="relative">
      <Drinks />
      <ScrollToTop/>
      <div className="gradient-04 z-0"></div>
      <Event />
    </div>
    <Sportarena />
    <div className="relative">
       <Team/>
      <div className="gradient-04 z-0"></div>
      <Wohin />
    </div>
    <ScrollToTop/>    
     </div>
   
    <Footer />
  </div>
  </>
);
export default Page
