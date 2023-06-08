type CardBodyProps = {
  children: React.ReactNode;
};

export const CardBody = ({ children }: CardBodyProps) => {
  return <div className="flex flex-col justify-between p-4 leading-normal">{children}</div>;
};
