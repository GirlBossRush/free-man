import "babel-polyfill"
import "./index.styl"

import level from "resources/maps/1.txt"
import {pick} from "lodash"
import tiles from "render/tiles"
import * as keyMap from "helpers/key-map"

import renderMap from "render/map"
import renderPacman from "render/pacman"
import updateMap from "update/map"
import updatePacman from "update/pacman"

const canvas = document.createElement("canvas")
const ctx = canvas.getContext("2d")

canvas.setAttribute("height", "400px")
canvas.setAttribute("width", "300px")

const state = {
  canvas,
  ctx,
  sprite: {
    width: 0,
    height: 0
  },
  keyName: "rightArrow",
  pacman: {
    lastValidKeyName: "rightArrow",
    orientation: "right",
    mouthOpenValue: 40,
    mouthPosition: -1,
    speed: 1,
    updatedTime: Date.now(),
    x: 0,
    y: 0
  },
  rows: []
}

let lastFrameTime
let looping = true

function loop() {
  const delta = lastFrameTime ? +Date.now() - lastFrameTime : 16

  lastFrameTime = +Date.now()

  updatePacman(delta, state)
  updateMap(delta, state)
  renderMap(state)
  renderPacman(state)

  ctx.fillStyle = "white"
  ctx.font = "20px Georgia"
  ctx.fillText(delta, 0, canvas.height - 20)

  if (looping) requestAnimationFrame(loop)
}

function initialize() {
  window.addEventListener("keydown", event => {
    if (event.keyCode !== 27) return // "escape"

    event.preventDefault()

    looping = !looping

    if (looping) loop()
  })

  window.addEventListener("keydown", event => {
    const record = pick(keyMap, ({keyCode}) => keyCode === event.keyCode)
    const [keyName] = Object.keys(record)

    if (!keyName) return

    event.preventDefault()

    state.keyName = keyName
  })

  const rows = level
    .split("\n")
    .filter(line => line.length)

  state.rows = rows.map(row => {
    return Array.from(row, column => Object.assign({type: column}, tiles[column]))
  })

  state.sprite = {
    width: canvas.width / state.rows[0].length,
    height: canvas.height / state.rows.length
  }

  state.rows.some((row, y) => {
    row.some((column, x) => {
      if (column.type === "P") {
        Object.assign(state.pacman, {x, y})
        return true
      }
    })
  })

  document.body.appendChild(canvas)

  if (process.env.node_env !== "production") window.state = state

  loop()
}

document.addEventListener("DOMContentLoaded", initialize)
