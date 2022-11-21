import React from 'react';
import { About } from './About';
import { Workouts } from './Workouts';
import { Pricing } from './Pricing';
import { Testimonals } from './Testimonals';
import { FAQ } from './FAQ';

export const Main = () => {
  return (
    <main>
      <About></About>
      <Workouts></Workouts>
      <Pricing></Pricing>
      <Testimonals></Testimonals>
      <FAQ></FAQ>
    </main>
  );
};
