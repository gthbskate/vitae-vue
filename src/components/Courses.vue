<template>
<!-- Courses Start -->
    <section id="courses">
        <div class="row">
            <div class="col s12 m12 l12 xl12">
                <h1 class="text-courses-principal">
                    {{ textCoursesEs }}<span class="text-courses-principal-span">{{ textCoursesEn }}</span> 
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m12 l12 xl12">
                <div class="row">
                    <div v-for="(textCards, index) in textCard" :key="index" class="col">
                        <div class="card card-courses">
                            <div class="card-content white-text">
                                <h6 class="card-title card-title-courses">{{ textCards.title }}</h6>
                                <p class="text-courses-p"><i class="material-icons icon-courses">done</i>{{ textCards.textCertEs }}<span>{{ textCards.textCertEn }}</span></p>
                            </div>
                            <div class="card-action tex-card-date">
                                <p class="text-date-course">{{ textCards.date }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!-- Courses End --> 
</template>

<script>
export default {
    name: 'Courses',
    data() {
        return {
            textCoursesEs: 'Cursos / ',
            textCoursesEn: 'Courses',
            textCard: [
                { 
                    title: 'Full Stack Python',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'Desarrollo Web Frontend',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'Desarrollo Web',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'Desarrollo Web Online',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'JavaScript',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'Bootstrap',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'Git y GitHub',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'CSS Grid Layout',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'Design Thinking',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'Design Sprint',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'Terminal y Línea de Comandos',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'Introducción a la Programación',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'Wordpress',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2017',
                },
                { 
                    title: 'Programación C# con VS',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2017',
                },
                { 
                    title: 'Introducción VS 2012',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2017',
                },
                { 
                    title: 'BD con M. Access',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2017',
                },
                { 
                    title: 'Autocad 2017',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2018',
                },
                { 
                    title: 'Revit 2017',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2018',
                },
                { 
                    title: 'Aspel NOI 8.0',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'Aspel COI 8.0',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'Aspel SAE 7.0',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2019',
                },
                { 
                    title: 'seguridad informática',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2016',
                },
                { 
                    title: 'Gestor de Imagen Web',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2017',
                },
                { 
                    title: 'Desarrollador de Contenido Digital',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2017',
                },
                { 
                    title: 'Instalador de Fibra Óptica',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2017',
                },
                { 
                    title: 'Finder',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2017',
                },
                { 
                    title: 'Reparador de Celulares y Tablets',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2017',
                },
                { 
                    title: 'Asistente Web',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2017',
                },
                { 
                    title: 'Técnico en informática',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2016',
                },
                { 
                    title: 'Técnico en Instalación y Reparación de Equipo de Cómputo',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2016',
                },
                { 
                    title: 'Técnico en Redes de Datos',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2016',
                },

                { 
                    title: 'Ensamble y Mantenimiento de Equipo de Computo',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2012',
                },

                { 
                    title: 'Tanatología Clínica en Cuidados Paliativos, Enfermedades Crónicas y Psico Oncología',
                    textCertEs: 'Certificado / ',
                    textCertEn: 'Cetified',
                    date: '2015',
                }
            ]
        }
    }
}
</script>

<style scoped>
@media screen and (min-width: 993px) {
  body {
    margin: 0px !important;
    padding: 0px !important; }

  #courses {
    background-color: #FAFFFD; }

  .text-courses-principal {
    font-family: 'Raleway', sans-serif;
    font-size: 5.5em;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid #2195F2;
    padding-bottom: .5em;
    color: #2195F2; }

  .text-courses-principal-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1em;
    font-weight: bold;
    color: #2195F2; }

  .card-courses {
    background-color: #FA824C !important;
    width: 22vw;
    height: 200px; }

  .card-title-courses {
    font-family: 'Roboto Condensed', sans-serif !important;
    font-size: 1.5em !important;
    text-align: center !important;
    padding-top: 1em; }

  .text-courses-p {
    font-family: 'Raleway', sans-serif !important;
    font-size: .7em !important;
    text-align: center !important;
    position: absolute !important;
    bottom: 30% !important; }

  .icon-courses {
    color: #577399; }

  .tex-card-date {
    font-family: 'Roboto Condensed', sans-serif !important;
    font-size: 1em !important;
    text-align: center !important;
    color: #FAFFFD !important;
    position: absolute !important;
    bottom: 0px !important; }

  .text-date-course {
    margin: 0px 0px 0px 0px !important; }

  .card-content {
    justify-content: center !important;
    align-items: center !important; } }
@media screen and (min-width: 768px) and (max-width: 992px) {
  body {
    margin: 0px !important;
    padding: 0px !important; }

  #courses {
    background-color: #FAFFFD; }

  .text-courses-principal {
    font-family: 'Raleway', sans-serif;
    font-size: 4em;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid #2195F2;
    padding-bottom: .5em;
    color: #2195F2; }

  .text-courses-principal-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1em;
    font-weight: bold;
    color: #2195F2; }

  .card-courses {
    background-color: #FA824C !important;
    width: 30vw;
    height: 200px; }

  .card-title-courses {
    font-family: 'Roboto Condensed', sans-serif !important;
    font-size: 1.5em !important;
    text-align: center !important;
    padding-top: 1em; }

  .text-courses-p {
    font-family: 'Raleway', sans-serif !important;
    font-size: .7em !important;
    text-align: center !important;
    position: absolute !important;
    bottom: 30% !important; }

  .icon-courses {
    color: #577399; }

  .tex-card-date {
    font-family: 'Roboto Condensed', sans-serif !important;
    font-size: 1em !important;
    text-align: center !important;
    color: #FAFFFD !important;
    position: absolute !important;
    bottom: 0px !important; }

  .text-date-course {
    margin: 0px 0px 0px 0px !important; }

  .card-content {
    justify-content: center !important;
    align-items: center !important; } }
@media screen and (max-width: 767px) {
  body {
    margin: 0px !important;
    padding: 0px !important; }

  #courses {
    background-color: #FAFFFD; }

  .text-courses-principal {
    font-family: 'Raleway', sans-serif;
    font-size: 2.3em;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid #2195F2;
    padding-bottom: .5em;
    color: #2195F2; }

  .text-courses-principal-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1em;
    font-weight: bold;
    color: #2195F2; }

  .card-courses {
    background-color: #FA824C !important;
    width: 92vw;
    height: 150px; }

  .card-title-courses {
    font-family: 'Roboto Condensed', sans-serif !important;
    font-size: 1.5em !important;
    text-align: center !important;
    padding-top: 1em; }

  .text-courses-p {
    font-family: 'Raleway', sans-serif !important;
    font-size: .7em !important;
    text-align: center !important;
    position: absolute !important;
    bottom: 30% !important; }

  .icon-courses {
    color: #577399; }

  .tex-card-date {
    font-family: 'Roboto Condensed', sans-serif !important;
    font-size: 1em !important;
    text-align: center !important;
    color: #FAFFFD !important;
    position: absolute !important;
    bottom: 0px !important; }

  .text-date-course {
    margin: 0px 0px 0px 0px !important; }

  .card-content {
    justify-content: center !important;
    align-items: center !important; } }
</style>