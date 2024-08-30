'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Ticket } from '@/components';
import { cines } from '@/lib/dataset';
import { obtenerInfoPorId } from '@/lib/getInfoById';
import { TicketType } from '@/types/model';

const TicketeraContent = () => {
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

  return selectedMovie ? <Ticket SelectedMovie={selectedMovie} /> : null;
};

export default TicketeraContent;
