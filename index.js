let text = document.getElementById('target')

const fullText = 'Приветствую! Это автоматизированный ввод текста.'

machineInput(text, fullText.split(''))

async function machineInput (elem, charsArray) {
  for(let char of charsArray) {
    let textContent = elem.textContent
    elem.textContent = await insertChar(char, textContent)
  }
}

function insertChar(char, currentText) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${currentText}${char}`)
    }, Math.floor(Math.random() * (100 + 1)) + 100)
  })
}