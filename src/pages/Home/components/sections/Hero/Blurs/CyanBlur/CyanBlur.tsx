import styles from "./CyanBlur.module.css"

interface Props extends React.SVGAttributes<SVGSVGElement> {}

export default function CyanBlur({ className, ...rest }: Props) {
  return (
    <svg
      className={`${className} ${styles.base}`}
      width="50%"
      height="100%"
      // height="1080"
      viewBox="0 0 516 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g
        style={{ mixBlendMode: "plus-lighter" }}
        filter="url(#filter0_f_6_140)"
      >
        <circle cx="-114" cy="491" r="375" fill="#04508F" fillOpacity="1" />
      </g>
      <defs>
        <filter
          id="filter0_f_6_140"
          x="-744"
          y="-139"
          width="1260"
          height="1260"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
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
            result="effect1_foregroundBlur_6_140"
          />
        </filter>
      </defs>
    </svg>
  )
}
