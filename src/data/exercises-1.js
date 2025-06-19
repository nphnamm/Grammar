// Static exercise data

export const exercises = [
    {
      id: 'A1',
      type: 'crossword_fill',
      title: 'Topic vocabulary: A Complete the crossword.',
      instructions: 'Complete the crossword by filling in the blanks. Type your answers in the input fields.',
      questions: [
        { number: 1, direction: 'Across', clue: "If he wins this match, he'll be the world __________ ! (8)", correct: 'champion', explanation: 'A **champion** is the winner of a competition.' },
        { number: 4, direction: 'Across', clue: "I'm thinking of joining a __________ to get more exercise. (3)", correct: 'gym', explanation: 'A **gym** is a place with equipment for physical exercise.' },
        { number: 5, direction: 'Across', clue: "Our basketball __________ said that I can play on Saturday! (5)", correct: 'coach', explanation: 'A **coach** trains and instructs players in a sport.' },
        { number: 8, direction: 'Across', clue: "The ____________ blew his whistle and the game started. (7)", correct: 'referee', explanation: 'A **referee** is an official who controls a game.' },
        { number: 9, direction: 'Across', clue: "Which team do you ____________ ? (7)", correct: 'support', explanation: 'To **support** a team means to be a fan of them.' },
        { number: 11, direction: 'Across', clue: "Mark's band play traditional ____________ music – they often perform at country fairs and festivals. (4)", correct: 'folk', explanation: '**Folk** music is traditional music from a particular region or community.' },
        { number: 2, direction: 'Down', clue: "I'm sorry, but you have to be a ____________ of the golf club to play here. (6)", correct: 'member', explanation: 'A **member** is a person who belongs to a particular group or club.' },
        { number: 3, direction: 'Down', clue: "My ____________ was a brilliant player and I didn't manage to win the match. (8)", correct: 'opponent', explanation: 'An **opponent** is someone you compete against in a game or fight.' },
        { number: 6, direction: "Down", clue: "Tom is really good at cards. He would never ____________ ! (5)", correct: "cheat", explanation: "To **cheat** means to act dishonestly in order to gain an advantage." },
        { number: 7, direction: "Down", clue: "Lisa's ____________ has just reached number one with their new song! (5)", correct: "group", explanation: "A **group** (music group/band) refers to musicians who perform together." },
        { number: 10, direction: "Down", clue: "I took a big ____________ by doing the parachute jump, but I loved every second of it! (4)", correct: "risk", explanation: "A **risk** is a situation involving exposure to danger." },
      ]
    },
    {
      id: 'B1',
      type: 'fill_blanks_bank',
      title: 'Topic vocabulary: B Complete using the correct form of the words and phrases in the box.',
      instructions: 'Complete the sentences using the correct form of the words and phrases in the box. Type your answers.',
      wordBank: ['beat', 'challenge', 'have fun', 'interest', 'organise', 'score', 'train'],
      textSegments: [
        "Do you dream of (1) ", // Blank 1
        " the winning goal in a football match, or (2) ", // Blank 2
        " a top tennis player? Sport (3) ", // Blank 3
        " most young people, and it's a great way to stay healthy and (4) ", // Blank 4
        " at the same time. That's why the local council has decided to help young people who want to (5) ", // Blank 5
        " their own sports club. We know it's a big (6) ", // Blank 6
        ", and that's why we'll give you the money you need to get started. We'll help you find a place to (7) ", // Blank 7
        " and give you money to find good players in your area. Contact the Town Hall for details."
      ],
      correctAnswers: [
        { index: 0, word: 'scoring', explanation: 'To \'**score a goal**\' means to get a point in a game. The `-ing` form is used because it follows "dream of".' },
        { index: 1, word: 'beating', explanation: 'To \'**beat**\' a player means to win against them. The `-ing` form is used because it follows "or".' },
        { index: 2, word: 'interests', explanation: 'Sport \'**interests**\' young people, meaning it attracts their attention and curiosity. The verb needs to be in the third person singular form.' },
        { index: 3, word: 'have fun', explanation: 'The phrase \'**have fun**\' means to enjoy oneself. It fits the context of staying healthy and enjoying something simultaneously.' },
        { index: 4, word: 'organise', explanation: 'To \'**organise**\' a club means to arrange or set it up. It fits the infinitive structure "want to organise".' },
        { index: 5, word: 'challenge', explanation: 'It is a big \'**challenge**\' because it requires effort and determination. The noun form is required after "a big".' },
        { index: 6, word: 'train', explanation: 'To \'**train**\' means to practice and prepare for a sport. It fits the infinitive structure "place to train".' }
      ]
    },
    {
      id: 'C1',
      type: 'multiple_choice',
      title: 'Topic vocabulary: C Circle the correct word.',
      questions: [
        {
          text: '1 I really like playing board / video games like Monopoly and Cluedo.',
          options: ['board', 'video'],
          correct: 'board',
          explanation: 'Monopoly and Cluedo are classic examples of **board games**, not video games, which are played on electronic devices.'
        },
        {
          text: '2 Roy was the best player, so he wasn\'t surprised when he became captain / club of the team.',
          options: ['captain', 'club'],
          correct: 'captain',
          explanation: 'The leader of a sports team is called the **captain**.'
        },
        {
          text: '3 Lots of people get defeat / pleasure from just watching sport from their armchairs.',
          options: ['defeat', 'pleasure'],
          correct: 'pleasure',
          explanation: 'People derive enjoyment or satisfaction, which is **pleasure**, from watching sports. "Defeat" means losing and wouldn\'t be something people "get from" watching for enjoyment.'
        },
        {
          text: '4 I thought the music at the concert / rhythm we went to last night was great.',
          options: ['concert', 'rhythm'],
          correct: 'concert',
          explanation: 'A **concert** is a live musical performance. Rhythm refers to the pattern of sounds in music, not the event itself.'
        },
        {
          text: '5 Everyone in my family supports the same competition / team.',
          options: ['competition', 'team'],
          correct: 'team',
          explanation: 'People typically support a specific **team** in a sport, not a competition itself.'
        },
        {
          text: '6 I find classical / entertaining music really boring, and I prefer pop.',
          options: ['classical', 'entertaining'],
          correct: 'classical',
          explanation: 'The sentence states the music is "boring" and the preference is "pop". This sets up a contrast, and **classical** music is a distinct genre often contrasted with pop, fitting the context of finding it boring.'
        }
      ]
    },
    {
      id: 'D1',
      type: 'multiple_choice',
      title: 'Phrasal verbs: D Choose the correct answer.',
      questions: [
        {
          text: '1 You should take __________ a sport and then you would get more exercise.',
          options: ['off', 'up', 'down'],
          correct: 'up',
          explanation: 'To \'**take up**\' a sport means to start it as a hobby or activity.'
        },
        {
          text: '2 I\'m trying to work! Could you please turn your music __________ ?',
          options: ['down', 'in', 'out'],
          correct: 'down',
          explanation: 'To \'**turn down**\' music means to lower its volume.'
        },
        {
          text: '3 Just ask and I\'m sure the other children will let you join __________ .',
          options: ['out', 'up', 'in'],
          correct: 'in',
          explanation: 'To \'**join in**\' means to participate or take part in an activity.'
        },
        {
          text: '4 The referee sent David __________ for arguing with him.',
          options: ['off', 'down', 'up'],
          correct: 'off',
          explanation: 'To \'**send off**\' a player means to make them leave the game, typically due to a foul or rule violation.'
        },
        {
          text: '5 This is my favourite song! Turn it __________ !',
          options: ['off', 'out', 'up'],
          correct: 'up',
          explanation: 'To \'**turn up**\' music means to increase its volume.'
        },
        {
          text: '6 A mobile phone rang, but the musician just carried __________ playing.',
          options: ['on', 'up', 'in'],
          correct: 'on',
          explanation: 'To \'**carry on**\' means to continue doing something without stopping.'
        },
        {
          text: '7 We can\'t afford to eat __________ very often.',
          options: ['off', 'up', 'out'],
          correct: 'out',
          explanation: 'To \'**eat out**\' means to eat at a restaurant instead of at home.'
        },
        {
          text: '8 I\'ve decided to become a vegetarian and give __________ meat.',
          options: ['up', 'off', 'out'],
          correct: 'up',
          explanation: 'To \'**give up**\' something means to stop doing or consuming it regularly, often implying quitting.'
        }
      ]
    },
    {
      id: 'E1',
      type: 'single_word_fill',
      title: 'Prepositional phrases: E Write one word in each gap.',
      questions: [
        {
          text: '1 We were waiting outside the stadium __________ a long time before they finally let us in.',
          correct: 'for',
          explanation: 'The correct prepositional phrase is "**for** a long time," indicating duration.'
        },
        {
          text: '2 I\'ve got that concert __________ DVD – it\'s fantastic!',
          correct: 'on',
          explanation: 'The correct prepositional phrase is "**on** DVD," indicating the medium.'
        },
        {
          text: '3 I ran all the way home and I was just __________ time for my favourite programme.',
          correct: 'in',
          explanation: 'The correct prepositional phrase is "**in** time," meaning arriving before the deadline or event.'
        },
        {
          text: '4 Everyone clapped when the singer came __________ stage.',
          correct: 'on',
          explanation: 'The correct prepositional phrase is "**on** stage," referring to the performance area.'
        },
        {
          text: '5 At the cinema, Mum sat on the right, Dad sat on the left and I sat __________ the middle.',
          correct: 'in',
          explanation: 'The correct prepositional phrase is "**in** the middle," indicating a central position.'
        },
        {
          text: '6 Ed doesn\'t want to become a professional footballer. He just does it __________ fun.',
          correct: 'for',
          explanation: 'The correct prepositional phrase is "**for** fun," indicating the purpose or reason.'
        }
      ]
    },
    {
      id: 'F1',
      type: 'word_formation',
      title: 'Word formation: F Complete by changing the form of the word in capitals when this is necessary.',
      questions: [
        { baseWord: 'SING', text: '1 What\'s the name of that ____________ you were singing earlier?', correct: 'song', explanation: 'From the verb \'sing\', the noun \'**song**\' refers to the musical piece that was being sung.' },
        { baseWord: 'MUSIC', text: '2 I started to learn the piano, but I don\'t think I\'ve got much ____________ talent, to be honest.', correct: 'musical', explanation: 'From the noun \'music\', the adjective \'**musical**\' describes talent related to music.' },
        { baseWord: 'ATHLETE', text: '3 My dad used to be really fit and was on his college ____________ team.', correct: 'athletic', explanation: 'From the noun \'athlete\', the adjective \'**athletic**\' describes something related to athletes or competitive sports.' },
        { baseWord: 'CHILD', text: '4 When you were young, did you ever play in the street with other local ____________ ?', correct: 'children', explanation: 'From the noun \'child\', the plural form \'**children**\' is required here to refer to multiple young people.' },
        { baseWord: 'ACT', text: '5 Alan is studying to be an ____________ , but I don\'t think he\'s enjoying it.', correct: 'actor', explanation: 'From the verb \'act\', the noun \'**actor**\' refers to a person who performs in plays, films, or television shows.' },
        { baseWord: 'COLLECT', text: '6 They have a wonderful ____________ of old toys at the museum in town.', correct: 'collection', explanation: 'From the verb \'collect\', the noun \'**collection**\' refers to a group of things gathered together, often for a purpose.' },
        { baseWord: 'SAIL', text: '7 My grandad loves to ____________ and we often go out on his boat.', correct: 'sail', explanation: 'The base verb \'**sail**\' is correct here as it refers to the activity of traveling in a boat with sails. It follows "loves to" forming an infinitive.' },
        { baseWord: 'MUSIC', text: '8 You have to practise a lot if you want to work as a ____________ .', correct: 'musician', explanation: 'From the noun \'music\', the noun \'**musician**\' refers to a person who plays or composes music professionally.' }
      ]
    },
    {
      id: 'G1',
      type: 'past_tenses_fill',
      title: 'Past Simple and Past Perfect: G Write one verb in each sentence in the past simple and the other verb in the past perfect.',
      instructions: 'Complete each sentence by putting one verb in the past simple and the other in the past perfect.',
      questions: [
        {
          number: 1,
          text: 'The ambulance  (left) by the time the reporters  (get) to the scene of the accident.',
          verb1: 'leave', verb2: 'get',
          correct1: 'had left', correct2: 'got',
          explanation: 'The ambulance **had left** (past perfect) before the reporters **got** (past simple) to the scene, indicating the leaving happened first.'
        },
        {
          number: 2,
          text: 'Before I  (meet) Dr Christian, I  (see) a number of different specialists.',
          verb1: 'meet', verb2: 'see',
          correct1: 'met', correct2: 'had seen',
          explanation: 'I **had seen** (past perfect) many specialists before I **met** (past simple) Dr Christian, indicating the seeing happened over a period before meeting him.'
        },
        {
          number: 3,
          text: 'It  (be) only the second time I  (ever / be) in a helicopter.',
          verb1: 'be', verb2: 'ever / be',
          correct1: 'was', correct2: 'had ever been',
          explanation: 'It **was** (past simple) the second time, referring to a specific past event. I **had ever been** (past perfect) in a helicopter before that point.'
        },
        {
          number: 4,
          text: 'Up to the moment when Mr O\'Donnell  (say) "You\'re fired!", I  (have) no idea why he wanted to see me.',
          verb1: 'say', verb2: 'have',
          correct1: 'said', correct2: 'had had',
          explanation: 'I **had had** (past perfect) no idea before he **said** (past simple) "You\'re fired!", showing the state of not knowing occurred before the saying.'
        },
        {
          number: 5,
          text: 'When Tonya  (finish) eating, she  (ask) the waiter to bring the bill.',
          verb1: 'finish', verb2: 'ask',
          correct1: 'had finished', correct2: 'asked',
          explanation: 'Tonya **had finished** (past perfect) eating *before* she **asked** (past simple) the waiter. The finishing happened first.'
        },
        {
          number: 6,
          text: 'Luckily, I  (just / reach) the end of my essay when the teacher  (tell) us all to put our pens down.',
          verb1: 'just / reach', verb2: 'tell',
          correct1: 'had just reached', correct2: 'told',
          explanation: 'I **had just reached** (past perfect with "just") the end before the teacher **told** (past simple) us. The reaching happened immediately before.'
        },
        {
          number: 7,
          text: 'We  (do) everything we had to do by five, so we  (decide) to go out for a coffee.',
          verb1: 'do', verb2: 'decide',
          correct1: 'had done', correct2: 'decided',
          explanation: 'We **had done** (past perfect) everything *before* five, and then we **decided** (past simple) to go out.'
        },
        {
          number: 8,
          text: 'I __________ (want) Mrs Thomas\'s young son to touch my ornaments because I __________ (just / clean) them.',
          verb1: 'want', verb2: 'just / clean',
          correct1: 'didn\'t want', correct2: 'had just cleaned',
          explanation: 'I **didn\'t want** (past simple, negative) him to touch them because I **had just cleaned** (past perfect with "just") them. The cleaning happened immediately prior.'
        },
        {
          number: 9,
          text: 'My mum __________ (be) annoyed with me because I __________ (forget) to get milk when I was at the shop.',
          verb1: 'be', verb2: 'forget',
          correct1: 'was', correct2: 'had forgotten',
          explanation: 'My mum **was** (past simple) annoyed because I **had forgotten** (past perfect) to get milk *before* that moment.'
        },
        {
          number: 10,
          text: 'I __________ (get) Janine a book for her birthday, but she __________ (read) it before.',
          verb1: 'get', verb2: 'read',
          correct1: 'got', correct2: 'had read',
          explanation: 'I **got** (past simple) her a book, but she **had read** (past perfect) it already *before* I got it for her.'
        }
      ]
    },
    {
      id: 'I1', // New exercise ID
      type: 'bold_word_correction', // New exercise type
      title: 'Topic vocabulary: Technology - D',
      instructions: 'If the word in bold is correct, click "Correct". If it is incorrect, click "Wrong" and type the correct word.',
      questions: [
          {
              number: 1,
              text: 'The internet is really a vast **console** of computers, all connected together.',
              boldWord: 'console',
              correctAnswer: 'network',
              isCorrectDefault: false,
              explanation: 'The internet is a vast **network** of computers, not a console.'
          },
          {
              number: 2,
              text: 'Since we got **resource**, we\'ve been watching music videos online.',
              boldWord: 'resource',
              correctAnswer: 'broadband',
              isCorrectDefault: false,
              explanation: 'To watch music videos online, you need high-speed internet, which is **broadband**, not a resource in this context.'
          },
          {
              number: 3,
              text: 'Early computer games seem quite **nuclear** compared to today\'s games.',
              boldWord: 'nuclear',
              correctAnswer: 'primitive',
              isCorrectDefault: false,
              explanation: 'Early computer games were simple and basic, making them seem **primitive** compared to modern games, not nuclear.'
          },
          {
              number: 4,
              text: 'It seems to me that **primitive** power is far cleaner than oil.',
              boldWord: 'primitive',
              correctAnswer: 'nuclear',
              isCorrectDefault: false,
              explanation: '**Nuclear** power refers to energy derived from nuclear reactions, which can be a cleaner alternative to oil.'
          },
          {
              number: 5,
              text: 'These ancient tools have been **crafted** with an enormous amount of skill.',
              boldWord: 'crafted',
              correctAnswer: '_IS_CORRECT_', // Special value for correct bold word
              isCorrectDefault: true,
              explanation: 'To be **crafted** means to be made with skill, which is correct in the context of ancient tools.'
          },
          {
              number: 6,
              text: 'The next generation of games **technique** will have better graphics.',
              boldWord: 'technique',
              correctAnswer: 'console',
              isCorrectDefault: false,
              explanation: 'A gaming **console** is a device used to play video games. **Technique** refers to a method, not a device.'
          },
          {
              number: 7,
              text: 'There\'s a **network** in computing called \'beta testing\', which means you test something to see if it works properly before it becomes official.',
              boldWord: 'network',
              correctAnswer: 'technique',
              isCorrectDefault: false,
              explanation: 'Beta testing is a **technique** or method for testing software, not a network.'
          },
          {
              number: 8,
              text: 'This latest **breakthrough** will mean cheaper, faster internet access for all.',
              boldWord: 'breakthrough',
              correctAnswer: '_IS_CORRECT_', // Special value for correct bold word
              isCorrectDefault: true,
              explanation: 'A **breakthrough** is a significant discovery or development, fitting the context of improved internet access.'
          },
          {
              number: 9,
              text: 'The computer has finished analysing all the **broadband**.',
              boldWord: 'broadband',
              correctAnswer: 'data',
              isCorrectDefault: false,
              explanation: 'Computers analyze **data** (information), not broadband (which is a type of internet connection).'
          },
          {
              number: 10,
              text: 'The sea is a great natural **data** but we need the right technology to use it.',
              boldWord: 'data',
              correctAnswer: 'resource',
              isCorrectDefault: false,
              explanation: 'The sea is a **resource** (a supply of something valuable), not data.'
          }
      ]
    }
  ];
  
  
  export const theoryContent = [
    {
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
  ];