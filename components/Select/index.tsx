import React from "react";
import cs from "classnames";
import s from "./Select.module.css";
import Image from "next/image";

const Select = ({
  children,
  action,
  value,
  isActive,
}: {
  children: React.ReactNode;
  action: any;
  value: string;
  isActive: boolean;
}) => {
  return (
    <div className={s.container}>
      <Image
        className={cs(s.container__image, {
          [s.container__image__isActive]: isActive,
        })}
        width={16}
        height={16}
        src="/images/arrow-down.png"
        alt="arrow-icon"
      />
      <select
        value={value}
        onChange={action}
        className={cs(s.select, { [s.select__isActive]: isActive })}
      >
        {children}
      </select>
    </div>
  );
};

export default Select;
