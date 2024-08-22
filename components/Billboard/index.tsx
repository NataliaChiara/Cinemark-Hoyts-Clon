import Image from 'next/image';
import s from './Billboard.module.css';
import { data } from '@/lib/dataset';

const Billboard = () => {
  const handleClick = (slug: string) => {
    window.location.href = `/movie?slug=${slug}`;
  };

  return (
    <div className={s.container}>
      {data.map((movie) => {
        const { title, poster, slug } = movie;
        return (
          <div className={s.container__movie} key={slug} onClick={() => handleClick(slug)}>
            <Image width={190} height={285} alt={slug} src={poster} />
            <h1>{title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Billboard;
