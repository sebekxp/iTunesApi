type CardDescriptionProps = {
  text: string;
};

export const CardDescription = ({ text }: CardDescriptionProps) => {
  return <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{text}</p>;
};
