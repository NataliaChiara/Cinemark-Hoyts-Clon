'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import s from './page.module.css';
import { Ticket } from '@/components';
import { cines } from '@/lib/dataset';
import { CineType, TicketType } from '@/types/model';

export default function Ticketera() {
  const [selectedMovie, setSelectedMovie] = useState<TicketType | undefined>();

  const searchParams = useSearchParams();
  const functionId = searchParams.get('functionId');
  const cine = searchParams.get('cine');

  function obtenerInfoPorId(objeto: CineType, idBuscado: string) {
    let resultado: TicketType = {
      hora: '',
      sala: '',
      tipo: '',
      dia: '',
      slug: '',
      direccion: '',
      nombre: ''
    };

    for (let pelicula of objeto.peliculas) {
      for (let dia of pelicula.dias) {
        for (let funcion of dia.funciones) {
          for (let horario of funcion.horarios) {
            if (horario.id === idBuscado) {
              resultado = {
                hora: horario.hora,
                sala: funcion.sala,
                tipo: funcion.tipo,
                dia: dia.dia,
                slug: pelicula.slug,
                direccion: objeto.direccion,
                nombre: objeto.nombre
              };
              return resultado;
            }
          }
        }
      }
    }

    return null;
  }

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
