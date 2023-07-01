let secondsHand = document.querySelector('.seconds')

let minsHand = document.querySelector('.minutes')

let hourHand = document.querySelector('.hour')

function timing () {
  let now = new Date()

  let seconds = now.getSeconds()
  let secondsDegrees = ((seconds / 60) * 360) + 90
  secondsHand.style.transform = `rotate(${secondsDegrees}deg)`

  let minutes = now.getMinutes()
  let mins = ((minutes / 60) * 360) + 90
  minsHand.style.transform = `rotate(${mins}deg)` 

  let hours = now.getHours()
  let hoursDegrees = ((hours / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`

}
setInterval(timing, 1000)