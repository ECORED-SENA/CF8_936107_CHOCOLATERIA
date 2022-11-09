export default {
  global: {
    componenteFormativo:
      'Alistamiento y elaboración de productos de chocolatería',
    descripcionCurso:
      'En el presente componente formativo se estudiará la importancia de un correcto atemperado del chocolate, el proceso de moldeado, tipos de chocolate, rellenos y sus defectos entre otros, los cuales darán la base para el desarrollo como técnico chocolatero. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/6.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Atemperado de chocolate',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Relevancia de la manteca de Cacao en la producción del chocolate',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Métodos de Elaboración: Curva de temperado y cristalización',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Moldeado',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Productos de chocolatería',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Condiciones Ambientales',
      referencia:
        'Decreto 3075 de 1991. [Ministerio de salud].      Por el cual se reglamenta parcialmente la Ley 09 de 1979 y se dictan otras disposiciones.',
      tipo: 'PDF',
      descarga: '/downloads/DECRETO_3075_DE_1997.pdf',
    },
    {
      tema: 'Productos de chocolatería',
      referencia:
        'FAO. (s.f.). Norma para el chocolate y los productos del chocolate codex stan 87-1981 adoptada en 1981. revisión: 2003. enmienda: 2016. ',
      tipo: 'PDF',
      descarga: '/downloads/CXS_087s.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Actividad agua (aW)',
      significado:
        'Escala para medir la cantidad de agua libre en los alimentos, se mide del 0 al 1.',
    },
    {
      termino: 'Codex Alimentarius',
      significado:
        'Del Latín Código alimentario, normatividad internacional para alimentos dada por la FAO.',
    },
    {
      termino: 'Cristalización del chocolate',
      significado:
        'Proceso de solidificación del chocolate previamente fundido.',
    },
    {
      termino: 'Enranciamiento',
      significado:
        'Proceso de degradación de las grasas generando olores y sabores desagradables.',
    },
    {
      termino: 'Licor de cacao',
      significado:
        'Es la pasta que se obtiene al moler las semillas de cacao previamente cosechadas, fermentadas y tostadas. ',
    },
    {
      termino: 'Manteca de cacao',
      significado:
        'Triglicérido perteneciente al componente graso del cacao, pertenece a las grasas vegetales.',
    },
    {
      termino: 'Punto de fusión',
      significado:
        'Rango de temperatura en que una sustancia cambia de estado sólido a líquido.',
    },
    {
      termino: 'Temperado',
      significado:
        'Proceso mediante el cual se busca la multiplicación de cristales beta en el chocolate.',
    },
  ],
  referencias: [
    {
      referencia:
        'FAO. (s.f.). Norma para el chocolate y los productos del chocolate Codex Stan 87-1981 Adoptada en 1981. Revisión: 2003. Enmienda: 2016.',
      link:
        'https://www.fao.org/fao-who-codexalimentarius/sh-proxy/fr/?lnk=1&url=https%253A%252F%252Fworkspace.fao.org%252Fsites%252Fcodex%252FStandards%252FCXS%2B87-1981%252FCXS_087s.pdf',
    },
    {
      referencia:
        'Lozada, V. (s.f.). Temperado de chocolate. Universidad Autónoma del estado de Hidalgo.',
      link:
        'https://www.uaeh.edu.mx/scige/boletin/icea/n4/p2.html#:~:text=El%20temperado%20de%20Chocolate%20es,amargo%2C%20con%20leche%20y%20blanco.',
    },
    {
      referencia: 'Mapel, C. (2012). Tecnología de la Bombonería.',
      link:
        'http://cadenacacaoca.info/CDOC-Deployment/documentos/tecnologia-bombones-2012.pdf',
    },
    {
      referencia: 'Mora, N. (2020). Temperado del chocolate.',
      link:
        'https://sentircacao.blogspot.com/2020/03/temperado-de-chocolate.html',
    },
    {
      referencia: 'Oviedo, D. (2012). Quetzal. Taller de Chocolatería.',
    },
    {
      referencia: 'Robledo, L. (s.f.). Moldeado. Larousse del Chocolate. ',
      link:
        'https://laroussecocina.mx/receta/moldeado/#:~:text=El%20moldeado%20consiste%20en%20darle,varias%20figuras%20huecas%20para%20decoraci%C3%B3n',
    },
    {
      referencia:
        'Sánchez, N. (s.f.). El Arte del Chocolate. Tomo 1. Editorial Presencia Ltda.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable del equipo de diseño instruccional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Pachón Meneses',
        cargo: 'Experta temática',
        centro:
          'Regional Norte de Santander. - Centro de la Industria, la Empresa y los Servicios.',
      },
      {
        nombre: 'Catherine Bedoya Mejía',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial.',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Revisor metodológico y pedagógico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Maria camila ovalle ospina',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
