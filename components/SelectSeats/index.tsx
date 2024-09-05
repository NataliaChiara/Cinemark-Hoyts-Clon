import { useState, Dispatch, SetStateAction } from "react";

import { AsientosType, TicketType } from "@/types/model";
import s from "./SelectSeats.module.css";
import { Button, Modal } from "@/components";

const SelectSeats = ({
  asientos,
  cantidadEntradas,
  selectedMovie,
  setShowSeats,
}: {
  asientos: AsientosType;
  cantidadEntradas: number;
  selectedMovie: TicketType;
  setShowSeats: Dispatch<SetStateAction<boolean>>;
}) => {
  const [asientosSeleccionados, setAsientosSeleccionados] = useState<string[]>(
    [],
  );
  const [disabled, setDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);

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

  const currentTimestamp = Math.floor(Date.now() / 1000);

  return (
    <>
      <div className={s.container}>
        <div className={s.container__closeBtn}>
          <Button
            label="<"
            action={() => setShowSeats(false)}
            isCloseButton
          ></Button>
        </div>
        <div className={s.container__titulo}>
          <h2>PANTALLA</h2>
        </div>
        <div className={s.container__asientos}>
          {asientos.filas.map((fila, index) => (
            <ul key={index} className={s.container__asientos__fila}>
              <li>{fila.nombre}</li>
              {fila.asientos.map((asiento, index) => {
                let esAsientoReservado;
                if (fila.asientosReservados) {
                  esAsientoReservado =
                    fila.asientosReservados?.includes(asiento);
                }
                let esAsientoSeleccionado;
                if (asientosSeleccionados) {
                  esAsientoSeleccionado = asientosSeleccionados.includes(
                    `${fila.nombre}-${asiento}`,
                  );
                }
                return (
                  <li
                    style={{
                      backgroundColor: esAsientoReservado
                        ? "red"
                        : esAsientoSeleccionado
                          ? "yellow"
                          : "white",
                      opacity: asiento === "" ? 0 : 1,
                      pointerEvents: esAsientoReservado ? "none" : "all",
                    }}
                    onClick={() => handleSelect(`${fila.nombre}-${asiento}`)}
                    className={s.container__asientos__fila__asiento}
                    key={`${fila.nombre}-${index + 1}`}
                  >
                    {asiento}
                  </li>
                );
              })}
              <li>{fila.nombre}</li>
            </ul>
          ))}
        </div>
        <Button
          label="CONFIRMAR"
          action={() => setShowModal(true)}
          isBuyButton
          isDisabled={disabled}
        ></Button>
      </div>
      {showModal && (
        <Modal>
          <div className={s.modal}>
            <div className={s.modal__closeBtnContainer}>
              <Button
                isCloseButton
                label="x"
                action={() => setShowModal(false)}
              />
            </div>
            <h2>ATENCION!</h2>
            <p>
              Su seleccion es {selectedMovie.nombre} - {selectedMovie.tipo}
              <br />
              {selectedMovie.dia} a las {selectedMovie.hora}Hs.
              <br />
              Asientos: {asientosSeleccionados.join(", ")}
            </p>
            <hr />
            <h2>
              codigo: <strong>{currentTimestamp}</strong>
            </h2>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SelectSeats;
