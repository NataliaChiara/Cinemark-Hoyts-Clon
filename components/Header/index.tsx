import Image from 'next/image';
import s from './Header.module.css';
import { useAuth } from '@/context/loginContext';

const Header = () => {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated)

  return (
    <div className={s.container}>
      <div className={s.container__content}>
        <a href="/">
          <Image src="/images/logo.png" alt="logo" width={185} height={30} />
        </a>
        <a href="/login">
          <Image src={isAuthenticated ? "/images/user.png" : "/images/user-outline.png"} alt="logo" width={30} height={30} />
        </a>
      </div>
    </div>
  );
};

export default Header;
