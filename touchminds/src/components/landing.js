import React from 'react';

import Footer from './landing_comp.js/footer';
import CallToAction from './landing_comp.js/call';
import Modules from './landing_comp.js/modules';
import Services from './landing_comp.js/services';
import Header from './landing_comp.js/header';
import HeroSection from './landing_comp.js/hero_section';

const LandingPage = () => (
    <div>
      <Header />
      <HeroSection />
      <Services />
      <Modules />
      <CallToAction />
      <Footer />
    </div>
  );

  export default LandingPage;
