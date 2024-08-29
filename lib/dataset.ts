import { PeliculaType, CineType } from '@/types/model';

export const peliculas: PeliculaType[] = [
  {
    slug: 'alien-romulus',
    titulo: 'ALIEN ROMULUS',
    sinopsis:
      'Este thriller de ciencia ficción y terror vuelve a las raíces de la exitosa franquicia ALIEN: Mientras exploran en las profundidades de una estación espacial abandonada, un grupo de jóvenes colonizadores del espacio se encuentra cara a cara con la forma de vida más aterradora del universo.',
    genero: 'Terror',
    duracion: '119min',
    actores: 'Cailee Spaeny',
    director: 'Fede Alvarez',
    trailer: 'https://youtu.be/6WwPl0w-4i4',
    poster: '/images/posters/alien-romulus.jpg',
    edad: '+16'
  },
  {
    slug: 'beetlejuice-beetlejuice',
    titulo: 'BEETLEJUICE BEETLEJUICE',
    sinopsis:
      'Michael Keaton regresa en el rol principal de la más esperada secuela del premiado director Tim Burton. ¡Beetlejuice ha vuelto! Después de una tragedia familiar inesperada, tres generaciones de la familia Deetz regresan a su hogar en Winter River. Aún atormentada por Beetlejuice, la vida de Lydia da un vuelco cuando su rebelde hija adolescente, Astrid, descubre el misterioso modelo de la ciudad en el ático y el portal al Más Allá se abre accidentalmente. Con problemas en ambos reinos, es solo cuestión de tiempo hasta que alguien diga el nombre de Beetlejuice tres veces y el travieso demonio regrese para desatar su propio tipo de caos.',
    genero: 'Aventuras',
    duracion: '105min',
    actores: 'Jenna Ortega, Michael Keaton, Winona Ryder',
    director: 'Tim Burton',
    trailer: 'https://youtu.be/seR1tYQ7ycU',
    poster: '/images/posters/beetlejuice-beetlejuice.jpg',
    edad: '+13'
  },
  {
    slug: 'coraline-15-aniversario',
    titulo: 'CORALINE 15 ANIVERSARIO',
    sinopsis:
      'VERSION DOBLADA AL CASTELLANO. Celebra el 15.º aniversario de la aclamada película en stop-motion que ha fascinado a espectadores de todas las edades desde su estreno en 2009, cuando Coraline vuelva a los cines en su versión remasterizada.',
    genero: 'Animación',
    duracion: '114min',
    actores: 'Dakota Fanning, Teri Hatcher',
    director: 'Henry Selick',
    trailer: 'https://youtu.be/A450IS_d5bs',
    poster: '/images/posters/coraline-15-aniversario.jpg',
    edad: '+13'
  },
  {
    slug: '9-semanas-y-media',
    titulo: '9 SEMANAS Y MEDIA',
    sinopsis:
      'Elizabeth, una atractiva marchante de arte, entabla relación con John, un enigmático broker de Wall Street. Tras unos inicios apasionados, la pareja se embarcará, por deseo de él, en una serie de juegos eróticos cada vez más extraños que confundirán a Elizabeth, pues ella le ama pero desconoce los verdaderos sentimientos de John.',
    genero: 'Drama',
    duracion: '117min',
    actores: 'Kim Basinger, Mickey Rourke',
    director: 'Adrian Lyne',
    trailer: 'https://youtu.be/qRuMYU_DaQY',
    poster: '/images/posters/9-semanas-y-media.jpg',
    edad: '+16'
  },
  {
    slug: 'culpa-cero',
    titulo: 'CULPA CERO',
    sinopsis:
      'La vida de Berta Muller, una exitosa escritora de autoayuda, se ve sacudida cuando, en el pico máximo de su carrera, es expuesta mediáticamente por la trascendencia de un plagio. Lejos de asumir su responsabilidad, ella negará las acusaciones e intentará justificarse ridículamente, aunque esto implique sacar a la luz toda su oscuridad.',
    genero: 'Comedia',
    duracion: '110min',
    actores: 'Cecilia Roth, Valeria Bertucceli',
    director: 'Valeria Bertucceli',
    trailer: 'https://youtu.be/Y3MpPvbQHXA',
    poster: '/images/posters/culpa-cero.jpg',
    edad: '+13'
  },
  {
    slug: 'deadpool-and-wolverine',
    titulo: 'DEADPOOL & WOLVERINE',
    sinopsis: 'Una dupla destinada a salvarnos',
    genero: 'Acción',
    duracion: '127min',
    actores: 'Hugh Jackman, Ryan Reinolds',
    director: 'Shawn Levy',
    trailer: 'https://youtu.be/kZIiSxUhAuM',
    poster: '/images/posters/deadpool-and-wolverine.jpg',
    edad: '+16'
  },
  {
    slug: 'el-cuervo',
    titulo: 'EL CUERVO',
    sinopsis:
      'Eric Draven (Skarsgård) y Shelly Webster (FKA twigs) son brutalmente asesinados cuando los demonios de su oscuro pasado les alcanzan. Ante la oportunidad de sacrificarse para salvar a su verdadero amor, Eric se propone vengarse despiadadamente de sus asesinos, atravesando el mundo de los vivos y los muertos para saldar sus deudas.',
    genero: 'Terror',
    duracion: '113min',
    actores: 'Bill Skarsgård',
    director: 'Rupert Sanders',
    trailer: 'https://youtu.be/VV8aomrY3_c',
    poster: '/images/posters/el-cuervo.jpg',
    edad: '+16 (con reservas)'
  },
  {
    slug: 'el-reino-de-kensuke',
    titulo: 'EL REINO DE KENSUKE',
    sinopsis:
      'Tras emprender un viaje en barco junto a sus padres y ser arrastrado por una violenta tormenta, el joven Michael termina varado en una isla desierta luchando por sobrevivir. Pronto Michael descubrirá que no está solo y que un sinfín de aventuras le esperan en este nuevo mundo que alberga peligros y bellezas inimaginables',
    genero: 'Animación',
    duracion: '84min',
    actores: 'Cillian Murphy, Sally Hawkins',
    director: 'Kirk Hendry, Neil Boyle',
    trailer: 'https://youtu.be/SuitnN2E6Ok',
    poster: '/images/posters/el-reino-de-kensuke.jpg',
    edad: 'ATP (con leyenda)'
  },
  {
    slug: 'hombre-muerto',
    titulo: 'HOMBRE MUERTO',
    sinopsis:
      'Almeida -un viejo pobre y huraño, que vive con su joven pareja en las afueras de un pequeño pueblo paralizado tras el cierre de la mina que le daba vida-, recibe de un forastero misterioso una abultada suma de dinero a cambio de matar a alguien como condición previa a realizar una gran inversión que devolverá al lugar la prosperidad perdida. Almeida rechaza la oferta, pero el pueblo entero lo presiona para que complete “el trabajo”',
    genero: 'Drama',
    duracion: '107min',
    actores: 'Diego Velazquez, Osvaldo Laport',
    director: 'Alejandro Gruz, Andres Tambornino',
    trailer: 'https://youtu.be/eQTcpcmN2Js',
    poster: '/images/posters/hombre-muerto.jpg',
    edad: '+13'
  },
  {
    slug: 'intensamente-2',
    titulo: 'INTENSAMENTE 2',
    sinopsis:
      'La película de Disney y Pixar INTENSA-MENTE 2 vuelve a sumergirse en la mente de la flamante adolescente Riley justo cuando el cuartel general está sufriendo una repentina demolición para hacer sitio a algo totalmente inesperado: ¡nuevas emociones! Alegría, Tristeza, Furia, Temor y Desagrado, que llevan mucho tiempo realizando una operación exitosa, no están seguros de cómo sentirse cuando aparece Ansiedad. Y parece que no está sola. Dirigida por Kelsey Mann y producida por Mark Nielsen, INTENSA-MENTE 2 cuenta con una partitura compuesta por Andrea Datzman y producida por Michael Giacchino. La película estrena solo en los cines el 13 de junio de 2024.',
    genero: 'Animación',
    duracion: '96min',
    actores: 'Amy Poehler',
    director: 'Kelsey Mann',
    trailer: 'https://youtu.be/xiC2iXTXHxw',
    poster: '/images/posters/intensamente-2.jpg',
    edad: 'ATP'
  },
  {
    slug: 'i-am-still',
    titulo: 'JUNG KOOK I AM STILL',
    sinopsis:
      '“Solo sigo mi propio compás”. Jung Kook, aclamado como el "Artista Pop del Siglo XXI", irrumpió en la esc ena musical mundial con su debut como solista "Seven" (con Latto) en julio de 2023, logrando un éxito sin precedentes. Con este sencillo, Jung Kook se convirtió en el primer solista asiático en encabezar las prestigiosas lista s Billboard HOT 100, Global 200 y Global 200 Excl. US. No solo eso, sino qu e con sus éxitos "Seven", "3D" (junto a Jack Harlow) y "Standing Next to Yo u", logró posicionarse en el Top 10 del Billboard HOT 100, convirtiéndose e n el único solista de K-pop en alcanzar tal hazaña. Además, su álbum "GOLDE N" dejó una huella imborrable en la industria musical al mantenerse en el B illboard 200 durante 24 semanas consecutivas. A través de entrevistas exclusivas e imágenes inéditas entre bastidores, co mbinadas con electrizantes actuaciones en vivo, esta nueva película revela el intenso viaje de ocho meses de Jung Kook, que captura su inquebrantable dedicación y notable evolución artística. Únete a Jung Kook y descubre su increíble ascenso a la fama y los momentos más emotivos que ha vivido con ARMY en todo el mundo con "JUNG KOOK: I AM S TILL".',
    genero: 'Recital',
    duracion: '95min',
    actores: 'Jung Kook',
    director: 'Jun-Soo Park',
    trailer: 'https://youtu.be/D-vlcf-VU7o',
    poster: '/images/posters/i-am-still.jpg',
    edad: 'ATP'
  },
  {
    slug: 'la-forja',
    titulo: 'LA FORJA',
    sinopsis:
      'Un año después de terminar la preparatoria y sin planes para el futuro, Isaiah Wright es desafiado por su madre y un exitoso hombre de negocios a trazar un mejor rumbo para su vida. A través de las oraciones de su madre y de la Sra. Clara, y el discipulado bíblico de su nuevo mentor, Isaiah comienza a descubrir que el propósito de Dios para su vida es mucho más de lo que podía imaginar.',
    genero: 'Drama',
    duracion: '123min',
    actores: 'Cameron Arnett, Priscilla C. Shirer',
    director: 'Alex Kendrick',
    trailer: 'https://youtu.be/viaaCs9hw2A',
    poster: '/images/posters/la-forja.jpg',
    edad: 'AC'
  }
];

export const cines: CineType[] = [
  {
    nombre: 'HOYTS UNICENTER',
    direccion: 'PARANÁ 3745, UNICENTER SHOPPING',
    peliculas: [
      {
        slug: 'alien-romulus',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: [
              {
                tipo: '2D SUBTITULADA',
                sala: '1',
                horarios: [
                  {
                    id: 'id1',
                    hora: '15:00',
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
                    }
                  },
                  {
                    id: 'id2',
                    hora: '20:00',
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
                    }
                  }
                ]
              },
              {
                tipo: '2D CASTELLANO',
                sala: '2',
                horarios: [
                  {
                    id: 'id3',
                    hora: '15:00',
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
                    }
                  },
                  {
                    id: 'id4',
                    hora: '20:00',
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
                    }
                  }
                ]
              }
            ]
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'beetlejuice-beetlejuice',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'coraline-15-aniversario',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: '9-semanas-y-media',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'culpa-cero',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'deadpool-and-wolverine',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'el-cuervo',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'el-reino-de-kensuke',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'hombre-muerto',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'intensamente-2',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'i-am-still',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'la-forja',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      }
    ]
  },
  {
    nombre: 'HOYTS ABASTO',
    direccion: 'Av. Corrientes 3247, Abasto Shopping',
    peliculas: [
      {
        slug: 'alien-romulus',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: [
              {
                tipo: '2D SUBTITULADA',
                sala: '1',
                horarios: [
                  {
                    id: 'id1',
                    hora: '15:00',
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
                    }
                  },
                  {
                    id: 'id2',
                    hora: '20:00',
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
                    }
                  }
                ]
              },
              {
                tipo: '2D CASTELLANO',
                sala: '2',
                horarios: [
                  {
                    id: 'id3',
                    hora: '15:00',
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
                    }
                  },
                  {
                    id: 'id4',
                    hora: '20:00',
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
                    }
                  }
                ]
              }
            ]
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'beetlejuice-beetlejuice',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'coraline-15-aniversario',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: '9-semanas-y-media',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'culpa-cero',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'deadpool-and-wolverine',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'el-cuervo',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'el-reino-de-kensuke',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'hombre-muerto',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'intensamente-2',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'i-am-still',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      },
      {
        slug: 'la-forja',
        dias: [
          {
            dia: 'jueves 22/08',
            funciones: []
          },
          {
            dia: 'viernes 23/08',
            funciones: []
          },
          {
            dia: 'sabado 24/08',
            funciones: []
          },
          {
            dia: 'domingo 25/08',
            funciones: []
          },
          {
            dia: 'lunes 26/08',
            funciones: []
          },
          {
            dia: 'martes 27/08',
            funciones: []
          },
          {
            dia: 'miercoles 28/08',
            funciones: []
          }
        ]
      }
    ]
  }
];

export const slider = [
  '/images/banner/alien-romulus.jpeg',
  '/images/banner/deadpool-and-wolverine.png',
  '/images/banner/el-cuervo.png'
];
