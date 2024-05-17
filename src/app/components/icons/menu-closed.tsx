export function MenuClosed({
  onClick,
  className,
}: {
  onClick: () => void;
  className: string;
}) {
  return (
    <svg
      width="30"
      height="29"
      viewBox="0 0 30 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className={className}
    >
      <path
        d="M1.87816 0.591854C1.96525 0.556653 2.05447 0.526332 2.13802 0.484849C2.57861 0.255729 3.08381 0.175011 3.57981 0.254485C4.07582 0.333959 4.53665 0.569462 4.89499 0.926592C5.42858 1.46018 5.96147 1.99306 6.49505 2.52665L28.2957 24.3273C29.2072 25.2388 29.3739 26.4085 28.7358 27.4C28.5539 27.6816 28.3126 27.9193 28.0283 28.097C27.744 28.2746 27.4234 28.388 27.0885 28.4293C26.7536 28.4707 26.4122 28.439 26.0877 28.3365C25.7632 28.2339 25.4633 28.063 25.2084 27.8353C25.0886 27.7279 24.9778 27.6115 24.8642 27.498C17.2558 19.8896 9.65851 12.2731 2.02887 4.686C0.972224 3.63074 0.562288 2.56402 1.25985 1.21016L1.87816 0.591854Z"
        fill="#C38154"
      />
      <path
        d="M28.7468 1.21911C28.7914 1.32831 28.8298 1.44243 28.8822 1.54669C29.0908 1.97627 29.1597 2.4627 29.0794 2.93895C28.9991 3.41521 28.7735 3.85784 28.4338 4.20587C27.865 4.79118 27.2797 5.35999 26.7027 5.93705L5.0072 27.6325C4.09569 28.544 2.92666 28.71 1.93447 28.0726C1.65386 27.8904 1.41707 27.649 1.24025 27.3648C1.06342 27.0807 0.950714 26.7606 0.909794 26.4262C0.868877 26.0918 0.900713 25.7511 1.00314 25.4272C1.10556 25.1033 1.27616 24.8039 1.50332 24.5493C1.61072 24.4296 1.7305 24.3221 1.84479 24.2079C9.45243 16.6002 17.0697 9.00218 24.656 1.37324C25.712 0.317289 26.776 -0.0953934 28.1298 0.60217L28.7468 1.21911Z"
        fill="#C38154"
      />
    </svg>
  );
}