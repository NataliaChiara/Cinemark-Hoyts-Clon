import React from 'react';
import cs from 'classnames';
import s from './Select.module.css';

const Select = ({
  children,
  action,
  value,
  isActive
}: {
  children: React.ReactNode;
  action: any;
  value: string;
  isActive: boolean;
}) => {
  return (
    <select
      value={value}
      onChange={action}
      className={cs(s.container, { [s.container__isActive]: isActive })}>
      {children}
    </select>
  );
};

export default Select;
