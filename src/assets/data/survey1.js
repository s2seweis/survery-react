const survey1 = {
    title: 'About your workplace',
    pages: [
      // ###
      {
        name: 'page1',
        elements: [
          {
            type: 'text',
            name: 'name',
            title: 'What is your name?',
            isRequired: true,
          },
          {
            type: 'radiogroup',
            name: 'age',
            title: 'What is your age group?',
            isRequired: true,
            choices: ['Under 18', '18-24', '25-34', '35-44', '45-54', '55-64', '65 or Above'],
          },
          {
            type: 'checkbox',
            name: 'activities',
            title: 'Which of the following activities do you enjoy?',
            isRequired: true,
            choices: ['Reading', 'Traveling', 'Sports', 'Movies', 'Cooking', 'Gaming', 'Outdoor Activities'],
          },
          {
            type: 'rating',
            name: 'satisfaction',
            title: 'On a scale of 1 to 5, how satisfied are you with your life?',
            isRequired: true,
            rateMin: 1,
            rateMax: 5,
          },
          {
            type: 'comment',
            name: 'feedback',
            title: 'Any additional comments or feedback?',
          },
        ],
      },
      // ###
      
      
    ],
  };


  export default survey1