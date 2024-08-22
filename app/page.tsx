import s from './page.module.css';
import { Billboard } from '@/components';

export default function Home() {
  return (
    <main className={s.main}>
      <Billboard />
    </main>
  );
}
