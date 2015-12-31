export const downArrow = {
  orientation: "down",
  delta: $ => Object.assign($, {y: $.y + $.speed}),
  keyCode: 40
}

export const escape = {
  orientation: "left",
  delta: $ => $,
  keyCode: 27
}

export const leftArrow = {
  orientation: "left",
  delta: $ => Object.assign($, {x: $.x - $.speed}),
  keyCode: 37
}

export const rightArrow = {
  orientation: "right",
  delta: $ => Object.assign($, {x: $.x + $.speed}),
  keyCode: 39
}

export const upArrow = {
  orientation: "up",
  delta: $ => Object.assign($, {y: $.y - $.speed}),
  keyCode: 38
}
