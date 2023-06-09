type CardTitleProps = {
  title: string;
};

export const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <h5 className="w-full mb-2 text-xl sm:text-2xl font-bold tracking-tight text-white overflow-hidden overflow-ellipsis">
      {title}
    </h5>
  );
};
