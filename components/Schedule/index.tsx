import { ChangeEvent } from 'react';
import { useState } from 'react';
import cs from 'classnames';
import s from './Schedule.module.css';
import { TheatreType, ScheduleType } from '@/types/model';
import { Modal } from '@/components';

const Schedule = ({ data, movieSlug }: { data: TheatreType[], movieSlug: string }) => {
  const [cine, setCine] = useState<TheatreType | undefined>();
  const [day, setDay] = useState<ScheduleType | undefined>();
  const [type, setType] = useState('')
  const [hour, setHour] = useState('')

  const [showModal, setShowModal] = useState(false)

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCine = data.find((item) => item.name === event.target.value);
    setCine(selectedCine);
    setDay(selectedCine?.schedule[0]);
  };

  const handleBuyClick = () => {
    window.location.href = `http://localhost:3000/ticketera?slug=${movieSlug}&cine=${cine}&day=${day}&type=${type}&hour=${hour}`;
  }

  return (
    <>
      <div className={s.container}>
        <select
          className={cs(s.container__button, { [s.container__button__selected]: cine })}
          value={cine?.name || ''}
          onChange={handleSelectChange}>
          {!cine && <option value="">SELECCIONA UN CINE</option>}
          {data.map((item) => (
            <option key={item.name} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
        {cine && (
          <div>
            {cine.schedule.map((item, index) => (
              <button
                className={cs(s.container__button, { [s.container__button__selected]: day ? item === day : index === 0 })}
                onClick={() => setDay(item)}
                key={item.day}>
                {item.day}
              </button>
            ))}
            {day &&
              day.theatreType.map((item) => (
                <div key={item.type}>
                  <h2>{item.type}</h2>
                  {item.hours.map((hourItem) => (
                    <button
                      onClick={() => { setType(item.type); setHour(hourItem) }}
                      className={cs(s.container__button, {
                        [s.container__button__selected]: type === item.type && hour === hourItem
                      })}
                      key={hourItem}>
                      {hourItem}
                    </button>
                  ))}
                </div>
              ))}
          </div>
        )}
        <button className={cs(s.buy_button, { [s.buy_button__disabled]: !hour })} onClick={() => setShowModal(true)}>COMPRAR</button>
      </div>
      {showModal && (
        <Modal>
          <div className={s.modal}>
            <button className={s.modal__close_btn} onClick={() => setShowModal(false)}>x</button>
            <h2>ATENCION!</h2>
            <p>
              Su seleccion es {movieSlug.replace('-', ' ').toUpperCase()}, {cine!.name}, {day?.day}, {type}, {hour}
            </p>
            <hr />
            <button className={s.buy_button} onClick={handleBuyClick}>COMPRAR</button>
          </div>
        </Modal>
      )}
    </>

  );
};

export default Schedule;
