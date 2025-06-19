import { exercises as passiveExercises, theoryContent as passiveTheory } from './passive.js';
import { exercises as exercises1, theoryContent as theoryContent } from './exercises-1.js';

export const lessons = [
  {
    id: 'lesson1',
    title: 'Sports and Entertainment',
    description: 'Learn vocabulary and grammar related to sports, music, and entertainment activities.',
    image: '/images/sports-entertainment.jpg',
    theory: theoryContent[0],
    exercises: exercises1
  },
  {
    id: 'lesson2',
    title: 'Passives and Causatives',
    description: 'Master the passive voice and causative structures in English grammar.',
    image: '/images/passive-causative.jpg',
    theory: passiveTheory[0], 
    exercises: passiveExercises
  }
];

export default lessons; 

