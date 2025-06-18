import { exercises as passiveExercises, theoryContent as passiveTheory } from './passive.js';
import { exercises as exercises1 } from './exercises-1.js';

export const lessons = [
  {
    id: 'lesson1',
    title: 'Sports and Entertainment',
    description: 'Learn vocabulary and grammar related to sports, music, and entertainment activities.',
    image: '/images/sports-entertainment.jpg',
    theory: {
      id: 'lesson1_theory',
      title: 'Sports and Entertainment Vocabulary',
      sections: [
        {
          type: 'vocabulary',
          title: 'Sports Vocabulary',
          content: {
            intro: 'Learn essential vocabulary for talking about sports and entertainment:',
            items: [
              { term: 'champion', definition: 'The winner of a competition' },
              { term: 'coach', definition: 'A person who trains and instructs players in a sport' },
              { term: 'referee', definition: 'An official who controls a game' },
              { term: 'opponent', definition: 'Someone you compete against in a game' },
              { term: 'team', definition: 'A group of players who play together' },
              { term: 'member', definition: 'A person who belongs to a particular group or club' },
              { term: 'captain', definition: 'The leader of a sports team' },
              { term: 'gym', definition: 'A place with equipment for physical exercise' }
            ]
          }
        },
        {
          type: 'vocabulary',
          title: 'Entertainment Vocabulary',
          content: {
            intro: 'Vocabulary for music and entertainment:',
            items: [
              { term: 'concert', definition: 'A live musical performance' },
              { term: 'musician', definition: 'A person who plays or composes music' },
              { term: 'group', definition: 'Musicians who perform together' },
              { term: 'folk music', definition: 'Traditional music from a particular region' },
              { term: 'classical music', definition: 'Traditional, formal music' },
              { term: 'actor', definition: 'A person who performs in plays, films, or television' },
              { term: 'stage', definition: 'The performance area in a theater' }
            ]
          }
        },
        {
          type: 'grammar',
          title: 'Phrasal Verbs',
          content: {
            intro: 'Common phrasal verbs used in sports and entertainment:',
            items: [
              { term: 'take up', definition: 'To start a sport or hobby' },
              { term: 'turn down/up', definition: 'To lower/increase volume' },
              { term: 'join in', definition: 'To participate in an activity' },
              { term: 'send off', definition: 'To make a player leave the game' },
              { term: 'carry on', definition: 'To continue doing something' },
              { term: 'eat out', definition: 'To eat at a restaurant' },
              { term: 'give up', definition: 'To stop doing something' }
            ]
          }
        },
        {
          type: 'grammar',
          title: 'Prepositional Phrases',
          content: {
            intro: 'Common prepositional phrases:',
            items: [
              { term: 'for a long time', definition: 'Indicating duration' },
              { term: 'on DVD', definition: 'Indicating the medium' },
              { term: 'in time', definition: 'Arriving before the deadline' },
              { term: 'on stage', definition: 'Referring to the performance area' },
              { term: 'in the middle', definition: 'Indicating a central position' },
              { term: 'for fun', definition: 'Indicating purpose or reason' }
            ]
          }
        }
      ]
    },
    exercises: exercises1
  },
  {
    id: 'lesson2',
    title: 'Passives and Causatives',
    description: 'Master the passive voice and causative structures in English grammar.',
    image: '/images/passive-causative.jpg',
    theory: passiveTheory[0], // Use the existing theory content from passive.js
    exercises: passiveExercises
  }
];

export default lessons; 