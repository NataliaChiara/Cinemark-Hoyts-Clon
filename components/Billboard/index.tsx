import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import s from './Billboard.module.css';
import { peliculas } from '@/lib/dataset';
import { PeliculaType } from '@/types/model';

const Billboard = ({
  setMovie
}: {
  setMovie: Dispatch<SetStateAction<PeliculaType | undefined>>;
}) => {
  return (
    <div className={s.container}>
      {peliculas.map((pelicula) => {
        const { titulo, poster, slug } = pelicula;
        return (
          <div className={s.container__movie} key={slug} onClick={() => setMovie(pelicula)}>
            <Image width={190} height={285} alt={slug} src={poster} />
            <h1>{titulo}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Billboard;
