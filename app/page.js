import { Footer, InfoBar ,MenuBar } from '../components';
import { About, Philosophy, Wohin, Event, Hero, Drinks, Team, Sportarena, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <MenuBar className="mt-8" />
    <InfoBar/>
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Philosophy />
    </div>
    <div className="relative">
      <Drinks/>
      <Event />
      <div className="gradient-04 z-0" />
      <Sportarena />
    </div>
    <div className="relative">
      <Team/>
      <div className="gradient-03 z-0" />
    
      <Wohin />
    </div>
    <Footer />
  </div>
);

export default Page;
