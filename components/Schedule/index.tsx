import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Modal, MovieDetail, Button } from '@/components';
import { obtenerInfoPorId } from '@/lib/getInfoById';
import { DiaType, FuncionType, ScheduleType } from '@/types/model';
import s from './Schedule.module.css';

interface InfoState {
  dias: DiaType[];
  funciones: FuncionType[];
}

const Schedule = ({
  schedule,
  refresh
}: {
  schedule: ScheduleType;
  refresh: Dispatch<SetStateAction<ScheduleType | undefined>>;
}) => {
  const { cine, pelicula } = schedule;

  const [info, setInfo] = useState<InfoState | undefined>();
  const [selectedDay, setSelectedDay] = useState<DiaType | undefined>();

  const [selectedFunctionId, setSelectedFunctionId] = useState('');
  const [showModal, setShowModal] = useState(false);

  function setInfoFunction() {
    const dias = cine.peliculas.find((item) => item.slug === pelicula.slug)?.dias;
    const funciones = dias![0].funciones;
    if (dias && funciones) {
      setSelectedDay(dias[0]);

      setInfo({ dias, funciones });
    }
  }

  function updateFunciones(dia: DiaType) {
    const updatedFunciones = dia.funciones;
    setSelectedDay(dia);
    setInfo({ ...info!, funciones: updatedFunciones });
  }

  useEffect(() => {
    setInfoFunction();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cine, pelicula]);

  const handleBuyClick = () => {
    if (typeof window !== 'undefined') {
      const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      const baseUrl = isLocalhost
        ? 'http://localhost:3000'
        : 'https://cinemark-hoyts-clon.vercel.app';

      window.location.href = `${baseUrl}/ticketera?functionId=${selectedFunctionId}&cine=${cine.nombre}`;
    }
  };

  return (
    <>
      <div className={s.container}>
        {info && (
          <>
            <div className={s.container__dias}>
              {info.dias.map((item, index) => {
                const label = index === 0 ? 'HOY ' + item.numero : index === 1 ? 'mañana ' + item.numero : item.dia + ' ' + item.numero

                return (
                  <Button
                    key={item.dia + ' ' + item.numero}
                    action={() => updateFunciones(item)}
                    label={label}
                    isActive={item.dia === selectedDay?.dia}
                  />
                )
              })}
            </div>
            <div className={s.container__funciones}>
              <div className={s.container__funciones__closeBtnContainer}>
                <Button label="x" action={() => refresh(undefined)} isCloseButton />
              </div>
              <div className={s.container__funciones__funcion}>
                <div className={s.container__funciones__funcion__scroll}>
                  <h2 className={s.container__funciones__funcion__scroll__title}>
                    HORARIOS {cine.nombre} PARA {selectedDay?.dia} {selectedDay?.numero}
                  </h2>
                  {info.funciones.map((funcion, index) => (
                    <div
                      className={s.container__funciones__funcion__scroll__tipo}
                      key={index}>
                      <h2>{funcion.tipo}</h2>
                      <div className={s.container__funciones__funcion__scroll__tipo__horarios}>
                        {funcion.horarios.map((item) => (
                          <Button
                            key={item.id}
                            action={() => setSelectedFunctionId(item.id)}
                            label={item.hora}
                            isActive={item.id === selectedFunctionId}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  action={() => setShowModal(true)}
                  label="comprar"
                  isBuyButton
                  isDisabled={!selectedFunctionId}
                />
              </div>
              <MovieDetail movie={pelicula} />
            </div>
          </>
        )}
      </div>

      {showModal && (
        <Modal>
          <div className={s.modal}>
            <div className={s.modal__closeBtnContainer}>
              <Button isCloseButton label="x" action={() => setShowModal(false)} />
            </div>
            <h2>ATENCION!</h2>
            <p>
              Su seleccion es {pelicula.titulo} - {obtenerInfoPorId(cine, selectedFunctionId)?.tipo}
              <br />
              {selectedDay!.dia} a las {obtenerInfoPorId(cine, selectedFunctionId)?.hora}Hs.
            </p>
            <hr />
            <Button action={handleBuyClick} label="comprar" isBuyButton />
          </div>
        </Modal>
      )}
    </>
  );
};

export default Schedule;
