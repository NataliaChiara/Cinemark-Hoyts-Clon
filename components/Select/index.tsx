import s from './Select.module.css';
import cs from 'classnames';

const Select = ({ label, action }: { label: string, action: any }) => {
  return (
    <select className={cs(s.container)}></select>
  );
};

export default Select;
