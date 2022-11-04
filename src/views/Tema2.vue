<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.bloque-fondo2
    .titulo-principal.color-acento-contenido.mb-0(data-aos="zoom-in-left")
      .titulo-principal__numero
        span 2
      h1 Productos de chocolatería
    .bg10 
      .row.justify-content-center.align-items-start.pt-5 
        .col-lg-5.my-3
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/61.png', alt='')               
        .col-lg-7.my-3
          p(data-aos="fade-down") Para la elaboración o transformación de alimentos se debe considerar el marco normativo legal que busca amparar las buenas prácticas garantizando la inocuidad de los productos, con el fin de que estos sean confiables a los consumidores y por lo tanto a la chocolatería. Para su fabricación se deben considerar aspectos de higiene y calidad tanto de la planta o lugar de procesamiento, como las normas de higiene para el personal que manipula los alimentos e insumos que se utilizan en los procesos de manufactura.               
          p(data-aos="fade-down") Según el Codex alimentarius de 1981 con enmienda de 2016, por la cual se normatizan los productos  para el consumo humano, preparados a partir de cacao o sus derivados ya sea con azúcar, edulcorantes permitidos, lácteos y sus derivados, sustancias aromatizantes, entre otros ingredientes permitidos por la ley.  Excluye el uso de grasas animales distintas a la grasa de la leche, así como la harina y almidón, excepto en algunos chocolates a la taza o conocido como chocolate de mesa.  También indica que la adición de ingredientes no puede superar el 40% del total de la formulación.  Para profundizar en este tema por favor remitirse a materiales complementarios: Codex Alimentarius, Norma para el chocolate y los productos del chocolate.
      .row.justify-content-center.align-items-center.mb-5.bgw.brad.sha           
        .col-lg-7
          p(data-aos="fade-down").mb-0.p-4 El 
            span.or #[b Codex Alimentarius]
            span , o “Código Alimentario”, es un conjunto de normas, directrices y códigos de prácticas aprobados por la Comisión del Codex Alimentarius, conocida también como 
            span.or #[b CAC],
            span constituye el elemento central del Programa Conjunto 
            span.or #[b FAO/OMS ]
            span sobre Normas Alimentarias y fue establecida por la 
            span.or #[b FAO ]
            span y la Organización Mundial de la Salud 
            span.or #[b (OMS) ]
            span con la finalidad de proteger la salud de los consumidores y promover prácticas leales en el comercio alimentario.          
        .col-lg-5.img-e
          img.img-e(data-aos="zoom-in")(src='@/assets/curso/temas/62.png', alt='') 

      .row.justify-content-center.align-items-center         
        .col-lg-10
          .row.justify-content-center.align-items-center.mb-5           
            .col-auto
              img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='')
            .col  
              p(data-aos="fade-down").mb-0 Cuando se habla de chocolatería, no se debe dejar de lado, aspectos tan importantes como, los tipos y características de los chocolates, las diversas posibilidades de relleno con sus respectivos ingredientes, pero especialmente los riesgos y defectos que se pueden presentar, en algunos momentos del atemperado. Por todo lo anterior, se deben conocer a continuación, cada uno de estos aspectos:

      .row.justify-content-start.align-items-center.mb-5           
        .col-lg-5
          .list(data-aos="fade-down")
            .list__item
              .list__item__icon
                img(src='@/assets/curso/temas/v.svg', alt='')
            .list__txt
              h3.mb-0.mt-1.bwn Tipos y características

      p(data-aos="fade-down").mb-5 Continuando con la normativa para el chocolate y sus productos derivados que fue desarrollada en 1981, por la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO) y que fue actualizada en 2003 y 2016, clasifica al chocolate según su forma, composición y cantidad de cacao, de la siguiente manera:

      .row.justify-content-center.align-items-center.my-5           
        .col-lg-10(data-aos="fade-right")
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/63.png', alt='clasificación del chocolate según su forma')

            .tarjeta.color-acento-botones.p-3(x="8.3%" y="89%" numero="+")
              h5.mb-2 Chocolate Gianduja
              p.mb-0 Es un tipo de chocolate cremoso para untar,  con adición de avellanas, almendras u otro tipo de nueces o una mezcla de ellas, ya sean enteras o en sémola pero que no supere el 40 %, puede contener leche o extracto seco de leche.
            .tarjeta.color-acento-botones.p-3(x="29.5%" y="7%" numero="+")
              h5.mb-2 Chocolate a la tasa
              p.mb-0 Es el que se prepara como bebida caliente, es conocido también como chocolate de mesa.  Según la proporción, se clasifica en: amargo y semiamargo.  
            .tarjeta.color-acento-botones.p-3(x="50%" y="89%" numero="+")
              h5.mb-2 Chocolate en grano, copos/ hojuelas
              p.mb-0 Es el chocolate para fundir,  este se puede comercializar en barras, pero el chocolatero debe realizar el proceso de fraccionado y rayado para un fundido homogéneo; de esta forma es mucho más fácil obtener la cobertura en copos. 
            .tarjeta.color-acento-botones.p-3(x="70%" y="7%" numero="+")
              h5.mb-2 Chocolate relleno
              p.mb-0 Producto cubierto por uno o más tipos de cobertura de chocolate y cuyo interior se diferencia notablemente del resto.  Este relleno puede ser líquido, o semisólido y debe ajustarse a la normatividad del Codex para rellenos.  
            .tarjeta.color-acento-botones.p-3(x="90.8%" y="89%" numero="+")
              h5.mb-2 Bombones de chocolate
              p.mb-0 Pertenecen a aquellos chocolates cuyo tamaño es el de un bocado, pueden ser rellenos o no y su contenido de chocolate como tal no debe ser menos del 25 % del peso total. 

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-10(data-aos="flip-down")
        .tarjeta.color-primario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/4.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-0 Para ampliar la información sobre los requisitos de composición que debe tener cada tipo de chocolate descargar el documento: 
                .col-sm-auto
                  a.anexo(:href="obtenerLink('/downloads/Tipos_chocolate_ sus_requisitos_composición.pdf')" target="_blank")
                    .anexo__icono
                      img(src="@/assets/template/icono-pdf.svg")
                    .anexo__texto
                      p.ts #[b.ts Anexo.]Tipos_chocolate_ sus_requisitos_composición 

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-5
        .list(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h3.mb-0.mt-1.bwn Rellenos, formulación y defectos

    p(data-aos="fade-down").mb-5 La variedad de rellenos para chocolates es inimaginable, los maestros chocolateros juegan con infinidad de sabores, texturas, tipo de conservación y según el formato (se refiere a la forma en la que se debe dosificar el relleno, ya sea con manga, cápsulas  o incluso a mano, entre otras.); a grandes rasgos los más importantes son:

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-7(data-aos="fade-left")
        AcordionA(tipo="b" clase-tarjeta="tarjeta bg11")
          .row.up(titulo="Según la textura")
            .col-11
              p Se refiere a la estructura física del relleno aportada por  diferentes ingredientes que pueden ser: cremosas, crujientes, líquidas , tipo gel, untuosas, ligeras o pastosas. 
          .row.up(titulo="Según el tipo de conservación")
            .col-11
              p También llamada azúcar común o de mesa, proviene comúnmente de la caña de azúcar, otra fuente es de la remolacha azucarera, su efecto conservador y reblandecedor de los rellenos y resalta los aromas. Disminuye la actividad del agua (aW) y posee poder anticongelante.     
          .row.up(titulo="Según la temperatura")
            .col-11
              p Al diseñar bombones se debe tener en cuenta, que estos se elaboran a diferentes temperaturas ambiente, especialmente por el tipo de relleno que se vaya a utilizar, pues de ahí parten el método de conservación a utilizar,  como la pasteurización, cuyo objetivo es eliminar microorganismos ya que se debe llevar el relleno a 83 ºC y luego enfriarlo rápidamente hasta los 6 ºC.
        .row.justify-content-center.align-items-center          
          .col-lg-12.imgs-flotantes1(data-aos="fade-left") 
            img.img-flotante1(data-aos="zoom-in")(src='@/assets/curso/temas/65.png', alt='Imagen decorativa')              
      .col-lg-5
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/64.png', alt='')

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/66.png', alt='')

      .col-lg-8
        p(data-aos="fade-down") A nivel de fundamentos teóricos, existen dos grandes grupos para clasificar los rellenos: los de base agua y rellenos de grasa; los primeros, como su nombre lo indica, tienen dentro de su composición algún porcentaje de agua,  por ejemplo: ganache, licor, fondant, mermeladas o dulces de fruta.   Los de grasa se llaman así porque no contienen agua en ningún porcentaje; tener presente, que no quiere decir que por su nombre a estos rellenos se les agregue grasa, ya que por normatividad sólo está permitida la grasa vegetal y la proveniente de la leche. Los otros tipos de grasa están excluidos de las formulaciones. Estos en este casos, los rellenos obtienen la grasa, del praliné, pastas de frutos secos y giandujas (avellanas trituradas), entre otros.

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-5
        .list(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h3.mb-0.mt-1.bwn Formulación 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-down") Una vez entendido la importancia de la conservación de los tipos de rellenos y continuando con la formulación, para eso es importante conocer qué tipos de ingredientes son los más comunes, nuevamente cabe recalcar que ser chocolatero es un arte, y cada maestro chocolatero tendrá sus formulaciones e ingredientes mágicos, por así decirlo. El tipo  y calidad de la cobertura de chocolate es esencial para la elaboración de los bombones y los rellenos como se analizó anteriormente.  
      .col-lg-4 
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/67.png', alt='')  

    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-5
        .list(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h3.mb-0.mt-1.bwn Ingredientes en la Formulación 

    .bg12
      h4.bgtbw(data-aos="fade-down").mb-4.pt-5 Los azúcares    
      p(data-aos="fade-down").mb-5 proporcionan el sabor dulce dependiendo del ph que tengan, su temperatura y disolución e intervienen sobre la aW (actividad agua) los más usados son:  sacarosa, azúcar invertido, glucosa, dextrosa, miel, fructosa, lactosa y sorbitol. A continuación, se puede conocer en qué consiste cada uno de ellos: 
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-12.up
          .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-left")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                  .col-md-5.mb-4.mb-md-0
                    h4.mb-4 Sacarosa 
                    p También llamada azúcar común o de mesa, proviene comúnmente de la caña de azúcar, otra fuente es de la remolacha azucarera, su efecto conservador y reblandecedor de los rellenos y resalta los aromas. Disminuye la actividad del agua (aW) y posee poder anticongelante.            
                  .col-md-5
                    img.img-a.img-t(src='@/assets/curso/temas/70.png', alt='')   
              .row.justify-content-center.align-items-center
                  .col-md-5.mb-4.mb-md-0
                    h4.mb-4 Azúcar invertido o Trimoline 
                    p Se obtiene mediante la hidrólisis enzimática o ácida del azúcar dando como resultado glucosa y fructosa, su textura es espesa y por su poder anticongelante es muy usada sobre todo en la elaboración de helados, ya que evita la cristalización del producto, permitiendo así, una textura más suave y cremosa. Disminuye la actividad del agua (aW) y es altamente edulcorante.           
                  .col-md-5
                    img.img-a.img-t(src='@/assets/curso/temas/71.png', alt='')  
              .row.justify-content-center.align-items-center
                  .col-md-5.mb-4.mb-md-0
                    h4.mb-4 Glucosa o Dextrosa 
                    p Proviene del Almidón, Su pH es de 5, se utiliza en rellenos con frutas ya que evita la separación del agua y pulpa, a esto se le conoce como efecto almidón. Presenta bajo poder edulcorante, potencia los sabores, ofrece sensación de frescor al contacto con la boca; es anticristalizante y disminuye la actividad del agua (aW). Comercialmente se consigue en polvo o hidratada.           
                  .col-md-5
                    img.img-a.img-t(src='@/assets/curso/temas/72.png', alt='')  
              .row.justify-content-center.align-items-center
                  .col-md-5.mb-4.mb-md-0
                    h4.mb-4 Sorbitol 
                    p Es poliol (azúcar-alcohol) obtenida por hidrogenación catalítica, tiene la capacidad de soportar altas temperaturas sin sufrir cambios ni caramelizar. Se caracteriza por ser un agente conservador, anticristalizante, además tiene efecto laxante si se usa en grandes dosis, disminuye la actividad del agua (aW); se aconseja usarlo en productos con tendencia al secado ya que es humectante. Comercialmente se consigue en polvo o disuelto con 70% de materia seca.            
                  .col-md-5
                    img.img-a.img-t(src='@/assets/curso/temas/73.png', alt='')

      h4.bgtbw(data-aos="fade-down").mb-4 Las grasas
      .row.justify-content-center.align-items-center.mb-5           
        .col-lg-9
          p(data-aos="fade-down") En chocolatería solo está permitido las grasas de origen animal sólo si pertenecen a los lácteos, es decir, crema de leche o mantequilla. Ninguna otra grasa animal es permitida.  Los maestros chocolateros aconsejan usar mantequilla 100% de vaca y no los sustitutos vegetales ya que la primera transfiere mejor textura y palatabilidad, aunque las grasas vegetales son más resistentes a la oxidación. 

          p(data-aos="fade-down") El punto de fusión de la mantequilla es de 28⁰C., mientras que la de la manteca de cacao es de aproximadamente  32⁰ C.                        
        .col-lg-3
          img.img-a.img-t(src='@/assets/curso/temas/74.png', alt='')

      h4.bgtbw(data-aos="fade-down").mb-4 Ganache

      .row.justify-content-center.align-items-center.mb-5           
        .col-auto
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/4.svg', alt='')
        .col  
          p(data-aos="fade-down").mb-0 Dentro de los tipos de relleno para bombones el más común es el ganache, por su versatilidad a la hora de crear sabores y por su textura cremosa que lo hace muy palatable. El ganache es una emulsión de grasa y agua con la cual se busca dar una textura más cremosa y fina al chocolate pero esto no quiere decir que no se tenga en cuenta otros ingredientes como el azúcar  y adiciones especiales.        

    .bg13
      .row.justify-content-center.align-items-start.py-5           
        .col-lg-6.my-3 
          p(data-aos="fade-down") Los parámetros importantes del Ganache son Ph: menor a 5 y  disminución de la actividad del agua (aW), menor a 0.85.  Teniendo en cuenta lo anterior una formulación básica  para hacer ganache, sería:
          img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/11.png', alt='')

        .col-lg-6.my-3 
          .titulo-sexto.color-acento-contenido(data-aos="zoom-in-left")
            h5 Tabla 3 
            span Formulación para la elaboración del Ganache
          .tabla-a.color-primario.mb-5(data-aos="fade-left") 
            table.table1
              caption.bgcap Nota. Adaptada de Oviedo,D. Quetzal ,Taller de Chocolatería, 2012.
              thead
                tr.bgth
                  th Ingredientes
                  th Porcentaje de inclusión
              tbody          
                tr.bgw
                  td Agua 
                  td 14-20 % 
                tr.bgt
                  td Azúcares totales  
                  td min, 30 % 
                tr.bgw
                  td Manteca de Cacao 
                  td min. 21 % 
                tr.bgt
                  td Materia grasa láctea 
                  td 0-15 % 
                tr.bgw
                  td Alcohol 
                  td 6 %  
    .row.justify-content-start.align-items-center.mb-5           
      .col-lg-5
        .list(data-aos="fade-down")
          .list__item
            .list__item__icon
              img(src='@/assets/curso/temas/v.svg', alt='')
          .list__txt
            h3.mb-0.mt-1.bwn Defectos en la chocolatería 

    p(data-aos="fade-down").mb-5 Realizar mal el proceso de atemperado o no realizarlo y simplemente fundirlo puede generar la presencia de defectos como el Fatbloom, término técnico en inglés que es el  afloramiento de manchas blanquecinas sobre los chocolates, estas manchas son partículas de grasa que salen a la superficie cuando el chocolate ha sido expuesto a cambios extremos de temperatura ambiente.

    .row.justify-content-center.align-items-center.mb-5           
      .col-lg-4
        img.img-a.img-t(data-aos="zoom-in")(src='@/assets/curso/temas/77.png', alt='')

      .col-lg-8
        p(data-aos="fade-down") Los errores cometidos en todo el proceso de elaboración del chocolate pueden aflorar ya en el producto final, que serían en este caso los bombones, a continuación se presenta un listado de defectos:
        ul.lista-ul--color.ps-4
          li 
            i.fas.fa-cookie
            p.mb-0 Bombones  deformados.
          li 
            i.fas.fa-cookie
            p.mb-0 Bombones con cavidades por burbujas de aire.
          li 
            i.fas.fa-cookie
            p.mb-0 Sudoración de grasa o Fat Bloom.
          li 
            i.fas.fa-cookie
            p.mb-0 Carencia de olor agradable.
          li 
            i.fas.fa-cookie
            p.mb-0 Sabor/ olor a rancio: enranciamiento de las grasas lácteas.
          li 
            i.fas.fa-cookie
            p.mb-0 Presencia de moho,
          li 
            i.fas.fa-cookie
            p.mb-0 Fermentación.
          li 
            i.fas.fa-cookie
            p.mb-0 Rellenos con  texturas no deseadas:  secos, arenosos, o con exceso de humedad.
          li 
            i.fas.fa-cookie
            p.mb-0 Consistencia no homogénea por azúcares cristalizados.
          li 
            i.fas.fa-cookie
            p.mb-0 Aspecto mate y con líneas blancas.                                     
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
