'use client';
import { useState } from 'react';
import s from './page.module.css';
import { Billboard, MovieDetail } from '@/components';
import { PeliculaType } from '@/types/model';

export default function Home() {
  const [movie, setMovie] = useState<PeliculaType | undefined>();
  return (
    <main className={s.main}>
      {movie && <MovieDetail movie={movie} />}
      <Billboard setMovie={setMovie} />
    </main>
  );
}
