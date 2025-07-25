import * as React from 'react';

export const Logo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M12.25 2.25A10.003 10.003 0 002.25 12.25c0 4.133 2.515 7.643 6.002 9.158.39.073.792-.184.865-.573a.666.666 0 00-.573-.865 8.667 8.667 0 01-5.22-7.72c0-4.78 3.885-8.666 8.667-8.666s8.667 3.886 8.667 8.666c0 2.92-1.455 5.518-3.692 7.038a.667.667 0 10.658 1.134 10.001 10.001 0 004.368-8.172A10.003 10.003 0 0012.25 2.25z"
      clipRule="evenodd"
    ></path>
    <path d="M12.25 5.583a6.667 6.667 0 00-6.667 6.667c0 1.95.842 3.702 2.167 4.935a.667.667 0 10.963-.923 5.333 5.333 0 01-1.796-3.993c0-2.94 2.393-5.333 5.333-5.333s5.333 2.394 5.333 5.333a5.335 5.335 0 01-3.647 4.965.667.667 0 00.4 1.223A6.668 6.668 0 0018.917 12.25c0-3.682-2.985-6.667-6.667-6.667z"></path>
  </svg>
);
