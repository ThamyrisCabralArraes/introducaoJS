function numeroRandom(max) {
  return parseInt(Math.random() * max)
}
let arr = []
while(arr.length <= 20) {
  let randomNumber = numeroRandom(30)
  if(arr.indexOf(randomNumber) < 0) {
    arr.push(randomNumber)
  } else {
    console.log(randomNumber, 'Ja existe')
  }
}
console.log(arr)