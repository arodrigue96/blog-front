import "./Button.css";

interface ButtonProps {
  text: string;
  type?: "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ text, type }) => {
  return (
    <button className="button" type={type ?? "button"}>
      {text}
    </button>
  );
};

export default Button;
