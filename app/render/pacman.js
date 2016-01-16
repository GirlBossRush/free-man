import getPacmanRadius from "helpers/pacman-radius"

const {PI} = Math
const radian = n => PI / 180 * n

export default function renderPacman({sprite: {height, width}, ctx, pacman}) {
  const radius = getPacmanRadius({width})
  const x = pacman.x * width + width / 2
  const y = pacman.y * height + height / 4
  const arc = ctx.arc.bind(ctx, x, y, radius)

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
