const perguntas = [
    {
        pergunta: "Qual é a linguagem de programação que é conhecida como a linguagem da web?",
        respostas:[
            "Java",
            "Python",
            "JavaScript",
        ],
        correta: 2,
    },
    {
        pergunta: "Qual dos seguintes não é um tipo de dado em JavaScript?",
        respostas:[
            "Number",
            "String",
            "Booleano",
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é o operador usado para atribuição em JavaScript?",
        respostas:[
            "=",
            "==",
            ":=",
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a maneira correta de se declarar uma variável em JavaScript?",
        respostas:[
            "let myVar = 10;",
            "variable myVar = 10;",
            "myVar = 10;",
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função usada para exibir uma caixa de diálogo com uma mensagem em JavaScript?",
        respostas:[
            "alert()",
            "messageBox()",
            "prompt()",
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a função usada para obter a data atual em JavaScript?",
        respostas:[
            "getDate()",
            "currentDate()",
            "new Date()",
        ],
        correta: 2,
    },
    {
        pergunta: "Qual é o símbolo usado para comentar uma única linha em JavaScript?",
        respostas:[
            "//",
            "#",
            "/* */",
        ],
        correta: 0,
    },
    {
        pergunta: "Qual método é usado para remover o último elemento de um array em JavaScript?",
        respostas:[
            "pop()",
            "removeLast()",
            "splice()",
        ],
        correta: 0,
    },
    {
        pergunta: "Qual é a estrutura de controle de fluxo que permite a execução de código baseado em uma condição?",
        respostas:[
            "loop",
            "if",
            "switch",
        ],
        correta: 1,
    },
    {
        pergunta: "Qual é o operador usado para concatenar strings em JavaScript?",
        respostas:[
            "+",
            "&",
            "-",
        ],
        correta: 0,
    },
];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

// loop ou laço de repetição
for (const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for (let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {
      const estaCorreta = event.target.value == item.correta

      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
    }
    quizItem.querySelector('dl').appendChild(dt)
  }


  quizItem.querySelector('dl dt').remove()


  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
}