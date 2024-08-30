'use client';
import { useState } from 'react';
import { Billboard, Schedule, SelectComponent, Slider } from '@/components';
import { ScheduleType, PeliculaType } from '@/types/model';
import s from './page.module.css';

export default function Home() {
  const [movie, setMovie] = useState<PeliculaType | undefined>();
  const [schedule, setSchedule] = useState<ScheduleType | undefined>();

  return (
    <main className={s.main}>
      <Slider />
      <SelectComponent setSchedule={setSchedule} preSelectedMovie={movie} />
      {schedule && <Schedule schedule={schedule} refresh={setSchedule} />}
      <Billboard setMovie={setMovie} />
    </main>
  );
}
