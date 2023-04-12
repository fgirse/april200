import { Footer, InfoBar ,MenuBar } from '../components';
import { About, Philosophy, Wohin, Event, Hero, Drinks, Team, Sportarena, World } from '../sections';


const Page = () => (
  <div className="bg-primary-black overflow-hidden flex-col">
    <MenuBar />
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
    <Footer />
  </div>
);
export default Page
