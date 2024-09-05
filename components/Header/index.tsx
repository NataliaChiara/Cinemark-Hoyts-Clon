import Image from "next/image";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.container__content}>
        <a href="/">
          <Image src="/images/logo.png" alt="logo" width={185} height={30} />
        </a>
      </div>
    </div>
  );
};

export default Header;
