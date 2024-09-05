import cs from "classnames";
import s from "./Button.module.css";

const Button = ({
  label,
  action,
  isBuyButton,
  isCloseButton,
  isActive,
  isDisabled,
}: {
  label: string;
  action: () => void;
  isBuyButton?: boolean;
  isCloseButton?: boolean;
  isActive?: boolean;
  isDisabled?: boolean;
}) => {
  const className = cs(s.container, {
    [s.container__isBuyButton]: isBuyButton,
    [s.container__isCloseButton]: isCloseButton,
    [s.container__isActive]: isActive,
    [s.container__isBuyButton__disabled]: isBuyButton && isDisabled,
  });

  return (
    <button className={className} onClick={action}>
      {label}
    </button>
  );
};

export default Button;
