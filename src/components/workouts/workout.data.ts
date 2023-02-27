import AtleticsImg from '../../assets/image/workout_slider/1.png';
import BoxingImg from '../../assets/image/workout_slider/2.png';
import BodyPumpImg from '../../assets/image/workout_slider/3.png';
import YogaImg from '../../assets/image/workout_slider/4.png';
import FullBodyImg from '../../assets/image/workout_slider/5.png';

export const workoutData = [
  {
    id: 1,
    nameOfUse: 'Athletics',
    img: AtleticsImg,
  },
  {
    id: 2,
    nameOfUse: 'Boxing',
    img: BoxingImg,
  },
  {
    id: 3,
    nameOfUse: 'Body Pump',
    img: BodyPumpImg,
  },
  {
    id: 4,
    nameOfUse: 'Yoga',
    img: YogaImg,
  },
  {
    id: 5,
    nameOfUse: 'Full Body',
    img: FullBodyImg,
  },
];

export type TWorkoutData = typeof workoutData;
export type TWorkoutCard = TWorkoutData[number];
