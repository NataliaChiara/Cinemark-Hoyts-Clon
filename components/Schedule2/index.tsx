import { useEffect, useState } from 'react';
import s from './Schedule2.module.css';
import { DiaType, FuncionType, ScheduleType } from '@/types/model';
import { Modal } from '@/components';
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
        <button>eliminar seleccion</button>
        {info && (
          <div>
            <div className={s.container__dias}>
              {info.dias.map((item) => (
                <button key={item.dia} onClick={() => updateFunciones(item)}>{item.dia}</button>
              ))}
            </div>
            <div className={s.container__funciones}>
              {info.funciones.map((funcion) => (
                <div key={funcion.tipo}>
                  <h2>{funcion.tipo}</h2>
                  <div className={s.container__funciones}>
                    {funcion.horarios.map((item) => (
                      <button key={item.id} onClick={() => setSelectedFunctionId(item.id)}>{item.hora}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={() => setShowModal(true)}>
              COMPRAR
            </button>
          </div>
        )}
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
            <button className={s.buy_button} onClick={handleBuyClick}>
              COMPRAR
            </button>
          </div>
        </Modal>
      )}
    </>

  );
};

export default Schedule2;
