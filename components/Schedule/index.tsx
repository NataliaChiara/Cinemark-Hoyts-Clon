import { useEffect, useState } from 'react';
import s from './Schedule.module.css';
import { DiaType, FuncionType, ScheduleType } from '@/types/model';
import { Modal, MovieDetail, Button } from '@/components';
import { obtenerInfoPorId } from '@/lib/getInfoById';

interface InfoState {
  dias: DiaType[];
  funciones: FuncionType[];
}

const Schedule = ({ schedule }: {
  schedule: ScheduleType
}) => {
  const { cine, pelicula } = schedule;

  const [info, setInfo] = useState<InfoState | undefined>();
  const [selectedDay, setSelectedDay] = useState<DiaType | undefined>()

  const [selectedFunctionId, setSelectedFunctionId] = useState('');
  const [showModal, setShowModal] = useState(false);

  function setInfoFunction() {
    const dias = cine.peliculas.find((item) => item.slug === pelicula.slug)?.dias;
    const funciones = dias![0].funciones;
    if (dias && funciones) {
      setSelectedDay(dias[0])

      setInfo({ dias, funciones });
    }
  }

  function updateFunciones(dia: DiaType) {
    const updatedFunciones = dia.funciones;
    setSelectedDay(dia)
    setInfo({ ...info!, funciones: updatedFunciones });
  }

  useEffect(() => {
    setInfoFunction();
  }, [cine, pelicula]);

  const handleBuyClick = () => {
    window.location.href = `http://localhost:3000/ticketera?functionId=${selectedFunctionId}&cine=${cine.nombre}`;
  };

  return (
    <>
      <div className={s.container}>
        <div className={s.container__schedule}>
          <div className={s.container__schedule__closeBtnContainer}>
            <Button label='x' action={() => undefined} isCloseButton />
          </div>
          {info && (
            <div>
              <div className={s.container__schedule__dias}>
                {info.dias.map((item) => (
                  <Button key={item.dia} action={() => updateFunciones(item)} label={item.dia} isActive={item.dia === selectedDay?.dia} />
                ))}
              </div>
              <div className={s.container__schedule__funciones}>
                {info.funciones.map((funcion) => (
                  <div key={funcion.tipo}>
                    <h2>{funcion.tipo}</h2>
                    <div className={s.container__schedule__funciones}>
                      {funcion.horarios.map((item) => (
                        <Button key={item.id} action={() => setSelectedFunctionId(item.id)} label={item.hora} isActive={item.id === selectedFunctionId} />
                      ))}
                    </div>
                  </div>
                ))}
                <Button action={() => setShowModal(true)} label='comprar' isBuyButton isDisabled={!selectedFunctionId} />
              </div>
            </div>
          )}
        </div>
        {/* <MovieDetail movie={pelicula} /> */}
      </div>

      {showModal && (
        <Modal>
          <div className={s.modal}>
            <div className={s.modal__closeBtnContainer}>
              <Button isCloseButton label='x' action={() => setShowModal(false)} />

            </div>
            <h2>ATENCION!</h2>
            <p>
              Su seleccion es {pelicula.titulo} - {obtenerInfoPorId(cine, selectedFunctionId)?.tipo}
              <br />
              {selectedDay!.dia}  {obtenerInfoPorId(cine, selectedFunctionId)?.hora}Hs.
            </p>
            <hr />
            <Button action={handleBuyClick} label='comprar' isBuyButton />
          </div>
        </Modal>
      )}
    </>

  );
};

export default Schedule;
