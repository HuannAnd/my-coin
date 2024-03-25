export default function initSlideUpTextByTimeline(
  timeline: gsap.core.Timeline,
  scope?: gsap.TweenTarget
): void {
  const target = scope ? `.${scope}` : ""

  timeline.set(`${target} .word`.trim(), {
    display: "inline",
    clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
  })
  timeline.set(`${target} .char`.trim(), {
    display: "inline-block",
    position: "relative",
    y: "100%",
  })
}
