type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode
  type?: 'submit' | 'button' | 'reset'

}

export const Button = ({ onClick = () => { }, children, type = 'button' }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="border-2 border-gray-400 rounded-xl px-3 py-1 hover:bg-gray-400 hover:text-white whitespace-nowrap">{children}</button>
  )
}