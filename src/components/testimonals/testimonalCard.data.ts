import MarkImage from '../../assets/image/community_slider/1.png';
import LaurednImage from '../../assets/image/community_slider/2.png';
import JohnImage from '../../assets/image/community_slider/3.png';

export const testimonalData = [
  {
    id: 1,
    namePeople: 'Mark A',
    text: 'Great location, great price and great, helpful people. What to want more?',
    img: MarkImage,
  },
  {
    id: 2,
    namePeople: 'Lauren K',
    text: 'Gymme changed my life. Not only physically but mentally as well. I’m a better mother, and all around better human being because of this gym.',
    img: LaurednImage,
  },
  {
    id: 3,
    namePeople: 'John D',
    text: 'Love these workouts! Trainers are knowledgeable and motivating. Gymme is wonderful!',
    img: JohnImage,
  },
];

export type TTestimonalData = typeof testimonalData;
export type TTestimonalCard = TTestimonalData[number];
