import Image from 'next/image';
import s from './MovieDetail.module.css';
import { MovieType } from '@/types/model';
import Schedule from '../Schedule';

const MovieDetail = ({ movie }: { movie: MovieType }) => {
  const { title, sinopsis, genre, duration, trailer, poster, age, theatre, slug } = movie;

  return (
    <div className={s.container}>
      <Schedule data={theatre} movieSlug={slug} />
      <div className={s.container__poster}>
        <Image width={190} height={285} alt={slug} src={poster} />
        <span className={s.container__poster__age}>{age}</span>
        <p className={s.container__poster__info}>
          Género: <strong>{genre}</strong>
          <br />
          Duración: <strong>{duration}</strong>
        </p>
      </div>
      <div className={s.container__trailer}>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailer.split('youtu.be/')[1]}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        <h1>{title}</h1>
        <p>{sinopsis}</p>
      </div>

    </div>
  );
};

export default MovieDetail;
