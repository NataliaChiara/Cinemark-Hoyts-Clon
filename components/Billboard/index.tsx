import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { peliculas } from '@/lib/dataset';
import { PeliculaType } from '@/types/model';
import s from './Billboard.module.css';

const Billboard = ({
  setMovie
}: {
  setMovie: Dispatch<SetStateAction<PeliculaType | undefined>>;
}) => {
  return (
    <div className={s.container}>
      <div className={s.container__header}>
        <h1>PELICULAS</h1>
        <button>PELICULAS POR CATEGORIA</button>
      </div>
      <div className={s.container__peliculas}>
        {peliculas.map((pelicula) => {
          const { titulo, poster, slug } = pelicula;
          return (
            <div
              className={s.container__peliculas__movie}
              key={slug}
              onClick={() => setMovie(pelicula)}>
              <Image width={190} height={285} alt={slug} src={poster} />
              <h1>{titulo}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Billboard;
