import { Footer, InfoBar ,MenuBar } from '../components';
import { About, Explore, Wohin, Event, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className="bg-primary-black overflow-hidden">
    <MenuBar />
    <InfoBar/>
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <Event />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <World />
    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
      <Wohin />
    </div>
    <Footer />
  </div>
);

export default Page;
