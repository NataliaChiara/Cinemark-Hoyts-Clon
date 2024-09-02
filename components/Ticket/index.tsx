import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components';
import { peliculas } from '@/lib/dataset';
import { TicketType, SelectSeatsType } from '@/types/model';
import s from './Ticket.module.css';

const Ticket = ({ SelectedMovie, handleConfirm, showSeats }: {
  SelectedMovie: TicketType, handleConfirm: (data: SelectSeatsType) => void, showSeats: boolean
}) => {
  const [movieData, setMovieData] = useState({
    poster: '',
    titulo: '',
    edad: ''
  });

  const [cantidadDeEntradasMaximo, setCantidadEntradasMaximo] = useState(0);
  const [cantidadEntradas, setCantidadEntradas] = useState({
    cantidad: 1,
    valor: 9000
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
    const cantidadDeEntradasMaximoCalc = SelectedMovie.asientos?.filas.reduce(
      (total, fila) => total + fila.asientosTotales - (fila.asientosReservados?.length || 0),
      0
    );
    setCantidadEntradasMaximo(cantidadDeEntradasMaximoCalc!);
  }, [SelectedMovie.slug, SelectedMovie.asientos]);

  function addEntradas() {
    if (cantidadEntradas.cantidad < cantidadDeEntradasMaximo) {
      setCantidadEntradas({ cantidad: cantidadEntradas.cantidad + 1, valor: (cantidadEntradas.cantidad + 1) * 9000 });
    }
  }

  function removeEntradas() {
    if (cantidadEntradas.cantidad > 1) {
      setCantidadEntradas({ cantidad: cantidadEntradas.cantidad - 1, valor: (cantidadEntradas.cantidad - 1) * 9000 });
    }
  }

  return (
    <div className={s.position}>
      <div className={s.container}>
        <div className={s.container__pelicula}>
          <Image src={movieData.poster} alt={SelectedMovie.slug} width={190} height={285} />
          <div className={s.container__pelicula__info}>
            <h1 className={s.container__pelicula__info__titulo}>{movieData.titulo}</h1>
            <span className={s.container__pelicula__info__edad}>{movieData.edad}</span>
            <p className={s.container__pelicula__info__description}>
              {SelectedMovie.tipo}
              <br />
              <strong>{SelectedMovie.nombre}
                <br />
                {'SALA ' + SelectedMovie.sala}</strong>
              <br />
              {SelectedMovie.direccion}
              <br />
              <strong>{SelectedMovie.dia + ' ' + SelectedMovie.hora}</strong>
            </p>
          </div>
        </div>
        <div className={s.container__entrada}>
          <div className={s.container__entrada__info}>
            <span>{cantidadEntradas.cantidad} ENTRADA - ${cantidadEntradas.valor}</span>
            <div className={s.container__entrada__info__botones}>
              <Button action={removeEntradas} label='-' isCloseButton></Button>
              <Button action={addEntradas} label='+' isCloseButton></Button>
            </div>
          </div>
          <Button action={() => handleConfirm({
            asientos: SelectedMovie?.asientos!,
            cantidadEntradas: cantidadEntradas.cantidad
          })} isBuyButton label='CONFIRMAR' isDisabled={showSeats}></Button>
        </div>
      </div>
    </div >
  );
};

export default Ticket;
