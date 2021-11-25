const holes = document.querySelectorAll('.hole')
const scoreBoard = document.querySelector('.score')
const moles = document.querySelectorAll('.mole')
const coundownnBoard = document.querySelector('.countdown')
const startButton = document.querySelector('.startButton')
const highscore = document.querySelector('.highscore')
const cursor = document.querySelector('.cursor img')
const icon = document.querySelector('.icon')

let lastHole
let timeUp = false
let timeLimit = 20000
let score = 0
let countdown

function pickRandomHole(holes) {
    const RandomHole = Math.floor(Math.random() * holes.length)
    const hole = holes[RandomHole]
    if (hole === lastHole) {
      return pickRandomHole(holes)
    }
    lastHole = hole
    return hole
  }

  function popOut() {
    const time = Math.random() * 1200 + 400
    const hole = pickRandomHole(holes)
    hole.classList.add('up')
    setTimeout(function () {
      hole.classList.remove('up')
      if (!timeUp) popOut()
    }, time)
  }

  function startGame() {
    countdown = timeLimit / 1000
    scoreBoard.textContent = 0
    scoreBoard.style.display = 'block'
    coundownnBoard.textContent = countdown
    timeUp = false
    score = 0
    popOut()
    setTimeout(function () {
      timeUp = true
    }, timeLimit)

    let startCountdown = setInterval(function () {
        countdown -= 1
        coundownnBoard.textContent = countdown
        if (countdown < 0) {
          countdown = 0
          clearInterval(startCountdown)
          coundownnBoard.textContent = 'Times Up !!'
          const score1 = scoreBoard.innerHTML
          const currentScore = sessionStorage.getItem('currentScore')
          if (score1 > currentScore) {
            sessionStorage.setItem('currentScore', score1)
            highscore.innerHTML = score
          }
        }
      }, 1000)
    }

    startButton.addEventListener('click', startGame)
console.log(icon)
window.addEventListener('mousedown', () => {
  icon.classList.add('hammerRotate')
  console.log(icon)
  
})
window.addEventListener('mouseup', () => {
  icon.classList.remove('hammerRotate')
  console.log(icon)
  
})

function whack(e) {
    score++
    this.style.backgroundImage = 'url("mole2.png")'
    this.style.pointerEvents = 'none'
    setTimeout(() => {
      this.style.backgroundImage = 'url("mole1.png")'
      this.style.pointerEvents = 'all'
    }, 900)
  
    scoreBoard.textContent = score
  }
  
  moles.forEach((mole) => mole.addEventListener('click', whack))