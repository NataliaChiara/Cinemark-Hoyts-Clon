'use client'
import { useEffect, useState } from "react";
import s from './page.module.css';
import { useSearchParams } from 'next/navigation'
import { Ticket } from "@/components";
import { SelectedMovieType } from '@/types/model';

export default function Ticketera() {
  const [selectedMovie, setSelectedMovie] = useState<SelectedMovieType>({
    slug: '',
    cine: '',
    day: '',
    type: '',
    hour: '',
  })

  const searchParams = useSearchParams()
  const slug = searchParams.get('slug')
  const cine = searchParams.get('cine')
  const day = searchParams.get('day')
  const type = searchParams.get('type')
  const hour = searchParams.get('hour')

  useEffect(() => {
    if (slug && cine && day && type && hour) {
      const newSelectedMovie = {
        slug: slug,
        cine: cine,
        day: day,
        type: type,
        hour: hour
      }
      setSelectedMovie(newSelectedMovie)
    }
  }, [searchParams]);

  return (
    // aca deberia comprobar si la persona esta logueada
    <div className={s.ticketera}>
      <Ticket SelectedMovie={selectedMovie} />
    </div>
  );
}
