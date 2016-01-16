import {getNextCoords} from "helpers/movement"

const delayFactor = 0.1

export default function updatePacman(delta, {keyName, pacman, rows}) {
  if (Date.now() - pacman.updatedTime < 1000 * delayFactor) return

  const nextCoords = getNextCoords({keyName, pacman, rows})

  if (pacman.x !== nextCoords.x || pacman.y !== nextCoords.y) {
    if (pacman.mouthOpenValue <= 0)
      pacman.mouthPosition = 1
    else if (pacman.mouthOpenValue >= 60)
      pacman.mouthPosition = -1

    pacman.mouthOpenValue = pacman.mouthOpenValue += 10 * pacman.mouthPosition
  }

  Object.assign(pacman, nextCoords, {
    updatedTime: Date.now()
  })
}
