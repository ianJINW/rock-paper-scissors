document.addEventListener('DOMContentLoaded', () => {
  const playerImg = document.querySelectorAll('.user img')
  const compImg = document.querySelectorAll('.comp img')
  const userChoice = document.querySelector('.user p')
  const compChoice = document.querySelector('.comp p')
  const moon = document.querySelector('.fa-moon')
  let compCount = document.querySelector('.count')
  let userWins = 0
  let compWins = 0
  let ties = 0

  moon.addEventListener('click', () => {
    document.body.classList.toggle('light')
    document.body.classList.toggle('dark')
  })
  playerImg.forEach(element => {
    element.addEventListener('click', () => {
      playerImg.forEach(element => {
        //add animated to all
        element.classList.add('animated')
        element.style.background = 'lightslategrey'
      })
      setTimeout(() => {
        //Here is the user's input
        let player = element.getAttribute('alt').split('/').pop()
        element.style.background = 'gold'

        //the computer picks one as well
        let comp = compImg[Math.floor(Math.random() * compImg.length)]
          .getAttribute('alt')
          .split('/')
          .pop()
        //display the choices
        userChoice.textContent = `You chose ${player}!!!`
        compChoice.textContent = `I choose ${comp}!!!`
        //insert the result

        let el = document.createElement('p')
        el.textContent = game[player][comp]

        if (el.textContent.toLowerCase().includes('win')) {
          userWins += 1
        } else if (el.textContent.toLowerCase().includes('lose')) {
          compWins += 1
        } else if (el.textContent.toLowerCase().includes('tie')) {
          ties += 1
        }
        compCount.innerHTML = `You have won ${userWins} 😎😎, lost ${compWins}😥, and tied ${ties}🤝🤝`

        compChoice.insertAdjacentElement('afterend', el)
      }, 500)
    })
  })

  const game = {
    rock: {
      rock: "It's a tie!",
      paper: 'You lose! Paper covers rock.',
      scissors: 'You win! Rock crushes scissors.'
    },
    paper: {
      rock: 'You win! Paper covers rock.',
      paper: "It's a tie!",
      scissors: 'You lose! Scissors cut paper.'
    },
    scissors: {
      rock: 'You lose! Rock crushes scissors.',
      paper: 'You win! Scissors cut paper.',
      scissors: "It's a tie!"
    }
  }
})
