import { useState } from 'react';

import { AsientosType } from '@/types/model';
import s from './SelectSeats.module.css';
import Button from '../Button';

const SelectSeats = ({
  asientos,
  cantidadEntradas
}: {
  asientos: AsientosType;
  cantidadEntradas: number;
}) => {
  const [asientosSeleccionados, setAsientosSeleccionados] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(true)

  function handleSelect(asiento: string) {
    setAsientosSeleccionados((prev) => {
      let newSelection;
      if (prev.includes(asiento)) {
        newSelection = prev.filter((a) => a !== asiento);
      } else if (prev.length < cantidadEntradas) {
        newSelection = [...prev, asiento];
      } else {
        newSelection = [...prev.slice(1), asiento];
      }

      setDisabled(newSelection.length !== cantidadEntradas);

      return newSelection;
    });
  }

  return (
    <div className={s.container}>
      <div className={s.container__closeBtn}>
        <Button label='<' action={() => undefined} isCloseButton></Button>
      </div>
      <h1 className={s.container__titulo}>
        <h2>PANTALLA</h2>
      </h1>
      <div className={s.container__asientos}>
        {asientos.filas.map((fila) => (
          <ul key={fila.nombre} className={s.container__asientos__fila}>
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
                  className={s.container__asientos__fila__asiento}
                  key={`${fila.nombre}-${asiento}`}>
                  {asiento}
                </li>
              );
            })}
            <li>{fila.nombre}</li>
          </ul>
        ))}
      </div>
      <Button label='CONFIRMAR' action={() => undefined} isBuyButton isDisabled={disabled}></Button>
    </div>
  );
};

export default SelectSeats;