import styles from "./LightBlur.module.css"

interface Props extends React.SVGAttributes<SVGSVGElement> {}

export default function LightBlur({ className, ...rest }: Props) {
  return (
    <svg
    className={`${className} ${styles.base}`}
      width="1260"
      height="1080"
      viewBox="0 0 1260 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        filter="url(#filter0_f_13_364)"
      >
        <circle cx="630" cy="573" r="375" fill="white" fill-opacity="0.1" />
      </g>
      <defs>
        <filter
          id="filter0_f_13_364"
          x="0"
          y="-57"
          width="1260"
          height="1260"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="127.5"
            result="effect1_foregroundBlur_13_364"
          />
        </filter>
      </defs>
    </svg>
  )
}
