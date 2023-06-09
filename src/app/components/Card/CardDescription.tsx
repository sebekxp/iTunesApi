type CardDescriptionProps = {
  text: string;
};

export const CardDescription = ({ text }: CardDescriptionProps) => {
  return (
    <p className="mb-3 font-normal text-sm sm:text-md text-gray-400 overflow-hidden overflow-ellipsis">
      {text}
    </p>
  );
};
