interface IAxis {
  y: string | null
  x: string | null
}
export default function getAxisValues(
  direction: "leftToRight" | "rightToLeft" | "topToBottom" | "bottomToTop"
): IAxis {
  switch (direction) {
    case "leftToRight":
      return { x: "-100%", y: null }
    case "rightToLeft":
      return { x: "-100%", y: null }
    case "topToBottom":
      return { x: null, y: "-100%" }
    case "bottomToTop":
    default:
      return { x: null, y: "100%" }
  }
}
