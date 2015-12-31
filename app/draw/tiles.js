const {PI} = Math
const PIPE_COLOR = "white"
const PIPE_WIDTH = 2

export default {
  "`": {
    draw({ctx, sprite: {height, width}}, {x, y}) {
      ctx.fillStyle = "black"
      ctx.fillRect(x, y, width, height)
    }
  },
  P: {},
  "*": {
    draw({ctx, sprite: {height, width}}, {x, y}) {
      ctx.fillStyle = PIPE_COLOR
      ctx.beginPath()
      ctx.arc(x + width / 2, y + height / 2, height / 5, 0, 2 * PI)
      ctx.fill()
    }
  },
  ".": {
    draw({ctx, sprite: {height, width}}, {x, y}) {
      ctx.fillStyle = "orange"
      ctx.beginPath()
      ctx.arc(x + width / 2, y + height / 4, height / 8, 0, 2 * PI)
      ctx.fill()
    },
    eaten: false
  },
  "─": {
    draw({ctx, sprite: {height, width}}, {x, y}) {
      ctx.strokeStyle = PIPE_COLOR
      ctx.lineWidth = PIPE_WIDTH
      height /= 2

      // Top line
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + width, y)
      ctx.stroke()
    }
  },
  "═": {
    draw({ctx, sprite: {height, width}}, {x, y}) {
      ctx.strokeStyle = PIPE_COLOR
      ctx.lineWidth = PIPE_WIDTH
      height /= 2

      // Top line
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + width, y)
      ctx.stroke()

      // Bottom line
      ctx.beginPath()
      ctx.moveTo(x, y + height)
      ctx.lineTo(x + width, y + height)
      ctx.stroke()
    }
  },
  "║": {
    draw({ctx, sprite: {height, width}}, {x, y}) {
      ctx.strokeStyle = PIPE_COLOR
      ctx.lineWidth = PIPE_WIDTH
      width /= 2

      // Left line
      ctx.beginPath()
      ctx.moveTo(x + width / 2, y)
      ctx.lineTo(x + width / 2, y + height)
      ctx.stroke()

      // Right line
      ctx.beginPath()
      ctx.moveTo(x + width * 1.5, y)
      ctx.lineTo(x + width * 1.5, y + height)
      ctx.stroke()
    }
  },
  "┌": {
    draw({ctx, sprite: {height, width}}, {x, y}) {
      ctx.strokeStyle = PIPE_COLOR
      ctx.lineWidth = PIPE_WIDTH

      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + width, y)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x, y + height)
      ctx.stroke()
    }
  },
  "┐": {},
  "└": {},
  "╚": {
    draw({ctx, sprite: {height, width}}, {x, y}) {
      ctx.strokeStyle = PIPE_COLOR
      ctx.lineWidth = PIPE_WIDTH

      // Inner line horizontal
      ctx.beginPath()
      ctx.moveTo(x + width * 0.75, y)
      ctx.lineTo(x + width, y)
      ctx.stroke()

      // Outer line vertical
      ctx.beginPath()
      ctx.moveTo(x + width / 4, y)
      ctx.lineTo(x + width / 4, y + height / 2)
      ctx.stroke()

      // Outer line horizontal
      ctx.beginPath()
      ctx.moveTo(x + width / 4, y + height / 2)
      ctx.lineTo(x + width, y + height / 2)
      ctx.stroke()
    }
  },
  "┘": {},
  "╝": {
    draw({ctx, sprite: {height, width}}, {x, y}) {
      ctx.strokeStyle = PIPE_COLOR
      ctx.lineWidth = PIPE_WIDTH

      // Inner line vertical
      ctx.beginPath()
      ctx.moveTo(x + width / 4, y)
      ctx.lineTo(x + width / 4, y)
      ctx.stroke()

      // Inner line horizontal
      ctx.beginPath()
      ctx.moveTo(x + width / 4, y)
      ctx.lineTo(x, y)
      ctx.stroke()

      // Outer line vertical
      ctx.beginPath()
      ctx.moveTo(x + width * 0.75, y)
      ctx.lineTo(x + width * 0.75, y + height / 2)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(x + width * 0.75, y + height / 2)
      ctx.lineTo(x, y + height / 2)
      ctx.stroke()
    }
  },
  "├": {},
  "┤": {},
  "┬": {
    draw({ctx, sprite: {height, width}}, {x, y}) {
      ctx.strokeStyle = PIPE_COLOR
      ctx.lineWidth = PIPE_WIDTH

      // Top line
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + width, y)
      ctx.stroke()
    }
  },
  "┴": {},
  "┼": {}
}
