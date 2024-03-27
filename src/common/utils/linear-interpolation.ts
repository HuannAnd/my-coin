import clamp from "./clamp"

export default function linearInterpolation(
  curr: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number,
) {
  const mapped =
    ((curr - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  return clamp(out_min, mapped, out_max)
}
