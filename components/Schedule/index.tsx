import { ChangeEvent } from 'react';
import { useState } from 'react';
import cs from 'classnames';
import s from './Schedule.module.css';
import { CinesType, CronogramaType, FuncionesType } from '@/types/model';
import { Modal } from '@/components';
import { cines } from '@/lib/dataset';

const Schedule = ({ movieSlug }: { movieSlug: string }) => {
  const [cine, setCine] = useState<CinesType | undefined>();
  const [cronograma, setCronograma] = useState<CronogramaType[] | undefined>();
  const [day, setDay] = useState('');
  const [funciones, setFunciones] = useState<FuncionesType[] | undefined>();
  const [type, setType] = useState('');
  const [hour, setHour] = useState('');

  const [showModal, setShowModal] = useState(false);

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCine = cines.find((item) => item.nombre === event.target.value);
    setCine(selectedCine);
    const cronograma = selectedCine?.peliculas.find((item) => item.slug === movieSlug)?.cronograma;
    setCronograma(cronograma);
    setFunciones(cronograma![0].funciones);
  };

  const handlealgo = (dia: string) => {
    setDay(dia);
    const funciones = cronograma?.find((item) => item.dia === dia)?.funciones;
    setFunciones(funciones);
  };

  const handleBuyClick = () => {
    window.location.href = `http://localhost:3000/ticketera?slug=${movieSlug}&cine=${cine}&day=${day}&type=${type}&hour=${hour}`;
  };

  return (
    <>
      <div className={s.container}>
        <select
          className={cs(s.container__button, { [s.container__button__selected]: cine })}
          value={cine?.nombre || ''}
          onChange={handleSelectChange}>
          {!cine && <option value="">SELECCIONA UN CINE</option>}
          {cines.map((item) => (
            <option key={item.nombre} value={item.nombre}>
              {item.nombre}
            </option>
          ))}
        </select>

        {cronograma && (
          <div className={s.container__days}>
            {cronograma.map((item, index) => (
              <button
                className={cs(s.container__button, {
                  [s.container__button__selected]: day ? item.dia === day : index === 0
                })}
                onClick={() => handlealgo(item.dia)}
                key={item.dia}>
                {item.dia}
              </button>
            ))}
          </div>
        )}
        {funciones && (
          <div className={s.container__hours}>
            <h2 className={s.container__hours__header}>
              horarios {cine?.nombre} para {day}
            </h2>
            {funciones.map((item) => (
              <div className={s.container__hours__type} key={item.tipo}>
                <h2>{item.tipo}</h2>
                <div className={s.container__hours__type__buttons}>
                  {item.horarios.map((hora) => (
                    <button
                      onClick={() => {
                        setType(item.tipo);
                        setHour(hora);
                      }}
                      className={cs(s.container__button, {
                        [s.container__button__selected]: type === item.tipo && hour === hora
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
          className={cs(s.buy_button, { [s.buy_button__disabled]: !hour })}
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
              Su seleccion es {movieSlug.replace('-', ' ').toUpperCase()}, {cine?.nombre}, {day},{' '}
              {type}, {hour}
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
