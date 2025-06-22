export const exercises = [
  {
    id: "A_bold_word_correction",
    type: "bold_word_correction",
    title: "A Grammar: Correcting Verb Forms",
    instructions: "If the verb in bold is correct, click \"Correct\". If it is incorrect, click \"Wrong\" and type the correct verb form.",
    questions: [
      {
        number: 1,
        text: "Could you tell me where your passport **was been issued**?",
        boldWord: "was been issued",
        correctAnswer: "was issued",
        isCorrectDefault: false,
        explanation: "The passive voice in the past simple is formed using 'was' or 'were' followed by the past participle of the main verb. In this case, 'issued' is the past participle of 'issue'. The word 'been' is used in perfect tenses (e.g., has been, had been) or with continuous passive forms (e.g., is being, was being), but it is not required for a simple past passive construction like this. Therefore, 'was issued' is the correct and most concise form."
      },
      {
        number: 2,
        text: "When the winning actor **was** finally **announced**, a big cheer went up.",
        boldWord: "was announced",
        correctAnswer: "_IS_CORRECT_",
        isCorrectDefault: true,
        explanation: "This sentence correctly uses the past simple passive voice. The structure 'was/were' + past participle ('announced') is appropriate for an action completed in the past where the focus is on the recipient of the action (the actor) rather than the performer. The actor didn't announce something; they 'were announced'."
      },
      {
        number: 3,
        text: "**Has** your business trip to Calcutta next week **confirmed** by the Indian office?",
        boldWord: "Has confirmed",
        correctAnswer: "Has been confirmed",
        isCorrectDefault: false,
        explanation: "This sentence requires the present perfect passive voice because the action of confirming happened at an unspecified time before now, and its result is still relevant (the trip is now confirmed). The present perfect passive is formed with 'has/have been' + past participle. Since 'business trip' is singular, 'has' is used, followed by 'been confirmed'. The original 'Has confirmed' would imply the trip itself performed the action of confirming, which is incorrect."
      },
      {
        number: 4,
        text: "Everyone who **was been invited** to the wedding came.",
        boldWord: "was been invited",
        correctAnswer: "had been invited",
        isCorrectDefault: false,
        explanation: "The past perfect passive ('had been' + past participle) is necessary here. The act of being invited happened *before* they came to the wedding. The past perfect clearly establishes this sequence of events. 'Was been invited' is grammatically incorrect; 'was invited' would be simple past passive, but 'had been invited' correctly conveys the prior action."
      },
      {
        number: 5,
        text: "The wire coat hanger **invented** in 1903 by a Mr Parkhouse.",
        boldWord: "invented",
        correctAnswer: "was invented",
        isCorrectDefault: false,
        explanation: "This sentence needs to be in the passive voice because the subject, 'the wire coat hanger,' is receiving the action (it was invented) rather than performing it. The past simple passive is formed with 'was/were' + past participle. Since the event happened in 1903, 'was invented' is the correct past simple passive form. 'Invented' alone would imply the coat hanger did the inventing."
      },
      {
        number: 6,
        text: "The issue **has discussed** in Parliament yesterday, but no decisions were taken.",
        boldWord: "has discussed",
        correctAnswer: "was discussed",
        isCorrectDefault: false,
        explanation: "The time marker 'yesterday' clearly indicates that a past simple tense is required. The issue was the recipient of the action of discussing, so the past simple passive voice is needed. This is formed by 'was/were' + past participle. Therefore, 'was discussed' is the correct form. 'Has discussed' is present perfect active and inappropriate for an action completed at a specific past time."
      },
      {
        number: 7,
        text: "By the time we get there, the problem **should have been sorted out**.",
        boldWord: "should have been sorted out",
        correctAnswer: "_IS_CORRECT_",
        isCorrectDefault: true,
        explanation: "This sentence uses a correct modal perfect passive construction. 'Should have been sorted out' implies that by a certain point in the future ('By the time we get there'), the problem is expected to be resolved by someone else. The structure 'modal verb + have been + past participle' is used for passive actions that are expected or advised to have been completed by a specific time, and it is grammatically sound."
      },
      {
        number: 8,
        text: "Britain **was be invaded** by the Romans under Emperor Claudius in 43 AD.",
        boldWord: "was be invaded",
        correctAnswer: "was invaded",
        isCorrectDefault: false,
        explanation: "The past simple passive voice is formed with 'was' or 'were' followed directly by the past participle of the main verb. The past participle of 'invade' is 'invaded'. The inclusion of 'be' after 'was' is grammatically incorrect in this context. Therefore, 'was invaded' is the correct and appropriate form."
      },
      {
        number: 9,
        text: "The party **had been planned** months in advance, but we still had problems.",
        boldWord: "had been planned",
        correctAnswer: "_IS_CORRECT_",
        isCorrectDefault: true,
        explanation: "This sentence correctly uses the past perfect passive voice. 'Had been planned' indicates an action (planning the party) that was completed at a point in the past before another past action (having problems). This structure correctly emphasizes the prior completion of the planning, and it is grammatically accurate."
      },
      {
        number: 10,
        text: "After **be treated**, I was allowed to leave the hospital.",
        boldWord: "be treated",
        correctAnswer: "being treated",
        isCorrectDefault: false,
        explanation: "When a verb follows a preposition (like 'after'), it typically takes the gerund form (-ing). Since the action is passive (the person was treated by someone else), the passive gerund form is used: 'being' + past participle. Therefore, 'being treated' correctly conveys the passive action occurring after the specified time."
      },
      {
        number: 11,
        text: "We boarded the ship and **were showing** to our cabin by a steward.",
        boldWord: "were showing",
        correctAnswer: "were shown",
        isCorrectDefault: false,
        explanation: "The sentence requires the passive voice because 'we' are the recipients of the action (being shown). The past simple passive is formed with 'was/were' + past participle. The past participle of 'show' is 'shown'. 'Were showing' would be past continuous active, implying that 'we' were performing the action of showing, which is incorrect in this context."
      },
      {
        number: 12,
        text: "The new supermarket **is to be opened** by an actor from a soap opera.",
        boldWord: "is to be opened",
        correctAnswer: "_IS_CORRECT_",
        isCorrectDefault: true,
        explanation: "The structure 'is/are to be' + past participle is a correct and formal way to express a future arrangement or instruction in the passive voice. It implies a planned or scheduled event. In this case, the supermarket is planned to be opened by the actor, making 'is to be opened' grammatically sound and appropriate."
      }
    ]
  },
  {
    id: 'B_drag_drop',
    type: 'drag_and_drop_words',
    title: 'B Rewrite correctly. Drag and drop the words to form the correct phrase.',
    questions: [
      {
        id: 1,
        sentence_start: 'My dad',
        sentence_end: 'late on Saturday mornings.',
        word_bank: ['often', 'up', 'gets'],
        correct_answer: ['often', 'gets', 'up']
      },
      {
        id: 2,
        sentence_start: '',
        sentence_end: 'any other languages apart from English?',
        word_bank: ['you', 'Do', 'speak'],
        correct_answer: ['Do', 'you', 'speak']
      },
      {
        id: 3,
        sentence_start: 'I',
        sentence_end: 'all my Christmas presents and it\'s only October!',
        word_bank: ['bought', 'already', 'have'],
        correct_answer: ['have', 'already', 'bought']
      },
      {
        id: 4,
        sentence_start: "It's the first time I'",
        sentence_end: 'a party at home.',
        word_bank: ['ever', 'had', 've'],
        correct_answer: ['ve', 'ever', 'had']
      },
      {
        id: 5,
        sentence_start: 'Actually, I think Darren',
        sentence_end: 'quite hard sometimes.',
        word_bank: ['works'],
        correct_answer: ['works']
      },
      {
        id: 6,
        sentence_start: 'Carlo',
        sentence_end: 'Chinese food before.',
        word_bank: ['eaten', 'has', 'never'],
        correct_answer: ['has', 'never', 'eaten']
      },
      {
        id: 7,
        sentence_start: 'Sean',
        sentence_end: 'a table for tonight.',
        word_bank: ['booked', 'already', 'has'],
        correct_answer: ['has', 'already', 'booked']
      },
      {
        id: 8,
        sentence_start: '',
        sentence_end: 'any help painting her new flat?',
        word_bank: ['need', 'Does', 'Melanie'],
        correct_answer: ['Does', 'Melanie', 'need']
      }
    ]
  },
  {
    id: 'B7',
    type: 'fill_blanks_bank',
    title: 'B Grammar: Completing with the Passive Form',
    instructions: 'Write a verb from the box in the correct passive form in each gap.',
    wordBank: ['allow', 'ask', 'find', 'give', 'know', 'light', 'make', 'meet', 'show', 'write'],
    textSegments: [
      "The stolen items (1)  ",
      "in the attic of an empty house last week. When the open-air cinema opens, the first film (2) ",
      "will be Vertigo. Questions  (3)",
      "in Parliament about the Minister's business interests. We're looking forward to  (4) ",
      "a guided tour of the whole factory. Just imagine that when these words (5)",
      "Europeans had not yet discovered America. Once the barbecue (6)",
      ", we'll be able to start cooking. Before  (7)",
      " to see the invention, I had to agree not to tell anyone. I would really like  (8)",
      "at the airport, if that's possible. It  (9)",
      " very clear to us that we weren't welcome. Gareth says he's always wanted  (10) ",
      "as someone with a good sense of humour."
    ],
    correctAnswers: [
      { index: 0, word: 'were found', explanation: "Past simple passive is needed for a completed action last week. 'Items' is plural, so 'were found'." },
      { index: 1, word: 'to be shown', explanation: "This is an infinitive passive construction: 'the first film to be shown'." },
      { index: 2, word: 'have been asked', explanation: "Present perfect passive is suitable here, implying recent and ongoing relevance." },
      { index: 3, word: 'being given', explanation: "After 'looking forward to', a gerund is needed. The passive gerund is 'being' + past participle." },
      { index: 4, word: 'were written', explanation: "Past simple passive is needed, as the writing of the words happened at a specific time in the past." },
      { index: 5, word: 'is lit', explanation: "Present simple passive is used in this conditional-like time clause ('Once...')." },
      { index: 6, word: 'being allowed', explanation: "After the preposition 'Before', the passive gerund ('being allowed') is used." },
      { index: 7, word: 'to be met', explanation: "After 'would like', the passive infinitive ('to be met') is used." },
      { index: 8, word: 'was made', explanation: "The past simple passive expression 'it was made clear' fits the context." },
      { index: 9, word: 'to be known', explanation: "After 'wanted', the passive infinitive ('to be known') is used." }
    ]
  },
  {
    id: 'C7',
    type: 'multiple_choice',
    title: 'C Grammar: Impersonal Passive Structures',
    questions: [
      { text: "1 Global warming is thought **to be caused / is caused** by pollution.", options: ['to be caused', 'is caused'], correct: 'to be caused', explanation: "The structure is 'is thought' + to-infinitive passive." },
      { text: "2 There **are to be estimated / are estimated** to be about 5,400 different species of mammals.", options: ['are to be estimated', 'are estimated'], correct: 'are estimated', explanation: "The structure is 'There are estimated' + to-infinitive." },
      { text: "3 It **is to be reported / has been reported** that gunshots have been heard in the city centre.", options: ['is to be reported', 'has been reported'], correct: 'has been reported', explanation: "'It has been reported' is used for recent news." },
      { text: "4 The escaped prisoner is believed **to use / to have used** a rope to climb the wall.", options: ['to use', 'to have used'], correct: 'to have used', explanation: "The perfect infinitive ('to have used') is needed because the action happened before the moment of believing." },
      { text: "5 It **is to be calculated / is calculated** that about 60% of a man's body mass is water.", options: ['is to be calculated', 'is calculated'], correct: 'is calculated', explanation: "'It is calculated' is used to state a general fact or calculation." },
      { text: "6 Over 200 people **are being understood / are understood** to have been injured in the explosion.", options: ['are being understood', 'are understood'], correct: 'are understood', explanation: "The stative verb 'understand' is not typically used in the continuous. 'Are understood' is the correct simple passive." },
      { text: "7 It is considered impolite in some cultures **to be eaten / to eat** with your left hand.", options: ['to be eaten', 'to eat'], correct: 'to eat', explanation: "The infinitive 'to eat' is the subject of the passive verb 'is considered'." },
      { text: "8 There **mean / were meant** to have been 60 crates of olives in the order, not 600!", options: ['mean', 'were meant'], correct: 'were meant', explanation: "'Were meant to' indicates an original intention that was not fulfilled." },
      { text: "9 **It / There** has been suggested that people who don't recycle should pay more tax.", options: ['It', 'There'], correct: 'It', explanation: "The impersonal passive structure starts with 'It': 'It has been suggested that...'" },
      { text: "10 Your order is guaranteed **will be delivered / to be delivered** within three working days.", options: ['will be delivered', 'to be delivered'], correct: 'to be delivered', explanation: "After 'is guaranteed', the passive infinitive 'to be delivered' is used." }
    ]
  },
  {
    id: 'D7',
    type: 'bold_word_correction',
    title: 'D Grammar: Correcting Verb Forms in a Text',
    instructions: 'Each sentence contains one verb in the wrong form. Identify and correct it.',
    questions: [
      { number: 1, text: "Heathrow Airport... **has called** the world's busiest international airport...", boldWord: 'has called', correctAnswer: 'is called', isCorrectDefault: false, explanation: "To state a general fact or name, the present simple passive 'is called' is used." },
      { number: 2, text: "The land on which the airport stands **sold** to Fairey Aviation by the local vicar...", boldWord: 'sold', correctAnswer: 'was sold', isCorrectDefault: false, explanation: "The passive is required here. The land 'was sold' by the vicar." },
      { number: 3, text: "...and was developed for civilian use, **was named** after a small village...", boldWord: 'was named', correctAnswer: 'and named', isCorrectDefault: false, explanation: "To maintain parallel structure ('was handed over... and developed... and named'), the second 'was' can be omitted." },
      { number: 4, text: "...the first terminal building, which **has later renamed** Terminal 2, was opened...", boldWord: 'has later renamed', correctAnswer: 'was later renamed', isCorrectDefault: false, explanation: "The passive is needed. The building 'was renamed' in the past." },
      { number: 5, text: "...passengers could be **transport** from central London...", boldWord: 'transport', correctAnswer: 'transported', isCorrectDefault: false, explanation: "The passive requires the past participle form. Passengers could be 'transported'." },
      { number: 6, text: "...and permission **was been granted** for a fifth passenger terminal...", boldWord: 'was been granted', correctAnswer: 'was granted', isCorrectDefault: false, explanation: "The past simple passive is 'was/were' + past participle. 'Been' is incorrect here." },
      { number: 7, text: "...a new airport... **has been built** on a floating island...", boldWord: 'has been built', correctAnswer: 'be built', isCorrectDefault: false, explanation: "The structure is 'suggested that a new airport... be built'. This is the subjunctive mood, used after 'suggest'." }
    ]
  },
  {
    id: "E7",
    type: "word_formation",
    title: "E Grammar: Complete the sentences describing each situation using the phrase given.",
    questions: [
      {
        baseWord: "in training",
        text: " I started training to be an accountant six months ago. I've got six more months to go, and then I have to take exams. \n By the time I take my exams, .",
        correct: "I will have been in training for a year",
        explanation: "The future perfect continuous 'will have been in training' is used for an action that continues up to a future point. The total duration is one year (6 months + 6 months)."
      },
      {
        baseWord: "under consideration",
        text: " The council ha ve been thinking for some time of redeveloping the city centre. \nThe redevelopment of the city centre (2) .",
        correct: "has been under consideration for some time",
        explanation: "'Under consideration' means being discussed. The present perfect 'has been' is used because the subject 'The redevelopment' is singular and the action started in the past and continues."
      },
      {
        baseWord: "in progress",
        text: " They've been having discussions on the issue for over two weeks. \nDiscussions on the issue (3) .",
        correct: "have been in progress for over two weeks",
        explanation: "'In progress' means happening. The present perfect 'have been' is used because the subject 'Discussions' is plural and the action started in the past and continues."
      },
      {
        baseWord: "on display",
        text: " This weekend, the local Art Society will be displaying their latest works at the library. \nThe local Art Society's latest works (4) .",
        correct: "will be on display at the library this weekend",
        explanation: "'On display' means being shown publicly. The future simple 'will be' is used to describe the future event."
      },
      {
        basedWord: "under construction",
        text: " George seems to have been putting his website together for a long time. \nGeorge's website (5) .",
        correct: "seems to have been under construction for a long time",
        explanation: "'Under construction' means being built. The structure 'seems to have been' is maintained from the original sentence to convey the same meaning."
      }
    ]
  },
  {
    id: "F7",
    instructions: 'Complete each sentence using the noun in bold and an appropriate causative form of the verb in bold.',
    type: "word_formation",
    title: "F Grammar: Complete each sentence using the noun in bold and an appropriate causative form of the verb in bold.",
    questions: [
      {
        baseWord: "your teacher / explain",
        text: " If you don't understand, ____________ it to you again after the lesson.",
        correct: "have your teacher explain",
        explanation: "The causative 'have someone do something' is used to mean 'ask someone to do something'. For example, 'I'll have my assistant call you.'"
      },
      {
        baseWord: "me / feel",
        text: " I was a bit depressed, but watching my kitten play with a ball of wool soon ____________ much better.",
        correct: "made me feel",
        explanation: "The causative 'make someone do something' is used to mean 'force or cause someone to do something'. The past tense 'made' is used to match the context."
      },
      {
        baseWord: "a professional / do",
        text: " Don't bother redecorating yourself – ____________ it.",
        correct: "have a professional do",
        explanation: "The causative 'have someone do something' is used to mean 'arrange for someone to do something'. An alternative is 'get a professional to do it'."
      },
      {
        baseWord: "our car / steal",
        text: " ____________ was so annoying because it meant I had to take the tube to work.",
        correct: "Having our car stolen",
        explanation: "The passive causative 'have something done' is used. Here, it's used as a gerund phrase ('Having...') to act as the subject of the sentence."
      },
      {
        baseWord: "your parents / help",
        text: " You won't learn as much if you ____________ you with your homework all the time.",
        correct: "have your parents help",
        explanation: "The causative 'have someone do something' is used to mean 'allow or get someone to do something'. 'Let your parents help' would also be correct."
      },
      {
        baseWord: "us all / dance",
        text: " The concert started quietly, but the band soon ____________ to their hit songs.",
        correct: "had us all dancing",
        explanation: "The causative 'have someone doing something' is used to describe the effect that someone or something has on another person. The past tense 'had' is used. 'Got us all dancing' is also a valid answer."
      },
      {
        baseWord: "me / do",
        text: " Tell Gordon yourself! Don't try ____________ your dirty work for you!",
        correct: "to get me to do",
        explanation: "The structure is 'try to do something'. The causative 'get someone to do something' means 'persuade someone to do something'."
      },
      {
        baseWord: "your hair / cut",
        text: " Have you thought about ____________ as short as mine?",
        correct: "having your hair cut",
        explanation: "The passive causative 'have something done' is used to mean arranging for someone to do something for you. After the preposition 'about', the gerund form 'having' is required."
      },
      {
        baseWord: "Karen / show",
        text: " I ____________ me how to juggle with five balls, but I still couldn't do it.",
        correct: "had Karen show",
        explanation: "The causative 'have someone do something' is used to mean 'ask someone to do something'. The past tense 'had' is required. 'Got Karen to show' is also a correct alternative."
      },
      {
        baseWord: "their essays / write",
        text: " Have you heard about the problems caused by students ____________ by companies on the Internet?",
        "correct": "having their essays written",
        "explanation": "The passive causative 'have something done' is used. The gerund form 'having' is used to describe what the students are doing."
      }
    ]
  },
  {
    id: "I",
    type: "multiple_choice",
    title: "G. Choose the correct answer.",
    instructions: "Choose the correct answer.",
    questions: [
      {
        id: "I1",
        text: "When Nadine arrived, she soon ..................... at all her jokes.",
        options: [
          "had everyone laughing",
          "had laughing everyone",
          "had everyone laughing",
          "had laughed everyone"
        ],
        correct: "had everyone laughing",
        explanation: "The correct causative structure is 'had someone doing something', which means 'to cause someone to start doing something'. 'She had everyone laughing' means she made everyone laugh."
      },
      {
        id: "I2",
        text: "The government must ..................... strong measures against crime.",
        options: [
          "been seen to take",
          "see to be taking",
          "seen to take",
          "be seen to be taking"
        ],
        correct: "be seen to be taking",
        explanation: "This requires a passive modal structure. 'Must' is followed by 'be seen' (passive infinitive) and then 'to be taking' (continuous infinitive) to show an ongoing action that should be observed by the public."
      },
      {
        id: "I3",
        text: "Mrs Davies asked me to tell you that she would like ..................... by Friday at the latest.",
        options: [
          "the orders sent",
          "sending the orders",
          "that you sent",
          "sent the orders"
        ],
        correct: "the orders sent",
        explanation: "The structure 'would like + object + past participle' is used to express a desire for something to be done by someone else. 'She would like the orders sent'."
      },
      {
        id: "I4",
        text: "Joining a gym ..................... , but I didn't really fancy the idea.",
        options: [
          "was suggested to me",
          "to me was suggested",
          "was suggested me",
          "was suggesting me"
        ],
        correct: "was suggested to me",
        explanation: "The verb 'suggest' in the passive voice is followed by 'to' before the indirect object (the person receiving the suggestion). 'Joining a gym' is the subject of the passive verb."
      },
      {
        id: "I5",
        text: "There ..................... between 4,000 and 6,000 languages in the world, depending on how you count them.",
        options: [
          "say to be",
          "are said that",
          "are said to be",
          "said being"
        ],
        correct: "are said to be",
        explanation: "This is a passive reporting structure. The correct form is 'There are said to be...' to report a general belief or fact."
      },
      {
        id: "I6",
        text: "I spoke to Victor last night and he says he ..................... while he was on holiday.",
        options: [
          "had stolen his phone",
          "got stolen his phone",
          "was got his phone stolen",
          "had his phone stolen"
        ],
        correct: "had his phone stolen",
        explanation: "The causative structure 'have something done' is used when someone arranges for something to be done, or when something (usually negative) happens to someone. 'He had his phone stolen' means someone stole his phone."
      },
      {
        id: "I7",
        text: "Why didn't you ..................... you when you moved house?",
        options: [
          "have Aaron help",
          "have got Aaron help",
          "have Aaron helped",
          "get Aaron help"
        ],
        correct: "have Aaron help",
        explanation: "The causative structure 'have someone do something' means to ask or make someone do something. After 'didn't you', we use the base form 'have', followed by the person 'Aaron' and the base form of the next verb 'help'."
      },
      {
        id: "I8",
        text: "Profits ..................... slightly next year, although we don't predict any job losses.",
        options: [
          "expect to fall",
          "are expecting to fall",
          "are expected falling",
          "are expected to fall"
        ],
        correct: "are expected to fall",
        explanation: "This is a passive structure used for future predictions. 'Profits' (the subject) are expected (by people) to fall. The correct structure is 'are expected to + infinitive'."
      },
      {
        id: "I9",
        text: "It's hard to believe that this film ..................... completely by computer.",
        options: [
          "was been generating",
          "has generated",
          "has been generated",
          "was to generate"
        ],
        correct: "has been generated",
        explanation: "This requires the present perfect passive ('has been' + past participle) to describe something that was created in the recent past and is still relevant. The film was generated by a computer."
      },
      {
        "id": "I10",
        "text": "As soon as Dad ..................... , we can leave.",
        options: [
          "has the car starting",
          "has got the car started",
          "got started the car",
          "was got starting the car"
        ],
        correct: "B",
        explanation: "The structure 'get something done' is a common causative form, often used informally, to mean 'succeed in doing something'. 'Has got the car started' means he has successfully started the car."
      }
    ]
  },
  {
    id: "J",
    type: "fill_blanks_bank",
    title: "H. Write one word in each gap.",
    instructions: "Write one word in each gap.",
    wordBank: [],
    textSegments: [
      "Imagine ",
      " transported around the globe in a matter of hours, rather than the 24 hours which ",
      " currently required to get from London to Sydney. Such is the promise of the scramjet, a highly experimental type of engine which has been ",
      " development over the past couple of decades. In a conventional jet engine, air ",
      " sucked into the engine at speeds below the speed of sound, where it is mixed ",
      " fuel, ignited, and the exhaust gases provide thrust. In a scramjet, which has to ",
      " taken to supersonic speeds by conventional means before it will operate, the air enters at supersonic speeds. It has ",
      " estimated that a scramjet might be capable of travelling at 12-24 times the speed of sound. However, the technology ",
      " been found to be extremely difficult to control. Although scientists ",
      " had scramjets perform short flights, commercial aircraft are still a long way in the future, and indeed may never ",
      " successfully developed."
    ],
    correctAnswers: [
      {
        index: 0,
        word: "being",
        explanation: "After the verb 'imagine', a gerund (-ing form) is used. 'Being transported' is the passive gerund."
      },
      {
        index: 1,
        word: "are",
        explanation: "The relative pronoun 'which' refers to 'the 24 hours' (plural), so a plural verb is needed. The sentence is in the present tense, passive voice ('are required')."
      },
      {
        index: 2,
        word: "in",
        explanation: "The correct prepositional phrase is 'in development', meaning in the process of being developed. 'Under development' is also possible."
      },
      {
        index: 3,
        word: "is",
        explanation: "This is a present simple passive sentence describing how a jet engine works. 'Air' is a singular, uncountable noun, so the verb is 'is sucked'."
      },
      {
        index: 4,
        word: "with",
        explanation: "The verb 'mixed' is followed by the preposition 'with'."
      },
      {
        index: 5,
        word: "be",
        explanation: "This is a passive modal structure. The modal phrase 'has to' is followed by 'be' and then the past participle 'taken'."
      },
      {
        index: 6,
        word: "been",
        explanation: "This is a present perfect passive structure used for reporting: 'It has been estimated that...'."
      },
      {
        index: 7,
        word: "has",
        explanation: "This is a present perfect passive structure. The subject 'the technology' is singular, so the auxiliary verb is 'has' ('has been found')."
      },
      {
        index: 8,
        word: "have",
        explanation: "This is a present perfect causative structure: 'have had something do something'. The subject 'scientists' is plural, so the auxiliary verb is 'have'."
      },
      {
        index: 9,
        word: "be",
        explanation: "This is a passive modal structure. The modal verb 'may' is followed by the base form 'be' and the past participle 'developed'."
      }
    ]
  },
  {
    id: 'E1',
    type: 'single_word_fill',
    wordBank: ['for', 'on', 'in', 'off', 'up', 'out', 'middle'],
    title: 'Prepositional phrases: E Write one word in each gap.',
    questions: [
      {
        text: '1 We were waiting outside the stadium ______________________________ a long time before they finally let us in.',
        correct: 'for',
        explanation: 'The correct prepositional phrase is "**for** a long time," indicating duration.'
      },
      {
        text: '2 I\'ve got that concert __________________________ DVD – it\'s fantastic!',
        correct: 'on',
        explanation: 'The correct prepositional phrase is "**on** DVD," indicating the medium.'
      },
      {
        text: '3 I ran all the way home and I was just __________________________ time for my favourite programme.',
        correct: 'in',
        explanation: 'The correct prepositional phrase is "**in** time," meaning arriving before the deadline or event.'
      },
      {
        text: '4 Everyone clapped when the singer came __________________________ stage.',
        correct: 'on',
        explanation: 'The correct prepositional phrase is "**on** stage," referring to the performance area.'
      },
      {
        text: '5 At the cinema, Mum sat on the right, Dad sat on the left and I sat __________________________ the middle.',
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
];
export const theoryContent = [
  {
    id: 'unit7_grammar',
    title: 'Unit 7: Passives and Causatives',
    sections: [
      {
        type: 'rules_with_examples',
        title: 'The Passive',
        content: {
          intro: 'The passive voice is used for several reasons:',
          items: [
            { rule: "When we don't know who does/did something", example: "The car **was stolen** at approximately 1.30 am." },
            { rule: "When it's obvious who does/did something", example: "**Having been introduced** in 1988, the Road Traffic Act regulates all vehicle use on UK roads." },
            { rule: "When it's not important who does/did something", example: "The XL500 **was designed** with young families in mind." },
            { rule: "To emphasise new information", example: "This type of submarine **was developed** during the Second World War by the Americans." },
            { rule: "To avoid starting clauses with long expressions", example: "**We were surprised** by the number of people trying to leave the city." },
            { rule: "To produce a formal style", example: "All passengers **are required** to present their ticket to the inspector." }
          ]
        }
      },
      {
        type: 'table',
        title: 'Impersonal Passive',
        content: {
          headers: ['Form', 'Example'],
          rows: [
            ['noun + passive verb + infinitive', '**Tourism is expected to become** a major part of the country\'s economy.'],
            ['There + passive verb + infinitive', '**There are reported to have been** a record number of accidents on the roads.'],
            ['It + passive verb + that clause', '**It is thought that** the new railway will provide employment opportunities.']
          ]
        }
      },
      {
        type: 'rules_with_examples',
        title: 'Direct and Indirect Object',
        content: {
          intro: 'Some verbs can be followed by both a direct and an indirect object. There are two possible passive forms.',
          items: [
            { rule: "Active sentence", example: "Michael gave the plane tickets to Jill." },
            { rule: "With indirect object as subject", example: "**Jill was given** the plane tickets (by Michael)." },
            { rule: "With direct object as subject", example: "**The plane tickets were given** to Jill (by Michael)." }
          ],
          notes: [
            "With verbs like **explain** and **suggest**, you cannot use the indirect object as the subject. You must use a preposition. e.g., How to drive the train **was explained to** me. (NOT: *I was explained...*)"
          ]
        }
      },
      {
        type: 'table',
        title: 'Avoiding the Passive',
        content: {
          intro: "The passive is not normally used with continuous perfect tenses. Use these prepositional phrases instead.",
          headers: ['Phrase', 'Correct Example'],
          rows: [
            ['in progress', "Preparations **will be in progress**..."],
            ['in training', "I **will have been in training**..."],
            ['on display', "Vintage cars **have been on display**..."],
            ['under consideration', "The problem **had been under consideration**..."],
            ['under construction', "The station **has been under construction**..."]
          ]
        }
      },
      {
        type: 'nested_rules',
        title: 'Causatives',
        content: {
          structures: [
            {
              form: "get/have sth done",
              uses: [
                { use: "Actions we arrange for others to do", example: "Did you finally **get your bike fixed**?" },
                { use: "Things we experience (often negative)", example: "I heard that Susie **had her motorbike stolen**." }
              ]
            },
            {
              form: "get sb to do / have sb do",
              uses: [
                { use: "Actions we make someone do", example: "Did you **get Alex to drive** you?" }
              ]
            },
            {
              form: "get/have sb doing",
              uses: [
                { use: "Actions we make someone start doing", example: "We'll soon **have your car running** like new." }
              ]
            }
          ],
          notes: [
            "In general, **get** is more informal than **have** in causative structures.",
            "To show the agent, use **by**: Get the car looked at **by** a professional.",
            "To refer to an instrument, use **with**: The engine is started **with** a special card."
          ]
        }
      }
    ]
  }
];