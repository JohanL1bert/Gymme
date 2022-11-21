import React from 'react';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { Main } from '../components/Main';
import { Hero } from '../components/Hero';

export const Home = () => {
  return (
    <div>
      <Hero></Hero>
      <Main></Main>
      <CTA></CTA>
      <Footer></Footer>
    </div>
  );
};
