function Vector({color='#30994D'}) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 11.5997 0.375616 13.1116 1.04346 14.4525C1.22094 14.8088 1.28001 15.2161 1.17712 15.6006L0.581511 17.8267C0.322954 18.793 1.20701 19.677 2.17335 19.4185L4.39939 18.8229C4.78393 18.72 5.19121 18.7791 5.54753 18.9565C6.88837 19.6244 8.40032 20 10 20ZM6 11.25C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75H11.5C11.9142 12.75 12.25 12.4142 12.25 12C12.25 11.5858 11.9142 11.25 11.5 11.25H6ZM5.25 8.5C5.25 8.08579 5.58579 7.75 6 7.75H14C14.4142 7.75 14.75 8.08579 14.75 8.5C14.75 8.91421 14.4142 9.25 14 9.25H6C5.58579 9.25 5.25 8.91421 5.25 8.5Z"
        fill={color}
      />
    </svg>
  );
}

export default Vector;
