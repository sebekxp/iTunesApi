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
      className="text-[color:var(--redPrimary)] border border-[color:var(--redPrimary)] hover:bg-[color:var(--redPrimary)] hover:text-white focus:ring-4 focus:outline-none focus:ring-[color:var(--redPrimary)] font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2"
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Arrow button</span>
    </button>
  );
};
