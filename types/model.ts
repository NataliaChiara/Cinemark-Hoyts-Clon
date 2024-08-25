// dataset

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
export interface FuncionType {
  tipo: string;
  sala: string;
  horarios: {
    id: string;
    hora: string;
  }[];
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

// ticket
export interface TicketType {
  hora: string;
  sala: string;
  tipo: string;
  dia: string;
  slug: string;
  direccion: string;
  nombre: string;
}
