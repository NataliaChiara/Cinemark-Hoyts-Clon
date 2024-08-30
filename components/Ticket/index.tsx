import { useEffect, useState } from 'react';
import Image from 'next/image';
import { SelectSeats } from '@/components';
import { peliculas } from '@/lib/dataset';
import { TicketType } from '@/types/model';
import s from './Ticket.module.css';

const Ticket = ({ SelectedMovie }: { SelectedMovie: TicketType }) => {
  const [movieData, setMovieData] = useState({
    poster: '',
    titulo: '',
    edad: ''
  });

  const [cantidadDeEntradasMaximo, setCantidadEntradasMaximo] = useState(0);
  const [cantidadEntradas, setCantidadEntradas] = useState(1);
  const [showSelectSeats, setShowSelectSeats] = useState(false);

  useEffect(() => {
    const movieData = peliculas.find((movie) => movie.slug === SelectedMovie.slug);
    if (movieData) {
      setMovieData({
        poster: movieData.poster,
        titulo: movieData.titulo,
        edad: movieData.edad
      });
    }
    const cantidadDeEntradasMaximoCalc = SelectedMovie.asientos?.filas.reduce(
      (total, fila) => total + fila.asientosTotales - (fila.asientosReservados?.length || 0),
      0
    );
    setCantidadEntradasMaximo(cantidadDeEntradasMaximoCalc!);
  }, [SelectedMovie.slug, SelectedMovie.asientos]);

  function addEntradas() {
    if (cantidadEntradas < cantidadDeEntradasMaximo) {
      setCantidadEntradas(cantidadEntradas + 1);
    }
  }

  function removeEntradas() {
    if (cantidadEntradas > 1) {
      setCantidadEntradas(cantidadEntradas - 1);
    }
  }

  return (
    <>
      {showSelectSeats ? (
        <SelectSeats asientos={SelectedMovie?.asientos!} cantidadEntradas={cantidadEntradas} />
      ) : (
        <div className={s.container}>
          <div>
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
          <div>
            <span>{cantidadEntradas} entrada</span>
            <div>
              <button onClick={removeEntradas}>-</button>
              <button onClick={addEntradas}>+</button>
            </div>
          </div>
          <button onClick={() => setShowSelectSeats(true)}>confirmar</button>
        </div>
      )}
    </>
  );
};

export default Ticket;
