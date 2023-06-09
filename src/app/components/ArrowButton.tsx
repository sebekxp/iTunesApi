type ArrowButtonProps = {
  /**
   * Indicates whether the icon in the button should face left or right
   */
  direction: 'left' | 'right';
  /**
   * An onClick action that will be called when the button is pressed
   */
  onClick: () => void;
};

export const ArrowButton = ({ direction = 'right', onClick }: ArrowButtonProps) => {
  return (
    <button
      data-testid={direction === 'left' ? 'button-prev' : 'button-next'}
      onClick={onClick}
      style={{ transform: direction === 'left' ? 'rotate(180deg)' : 'none' }}
      type="button"
      className="mr-2 inline-flex items-center rounded-lg border border-[color:var(--redPrimary)] p-2.5 text-center text-sm font-medium text-[color:var(--redPrimary)] hover:bg-[color:var(--redPrimary)] hover:text-white focus:outline-none focus:ring-4 focus:ring-[color:var(--redPrimary)]"
    >
      <svg
        aria-hidden="true"
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Arrow button</span>
    </button>
  );
};
