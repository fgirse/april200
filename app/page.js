import { Footer, InfoBar ,MenuBar } from '../components';
import { About, Philosophy, Wohin, Event, Hero, Drinks, Team, Sportarena, World } from '../sections';
import { NavTest } from '../utils'
import ScrollToTop from'../components/ScrollToTopButton';
const Page = () => (
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
      <div className="gradient-04 z-0"></div>
      <Event />
    </div>
    <Sportarena />
    <div className="relative">
       <Team/>
      <div className="gradient-04 z-0"></div>
      <Wohin />
    </div>
    </div>
    <ScrollToTop className="fixed bottom-10 right-50"/>
    <Footer />
  </div>
);
export default Page
