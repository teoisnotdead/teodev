interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}


export const Button = ({ children, onClick }: ButtonProps) => {
  return <button
    className="rounded-md bg-transparent text-secondary dark:text-white border-primary border dark:border-primary hover:bg-primary hover:text-white dark:hover:bg-primary px-12 py-3 text-xl"
    onClick={onClick}>
    {children}
  </button>
}
