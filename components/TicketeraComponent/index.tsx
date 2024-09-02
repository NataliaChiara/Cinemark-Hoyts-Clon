'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { SelectSeats, Ticket } from '@/components';
import { cines } from '@/lib/dataset';
import { obtenerInfoPorId } from '@/lib/getInfoById';
import s from './TicketeraComponent.module.css'
import { TicketType, SelectSeatsType } from '@/types/model';

const TicketeraComponent = () => {
  const [selectedMovie, setSelectedMovie] = useState<TicketType | undefined>();
  const [showSeats, setShowSeats] = useState(false);
  const [selectSeats, setSelectSeats] = useState<SelectSeatsType>({
    asientos: undefined,
    cantidadEntradas: 0
  });

  const searchParams = useSearchParams();
  const functionId = searchParams.get('functionId');
  const cine = searchParams.get('cine');

  useEffect(() => {
    if (functionId && cine) {
      const selectedCine = cines.find((item) => item.slug === cine);

      const infoTotal = obtenerInfoPorId(selectedCine!, functionId);
      if (infoTotal) {
        setSelectedMovie(infoTotal);
      }
    }
  }, [searchParams, cine, functionId]);

  const handleConfirm = (data: SelectSeatsType) => {
    setSelectSeats(data)
    setShowSeats(true)
  }

  return selectedMovie &&
    <div className={s.container}>
      <div className={s.container__header}>
        <h1>HOLA USERNAME</h1>
      </div>
      <div className={s.container__asientos}>
        {selectSeats.asientos && showSeats && (
          <SelectSeats setShowSeats={setShowSeats} selectedMovie={selectedMovie} asientos={selectSeats.asientos} cantidadEntradas={selectSeats.cantidadEntradas} />
        )}
      </div>
      <Ticket SelectedMovie={selectedMovie} handleConfirm={handleConfirm} showSeats={showSeats} />
    </div>
};

export default TicketeraComponent;
