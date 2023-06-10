type CardTitleProps = {
  title: string;
};

export const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <h5 className="mb-2 w-full overflow-hidden overflow-ellipsis text-xl font-bold tracking-tight text-white sm:text-2xl">
      {title}
    </h5>
  );
};
