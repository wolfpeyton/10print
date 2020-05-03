/*
  one possible implemenation of the 10print.org algorithm written in JavaScript
*/

const chars = [['╭', '╰'], ['╮', '╯']]
const w = process.stdout.columns

function draw () {
  setTimeout(draw, 1000 / 4)
  let output = []
  let lr = 0
  for (let i = 0; i < w; i++) {
    output += chars[lr][Math.floor(Math.random() * chars[lr].length)]
    lr ^= 1; // XOR lr with one, causes it to oscillate between 0 and 1
  }
  console.log(output)
}

draw()
