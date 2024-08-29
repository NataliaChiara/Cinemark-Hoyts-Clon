'use client';
import { useState } from 'react';
import s from './page.module.css';
import { Billboard, Schedule, SelectComponent, Slider } from '@/components';
import { ScheduleType, PeliculaType } from '@/types/model';

export default function Home() {
  const [movie, setMovie] = useState<PeliculaType | undefined>();
  const [schedule, setSchedule] = useState<ScheduleType | undefined>();

  return (
    <main className={s.main}>
      <Slider />
      <SelectComponent setSchedule={setSchedule} preSelectedMovie={movie} />
      {schedule && <Schedule schedule={schedule} /*refresh={refresh}*/ />}
      <Billboard setMovie={setMovie} />
    </main>
  );
}
