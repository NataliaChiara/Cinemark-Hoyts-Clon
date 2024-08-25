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

export interface InfoTotalType {
  tipo: string;
  sala: string;
  hora: string;
  dia: string;
  slug: string;
  direccion: string;
  nombre: string;
}

export interface SelectedFuncionType {
  id: string;
  tipo: string;
  sala: string;
  hora: string;
}

export interface FuncionType {
  id: string;
  tipo: string;
  sala: string;
  horarios: string[];
}

export interface DiaType {
  dia: string;
  funciones: FuncionType[];
}

export interface CineType {
  nombre: string;
  direccion: string;
  peliculas: {
    slug: string;
    dias: DiaType[];
  }[];
}
