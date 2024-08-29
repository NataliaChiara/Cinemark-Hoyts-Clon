import s from './Select.module.css';
import cs from 'classnames';

const Select = ({ children, action, value, isActive }: { children: React.ReactNode, action: any, value: string, isActive: boolean }) => {
  return (
    <select value={value} onChange={action} className={cs(s.container, { [s.container__isActive]: isActive })}>
      {children}
    </select>
  );
};

export default Select;
