export default function clamp(minVal: number, currVal: number, maxVal: number ) {
  return Math.min(Math.max(minVal, currVal), maxVal)
}