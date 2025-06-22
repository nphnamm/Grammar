import { exercises as passiveExercises, theoryContent as passiveTheory } from './passive.js';
import { exercises as exercises1, theoryContent as theoryContent } from './exercise-1.js';
import { exercises as exercises3, theoryContent as theoryContent3 } from './exercise-3.js';

export const lessons = [
  {
    id: 'lesson1',
    title: '1. Vocab: Sports and Entertainment',
    description: 'Learn vocabulary and grammar related to sports, music, and entertainment activities.',
    image: '/images/sports-entertainment.jpg',
    theory: theoryContent[0],
    exercises: exercises1
  },
  {
    id: 'lesson2',
    title: '2. Grammar: Passives and Causatives',
    description: 'Master the passive voice and causative structures in English grammar.',
    image: '/images/passive-causative.jpg',
    theory: passiveTheory[0], 
    exercises: passiveExercises
  },
  {
    id: 'lesson3',
    title: '3. Vocab: Movement and transport',
    description: 'Vocabulary and grammar related to movement and transport.',
    image: '/images/movement-transport.jpg',
    theory: theoryContent3[0],
    exercises: exercises3
  }
];

export default lessons; 

