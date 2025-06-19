export const exercises = [
  {
    id: 'A7',
    type: 'bold_word_correction',
    title: 'A Grammar: Correcting Verb Forms',
    instructions: 'If the verb in bold is correct, click "Correct". If it is incorrect, click "Wrong" and type the correct verb form.',
    questions: [
      { number: 1, text: "Could you tell me where your passport **was been issued**?", boldWord: 'was been issued', correctAnswer: 'was issued', isCorrectDefault: false, explanation: "The past simple passive is formed with `was/were` + past participle. 'Been' is not needed here." },
      { number: 2, text: "When the winning actor **was** finally **announced**, a big cheer went up.", boldWord: 'was announced', correctAnswer: '_IS_CORRECT_', isCorrectDefault: true, explanation: "This is a correct past simple passive form (`was` + past participle)." },
      { number: 3, text: "**Has** your business trip to Calcutta next week **confirmed** by the Indian office?", boldWord: 'Has confirmed', correctAnswer: 'Has been confirmed', isCorrectDefault: false, explanation: "The present perfect passive requires 'has/have been' + past participle. The sentence should be 'Has your business trip... been confirmed'." },
      { number: 4, text: "Everyone who **was been invited** to the wedding came.", boldWord: 'was been invited', correctAnswer: 'had been invited', isCorrectDefault: false, explanation: "The past perfect passive (`had been` + past participle) is used because the invitation happened before they came." },
      { number: 5, text: "The wire coat hanger **invented** in 1903 by a Mr Parkhouse.", boldWord: 'invented', correctAnswer: 'was invented', isCorrectDefault: false, explanation: "This sentence requires a passive verb. The coat hanger didn't invent something; it 'was invented'." },
      { number: 6, text: "The issue **has discussed** in Parliament yesterday, but no decisions were taken.", boldWord: 'has discussed', correctAnswer: 'was discussed', isCorrectDefault: false, explanation: "The context 'yesterday' requires the past simple passive ('was discussed'), not the present perfect." },
      { number: 7, text: "By the time we get there, the problem **should have been sorted out**.", boldWord: 'should have been sorted out', correctAnswer: '_IS_CORRECT_', isCorrectDefault: true, explanation: "This is a correct modal perfect passive form." },
      { number: 8, text: "Britain **was be invaded** by the Romans under Emperor Claudius in 43 AD.", boldWord: 'was be invaded', correctAnswer: 'was invaded', isCorrectDefault: false, explanation: "The past simple passive is formed with `was/were` + past participle ('invaded'), not the base form." },
      { number: 9, text: "The party **had been planned** months in advance, but we still had problems.", boldWord: 'had been planned', correctAnswer: '_IS_CORRECT_', isCorrectDefault: true, explanation: "This is a correct past perfect passive form." },
      { number: 10, text: "After **be treated**, I was allowed to leave the hospital.", boldWord: 'be treated', correctAnswer: 'being treated', isCorrectDefault: false, explanation: "After a preposition like 'after', the passive gerund form ('being' + past participle) is required." },
      { number: 11, text: "We boarded the ship and **were showing** to our cabin by a steward.", boldWord: 'were showing', correctAnswer: 'were shown', isCorrectDefault: false, explanation: "The passive voice is needed. We didn't show the steward; we 'were shown' to our cabin." },
      { number: 12, text: "The new supermarket **is to be opened** by an actor from a soap opera.", boldWord: 'is to be opened', correctAnswer: '_IS_CORRECT_', isCorrectDefault: true, explanation: "The structure 'is/are to be' + past participle is a formal way to express a future plan in the passive." }
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
    id: "H",
    type: "word_formation",
    title: "H Grammar: Write the sentence using the given word.",
    questions: [
      {
        baseWord: "kept",
        text: "1 They made me wait for over 20 minutes on the phone!. I ____________ for over 20 minutes on the phone!",
        correct: "They kept me waiting for over 20 minutes on the phone!",
        explanation: "‘Kept’ is followed by a noun/pronoun and an -ing form to describe continuing actions caused by someone."
      },
      {
        text: "2 Although people consider Ashley to be a star, she is always friendly towards everyone.",
        correct: "Despite being considered a star, Ashley is always friendly towards everyone.",
        explanation: "‘Despite’ is followed by a gerund or noun phrase; passive form ‘being considered’ fits here."
      },
      {
        text: "3 We have had reports that the Prime Minister is making a surprise visit to Syria.",
        correct: "The Prime Minister is reported to be making a surprise visit to Syria.",
        explanation: "Use the passive reporting structure: ‘is reported to be’ + present participle."
      },
      {
        text: "4 The manager provided the staff with extra training.",
        correct: "The staff were provided with extra training by the manager.",
        explanation: "Passive voice with ‘by’ to show the agent of the action."
      },
      {
        text: "5 I think someone needs to explain this computer program to me.",
        correct: "I think I need this computer program explaining to me.",
        explanation: "Causative structure: ‘need something doing’ means it needs to be done."
      },
      {
        text: "6 They have been building the new stadium for much longer than they originally estimated.",
        correct: "The new stadium is under construction for much longer than they originally estimated.",
        explanation: "‘Under construction’ is the standard phrase to describe ongoing building work."
      },
      {
        text: "7 Do you know why they made Craig stay behind after the lesson?",
        correct: "Do you know why Craig was made to stay behind after the lesson?",
        explanation: "In the passive, ‘made’ is followed by ‘to’ + verb."
      },
      {
        text: "8 Call Lionel and ask him to send the reports up to my office.",
        correct: "Call Lionel and have him send the reports up to my office.",
        explanation: "‘Have someone do something’ is a causative structure meaning to instruct or arrange for someone to do something."
      }
    ]
  }
  
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