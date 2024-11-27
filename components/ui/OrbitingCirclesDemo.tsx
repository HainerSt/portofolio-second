import OrbitingCircles from "./OrbitingCircles";

export function OrbitingCirclesDemo() {
  return (
    <div className="relative flex h-[500px] w-[500px] flex-col items-center justify-center overflow-hidden ">
      <span className="pointer-events-none whitespace-pre-wrap text-center text-8xl font-semibold leading-none text-transparent "></span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="size-[30px] md:size-[20px] border-none bg-transparent"
        duration={20}
        delay={17}
        radius={80}
      >
        <Icons.css />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[40px] md:size-[30px] border-none bg-transparent"
        duration={20}
        delay={12}
        radius={80}
      >
        <Icons.html />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[30px] md:size-[20px] border-none bg-transparent"
        duration={20}
        delay={5}
        radius={80}
      >
        <Icons.git />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[40px] md:size-[30px] border-none bg-transparent"
        duration={20}
        delay={7}
        radius={130}
      >
        <Icons.github />
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="size-[50px] md:size-[30px] border-none bg-transparent"
        radius={190}
        duration={50}
        reverse
      >
        <Icons.next />
      </OrbitingCircles>
      <OrbitingCircles
        className="size-[50px] md:size-[30px] border-none "
        radius={190}
        duration={20}
        delay={20}
        reverse
      >
        <Icons.javascript />
      </OrbitingCircles>
      <OrbitingCircles className="size-[60px] md:size-[30px] border-none " radius={190} duration={30} delay={2} reverse>
        <Icons.react />
      </OrbitingCircles>
    </div>
  );
}

const Icons = {
  github: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 48 48">
      <title>{"Github-color"}</title>
      <path
        fill="#3E75C3"
        fillRule="evenodd"
        d="M23.999 0C10.746 0 0 10.787 0 24.097 0 34.74 6.876 43.772 16.414 46.958c1.2.222 1.639-.522 1.639-1.16 0-.573-.021-2.088-.034-4.098-6.676 1.456-8.085-3.23-8.085-3.23-1.09-2.784-2.664-3.525-2.664-3.525-2.179-1.495.166-1.465.166-1.465 2.407.17 3.675 2.483 3.675 2.483 2.142 3.683 5.617 2.62 6.985 2.002.217-1.557.838-2.619 1.524-3.221-5.33-.609-10.932-2.675-10.932-11.908 0-2.63.934-4.781 2.47-6.466-.247-.61-1.07-3.059.235-6.377 0 0 2.016-.647 6.6 2.47 1.915-.534 3.967-.801 6.008-.811 2.039.01 4.092.277 6.01.811 4.58-3.117 6.592-2.47 6.592-2.47 1.31 3.318.486 5.767.238 6.377 1.54 1.685 2.468 3.835 2.468 6.466 0 9.256-5.612 11.293-10.958 11.89.861.744 1.63 2.213 1.63 4.462 0 3.22-.03 5.819-.03 6.61 0 .644.432 1.394 1.65 1.157C41.13 43.763 48 34.738 48 24.097 48 10.787 37.254 0 23.999 0"
      />
    </svg>
  ),

  git: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">
      <path
        fill="#EE513B"
        d="M2.585 17.413a1.999 1.999 0 0 1 0-2.826L14.587 2.585c.78-.78 2.046-.78 2.826 0l12.002 12.002c.78.78.78 2.046 0 2.826L17.413 29.415c-.78.78-2.046.78-2.826 0L2.585 17.413Z"
      />
      <path
        fill="#fff"
        d="m12.149 5.062-1.215 1.215 3.139 3.139A2.126 2.126 0 0 0 15.25 12.3v7.679a2.126 2.126 0 1 0 1.718.097v-7.765l3 3a2.125 2.125 0 1 0 1.283-1.147l-3.221-3.223a2.125 2.125 0 0 0-2.66-2.66l-3.221-3.22Z"
      />
    </svg>
  ),
  react: () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-3.2 -3.2 38.4 38.4">
      <path
        fill="#fff"
        strokeWidth={0}
        d="M18.798-2.408a5.4 5.4 0 0 0-5.596 0L.602 5.229A5.4 5.4 0 0 0-2 9.846v12.308A5.4 5.4 0 0 0 .602 26.77l12.6 7.637a5.4 5.4 0 0 0 5.596 0l12.6-7.637A5.4 5.4 0 0 0 34 22.154V9.846a5.4 5.4 0 0 0-2.602-4.617l-12.6-7.637z"
      />
      <g fill="#53C1DE">
        <path d="M18.679 15.976c0-1.435-1.2-2.598-2.679-2.598-1.48 0-2.679 1.163-2.679 2.598 0 1.434 1.2 2.597 2.679 2.597 1.48 0 2.679-1.163 2.679-2.597Z" />
        <path
          fillRule="evenodd"
          d="M24.7 11.154c.566-2.23 1.277-6.363-1.23-7.764-2.495-1.395-5.742 1.278-7.456 2.883-1.71-1.589-5.048-4.25-7.552-2.845-2.494 1.4-1.725 5.465-1.147 7.708-2.327.64-6.315 2.02-6.315 4.84 0 2.811 3.984 4.313 6.297 4.953-.58 2.255-1.311 6.262 1.186 7.659 2.514 1.405 5.842-1.194 7.572-2.816 1.726 1.614 4.942 4.23 7.437 2.83 2.504-1.406 1.852-5.484 1.273-7.74 2.242-.641 6.235-2.11 6.235-4.886 0-2.793-4.01-4.184-6.3-4.822Zm-.284 8.513a28.65 28.65 0 0 0-1.519-3.685 28.625 28.625 0 0 0 1.46-3.631c1.679.472 5.361 1.55 5.361 3.625 0 2.094-3.533 3.183-5.302 3.691Zm-1.566 7.859c-1.862 1.045-4.628-1.456-5.902-2.645a29.352 29.352 0 0 0 2.514-3.096c1.45-.125 2.821-.329 4.064-.607.407 1.595 1.194 5.298-.676 6.348Zm-13.726-.015c-1.863-1.041-1.011-4.616-.584-6.278 1.228.264 2.589.453 4.042.568.83 1.132 1.7 2.173 2.576 3.085-1.083 1.015-4.163 3.671-6.034 2.625ZM2.28 15.976c0-2.102 3.661-3.173 5.378-3.643a29.257 29.257 0 0 0 1.462 3.673 29.689 29.689 0 0 0-1.48 3.726c-1.637-.454-5.36-1.653-5.36-3.756ZM9.104 4.504c1.87-1.05 4.77 1.506 6.012 2.656a29.97 29.97 0 0 0-2.556 3.066c-1.41.127-2.761.33-4.003.604-.466-1.81-1.321-5.278.547-6.326Zm11.275 7.073c.957.117 1.875.273 2.736.464-.259.803-.581 1.643-.96 2.504a41.165 41.165 0 0 0-1.776-2.968Zm-4.365-3.529c.591.621 1.183 1.314 1.766 2.066a38.897 38.897 0 0 0-3.546 0 27.651 27.651 0 0 1 1.78-2.066Zm-6.157 6.496a26.884 26.884 0 0 1-.954-2.517 29.762 29.762 0 0 1 2.72-.452 36.303 36.303 0 0 0-1.766 2.97Zm1.793 5.922a28.076 28.076 0 0 1-2.764-.431c.264-.83.59-1.692.972-2.568a36.306 36.306 0 0 0 1.792 2.999Zm4.4 3.525a28.142 28.142 0 0 1-1.805-2.094c1.188.045 2.378.045 3.566-.006a26.611 26.611 0 0 1-1.761 2.1Zm6.117-6.569c.4.886.739 1.744 1.007 2.559a27.97 27.97 0 0 1-2.798.462c.639-.982 1.239-1.99 1.79-3.02Zm-3.42 3.172a41.486 41.486 0 0 1-5.463.01 34.923 34.923 0 0 1-2.746-4.598 34.908 34.908 0 0 1 2.73-4.59c1.82-.133 3.65-.134 5.469 0a39.137 39.137 0 0 1 2.739 4.572 39.146 39.146 0 0 1-2.729 4.606ZM22.83 4.467c1.87 1.046 1.038 4.76.63 6.376a31.597 31.597 0 0 0-4.012-.615 29.379 29.379 0 0 0-2.536-3.069c1.258-1.175 4.066-3.728 5.918-2.692Z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  ),
  html: () => (
    <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width={100} height={100} viewBox="0 0 291.31 291.31">
      <path
        d="M9.099 0h273.112L254.9 263.999 154.759 291.31h-18.207L36.41 263.999 9.099 0z"
        style={{
          fill: "#d99666",
        }}
      />
      <path
        d="M145.655 27.302h100.141l-18.207 209.386-81.933 27.311-.001-236.697z"
        style={{
          fill: "#f4b459",
        }}
      />
      <path
        d="m218.649 81.806 2.867-27.193H63.43l3.186 27.193 2.914 36.597h-.037l2.759 27.238h105.976l-3.641 43.334-28.932 9.14v-.282l-38.472-10.169-2.358-23.879H72.698l4.315 43.862v1.793l68.642 18.144 57.563-18.144h.701l.018-.246.127-.018v-1.438l5.208-62.097h.118l2.768-27.238H102.94l-2.913-36.597z"
        style={{
          fill: "#fff",
        }}
      />
      <path
        d="M145.655 54.613H63.43l3.186 27.193 2.914 36.597h-.037l2.759 27.238h73.403v-27.238H102.94l-2.913-36.597h45.628zM145.655 197.833l-38.472-10.169-2.358-23.879H72.698l4.315 43.862v1.793l68.642 18.144v-29.469z"
        style={{
          fill: "#e5e5e5",
        }}
      />
    </svg>
  ),
  javascript: () => (
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid" viewBox="0 0 256 256">
      <path fill="#F7DF1E" d="M0 0h256v256H0V0Z" />
      <path d="m67.312 213.932 19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
    </svg>
  ),
  next: () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3.2 -3.2 38.4 38.4">
      <rect width={38.4} height={38.4} x={-3.2} y={-3.2} fill="#fff" strokeWidth={0} rx={19.2} />
      <path d="M23.749 30.005c-.119.063-.109.083.005.025a.31.31 0 0 0 .095-.061c0-.021 0-.021-.1.036zm.24-.13c-.057.047-.057.047.011.016a.249.249 0 0 0 .068-.047c0-.027-.016-.021-.079.031zm.156-.094c-.057.047-.057.047.011.016a.246.246 0 0 0 .068-.048c0-.025-.016-.02-.079.032zm.158-.093c-.057.047-.057.047.009.015.037-.02.068-.041.068-.047 0-.025-.016-.02-.077.032zm.213-.141c-.109.073-.147.12-.047.068.067-.041.181-.131.161-.131-.043.016-.079.043-.115.063zM14.953.011c-.073.005-.292.025-.484.041-4.548.412-8.803 2.86-11.5 6.631a15.828 15.828 0 0 0-2.824 6.989c-.129.88-.145 1.14-.145 2.333 0 1.192.016 1.448.145 2.328.871 6.011 5.147 11.057 10.943 12.927 1.043.333 2.136.563 3.381.704.484.052 2.577.052 3.061 0 2.152-.24 3.969-.771 5.767-1.688.276-.14.328-.177.291-.208a340.89 340.89 0 0 1-2.609-3.495l-2.557-3.453-3.203-4.745a416.396 416.396 0 0 0-3.229-4.744c-.011 0-.025 2.109-.031 4.681-.011 4.505-.011 4.688-.068 4.792a.572.572 0 0 1-.276.287c-.099.047-.188.057-.661.057h-.541l-.141-.088a.595.595 0 0 1-.208-.229l-.068-.141.005-6.271.011-6.271.099-.125a.753.753 0 0 1 .229-.187c.131-.063.183-.073.724-.073.635 0 .74.025.907.208a602.855 602.855 0 0 1 3.859 5.812c2.079 3.152 4.917 7.453 6.312 9.563l2.537 3.839.125-.083a16.346 16.346 0 0 0 3.285-2.885 15.935 15.935 0 0 0 3.767-8.177c.129-.88.145-1.141.145-2.333 0-1.193-.016-1.448-.145-2.328C30.985 7.668 26.709 2.622 20.913.751a16.983 16.983 0 0 0-3.328-.697c-.303-.031-2.371-.068-2.631-.041zM21.5 9.688a.623.623 0 0 1 .317.364c.027.084.032 1.823.027 5.74l-.011 5.624-.989-1.52-.995-1.521v-4.083c0-2.647.011-4.131.025-4.204a.67.67 0 0 1 .313-.395c.124-.063.172-.068.667-.068.463 0 .541.005.645.063z" />
    </svg>
  ),
  css: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      fill="#0679d0"
      stroke="#0679d0"
      viewBox="-51.2 -51.2 614.4 614.4"
    >
      <rect width={614.4} height={614.4} x={-51.2} y={-51.2} fill="#fff" stroke="none" strokeWidth={0} rx={307.2} />
      <path d="M204.064 46.682V68.7h-56.302V.501h56.302v24.13h-32.172v22.051h32.172zm57.877-22.051h22.492V.501h-56.308v24.13c7.533 7.533 11.461 11.139 22.356 22.034-6.369 0-22.356.022-22.356.021V68.7h56.308V46.682l-22.492-22.051zm79.805 0h22.49V.501H307.93v24.13c7.531 7.533 11.461 11.139 22.355 22.034-6.365 0-22.355.022-22.355.021V68.7h56.307V46.682l-22.491-22.051zm96.649 76.481-34.203 370.486-148.193 39.9-148.196-39.9-34.198-370.486h364.79zm-68.918 75.332H140.245l5.529 44.739H262.049l-6.184 2.574-106.067 44.177 3.518 43.73 102.549.333 54.963.175-3.521 58.311-51.442 14.484v-.046l-.422.116-49.684-12.542-3.015-36.195h-46.411l6.032 69.876 93.5 27.649v-.05l.168.05 93-27.146L361.1 267.935H255.605l.26-.112 109.086-46.639 4.526-44.74z" />
    </svg>
  ),
};
