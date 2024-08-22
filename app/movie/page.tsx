'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import s from './page.module.css';
import { data } from '@/lib/dataset';
import { MovieType } from '@/types/model';
import { Schedule } from '@/components';

export default function Movie() {
  const slug = useSearchParams().get('slug');

  const [movie, setMovie] = useState<MovieType | undefined>();

  useEffect(() => {
    const movie = data.find((item) => item.slug === slug);
    if (movie) {
      setMovie(movie);
    }
  }, [slug]);

  return (
    <div className={s.container}>
      {movie !== undefined &&
        slug &&
        (() => {
          const { title, sinopsis, genre, duration, trailer, poster, age, theatre } = movie;
          return (
            <>
              <div className={s.container__top}>
                <div className={s.container__top__poster}>
                  <Image width={190} height={285} alt={slug} src={poster} />
                  <span className={s.container__top__poster__age}>{age}</span>
                  <p className={s.container__top__poster__info}>
                    Género: <strong>{genre}</strong>
                    <br />
                    Duración: <strong>{duration}</strong>
                  </p>
                </div>
                <div className={s.container__top__trailer}>
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
              <Schedule data={theatre} />
            </>
          );
        })()}
    </div>
  );
}
