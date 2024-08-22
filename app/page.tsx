'use client'
import { useState } from 'react';
import s from './page.module.css';
import { Billboard, MovieDetail } from '@/components';
import { MovieType } from '@/types/model';

export default function Home() {
  const [movie, setMovie] = useState<MovieType | undefined>()
  return (
    <main className={s.main}>
      {movie &&
        <MovieDetail movie={movie} />
      }
      <Billboard setMovie={setMovie} />
    </main>
  );
}
