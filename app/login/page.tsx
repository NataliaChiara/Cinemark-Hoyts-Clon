import { LoginComponent } from '@/components';
import s from './page.module.css'

export default function Login() {
  return (
    <div className={s.container}>
      <div className={s.container__header}>
        <h1>login</h1>
      </div>
      <LoginComponent />
    </div>
  );
}
