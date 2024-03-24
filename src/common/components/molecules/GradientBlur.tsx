import styles from "./GradientBlur.module.css"
interface Props extends React.SVGAttributes<SVGSVGElement> {}
export default function GradientBlur({ className, ...rest }: Props) {
  return (
    <svg
      className={`${styles.base} ${className}`}
      // width="841"
      // height="873"
      viewBox="0 0 841 873"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <mask id="path-1-inside-1_100_13004" fill="white">
        <path d="M0 100H100V200H0V100Z" />
      </mask>
      <path
        d="M0 100V99H-1V100H0ZM0 101H100V99H0V101ZM1 200V100H-1V200H1Z"
        fill="#DDDDDD"
        mask="url(#path-1-inside-1_100_13004)"
      />
      <mask id="path-3-inside-2_100_13004" fill="white">
        <path d="M0 200H100V300H0V200Z" />
      </mask>
      <path
        d="M0 200V199H-1V200H0ZM0 201H100V199H0V201ZM1 300V200H-1V300H1Z"
        fill="#DDDDDD"
        mask="url(#path-3-inside-2_100_13004)"
      />
      <mask id="path-5-inside-3_100_13004" fill="white">
        <path d="M0 300H100V400H0V300Z" />
      </mask>
      <path
        d="M0 300V299H-1V300H0ZM0 301H100V299H0V301ZM1 400V300H-1V400H1Z"
        fill="#DDDDDD"
        mask="url(#path-5-inside-3_100_13004)"
      />
      <mask id="path-7-inside-4_100_13004" fill="white">
        <path d="M0 0H100V100H0V0Z" />
      </mask>
      <path
        d="M0 0V-1H-1V0H0ZM0 1H100V-1H0V1ZM1 100V0H-1V100H1Z"
        fill="#DDDDDD"
        mask="url(#path-7-inside-4_100_13004)"
      />
      <mask id="path-9-inside-5_100_13004" fill="white">
        <path d="M100 100H200V200H100V100Z" />
      </mask>
      <path
        d="M100 100V99H99V100H100ZM100 101H200V99H100V101ZM101 200V100H99V200H101Z"
        fill="#DDDDDD"
        mask="url(#path-9-inside-5_100_13004)"
      />
      <mask id="path-11-inside-6_100_13004" fill="white">
        <path d="M100 200H200V300H100V200Z" />
      </mask>
      <path
        d="M100 200V199H99V200H100ZM100 201H200V199H100V201ZM101 300V200H99V300H101Z"
        fill="#DDDDDD"
        mask="url(#path-11-inside-6_100_13004)"
      />
      <mask id="path-13-inside-7_100_13004" fill="white">
        <path d="M100 300H200V400H100V300Z" />
      </mask>
      <path
        d="M100 300V299H99V300H100ZM100 301H200V299H100V301ZM101 400V300H99V400H101Z"
        fill="#DDDDDD"
        mask="url(#path-13-inside-7_100_13004)"
      />
      <mask id="path-15-inside-8_100_13004" fill="white">
        <path d="M100 0H200V100H100V0Z" />
      </mask>
      <path
        d="M100 0V-1H99V0H100ZM100 1H200V-1H100V1ZM101 100V0H99V100H101Z"
        fill="#DDDDDD"
        mask="url(#path-15-inside-8_100_13004)"
      />
      <mask id="path-17-inside-9_100_13004" fill="white">
        <path d="M200 100H300V200H200V100Z" />
      </mask>
      <path
        d="M200 100V99H199V100H200ZM200 101H300V99H200V101ZM201 200V100H199V200H201Z"
        fill="#DDDDDD"
        mask="url(#path-17-inside-9_100_13004)"
      />
      <mask id="path-19-inside-10_100_13004" fill="white">
        <path d="M200 200H300V300H200V200Z" />
      </mask>
      <path
        d="M200 200V199H199V200H200ZM200 201H300V199H200V201ZM201 300V200H199V300H201Z"
        fill="#DDDDDD"
        mask="url(#path-19-inside-10_100_13004)"
      />
      <mask id="path-21-inside-11_100_13004" fill="white">
        <path d="M200 0H300V100H200V0Z" />
      </mask>
      <path
        d="M200 0V-1H199V0H200ZM200 1H300V-1H200V1ZM201 100V0H199V100H201Z"
        fill="#DDDDDD"
        mask="url(#path-21-inside-11_100_13004)"
      />
      <mask id="path-23-inside-12_100_13004" fill="white">
        <path d="M300 100H400V200H300V100Z" />
      </mask>
      <path
        d="M300 100V99H299V100H300ZM300 101H400V99H300V101ZM301 200V100H299V200H301Z"
        fill="#DDDDDD"
        mask="url(#path-23-inside-12_100_13004)"
      />
      <mask id="path-25-inside-13_100_13004" fill="white">
        <path d="M300 0H400V100H300V0Z" />
      </mask>
      <path
        d="M300 0V-1H299V0H300ZM300 1H400V-1H300V1ZM301 100V0H299V100H301Z"
        fill="#DDDDDD"
        mask="url(#path-25-inside-13_100_13004)"
      />
      <mask id="path-27-inside-14_100_13004" fill="white">
        <path d="M400 100H500V200H400V100Z" />
      </mask>
      <path
        d="M400 100V99H399V100H400ZM400 101H500V99H400V101ZM401 200V100H399V200H401Z"
        fill="#DDDDDD"
        mask="url(#path-27-inside-14_100_13004)"
      />
      <mask id="path-29-inside-15_100_13004" fill="white">
        <path d="M400 0H500V100H400V0Z" />
      </mask>
      <path
        d="M400 0V-1H399V0H400ZM400 1H500V-1H400V1ZM401 100V0H399V100H401Z"
        fill="#DDDDDD"
        mask="url(#path-29-inside-15_100_13004)"
      />
      <g filter="url(#filter0_f_100_13004)">
        <circle cx="417.5" cy="449.5" r="323.5" fill="white" />
      </g>
      <defs>
        <filter
          id="filter0_f_100_13004"
          x="-6"
          y="26"
          width="847"
          height="847"
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
            stdDeviation="50"
            result="effect1_foregroundBlur_100_13004"
          />
        </filter>
      </defs>
    </svg>
  )
}
