'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import s from './page.module.css';
import { Ticket } from '@/components';
import { cines } from '@/lib/dataset';
import { TicketType } from '@/types/model';
import { obtenerInfoPorId } from '@/lib/getInfoById';

export default function Ticketera() {
  const [selectedMovie, setSelectedMovie] = useState<TicketType | undefined>();

  const searchParams = useSearchParams();
  const functionId = searchParams.get('functionId');
  const cine = searchParams.get('cine');

  useEffect(() => {
    if (functionId && cine) {
      const cineName = cine.replace('%20', ' ');
      const selectedCine = cines.find((item) => item.nombre === cineName);

      const infoTotal = obtenerInfoPorId(selectedCine!, functionId);
      if (infoTotal) {
        setSelectedMovie(infoTotal);
      }
    }
  }, [searchParams, cine, functionId]);

  return (
    // aca deberia comprobar si la persona esta logueada
    <div className={s.ticketera}>{selectedMovie && <Ticket SelectedMovie={selectedMovie} />}</div>
  );
}
