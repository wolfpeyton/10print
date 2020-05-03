/*
  10print algorithm which guarantees connected shapes
*/

const left_down = '╮'
const left_up = '╯'
const left_right = '─'
const right_down = '╭'
const right_up = '╰'
const down_up = '│'

const legalChars = (left, above) => {
  legals = [left_down, left_up, left_right, right_down, right_up, down_up]
  return legals.filter((c) => {
    if (left === left_down || left === left_up || left === down_up || left === '') {
      return c !== left_down && c !== left_up && c !== left_right
    } else {
      return c === left_down || c === left_up || c === left_right
    }
  }).filter((c) => {
    if (above === left_up || above === left_right || above === right_up || above === '') {
      return c !== left_up && c !== right_up && c !== down_up
    } else {
      return c === left_up || c === right_up || c === down_up
    }
  })
}

const w = process.stdout.columns

async function draw () {
  let aboveArray = []
  for (;;) {
    let output = []
    let prev = ''
    for (let i = 0; i < w; i++) {
      const legals = legalChars(prev, aboveArray.length > 0 ? aboveArray[i] : '')
      prev = legals[Math.floor(Math.random() * legals.length)]
      output += prev
    }
    console.log(output)
    aboveArray = output
    await new Promise(r => setTimeout(r, 1000 / 12));
  }
}

draw()
