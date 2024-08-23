'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import s from './page.module.css';
import { Ticket } from '@/components';
import { SelectedMovieType } from '@/types/model';

export default function Ticketera() {
  const [selectedMovie, setSelectedMovie] = useState<SelectedMovieType>({
    slug: '',
    cine: '',
    adress: '',
    day: '',
    type: '',
    hour: ''
  });

  const searchParams = useSearchParams();
  const slug = searchParams.get('slug');
  const cine = searchParams.get('cine');
  const adress = searchParams.get('adress');
  const day = searchParams.get('day');
  const type = searchParams.get('type');
  const hour = searchParams.get('hour');

  useEffect(() => {
    if (slug && cine && adress && day && type && hour) {
      const newSelectedMovie = {
        slug: slug,
        cine: cine,
        adress: adress,
        day: day,
        type: type,
        hour: hour
      };
      setSelectedMovie(newSelectedMovie);
    }
  }, [searchParams, slug, cine, adress, day, type, hour]);

  return (
    // aca deberia comprobar si la persona esta logueada
    <div className={s.ticketera}>
      <Ticket SelectedMovie={selectedMovie} />
    </div>
  );
}
