const inquirer = require('inquirer');

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
    {
        type: 'list',
        name: 'capitalOfGermany',
        message: 'What is the capital of Germany?',
        choices: ['Berlin', 'Paris', 'Rome', 'Madrid'],
        default: 'Berlin'
    },
    {
        type: 'list',
        name: 'currencyOfSpain',
        message: 'What is the currency of Spain?',
        choices: ['Euro', 'Dollar', 'Pound', 'Yen'],
        default: 'Euro'
    },
    {
        type: 'list',
        name: 'languageOfItaly',
        message: 'What is the official language of Italy?',
        choices: ['English', 'Italian', 'French', 'Spanish'],
        default: 'Italian'
    },
    {
        type: 'list',
        name: 'capitalOfSpain',
        message: 'What is the capital of Spain?',
        choices: ['Berlin', 'London', 'Paris', 'Madrid'],
        default: 'Madrid'
    },
];


inquirer.prompt(questions)
    .then((answers) => {
        console.log('Answers:', answers);
    })
    .catch((error) => {
        console.error('Error occurred:', error);
    });
