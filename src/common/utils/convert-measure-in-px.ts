export default function convertMeasureInPx(currStr: string) {
  const digitsAndPunctuation = currStr.replace(/[^\d\s.,!?]/g, "")
  const currStrAsNumber = Number(digitsAndPunctuation)

  if (currStr.endsWith("px")) {
    return currStrAsNumber
  } else if (currStr.endsWith("vw")) {
    const numExpInScale = currStrAsNumber / 100

    return window.innerWidth * numExpInScale
  } else {
    return null
  }
}
