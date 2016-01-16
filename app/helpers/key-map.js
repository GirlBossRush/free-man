export const downArrow = {
  orientation: "down",
  delta({x, y}) { return {x, y: y + 0.5} },
  keyCode: 40
}

export const leftArrow = {
  orientation: "left",
  delta({x, y}) { return {x: x - 0.5, y} },
  keyCode: 37
}

export const rightArrow = {
  orientation: "right",
  delta({x, y}) { return {x: x + 0.5, y} },
  keyCode: 39
}

export const upArrow = {
  orientation: "up",
  delta({x, y}) { return {x, y: y - 0.5} },
  keyCode: 38
}
