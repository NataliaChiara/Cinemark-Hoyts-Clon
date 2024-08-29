import { ChangeEvent, useEffect, useState, Dispatch, SetStateAction } from 'react';
import s from './SelectComponent.module.css';
import { cines, peliculas } from '@/lib/dataset';
import { CineType, PeliculaType, ScheduleType } from '@/types/model';

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
      <select onChange={handleSelectCine} value={cine?.nombre || ''}>
        <option value="">SELECCIONA UN CINE</option>
        {cines.map((cine) => (
          <option key={cine.nombre} value={cine.nombre}>
            {cine.nombre}
          </option>
        ))}
      </select>
      <select onChange={handleSelectPelicula} value={currentPelicula?.titulo || ''}>
        <option value="">SELECCIONA UNA PELICULA</option>
        {peliculas.map((pelicula) => (
          <option key={pelicula.titulo} value={pelicula.titulo}>
            {pelicula.titulo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectComponent;
