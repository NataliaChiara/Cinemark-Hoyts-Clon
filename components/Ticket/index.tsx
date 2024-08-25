import { useEffect, useState } from 'react';
import Image from 'next/image';
import s from './Ticket.module.css';
import { TicketType } from '@/types/model';
import { peliculas } from '@/lib/dataset';

const Ticket = ({ SelectedMovie }: { SelectedMovie: TicketType }) => {
  const [movieData, setMovieData] = useState({
    poster: '',
    titulo: '',
    edad: ''
  });

  useEffect(() => {
    const movieData = peliculas.find((movie) => movie.slug === SelectedMovie.slug);
    if (movieData) {
      setMovieData({
        poster: movieData.poster,
        titulo: movieData.titulo,
        edad: movieData.edad
      });
    }
  }, [SelectedMovie.slug]);

  return (
    <div className={s.container}>
      <Image src={movieData.poster} alt={SelectedMovie.slug} width={190} height={285} />
      <div>
        <h1>{movieData.titulo}</h1>
        <span>{movieData.edad}</span>
        <p>
          {SelectedMovie.tipo}
          <br />
          {SelectedMovie.nombre}
          <br />
          {'Sala ' + SelectedMovie.sala}
          <br />
          {SelectedMovie.direccion}
          <br />
          <strong>{SelectedMovie.dia + ' ' + SelectedMovie.hora}</strong>
        </p>
      </div>
    </div>
  );
};

export default Ticket;
