import s from './Button.module.css';
import cs from 'classnames';

const Button = ({ label, action, isBuyButton, isCloseButton }: { label: string, action: any, isBuyButton?: boolean, isCloseButton?: boolean }) => {
  return (
    <button className={cs(s.container, { [s.container__isBuyButton]: isBuyButton, [s.container__isCloseButton]: isCloseButton })}>{label}</button>
  );
};

export default Button;
