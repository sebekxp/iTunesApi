type CardDescriptionProps = {
  text: string;
};

export const CardDescription = ({ text }: CardDescriptionProps) => {
  return (
    <p className="sm:text-md mb-3 overflow-hidden overflow-ellipsis text-sm font-normal text-gray-400">
      {text}
    </p>
  );
};
