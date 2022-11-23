import React from 'react';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <CTA />
      <Footer />
    </div>
  );
};
