export default function torus(axis, min, max) {
  if (axis > max) {
    axis = min
  }
  else if (axis < min) {
    axis = max
  }

  return axis
}
