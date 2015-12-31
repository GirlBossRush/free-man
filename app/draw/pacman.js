const {PI} = Math
const radian = n => PI / 180 * n

export default function drawPacman({canvas, ctx, pacman}) {
  const PAC_RADIUS = canvas.width / 30

  const x = pacman.x + PAC_RADIUS
  const y = pacman.y + PAC_RADIUS
  const arc = ctx.arc.bind(ctx, x, y, PAC_RADIUS)

  if (pacman.mouthOpenValue <= 0)
    pacman.mouthPosition = 1
  else if (pacman.mouthOpenValue >= 60)
    pacman.mouthPosition = -1

  pacman.mouthOpenValue += 5 * pacman.mouthPosition

  const drawCircle = {
    down: () => arc(radian(89 - pacman.mouthOpenValue), radian(90 + pacman.mouthOpenValue), true),
    left: () => arc(radian(179 - pacman.mouthOpenValue), radian(180 + pacman.mouthOpenValue), true),
    right: () => arc(radian(pacman.mouthOpenValue), radian(360 - pacman.mouthOpenValue)),
    up: () => arc(radian(274 - pacman.mouthOpenValue), radian(275 + pacman.mouthOpenValue), true)
  }[pacman.orientation]

  ctx.beginPath()
  drawCircle()

  ctx.lineTo(x, y)
  ctx.fillStyle = "#FF0"
  ctx.fill()
}
