import { PeliculaType, CineType } from '@/types/model';

export const peliculas: PeliculaType[] = [
  {
    slug: 'alien-romulus',
    titulo: 'ALIEN ROMULUS',
    sinopsis:
      'Este thriller de ciencia ficción y terror vuelve a las raíces de la exitosa franquicia ALIEN: Mientras exploran en las profundidades de una estación espacial abandonada, un grupo de jóvenes colonizadores del espacio se encuentra cara a cara con la forma de vida más aterradora del universo.',
    genero: 'Terror',
    duracion: '119min',
    director: '',
    trailer: 'https://youtu.be/6WwPl0w-4i4',
    poster:
      'https://static.cinemarkhoyts.com.ar/Images/Posters/a1aa8f90b99b84e4cbdc720aa879f648.jpg?v=00002407',
    edad: '+16'
  },
  {
    slug: 'beetlejuice-beetlejuice',
    titulo: 'BEETLEJUICE BEETLEJUICE',
    sinopsis:
      'Michael Keaton regresa en el rol principal de la más esperada secuela del premiado director Tim Burton. ¡Beetlejuice ha vuelto! Después de una tragedia familiar inesperada, tres generaciones de la familia Deetz regresan a su hogar en Winter River. Aún atormentada por Beetlejuice, la vida de Lydia da un vuelco cuando su rebelde hija adolescente, Astrid, descubre el misterioso modelo de la ciudad en el ático y el portal al Más Allá se abre accidentalmente. Con problemas en ambos reinos, es solo cuestión de tiempo hasta que alguien diga el nombre de Beetlejuice tres veces y el travieso demonio regrese para desatar su propio tipo de caos.',
    genero: 'Aventuras',
    duracion: '105min',
    director: '',
    trailer: 'https://youtu.be/seR1tYQ7ycU',
    poster:
      'https://static.cinemarkhoyts.com.ar/Images/Posters/34a8b45f640b3b70de387110f518e59e.jpg?v=00002407',
    edad: '+13'
  },
  {
    slug: 'coraline-15-aniversario',
    titulo: 'CORALINE 15 ANIVERSARIO',
    sinopsis:
      'VERSION DOBLADA AL CASTELLANO. Celebra el 15.º aniversario de la aclamada película en stop-motion que ha fascinado a espectadores de todas las edades desde su estreno en 2009, cuando Coraline vuelva a los cines en su versión remasterizada.',
    genero: 'Animación',
    duracion: '114min',
    director: '',
    trailer: 'https://youtu.be/A450IS_d5bs',
    poster:
      'https://static.cinemarkhoyts.com.ar/Images/Posters/2a1d9b907f9145c0d0a36a6a07c9fe7f.jpg?v=00002407',
    edad: '+13'
  }
];

export const cines: CineType[] = [
  {
    nombre: 'HOYTS UNICENTER',
    direccion: 'Parana 3247',
    peliculas: [
      {
        slug: 'alien-romulus',
        dias: [
          {
            dia: '22/08',
            funciones: [
              {
                tipo: '2D SUBTITULADA',
                sala: '1',
                horarios: [
                  {
                    id: 'id1',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '15:00'
                  },
                  {
                    id: 'id2',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '20:00'
                  }
                ]
              },
              {
                tipo: '2D CASTELLANO',
                sala: '2',
                horarios: [
                  {
                    id: 'id3',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '16:00'
                  },
                  {
                    id: 'id4',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '21:00'
                  }
                ]
              }
            ]
          },
          {
            dia: '23/08',
            funciones: [
              {
                tipo: '2D SUBTITULADA',
                sala: '1',
                horarios: [
                  {
                    id: 'id5',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '15:00'
                  },
                  {
                    id: 'id6',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '20:00'
                  }
                ]
              },
              {
                tipo: '2D CASTELLANO',
                sala: '2',
                horarios: [
                  {
                    id: 'id7',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '16:00'
                  },
                  {
                    id: 'id8',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '21:00'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    nombre: 'HOYTS ABASTO',
    direccion: 'Av corrientes 1258',
    peliculas: [
      {
        slug: 'alien-romulus',
        dias: [
          {
            dia: '22/08',
            funciones: [
              {
                tipo: '2D SUBTITULADA',
                sala: '1',
                horarios: [
                  {
                    id: 'id9',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '15:00'
                  },
                  {
                    id: 'id10',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '20:00'
                  }
                ]
              },
              {
                tipo: '2D CASTELLANO',
                sala: '2',
                horarios: [
                  {
                    id: 'id11',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '16:00'
                  },
                  {
                    id: 'id12',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '21:00'
                  }
                ]
              }
            ]
          },
          {
            dia: '23/08',
            funciones: [
              {
                tipo: '2D SUBTITULADA',
                sala: '1',
                horarios: [
                  {
                    id: 'id13',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '15:00'
                  },
                  {
                    id: 'id14',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '20:00'
                  }
                ]
              },
              {
                tipo: '2D CASTELLANO',
                sala: '2',
                horarios: [
                  {
                    id: 'id15',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '16:00'
                  },
                  {
                    id: 'id16',
                    asientos: {
                      filas: [
                        {
                          asientosReservados: [],
                          nombre: 'A',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'B',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'C',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'D',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: 'E',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: '',
                          asientos: [''],
                          asientosTotales: 0
                        },
                        {
                          asientosReservados: [],
                          nombre: 'F',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'G',
                          asientos: ['', '5', '4', '', '', '', '', '3', '2', '1', '', ''],
                          asientosTotales: 5
                        },
                        {
                          asientosReservados: [],
                          nombre: 'H',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: ['8', '9'],
                          nombre: 'I',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'J',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'K',
                          asientos: ['', '9', '8', '7', '6', '5', '4', '3', '2', '1', '', ''],
                          asientosTotales: 9
                        },
                        {
                          asientosReservados: [],
                          nombre: 'L',
                          asientos: ['12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'],
                          asientosTotales: 12
                        }
                      ]
                    },
                    hora: '21:00'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
