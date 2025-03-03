interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="rounded-md bg-transparent border-primary border hover:bg-primary hover:text-white px-12 py-3 text-xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
};