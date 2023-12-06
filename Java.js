import inquirer from 'inquirer'

inquirer.prompt([
  {
    name: "Nimi",
    message: "Kuuled vä,mis su nimi on?",
    type: "input",
  },
  {
    name: "Rajoonid",
    message: "Mis rajoon sulle kõige vähem meeldib?",
    type: "list",
    choices: ["Mustamäe", "Õismäe", "Kesklinn", "Lasnamäe", "Kopli", "Viimsi"]
  },
  {
    name: "Vanus",
    message: "Vana sa tatt oled?",
    type: "number",
  },
  {
    name: "Vabaaeg",
    message: "Mis muidu teed?",
    type: "checkbox",
    choices: ["Tobi", "Chillin", "Pelan", "Vihakõne", "Joon", "Kaklen"]
  },
  {
    name: "Kinnitus",
    message: "Oled kõva vend jah?",
    type: "confirm",
  },
  {
    name: "Viimane",
    message: "Keda sa enim vihkad?",
    type: "password",
  }
])
