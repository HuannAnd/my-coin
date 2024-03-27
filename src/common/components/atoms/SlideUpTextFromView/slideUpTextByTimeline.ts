interface IAnimationsOptions extends gsap.TweenVars { trigger?: gsap.TweenTarget }
export default function slideUpTextByTimeline(
  timeline: gsap.core.Timeline,
  { 
    trigger = null,
    duration = 1.2, 
    ease = "back.out",
    stagger = 0.03, 
    ...opts 
  }: IAnimationsOptions = {},
): void {
  const target = trigger ? `.${trigger}` : ``
  timeline.to(`${target} .char`.trim(), {
    y: "0%",
    duration,
    ease: "back.out",
    stagger,
    ...opts,
  })
}
