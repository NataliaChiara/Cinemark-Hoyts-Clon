export interface PeliculaType {
  slug: string;
  titulo: string;
  sinopsis: string;
  genero: string;
  duracion: string;
  director: string;
  trailer: string;
  poster: string;
  edad: string;
}

export interface FuncionesType {
  tipo: string;
  sala: string;
  horarios: string[];
}

export interface CronogramaType {
  dia: string;
  funciones: FuncionesType[];
}

export interface CinesType {
  nombre: string;
  direccion: string;
  peliculas: {
    slug: string;
    cronograma: CronogramaType[];
  }[];
}
