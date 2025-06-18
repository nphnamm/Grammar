export const exercises = [
    {
      id: 'A7',
      type: 'bold_word_correction',
      title: 'Grammar: Correcting Verb Forms',
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
      title: 'Grammar: Completing with the Passive Form',
      instructions: 'Write a verb from the box in the correct passive form in each gap.',
      wordBank: ['allow', 'ask', 'find', 'give', 'know', 'light', 'make', 'meet', 'show', 'write'],
      textSegments: [
        "The stolen items ____________  ",
        "in the attic of an empty house last week. When the open-air cinema opens, the first film ____________(2) ",
        "will be Vertigo. Questions ____________ (3)",
        "in Parliament about the Minister's business interests. We're looking forward to ____________ (4) ",
        "a guided tour of the whole factory. Just imagine that when these words ____________(5)",
        "Europeans had not yet discovered America. Once the barbecue ____________(6)",
        ", we'll be able to start cooking. Before ____________ (7)",
        " to see the invention, I had to agree not to tell anyone. I would really like ____________ (8)",
        "at the airport, if that's possible. It ____________ (9)",
        " very clear to us that we weren't welcome. Gareth says he's always wanted ____________ (10) ",
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
      title: 'Grammar: Impersonal Passive Structures',
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
      title: 'Grammar: Correcting Verb Forms in a Text',
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
      id: 'E7',
      type: 'fill_blanks_from_prompt',
      title: 'Grammar: Avoiding the Passive',
      instructions: 'Complete the sentences using the phrase given to avoid a continuous passive form.',
      questions: [
        { prompt: 'Situation: I started training six months ago and have six more to go. (in training)', text: "By the time I take my exams, ________________ for one year.", correctAnswer: "I will have been in training", explanation: "Avoids the future perfect continuous passive by using 'will have been in training'." },
        { prompt: 'Situation: The council has been thinking about redevelopment for some time. (under consideration)', text: "The redevelopment of the city centre ________________ for some time.", correctAnswer: "has been under consideration", explanation: "Avoids the present perfect continuous passive by using 'has been under consideration'." },
        { prompt: 'Situation: They started discussing the issue two weeks ago and are still discussing it. (in progress)', text: "Discussions on the issue ________________ for over two weeks.", correctAnswer: "have been in progress", explanation: "Avoids the continuous passive by using 'have been in progress'." },
        { prompt: 'Situation: The Art Society will display their works this weekend. (on display)', text: "The local Art Society's latest works ________________ at the library this weekend.", correctAnswer: "will be on display", explanation: "Avoids the future continuous passive by using 'will be on display'." },
        { prompt: 'Situation: George has been putting his website together for a long time. (under construction)', text: "George's website ________________ for a long time.", correctAnswer: "has been under construction", explanation: "Avoids the continuous passive by using 'has been under construction'." }
      ]
    },
    {
      id: 'F7',
      type: 'bold_word_correction',
      title: 'Grammar: Causative Forms in Dialogue',
      instructions: 'If the word or phrase in bold is correct, click "Correct". If it is incorrect, click "Wrong" and type the correction.',
      questions: [
        { number: 1, text: "We had to **have it repaired** twice!", boldWord: 'have it repaired', correctAnswer: '_IS_CORRECT_', isCorrectDefault: true, explanation: "'Have something done' is the correct causative structure." },
        { number: 2, text: "Well, we got **delivered it** to our house...", boldWord: 'delivered it', correctAnswer: 'it delivered', isCorrectDefault: false, explanation: "The structure is 'get something done', so it should be 'got it delivered'." },
        { number: 3, text: "We decided to have it **check** straight away...", boldWord: 'check', correctAnswer: 'checked', isCorrectDefault: false, explanation: "The structure is 'have something done', requiring the past participle 'checked'." },
        { number: 4, text: "Oh, I didn't know you'd had them **do** that.", boldWord: 'do', correctAnswer: '_IS_CORRECT_', isCorrectDefault: true, explanation: "'Have somebody do something' is the correct causative structure." },
        { number: 5, text: "Yeah. Anyway, we **had** my dad to have a look at it.", boldWord: 'had', correctAnswer: 'got', isCorrectDefault: false, explanation: "The structure 'get somebody to do something' is needed: 'got my dad to have a look'." },
        { number: 6, text: "Did you have the company **to come** to fix it?", boldWord: 'to come', correctAnswer: 'come', isCorrectDefault: false, explanation: "The structure is 'have somebody do something', so the bare infinitive 'come' is needed." },
        { number: 7, text: "We got my brother to **working** on it.", boldWord: 'working', correctAnswer: 'work', isCorrectDefault: false, explanation: "The structure is 'get somebody to do something', so the infinitive 'to work' is needed." },
        { number: 8, text: "I bet he soon had **running it** smoothly.", boldWord: 'running it', correctAnswer: 'it running', isCorrectDefault: false, explanation: "The structure is 'have something doing', so it should be 'had it running'." },
        { number: 9, text: "...we still had to get the company **come out** in the end...", boldWord: 'come out', correctAnswer: 'to come out', isCorrectDefault: false, explanation: "The structure is 'get somebody to do something', so the infinitive 'to come out' is needed." },
        { number: 10, text: "You should **get** them to give you some compensation.", boldWord: 'get', correctAnswer: '_IS_CORRECT_', isCorrectDefault: true, explanation: "'Get somebody to do something' is a correct causative structure." }
      ]
    },
    {
      id: 'G7',
      type: 'fill_blanks_from_prompt',
      title: 'Grammar: Using Causative Forms',
      instructions: 'Complete each sentence using the noun in bold and an appropriate causative form of the verb in bold.',
      questions: [
        { prompt: "(your teacher / explain)", text: "If you don't understand, ______________ it to you again after the lesson.", correctAnswer: "have your teacher explain", explanation: "Using the causative 'have somebody do something'." },
        { prompt: "(me / feel)", text: "Watching my kitten play... soon ______________ much better.", correctAnswer: "had me feeling", explanation: "Using the causative 'have somebody doing something' to show the start of a process." },
        { prompt: "(a professional / do)", text: "Don’t bother redecorating yourself – ______________ it.", correctAnswer: "have it done by a professional", explanation: "Using the causative 'have something done (by somebody)'." },
        { prompt: "(our car / steal)", text: "______________ was so annoying because it meant I had to take the tube.", correctAnswer: "Having our car stolen", explanation: "Using the causative 'have something done' in a gerund phrase as the subject." },
        { prompt: "(your parents / help)", text: "You won’t learn as much if you ______________ you with your homework all the time.", correctAnswer: "get your parents to help", explanation: "Using the causative 'get somebody to do something'." },
        { prompt: "(us all / dance)", text: "The band soon ______________ to their hit songs.", correctAnswer: "had us all dancing", explanation: "Using the causative 'have somebody doing something'." },
        { prompt: "(me / do)", text: "Don’t try ______________ your dirty work for you!", correctAnswer: "to get me to do", explanation: "Using the causative 'get somebody to do something' after 'try'." },
        { prompt: "(your hair / cut)", text: "Have you thought about ______________ as short as mine?", correctAnswer: "having your hair cut", explanation: "Using the causative 'have something done' in a gerund form after 'about'." },
        { prompt: "(Karen / show)", text: "I ______________ me how to juggle with five balls, but I still couldn’t do it.", correctAnswer: "had Karen show", explanation: "Using the causative 'have somebody do something'." },
        { prompt: "(their essays / write)", text: "Have you heard about students ______________ by companies on the Internet?", correctAnswer: "having their essays written", explanation: "Using the causative 'have something done' in a gerund phrase." }
      ]
    },
    {
      id: 'H7',
      type: 'sentence_transformation_keyed',
      title: 'Grammar: Sentence Transformation',
      instructions: 'Complete the second sentence so that it has a similar meaning to the first sentence, using the word given.',
      questions: [
        { prompt: "They made me wait for over 20 minutes on the phone!", key: "kept", text: "I ____________ for over 20 minutes on the phone!", correctAnswer: "was kept waiting", explanation: "'To be kept waiting' is a passive structure meaning someone makes you wait." },
        { prompt: "Although people consider Ashley to be a star, she is always friendly.", key: "considered", text: "Despite ____________, Ashley's always friendly towards everyone.", correctAnswer: "being considered a star", explanation: "After 'despite', a gerund phrase is used. The passive gerund 'being considered' is required." },
        { prompt: "We have had reports that the Prime Minister is making a surprise visit to Syria.", key: "be", text: "The Prime Minister ____________ a surprise visit to Syria.", correctAnswer: "is reported to be making", explanation: "This uses the impersonal passive structure 'is reported + to-infinitive'." },
        { prompt: "The manager provided the staff with extra training.", key: "by", text: "The ____________ the manager.", correctAnswer: "staff were provided with extra training by", explanation: "This transforms the active sentence into a passive one." },
        { prompt: "I think someone needs to explain this computer program to me.", key: "explaining", text: "I think I need ____________ me.", correctAnswer: "this computer program explaining to", explanation: "This uses the structure 'need + object + -ing participle'." },
        { prompt: "They have been building the new stadium for much longer than they originally estimated.", key: "under", text: "The new stadium ____________ for much longer than they originally estimated.", correctAnswer: "has been under construction", explanation: "This avoids the passive continuous by using the phrase 'under construction'." },
        { prompt: "Do you know why they made Craig stay behind after the lesson?", key: "to", text: "Do you know why ____________ behind after the lesson?", correctAnswer: "Craig was made to stay", explanation: "The active 'made Craig stay' becomes the passive 'Craig was made to stay'." },
        { prompt: "Call Lionel and ask him to send the reports up to my office.", key: "have", text: "Call Lionel and ____________ the reports up to my office.", correctAnswer: "have him send", explanation: "This uses the causative structure 'have somebody do something'." }
      ]
    },
    {
      id: 'I7',
      type: 'multiple_choice',
      title: 'Grammar: Review of Passives and Causatives',
      questions: [
        { number: 1, text: "When Nadine arrived, she soon ____________ at all her jokes.", options: ['A had everyone laughed', 'B had laughing everyone', 'C had everyone laughing', 'D had laughed everyone'], correct: 'C', explanation: "Causative structure 'have somebody doing something': 'had everyone laughing'." },
        { number: 2, text: "The government must ____________ strong measures against crime.", options: ['A be seen be taking', 'B see to be taking', 'C seen to take', 'D be seen to be taking'], correct: 'D', explanation: "The structure is modal passive + to-infinitive: 'must be seen to be taking'." },
        { number: 3, text: "Mrs Davies asked me to tell you that she would like ____________ by Friday at the latest.", options: ['A the orders sent', 'B sending the orders', 'C that you sent', 'D sent the orders'], correct: 'A', explanation: "Causative structure 'like something done'. She would 'like the orders sent'." },
        { number: 4, text: "Joining a gym ____________, but I didn't really fancy the idea.", options: ['A was suggested me', 'B to me was suggested', 'C was suggested to me', 'D was suggesting me'], correct: 'C', explanation: "The verb 'suggest' in the passive requires 'to' before the indirect object pronoun: 'was suggested to me'." },
        { number: 5, text: "There ____________ between 4,000 and 6,000 languages in the world...", options: ['A say to be', 'B are said that', 'C are said to be', 'D said being'], correct: 'C', explanation: "Impersonal passive structure: 'There are said to be...'." },
        { number: 6, text: "I spoke to Victor last night and he says he ____________ while he was on holiday.", options: ['A had stolen his phone', 'B got stolen his phone', 'C was got his phone stolen', 'D had his phone stolen'], correct: 'D', explanation: "Causative for a negative, unintended event: 'had something stolen'." },
        { number: 7, text: "Why didn't you ____________ you when you moved house?", options: ['A have Aaron help', 'B have got Aaron help', 'C have Aaron helped', 'D get Aaron help'], correct: 'A', explanation: "Causative structure 'have somebody do something'. In a question: 'have Aaron help'." },
        { number: 8, text: "Profits ____________ slightly next year, although we don't predict any job losses.", options: ['A expect to fall', 'B are expecting to fall', 'C are expected falling', 'D are expected to fall'], correct: 'D', explanation: "Impersonal passive structure 'are expected + to-infinitive'." },
        { number: 9, text: "It's hard to believe that this film ____________ completely by computer.", options: ['A was been generating', 'B has generated', 'C has been generated', 'D was to generate'], correct: 'C', explanation: "Present perfect passive for a state resulting from a past action: 'has been generated'." },
        { number: 10, text: "As soon as Dad ____________, we can leave.", options: ['A has the car starting', 'B has got the car started', 'C got started the car', 'D was got starting the car'], correct: 'B', explanation: "Causative 'get something done' to mean finish an action: 'has got the car started'." }
      ]
    },
    {
      id: 'J7',
      type: 'cloze_text',
      title: 'Grammar: Cloze Text',
      instructions: 'Read the text and write one word in each gap.',
      text: "Imagine (1) ____________ transported around the globe... rather than the 24 hours which (2) ____________ currently required... a highly experimental type of engine which has been (3) ____________ development... air (4) ____________ sucked into the engine... where it is mixed (5) ____________ fuel, ignited... In a scramjet, which has to (6) ____________ taken to supersonic speeds... It has (7) ____________ estimated that a scramjet might be capable of travelling at 12-24 times the speed of sound. However, the technology (8) ____________ been found to be extremely difficult to control. Although scientists (9) ____________ had scramjets perform short flights, commercial aircraft are still a long way in the future, and indeed may never (10) ____________ successfully developed.",
      correctAnswers: [
        { number: 1, word: 'being', explanation: "After 'imagine', the gerund is used. The passive gerund is 'being'." },
        { number: 2, word: 'are', explanation: "'24 hours' is plural, so 'are required'." },
        { number: 3, word: 'under', explanation: "The phrase 'under development' avoids the continuous passive." },
        { number: 4, word: 'is', explanation: "Present simple passive: 'air is sucked'." },
        { number: 5, word: 'with', explanation: "The preposition here is 'with': 'mixed with fuel'." },
        { number: 6, word: 'be', explanation: "Modal passive: 'has to be taken'." },
        { number: 7, word: 'been', explanation: "Impersonal passive in present perfect: 'It has been estimated'." },
        { number: 8, word: 'has', explanation: "Present perfect passive: 'technology has been found'." },
        { number: 9, word: 'have', explanation: "Causative structure: 'scientists have had scramjets perform'." },
        { number: 10, word: 'be', explanation: "Modal passive: 'may never be developed'." }
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