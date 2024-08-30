import Image from 'next/image';
import { PeliculaType } from '@/types/model';
import s from './MovieDetail.module.css';

const MovieDetail = ({ movie }: { movie: PeliculaType }) => {
  const { titulo, sinopsis, genero, duracion, director, actores, trailer, poster, edad, slug } =
    movie;

  return (
    <div className={s.container}>
      <div className={s.container__poster}>
        <Image width={190} height={285} alt={slug} src={poster} />
        <span className={s.container__poster__edad}>{edad}</span>
        <p className={s.container__poster__info}>
          Género: <strong>{genero}</strong>
          <br />
          Duración: <strong>{duracion}</strong>
          <br />
          actores: <strong>{actores}</strong>
          <br />
          Director: <strong>{director}</strong>
        </p>
      </div>
      <div className={s.container__trailer}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailer.split('youtu.be/')[1]}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        <h1 className={s.container__trailer__titulo}>{titulo}</h1>
        <p className={s.container__trailer__sinopsis}>{sinopsis}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
