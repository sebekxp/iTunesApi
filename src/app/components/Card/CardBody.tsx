type CardBodyProps = {
  children: React.ReactNode;
};

export const CardBody = ({ children }: CardBodyProps) => {
  return (
    <div className="flex flex-col w-full justify-between p-4 leading-normal overflow-hidden whitespace-nowrap">
      {children}
    </div>
  );
};
