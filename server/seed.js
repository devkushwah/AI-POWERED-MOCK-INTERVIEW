// seed.js
const { Question } = require('./models');

(async () => {
  await Question.bulkCreate([
    { question: 'Tell me about yourself', category: 'HR' },
    { question: 'What are your strengths?', category: 'HR' },
    { question: 'Why do you want to work here?', category: 'HR' },
    { question: 'What are your weaknesses?', category: 'HR' },
    { question: 'Where do you see yourself in 5 years?', category: 'HR' },
    { question: 'Why should we hire you?', category: 'HR' },
    { question: 'What is your biggest achievement?', category: 'HR' },
    { question: 'How do you handle stress and pressure?', category: 'HR' },
    { question: 'Do you prefer working alone or in a team?', category: 'HR' },
    { question: 'How do you prioritize your work?', category: 'HR' },
    { question: 'Why are you leaving your current job?', category: 'HR' },
    { question: 'What motivates you?', category: 'HR' },
    { question: 'How do you define success?', category: 'HR' },
    { question: 'What are your hobbies?', category: 'HR' },
    { question: 'Are you willing to relocate?', category: 'HR' },
    { question: 'What are your salary expectations?', category: 'HR' },
    { question: 'Describe a difficult work situation and how you overcame it.', category: 'HR' },
    { question: 'What makes you a good fit for this role?', category: 'HR' },
    { question: 'How do you handle feedback?', category: 'HR' },
    { question: 'Do you have any questions for us?', category: 'HR' }
  ]);
  console.log('✅ 20 Questions seeded!');
})();
