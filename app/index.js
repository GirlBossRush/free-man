import "./index.styl"

import level from "resources/maps/1.txt"
import {pick} from "lodash"
import torus from "helpers/torus"
import * as keyMap from "helpers/key-map"
import drawPacman from "draw/pacman"
import tiles from "draw/tiles"

const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")

canvas.setAttribute("height", "400px")
canvas.setAttribute("width", "300px")

const PAC_RADIUS = canvas.width / 30

const state = {
  canvas,
  ctx,
  sprite: {
    width: 0,
    height: 0
  },
  keyName: "",
  pacman: {
    orientation: "right",
    mouthOpenValue: 40,
    mouthPosition: -1,
    speed: 5,
    x: 5,
    y: 5
  },
  rows: []
}

function renderGame() {
  const {keyName, rows, sprite} = state

  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  if (keyName.length) {
    const {delta, orientation} = keyMap[keyName]
    const diameterCompensation = 2 * PAC_RADIUS
    let {x, y} = delta(state.pacman)

    x = torus(x, -diameterCompensation, canvas.width + diameterCompensation)
    y = torus(y, -diameterCompensation, canvas.height + diameterCompensation)

    Object.assign(state.pacman, {orientation, x, y})
  }

  rows.forEach((row, y) => {
    row.forEach((column, x) => {
      ctx.fillStyle = "white"

      if (!column.draw) return ctx.fillRect(x * sprite.width, y * sprite.height, sprite.width, sprite.height)

      column.draw(state, {x: x * sprite.width, y: y * sprite.height})
    })
  })

  drawPacman(state)
  requestAnimationFrame(renderGame)
}

window.addEventListener("keydown", event => {
  const record = pick(keyMap, ({keyCode}) => keyCode === event.keyCode)
  const [keyName] = Object.keys(record)

  if (!keyName) return

  event.preventDefault()

  state.keyName = keyName
})

document.body.appendChild(canvas)

const rows = level
  .split("\n")
  .filter(line => line.length)

state.rows = rows.map(row => {
  console.log(row)
  return Array.from(row, column => Object.create(tiles[column]))
})

state.sprite = {
  width: canvas.width / state.rows[0].length,
  height: canvas.height / state.rows.length
}

if (process.env.node_env !== "production") {
  window.state = state
}

requestAnimationFrame(renderGame)

console.debug("Rendered:", (new Date()).toString())
