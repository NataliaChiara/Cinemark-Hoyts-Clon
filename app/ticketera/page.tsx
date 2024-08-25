'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import s from './page.module.css';
import { Ticket } from '@/components';
import { cines } from '@/lib/dataset';
import { CineType, InfoTotalType } from '@/types/model';

export default function Ticketera() {
  const [selectedMovie, setSelectedMovie] = useState<InfoTotalType | undefined>();

  const searchParams = useSearchParams();
  const functionId = searchParams.get('functionId');
  const cine = searchParams.get('cine');

  function obtenerInfoPorId(objeto: CineType, idBuscado: string) {
    let resultado: InfoTotalType = {
      tipo: '',
      sala: '',
      hora: '',
      dia: '',
      slug: '',
      direccion: '',
      nombre: ''
    };

    resultado.nombre = objeto.nombre;
    resultado.direccion = objeto.direccion;

    for (let pelicula of objeto.peliculas) {
      resultado.slug = pelicula.slug;

      for (let dias of pelicula.dias) {
        for (let funcion of dias.funciones) {
          if (funcion.id === idBuscado) {
            resultado = {
              ...resultado,
              ...funcion,
              dia: dias.dia
            };
            return resultado;
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
      console.log(infoTotal);
      // const newSelectedMovie = {
      //   slug: slug,
      //   cine: cine,
      //   adress: adress,
      //   day: day,
      //   type: type,
      //   hour: hour
      // };
      // setSelectedMovie(newSelectedMovie);
    }
  }, [searchParams, cine, functionId]);

  return (
    // aca deberia comprobar si la persona esta logueada
    <div className={s.ticketera}>{/* <Ticket SelectedMovie={selectedMovie} /> */}</div>
  );
}
