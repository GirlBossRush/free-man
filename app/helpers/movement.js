import * as keyMap from "helpers/key-map"
import torus from "helpers/torus"

const {abs, floor} = Math

function snapToFloor(input, gap, start = 0) {
  if (gap === 0) return input

  input -= start
  input = gap * Math.floor(input / gap)

  return start + input
}

export function getClosestTile({x, y}, method = "round") {
  method = Math[method]

  return {x: method(x), y: method(y)}
}

export function getNextCoords({keyName, pacman, rows}) {
  const torusCoords = ({x, y}) => ({
    x: torus(x, -1, rows[0].length),
    y: torus(y, -1, rows.length)
  })
  const isTileSolid = coords => {
    const method = coords.x > pacman.x || coords.y > pacman.y ? "round" : "floor"
    const {x, y} = getClosestTile(coords, method)
    const tile = rows[y][x]

    return tile.solid
  }

  const {lastValidKeyName} = pacman
  const {orientation, delta} = keyMap[keyName]
  let coords = torusCoords(delta(pacman))
  let foo = ""

  if (isTileSolid(coords)) {
    foo += "first solid, "
    const {delta, orientation} = keyMap[lastValidKeyName]

    coords = Object.assign(torusCoords(delta(pacman)), {
      lastValidKeyName,
      orientation
    })

    if (isTileSolid(coords)) {
      foo += "second soild"
      Object.assign(coords, getClosestTile(pacman, "floor"))
    }
  }
  else {
    foo += "good"

    if (pacman.orientation !== orientation) coords = getClosestTile(coords)

    Object.assign(coords, {
      lastValidKeyName: keyName,
      orientation
    })
  }

  console.debug(foo, coords)
  return coords
}
