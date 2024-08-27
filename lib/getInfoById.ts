import { CineType, TicketType } from '@/types/model';

export function obtenerInfoPorId(objeto: CineType, idBuscado: string) {
  let resultado: TicketType = {
    asientos: undefined,
    hora: '',
    sala: '',
    tipo: '',
    dia: '',
    slug: '',
    direccion: '',
    nombre: ''
  };

  for (let pelicula of objeto.peliculas) {
    for (let dia of pelicula.dias) {
      for (let funcion of dia.funciones) {
        for (let horario of funcion.horarios) {
          if (horario.id === idBuscado) {
            resultado = {
              asientos: horario.asientos,
              hora: horario.hora,
              sala: funcion.sala,
              tipo: funcion.tipo,
              dia: dia.dia,
              slug: pelicula.slug,
              direccion: objeto.direccion,
              nombre: objeto.nombre
            };
            return resultado;
          }
        }
      }
    }
  }

  return null;
}
