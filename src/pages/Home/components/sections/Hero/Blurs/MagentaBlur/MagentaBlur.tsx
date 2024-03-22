import styles from "./MagentaBlur.module.css"

interface Props extends React.SVGAttributes<SVGSVGElement> {}

export default function MagentaBlur({ className, ...rest }: Props) {
  return (
    <svg
      className={`${className} ${styles.base}`}
      width="30%"
      height="100%"
      // height="1080"
      viewBox="0 0 515 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        filter="url(#filter0_f_6_141)"
      >
        <circle cx="630" cy="491" r="375" fill="#C014DB" fill-opacity="0.5" />
      </g>
      <defs>
        <filter
          id="filter0_f_6_141"
          x="0"
          y="-139"
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
            result="effect1_foregroundBlur_6_141"
          />
        </filter>
      </defs>
    </svg>
  )
}
