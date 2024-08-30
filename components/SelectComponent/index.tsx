import { ChangeEvent, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { Select } from '@/components';
import { cines, peliculas } from '@/lib/dataset';
import { CineType, PeliculaType, ScheduleType } from '@/types/model';
import s from './SelectComponent.module.css';

const SelectComponent = ({
  preSelectedMovie,
  setSchedule
}: {
  preSelectedMovie?: PeliculaType;
  setSchedule: Dispatch<SetStateAction<ScheduleType | undefined>>;
}) => {
  const [cine, setCine] = useState<CineType | undefined>();
  const [pelicula, setPelicula] = useState<PeliculaType | undefined>();
  const [lastUpdated, setLastUpdated] = useState<'preSelected' | 'manual' | null>(null);

  useEffect(() => {
    if (preSelectedMovie) {
      setLastUpdated('preSelected');
    }
  }, [preSelectedMovie]);

  useEffect(() => {
    if (cine) {
      const selectedPelicula = lastUpdated === 'preSelected' ? preSelectedMovie : pelicula;
      if (selectedPelicula) {
        setSchedule({ cine, pelicula: selectedPelicula });
      }
    }
  }, [cine, pelicula, preSelectedMovie, setSchedule, lastUpdated]);

  const handleSelectCine = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCine = cines.find((item) => item.nombre === event.target.value);
    setCine(selectedCine);
  };

  const handleSelectPelicula = (event: ChangeEvent<HTMLSelectElement>) => {
    const updatedPelicula = peliculas.find((item) => item.titulo === event.target.value);
    setPelicula(updatedPelicula);
    setLastUpdated('manual');
  };

  const currentPelicula = lastUpdated === 'preSelected' ? preSelectedMovie : pelicula;

  return (
    <div className={s.container}>
      <Select
        action={(e: ChangeEvent<HTMLSelectElement>) => handleSelectCine(e)}
        value={cine?.nombre || ''}
        isActive={cine !== undefined}>
        {!cine && <option value="">SELECCIONA UN CINE</option>}
        {cines.map((cine) => (
          <option key={cine.nombre} value={cine.nombre}>
            {cine.nombre}
          </option>
        ))}
      </Select>
      <Select
        action={(e: ChangeEvent<HTMLSelectElement>) => handleSelectPelicula(e)}
        value={currentPelicula?.titulo || ''}
        isActive={currentPelicula !== undefined}>
        {!currentPelicula && <option value="">SELECCIONA UNA PELICULA</option>}
        {peliculas.map((pelicula) => (
          <option key={pelicula.titulo} value={pelicula.titulo}>
            {pelicula.titulo}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default SelectComponent;
