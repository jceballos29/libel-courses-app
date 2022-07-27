/** @format */

export const categories = [
  // {
  //   _id: 1,
  //   name: 'Software Development',
  //   courses: 200,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/home-2/categories/1.png'
  // },
  // {
  //   _id: 2,
  //   name: 'Web Development',
  //   courses: 20,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/home-2/categories/2.png'
  // },
  // {
  //   _id: 3,
  //   name: 'Mobile Development',
  //   courses: 10,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/home-2/categories/3.png'
  // },
  {
    _id: 4,
    name: 'Blender',
    courses: 100,
    image:
      'https://creativelayers.net/themes/educrat-html/img/home-2/categories/4.png',
  },
  // {
  //   _id: 5,
  //   name: 'Marketing',
  //   courses: 50,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/home-2/categories/5.png'
  // },
  // {
  //   _id: 6,
  //   name: 'Photography',
  //   courses: 30,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/home-2/categories/6.png'
  // },
  // {
  //   _id: 7,
  //   name: 'Writing',
  //   courses: 80,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/home-2/categories/7.png'
  // },
  // {
  //   _id: 8,
  //   name: 'Business',
  //   courses: 60,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/home-2/categories/1.png'
  // }
];

export const courses = [
  {
    _id: 0,
    image:
      'https://cdna.artstation.com/p/assets/images/images/039/550/388/large/ricardo-diaz-final-diddy-kong-logo.jpg?1626231644',
    name: 'Blender para principiantes - Diddy Monkey',
    slug: 'blender-para-principiantes-diddy-monkey',
    discord: {
      general: 'https://discord.gg/r6UHQEtGrQ',
      private: null,
    },
    rating: 4.5,
    reviews: 1020,
    certificate: true,
    access: 12,
    level: 'Principiante',
    price: 39,
    featured: true,
    certificatedTerms:
      'https://drive.google.com/file/d/1pNyW6hBjl0kwhpha0UgM0DLPqCzOYXvs/view',
    lessons: [
      {
        _id: 0,
        number: 1,
        title: 'Introducción',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis metus vel velit laoreet blandit. Nunc ornare enim nec lectus cursus convallis. Nullam eget pharetra quam Proin eu nisl quis eros maximus pellentesque nec non sem. Cras nec tempus mi. Mauris commodo, ante vel feugiat commodo, magna orci ornare risus, at commodo mauris metus et felis.',
        duration: {
          hours: 0,
          minutes: 57,
          seconds: 26,
        },
        video: 'https://player.vimeo.com/video/683921366',
      },
      {
        _id: 1,
        number: 2,
        title: 'Blender - Parte 1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis metus vel velit laoreet blandit. Nunc ornare enim nec lectus cursus convallis. Nullam eget pharetra quam Proin eu nisl quis eros maximus pellentesque nec non sem. Cras nec tempus mi. Mauris commodo, ante vel feugiat commodo, magna orci ornare risus, at commodo mauris metus et felis.',
        duration: {
          hours: 2,
          minutes: 15,
          seconds: 42,
        },
        video: 'https://player.vimeo.com/video/683923972',
      },
      {
        _id: 2,
        number: 3,
        title: 'Blender - Parte 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis metus vel velit laoreet blandit. Nunc ornare enim nec lectus cursus convallis. Nullam eget pharetra quam Proin eu nisl quis eros maximus pellentesque nec non sem. Cras nec tempus mi. Mauris commodo, ante vel feugiat commodo, magna orci ornare risus, at commodo mauris metus et felis.',
        duration: {
          hours: 1,
          minutes: 22,
          seconds: 23,
        },
        video: 'https://player.vimeo.com/video/683921757',
      },
    ],
    materials: Array.from({ length: 7 }),
    feedbacks: [
      {
        _id: 0,
        number: 1,
        date: '2020-01-01',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis metus vel velit laoreet blandit. Nunc ornare enim nec lectus cursus convallis. Nullam eget pharetra quam Proin eu nisl quis eros maximus pellentesque nec non sem. Cras nec tempus mi. Mauris commodo, ante vel feugiat commodo, magna orci ornare risus, at commodo mauris metus et felis.',
        duration: {
          hours: 0,
          minutes: 57,
          seconds: 26,
        },
        video: 'https://player.vimeo.com/video/683926573',
      },
    ],
    duration: {
      hours: 3,
      minutes: 30,
    },
    instructor: {
      name: 'Ricardo Díaz',
      title: 'Especialita en Blender',
      avatar:
        'https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png',
      rating: 4.2,
      students: 800,
      courses: 12,
    },
    categories: [4],
    enrolledStudents: Array.from({ length: 120 }),
    updatedAt: '2022-07-14',
    createdAt: '2022-07-12',
    abstract:
      'Vive una gran experiencia y aprende desde cero a crear fantásticos personajes en Blender. No necesitas conocimientos previos, lo ideal para comenzar con Blender.',
    description:
      'Crea personajes en Blender desde la escultura hasta la pintura. Afrontaremos una situación típica en la industria, partiendo de un concepto 2D y lo convertiremos en una escultura 3D.',
    video:
      'https://www.youtube.com/watch?v=qyG2LYBv_Ww&t=5s&ab_channel=LIBELACADEMY',
    requirements: [
      'Computador de gama media Core i7 (o similares) de 7ma generación con 16 de Ram.',
      'Tarjeta de vídeo gt 1030 o gtx 1050.',
      'Mouse o tabla digitalizadora.',
    ],
    whatYouLearn: [
      'Lleváremos a 3D un personaje usando únicamente Blender. ',
    ],
    audience: [
      'Personas de 18 años en adelante.',
      'Sentir afinidad por el diseño 3D o las artes gráficas en general.',
      'Personas sin conocimientos en Blender.',
    ],
  },
  // {
  //   _id: 1,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/coursesCards/2.png',
  //   name: 'Complete Python Bootcamp From Zero to Hero in Python',
  //   slug: 'complete-python-bootcamp-from-zero-to-hero-in-python',
  //   rating: 4.0,
  //   reviews: 1000,
  //   level: 'Principiante',
  //   price: 79,
  //   lessons: 6,
  //   duration: {
  //     hours: 3,
  //     minutes: 56,
  //   },
  //   instructor: {
  //     name: 'John Doe',
  //     avatar: 'https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png'
  //   },
  //   categories: [ 1 ],
  //   enrolledStudents: Array.from({ length: 120 }),
  //   updatedAt: '2022-07-14',
  //   createdAt: '2020-07-12',
  // },
  // {
  //   _id: 2,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/coursesCards/3.png',
  //   name: 'Complete Node.js Developer Course',
  //   slug: 'complete-nodejs-developer-course',
  //   rating: 4.5,
  //   reviews: 100,
  //   level: 'Intermedio',
  //   price: 79,
  //   lessons: 10,
  //   duration: {
  //     hours: 4,
  //     minutes: 30,
  //   },
  //   instructor: {
  //     name: 'John Doe',
  //     avatar: 'https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png'
  //   },
  //   categories: [ 1, 2 ],
  //   enrolledStudents: Array.from({ length: 120 }),
  //   updatedAt: '2020-01-01',
  // },
  // {
  //   _id: 3,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/coursesCards/4.png',
  //   name: 'Complete React Bootcamp From Scratch',
  //   slug: 'complete-react-bootcamp-from-scratch',
  //   rating: 4.5,
  //   reviews: 1020,
  //   level: 'Intermedio',
  //   price: 79,
  //   lessons: 50,
  //   duration: {
  //     hours: 8,
  //     minutes: 56,
  //   },
  //   instructor: {
  //     name: 'John Doe',
  //     avatar: 'https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png'
  //   },
  //   categories: [ 1, 2 ],
  //   enrolledStudents: Array.from({ length: 120 }),
  //   updatedAt: '2020-01-01',
  // },
  // {
  //   _id: 4,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/coursesCards/5.png',
  //   name: 'Photography Masterclass: A Complete Guide to Photography',
  //   slug: 'photography-masterclass-a-complete-guide-to-photography',
  //   rating: 3.5,
  //   reviews: 20,
  //   level: 'Intermedio',
  //   price: 79,
  //   lessons: 6,
  //   duration: {
  //     hours: 3,
  //     minutes: 56,
  //   },
  //   instructor: {
  //     name: 'John Doe',
  //     avatar: 'https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png'
  //   },
  //   categories: [ 6 ],
  //   enrolledStudents: Array.from({ length: 120 }),
  //   updatedAt: '2020-01-01',
  // },
  // {
  //   _id: 5,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/coursesCards/6.png',
  //   name: 'Instagram Marketing 2021: Complete Guide To Instagram Growth',
  //   slug: 'instagram-marketing-2021-complete-guide-to-instagram-growth',
  //   rating: 3.5,
  //   reviews: 1020,
  //   level: 'Intermedio',
  //   price: 79,
  //   lessons: 6,
  //   duration: {
  //     hours: 3,
  //     minutes: 56,
  //   },
  //   instructor: {
  //     name: 'John Doe',
  //     avatar: 'https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png'
  //   },
  //   categories: [ 5 ],
  //   enrolledStudents: Array.from({ length: 120 }),
  //   updatedAt: '2020-01-01',
  // },
  // {
  //   _id: 6,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/coursesCards/7.png',
  //   name: 'Complete Blender Creator: Learn 3D Modelling for Beginners',
  //   slug: 'complete-blender-creator-learn-3d-modelling-for-beginners',
  //   rating: 2.5,
  //   reviews: 1,
  //   level: 'Avanzado',
  //   price: 79,
  //   lessons: 6,
  //   duration: {
  //     hours: 3,
  //     minutes: 56,
  //   },
  //   instructor: {
  //     name: 'John Doe',
  //     avatar: 'https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png'
  //   },
  //   categories: [ 4 ],
  //   enrolledStudents: Array.from({ length: 120 }),
  //   updatedAt: '2020-01-01',
  // },
  // {
  //   _id: 7,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/coursesCards/8.png',
  //   name: 'Complete Unity 3D Game Development',
  //   slug: 'complete-unity-3d-game-development',
  //   rating: 4.5,
  //   reviews: 1020,
  //   level: 'Avanzado',
  //   price: 79,
  //   lessons: 6,
  //   duration: {
  //     hours: 3,
  //     minutes: 56,
  //   },
  //   instructor: {
  //     name: 'John Doe',
  //     avatar: 'https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png'
  //   },
  //   categories: [ 3 ],
  //   enrolledStudents: Array.from({ length: 120 }),
  // },
  // {
  //   _id: 8,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/coursesCards/9.png',
  //   name: 'Photoshop Masterclass: A Complete Gu_ide to Photoshop',
  //   slug: 'photoshop-masterclass-a-complete-gu_ide-to-photoshop',
  //   rating: 3.5,
  //   reviews: 1020,
  //   level: 'Avanzado',
  //   price: 79,
  //   lessons: 6,
  //   duration: {
  //     hours: 3,
  //     minutes: 56,
  //   },
  //   instructor: {
  //     name: 'John Doe',
  //     avatar: 'https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png'
  //   },
  //   categories: [ 4 ],
  //   enrolledStudents: Array.from({ length: 120 }),
  //   updatedAt: '2020-01-01',
  // },
  // {
  //   _id: 9,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/coursesCards/10.png',
  //   name: 'Complete HTML & CSS Course',
  //   slug: 'complete-html-css-course',
  //   rating: 4.5,
  //   reviews: 1020,
  //   level: 'Principiante',
  //   price: 79,
  //   lessons: 40,
  //   duration: {
  //     hours: 24,
  //     minutes: 56,
  //   },
  //   instructor: {
  //     name: 'John Doe',
  //     avatar: 'https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png'
  //   },
  //   categories: [ 1,2 ],
  //   enrolledStudents: Array.from({ length: 120 }),
  //   updatedAt: '2020-01-01',
  // },
  // {
  //   _id: 10,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/coursesCards/11.png',
  //   name: 'Complete JavaScript Course',
  //   slug: 'complete-javascript-course',
  //   rating: 4.5,
  //   reviews: 1020,
  //   level: 'Principiante',
  //   price: 79,
  //   lessons: 30,
  //   duration: {
  //     hours: 12,
  //     minutes: 24,
  //   },
  //   instructor: {
  //     name: 'John Doe',
  //     avatar: 'https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png'
  //   },
  //   categories: [ 1, 2 ],
  //   enrolledStudents: Array.from({ length: 120 }),
  //   updatedAt: '2020-01-01',
  // },
  // {
  //   _id: 11,
  //   image: 'https://creativelayers.net/themes/educrat-html/img/coursesCards/12.png',
  //   name: 'Complete PHP Course',
  //   slug: 'complete-php-course',
  //   rating: 1.5,
  //   reviews: 50,
  //   level: 'Principiante',
  //   price: 79,
  //   lessons: 30,
  //   duration: {
  //       hours: 12,
  //     minutes: 24,
  //   },
  //   instructor: {
  //     name: 'John Doe',
  //     avatar: 'https://creativelayers.net/themes/educrat-html/img/general/avatar-1.png'
  //   },
  //   categories: [ 1, 2 ],
  //   enrolledStudents: Array.from({ length: 120 }),
  //   updatedAt: '2020-01-01',
  // },
];
