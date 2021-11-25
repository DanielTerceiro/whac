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