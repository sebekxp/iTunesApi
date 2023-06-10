type CardBodyProps = {
  children: React.ReactNode;
};

export const CardBody = ({ children }: CardBodyProps) => {
  return (
    <div className="flex w-full flex-col justify-between overflow-hidden whitespace-nowrap p-4 leading-normal">
      {children}
    </div>
  );
};
