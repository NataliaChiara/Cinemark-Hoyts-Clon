// dataset

export interface PeliculaType {
  slug: string;
  titulo: string;
  sinopsis: string;
  genero: string;
  duracion: string;
  actores: string;
  director: string;
  trailer: string;
  poster: string;
  edad: string;
}

export type Fila = {
  nombre: string;
  asientos: string[];
  asientosReservados?: string[];
  asientosTotales: number;
};

export interface AsientosType {
  filas: Fila[];
}
export interface FuncionType {
  tipo: string;
  sala: string;
  horarios: {
    id: string;
    hora: string;
    asientos: AsientosType;
  }[];
}
export interface DiaType {
  dia: string;
  numero: string,
  funciones: FuncionType[];
}
export interface CineType {
  slug: string;
  nombre: string;
  direccion: string;
  peliculas: {
    slug: string;
    dias: DiaType[];
  }[];
}

// ticket
export interface TicketType {
  asientos: AsientosType | undefined;
  hora: string;
  sala: string;
  tipo: string;
  dia: string;
  slug: string;
  direccion: string;
  nombre: string;
}

// otros

export interface ScheduleType {
  cine: CineType;
  pelicula: PeliculaType;
}

export interface SelectSeatsType {
  asientos: AsientosType | undefined;
  cantidadEntradas: number;
}