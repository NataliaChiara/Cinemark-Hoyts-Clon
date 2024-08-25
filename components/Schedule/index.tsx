import { ChangeEvent } from 'react';
import { useState } from 'react';
import cs from 'classnames';
import s from './Schedule.module.css';
import { DiaType, FuncionType, SelectedFuncionType } from '@/types/model';
import { Modal } from '@/components';
import { cines } from '@/lib/dataset';

const Schedule = ({ movieSlug }: { movieSlug: string }) => {
  const [cineName, setCineName] = useState('');
  const [days, setDays] = useState<DiaType[] | undefined>();
  const [funciones, setFunciones] = useState<FuncionType[] | undefined>();
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedFunction, setSelectedFunction] = useState<SelectedFuncionType | undefined>();
  const [showModal, setShowModal] = useState(false);

  const handleSelectCine = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCine = cines.find((item) => item.nombre === event.target.value);
    setCineName(selectedCine!.nombre);
    const movieDays = selectedCine?.peliculas.find((item) => item.slug === movieSlug)?.dias;
    setDays(movieDays);
    setFunciones(movieDays![0].funciones);
    setSelectedDay(movieDays![0].dia);
  };

  const handleSelectDay = (dia: string) => {
    setSelectedDay(dia);
    const funciones = days?.find((item) => item.dia === dia)?.funciones;
    setFunciones(funciones);
  };

  const handleBuyClick = () => {
    window.location.href = `http://localhost:3000/ticketera?functionId=${selectedFunction?.id}&cine=${cineName}`;
  };

  return (
    <>
      <div className={s.container}>
        <select
          className={cs(s.container__button, { [s.container__button__selected]: cineName })}
          onChange={handleSelectCine}>
          {!cineName && <option>SELECCIONA UN CINE</option>}
          {cines.map((item) => (
            <option key={item.nombre} value={item.nombre}>
              {item.nombre}
            </option>
          ))}
        </select>
        {days && (
          <div className={s.container__days}>
            {days.map((item) => (
              <button
                className={cs(s.container__button, {
                  [s.container__button__selected]: selectedDay === item.dia
                })}
                onClick={() => handleSelectDay(item.dia)}
                key={item.dia}>
                {item.dia}
              </button>
            ))}
          </div>
        )}
        {funciones && (
          <div className={s.container__hours}>
            <h2 className={s.container__hours__header}>
              horarios {cineName} para {selectedDay}
            </h2>
            {funciones.map((item) => (
              <div className={s.container__hours__type} key={item.tipo}>
                <h2>{item.tipo}</h2>
                <div className={s.container__hours__type__buttons}>
                  {item.horarios.map((hora) => (
                    <button
                      onClick={() =>
                        setSelectedFunction({
                          id: item.id,
                          tipo: item.tipo,
                          sala: item.sala,
                          hora: hora
                        })
                      }
                      className={cs(s.container__button, {
                        [s.container__button__selected]: selectedFunction?.hora === hora
                      })}
                      key={hora}>
                      {hora}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
        <button
          className={cs(s.buy_button, { [s.buy_button__disabled]: !selectedFunction })}
          onClick={() => setShowModal(true)}>
          COMPRAR
        </button>
      </div>

      {showModal && (
        <Modal>
          <div className={s.modal}>
            <button className={s.modal__close_btn} onClick={() => setShowModal(false)}>
              x
            </button>
            <h2>ATENCION!</h2>
            <p>
              Su seleccion es {movieSlug.replace('-', ' ').toUpperCase()}, {selectedFunction?.tipo},{' '}
              {selectedDay}, {selectedFunction?.hora}hs.
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

export default Schedule;
