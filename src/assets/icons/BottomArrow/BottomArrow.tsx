export const BottomArrow = ({
  className = 'fill-midnight-blue',
}: {
  className?: string;
}) => {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.53033 0.547647C9.82322 0.829275 9.82322 1.28588 9.53033 1.56751L5.53033 5.41367C5.23744 5.69529 4.76256 5.69529 4.46967 5.41367L0.46967 1.56751C0.176777 1.28588 0.176777 0.829275 0.46967 0.547647C0.762563 0.266019 1.23744 0.266019 1.53033 0.547647L5 3.88387L8.46967 0.547647C8.76256 0.266019 9.23744 0.266019 9.53033 0.547647Z"
      />
    </svg>
  );
};
