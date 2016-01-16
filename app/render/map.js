export default function renderMap(state) {
  const {canvas, ctx, rows, sprite} = state

  ctx.fillStyle = "black"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  rows.forEach((row, y) => {
    row.forEach((column, x) => {
      ctx.fillStyle = "white"
      const render = column.render || (() => ctx.fillRect(x * sprite.width, y * sprite.height, sprite.width, sprite.height))

      Reflect.apply(render, column, [state, {x: x * sprite.width, y: y * sprite.height}])
    })
  })
}
