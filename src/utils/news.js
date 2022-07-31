import blenderPrint from 'images/impresion3D.png';
import blenderPrintWebp from 'images/impresion3D.webp';
import rigging from 'images/rigging.jpeg';
import riggingWebp from 'images/rigging.webp';
import sculpting from 'images/escultura_impresion.jpeg';
import sculptingWebp from 'images/escultura_impresion.webp';
import blenderVideogames from 'images/blender_videojuegos.jpeg';
import blenderVideogamesWebp from 'images/blender_videojuegos.webp';
import camp3D from 'images/3d-camp-logo-header.png';
import camp3DWebp from 'images/3d-camp-logo-header.webp';
import libelUp from 'images/libel-up.png';
import libelUpWebp from 'images/libel-up.webp';

export const primaryNews = [
  {
    id: 0,
    category: 'Educación',
    title: 'Libel UP',
    date: 'Julio 4, 2022',
    description: 'Aprende ZBrush en 15 días online y lo mejor "GRATIS"',
    image: libelUp,
    imageWebp: libelUpWebp,
    url: 'https://libel.academy/libel-up/'
  },
  {
    id: 1,
    category: 'Educación',
    title: 'Campamento 3D',
    date: 'Octubre 2, 2022',
    description: 'Logra en 60 DÍAS lo que muchos no logran en un año.',
    image: camp3D,
    imageWebp: camp3DWebp,
    url: 'https://libel.academy/3d-camp-1/'
  }
]

export const secondaryNews = [
  {
    id: 0,
    category: 'Master',
    title: 'Blender para impresión 3D',
    date: 'Septimeber 5, 2022',
    image: blenderPrint,
    imageWebp: blenderPrintWebp,
    url: 'https://libel.academy/impresion-3d-con-blender/',
  },
  {
    id: 1,
    category: 'Master',
    title: 'Rigging para Videojuegos y Animación',
    date: 'Septimeber 5, 2022',
    image: rigging,
    imageWebp: riggingWebp,
    url: 'https://libel.academy/master-rigging/',
  },
  {
    id: 2,
    category: 'Master',
    title: 'Escultura para Impresión 3D',
    date: 'Septimeber 5, 2022',
    image: sculpting,
    imageWebp: sculptingWebp,
    url: 'https://libel.academy/master-escultura-para-impresion/',
  },
  {
    id: 3,
    category: 'Master',
    title: 'Blender para Videojuegos y Animación',
    date: 'Septimeber 5, 2022',
    image: blenderVideogames,
    imageWebp: blenderVideogamesWebp,
    url: 'https://libel.academy/master-blender/',
  }
]