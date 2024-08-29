import { useEffect, useState } from 'react';
import s from './Schedule2.module.css';
import { DiaType, FuncionType, ScheduleType } from '@/types/model';
import { Modal, MovieDetail, Button } from '@/components';
import { obtenerInfoPorId } from '@/lib/getInfoById';

interface InfoState {
  dias: DiaType[];
  funciones: FuncionType[];
}

const Schedule2 = ({ schedule }: {
  schedule: ScheduleType
}) => {
  const { cine, pelicula } = schedule;

  const [info, setInfo] = useState<InfoState | undefined>();
  const [selectedFunctionId, setSelectedFunctionId] = useState('');
  const [showModal, setShowModal] = useState(false);

  function setInfoFunction() {
    const dias = cine.peliculas.find((item) => item.slug === pelicula.slug)?.dias;
    const funciones = dias![0].funciones;
    if (dias && funciones) {
      setInfo({ dias, funciones });
    }
  }

  function updateFunciones(dia: DiaType) {
    const updatedFunciones = dia.funciones;
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
            <Button label='x' action={undefined} isCloseButton />
          </div>
          {info && (
            <div>
              <div className={s.container__schedule__dias}>
                {info.dias.map((item) => (
                  <Button key={item.dia} action={() => updateFunciones(item)} label={item.dia} />
                ))}
              </div>
              <div className={s.container__schedule__funciones}>
                {info.funciones.map((funcion) => (
                  <div key={funcion.tipo}>
                    <h2>{funcion.tipo}</h2>
                    <div className={s.container__schedule__funciones}>
                      {funcion.horarios.map((item) => (
                        <Button key={item.id} action={() => setSelectedFunctionId(item.id)} label={item.hora} />
                      ))}
                    </div>
                  </div>
                ))}
                <Button action={() => setShowModal(true)} label='comprar' isBuyButton />
              </div>
            </div>
          )}
        </div>
        {/* <MovieDetail movie={pelicula} /> */}
      </div>

      {showModal && (
        <Modal>
          <div className={s.modal}>
            <button className={s.modal__close_btn} onClick={() => setShowModal(false)}>
              x
            </button>
            <h2>ATENCION!</h2>
            <p>
              Su seleccion es {pelicula.titulo} - {obtenerInfoPorId(cine, selectedFunctionId)?.tipo}
              <br />
              {obtenerInfoPorId(cine, selectedFunctionId)?.dia}  {obtenerInfoPorId(cine, selectedFunctionId)?.hora}Hs.
            </p>
            <hr />
            <Button action={handleBuyClick} label='comprar' isBuyButton />
          </div>
        </Modal>
      )}
    </>

  );
};

export default Schedule2;
