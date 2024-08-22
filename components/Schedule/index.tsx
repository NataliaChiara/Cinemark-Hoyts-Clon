import { ChangeEvent } from 'react';
import { useState } from 'react';
import cs from 'classnames';
import s from './Schedule.module.css';
import { TheatreType, ScheduleType } from '@/types/model';

const Schedule = ({ data }: { data: TheatreType[] }) => {
  const [cine, setCine] = useState<TheatreType | undefined>();
  const [day, setDay] = useState<ScheduleType | undefined>();
  const [hour, setHour] = useState<string | undefined>();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCine = data.find((item) => item.name === event.target.value);
    setCine(selectedCine);
    setDay(selectedCine?.schedule[0]);
  };

  return (
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
              className={cs(s.container__button, { [s.container__button__selected]: index === 0 })}
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
                    onClick={() => setHour(item.type + hourItem)}
                    className={cs(s.container__button, {
                      [s.container__button__selected]: hour === item.type + hourItem
                    })}
                    key={hourItem}>
                    {hourItem}
                  </button>
                ))}
              </div>
            ))}
        </div>
      )}
      <button className={cs(s.container__buy_button, { [s.container__buy_button__abled]: hour })}>COMPRAR</button>
    </div>
  );
};

export default Schedule;
