import "./Button.css";

interface ButtonProps {
  text: string;
  type?: "submit" | "reset";
  isDisabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  text: text,
  type,
  isDisabled,
  className,
}) => {
  return (
    <button className={className} type={type ?? "button"} disabled={isDisabled}>
      {text}
    </button>
  );
};

export default Button;
