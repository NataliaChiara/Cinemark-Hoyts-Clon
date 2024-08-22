import { ChangeEvent } from 'react';
import { useState } from 'react';
import s from './Schedule.module.css';
import { TheatreType } from '@/types/model';

const Schedule = ({ data }: { data: TheatreType[] }) => {
  const [cine, setCine] = useState<TheatreType | undefined>();

  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCine = data.find((item) => item.name === event.target.value);
    setCine(selectedCine);
  };
  console.log(cine);
  return (
    <div className={s.container}>
      <select value={cine?.name || ''} onChange={handleSelectChange}>
        {cine === undefined && <option value="">SELECCIONA UN CINE</option>}
        {data.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>
      {cine !== undefined && (
        <div>
          {cine.schedule.map((item) => (
            <p key={item.day}>{item.day}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Schedule;
