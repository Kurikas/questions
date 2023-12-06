const inquirer = require('inquirer');

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const questions = [
    {
        type: 'list',
        name: 'capitalOfFrance',
        message: 'What is the capital of France?',
        choices: ['Berlin', 'London', 'Paris', 'Madrid'],
        default: 'Paris'
    },
    {
        type: 'list',
        name: 'currencyOfItaly',
        message: 'What is the currency of Italy?',
        choices: ['Euro', 'Dollar', 'Pound', 'Yen'],
        default: 'Euro'
    },
    {
        type: 'list',
        name: 'languageOfSpain',
        message: 'What is the official language of Spain?',
        choices: ['English', 'Spanish', 'French', 'German'],
        default: 'Spanish'
    },
   
];

shuffleArray(questions);

inquirer.prompt(questions)
    .then((answers) => {
        console.log('Answers:', answers);
    })
    .catch((error) => {
        console.error('Error occurred:', error);
    });
    
