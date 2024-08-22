import s from './Ticket.module.css';
import { SelectedMovieType } from '@/types/model';
import { data } from '@/lib/dataset';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const Ticket = ({ SelectedMovie }: { SelectedMovie: SelectedMovieType }) => {
  const [movieData, setMovieData] = useState({
    poster: '',
    title: '',
    age: ''
  })

  useEffect(() => {
    const movieData = data.find((movie) => movie.slug === SelectedMovie.slug)
    setMovieData({
      poster: movieData!.poster,
      title: movieData!.title,
      age: movieData!.age,
    })
  }, [])

  return (
    <div className={s.container}>
      <Image src={movieData.poster} alt={SelectedMovie.slug} width={190} height={285} />
      <div>
        <h1>{movieData.title}</h1>
        <span>{movieData.age}</span>
      </div>
    </div>
  );
};

export default Ticket;
