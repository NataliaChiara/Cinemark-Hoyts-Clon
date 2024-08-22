export interface ScheduleType {
  day: string;
  theatreType: {
    type: string;
    hours: string[];
  }[];
}

export interface TheatreType {
  name: string;
  schedule: ScheduleType[];
}

export interface MovieType {
  slug: string;
  title: string;
  sinopsis: string;
  genre: string;
  duration: string;
  trailer: string;
  poster: string;
  age: string;
  theatre: TheatreType[];
}
export interface SelectedMovieType {
  slug: string;
  cine: string;
  day: string;
  type: string;
  hour: string;
}