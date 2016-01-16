const {floor} = Math

export default function updateMap(delta, {pacman, rows}) {
  const {x, y} = pacman
  const tile = rows[floor(y)][floor(x)]

  if (typeof tile.eaten === "boolean" && !tile.eaten) tile.eaten = true
}
