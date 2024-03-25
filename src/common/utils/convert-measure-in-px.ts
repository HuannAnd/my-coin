export default function convertMeasureInPx(currStr: string) {
  const numberExpression = Number(currStr)
  if (currStr.endsWith("px")) {
    return numberExpression
  }
  else if (currStr.endsWith("vw")) {
    const numExpInScale = numberExpression / 100;

    return window.innerWidth * numExpInScale
  } else {
    return null
  }
}