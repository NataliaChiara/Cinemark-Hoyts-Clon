import { useState } from 'react';

import { AsientosType } from '@/types/model';
import s from './SelectSeats.module.css';

const SelectSeats = ({
  asientos,
  cantidadEntradas
}: {
  asientos: AsientosType;
  cantidadEntradas: number;
}) => {
  const [asientosSeleccionados, setAsientosSeleccionados] = useState<string[]>([]);

  function handleSelect(asiento: string) {
    setAsientosSeleccionados((prev) => {
      if (prev.includes(asiento)) {
        return prev.filter((a) => a !== asiento);
      } else if (prev.length < cantidadEntradas) {
        return [...prev, asiento];
      } else {
        return [...prev.slice(1), asiento];
      }
    });
  }

  return (
    <div className={s.container}>
      {asientos.filas.map((fila) => (
        <ul key={fila.nombre} className={s.container__fila}>
          <li>{fila.nombre}</li>
          {fila.asientos.map((asiento) => {
            let esAsientoReservado;
            if (fila.asientosReservados) {
              esAsientoReservado = fila.asientosReservados?.includes(asiento);
            }

            let esAsientoSeleccionado;
            if (asientosSeleccionados) {
              esAsientoSeleccionado = asientosSeleccionados.includes(`${fila.nombre}-${asiento}`);
            }

            return (
              <li
                style={{
                  backgroundColor: esAsientoReservado
                    ? 'red'
                    : esAsientoSeleccionado
                      ? 'yellow'
                      : 'white',
                  opacity: asiento === '' ? 0 : 1,
                  pointerEvents: esAsientoReservado ? 'none' : 'all'
                }}
                onClick={() => handleSelect(`${fila.nombre}-${asiento}`)}
                className={s.container__fila__asiento}
                key={`${fila.nombre}-${asiento}`}>
                {asiento}
              </li>
            );
          })}
          <li>{fila.nombre}</li>
        </ul>
      ))}
    </div>
  );
};

export default SelectSeats;
