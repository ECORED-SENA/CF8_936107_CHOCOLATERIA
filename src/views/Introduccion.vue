<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5  
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bg1 
      .row.justify-content-center.align-items-center.pt-5          
        .col-lg-6.my-3
          p(data-aos="fade-down").mb-0 El mundo de la gastronomía y transformación de alimentos  está en auge, las personas cada vez aprecian más el origen de los alimentos, el proceso detrás de ellos  y las nuevas generaciones ven las profesiones desde un lado más artístico en donde se puedan desempeñar y dejar su sello. El cacao ahora es entendido desde el cultivo, sus prácticas amigables con el medio ambiente y la posibilidad de que sea una herramienta de desarrollo rural reforzando el cooperativismo tanto en jóvenes como mujeres. De esta forma una barra de chocolate perteneciente a un proyecto asociativo de pequeños productores, identificada por sus métodos artesanales y por el tipo y porcentaje  de cacao en su contenido toma un gran protagonismo en el mercado como un producto apreciado por toda la historia detrás de él.          
        .col-lg-6.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/2.png', alt='')
      .row.justify-content-center.align-items-center.mb-5 
        .col-lg-7.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/3.png', alt='')                  
        .col-lg-5.my-3
          p(data-aos="fade-down").mb-0 Se ha avanzado mucho en fitogenética con el fin de obtener cosechas de granos con mejor aroma, sabor y rendimiento e igualmente se ha avanzado en el conocimiento  sobre el análisis sensorial, y la mística detrás de la cata de chocolates de este producto  ancestral. De esta forma la chocolatería  reúne la cultura, la técnica, la maestría y el arte  en un solo bocado, con la explosión de sabores y texturas agradables que solo un buen chocolate puede dar.

      p(data-aos="fade-down").mb-5 Para conocer mucho más de este interesante mundo de saberes, se invita a observar el siguiente video que presentará las temáticas relacionadas con el alistamiento y elaboración de productos de chocolatería:

      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12(data-aos="fade-left")     
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)              
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
