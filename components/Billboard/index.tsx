import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import s from './Billboard.module.css';
import { data } from '@/lib/dataset';
import { MovieType } from '@/types/model';

const Billboard = ({ setMovie }: { setMovie: Dispatch<SetStateAction<MovieType | undefined>> }) => {


  return (
    <div className={s.container}>
      {data.map((movie) => {
        const { title, poster, slug } = movie;
        return (
          <div className={s.container__movie} key={slug} onClick={() => setMovie(movie)}>
            <Image width={190} height={285} alt={slug} src={poster} />
            <h1>{title}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Billboard;
