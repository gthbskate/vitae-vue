<template>
<!-- Principal Start -->
  <section id="principal">
      <div class="row">
          <div class="col l6 xl6" id="col-img-principal">
              <img id="img-principal" src="../assets/principal/principal.png" alt="">
          </div>
          <div class="col s12 m12 l6 xl6">
              <div class="row">
                  <div class="col s12 m12 l12 xl12">
                      <h1 class="text-dev-es">{{ textDevEs }}<span class="text-dev-enu">{{ textDevEnu }}</span></h1>
                  </div>
<!-- Slider Start -->
                  <div class="row" id="slider">
                      <div class="col s3 m3 l3 xl3 slider">
                          <ul class="slides">
                              <li>
                                  <img class="img-slide" src="../assets/slider/html5-logo.png">
                                  <h2 class="text-slide">{{ textHtml }}</h2>
                              </li>
                              <li>
                                  <img class="img-slide" src="../assets/slider/git-logo.png">
                                  <h2 class="text-slide">{{ textGit }}</h2>
                              </li>
                              <li>
                                  <img class="img-slide" src="../assets/slider/sass-logo.png">
                                  <h2 class="text-slide">{{ textSass }}</h2>
                              </li>
                              <li>
                                  <img class="img-slide" src="../assets/slider/jquery-logo.png">
                                  <h2 class="text-slide">{{ textJquery }}</h2>
                              </li>
                          </ul>
                      </div>
                      <div class="col s3 m3 l3 xl3 slider">
                          <ul class="slides">
                              <li>
                                  <img class="img-slide" src="../assets/slider/css3_logo.png">
                                  <h2 class="text-slide">{{ textCss }}</h2>
                              </li>
                              <li>
                                  <img class="img-slide" src="../assets/slider/github-logo.png">
                                  <h2 class="text-slide">{{ textGithub }}</h2>
                              </li>
                              <li>
                                  <img class="img-slide" src="../assets/slider/angular-logo.png">
                                  <h2 class="text-slide">{{ textAngular }}</h2>
                              </li>
                              <li>
                                  <img class="img-slide" src="../assets/slider/uiux-logo.png">
                                  <h2 class="text-slide">{{ textUxui }}</h2>
                              </li>
                          </ul>
                      </div>
                      <div class="col s3 m3 l3 xl3 slider">
                          <ul class="slides">
                              <li>
                                  <img class="img-slide" src="../assets/slider/js-logo.png">
                                  <h2 class="text-slide">{{ textJavascript }}</h2>
                              </li>
                              <li>
                                  <img class="img-slide" src="../assets/slider/materialize-logo.png">
                                  <h2 class="text-slide">{{ textMaterialize }}</h2>
                              </li>
                              <li>
                                  <img class="img-slide" src="../assets/slider/react-logo.png">
                                  <h2 class="text-slide">{{ textReact }}</h2>
                              </li>
                              <li>
                                  <img class="img-slide" src="../assets/slider/scrum-logo.png">
                                  <h2 class="text-slide">{{ textScrum }}</h2>
                              </li>
                          </ul>
                      </div>
                      <div class="col s3 m3 l3 xl3 slider">
                          <ul class="slides">
                              <li>
                                  <img class="img-slide" src="../assets/slider/bootstrap-logo.png">
                                  <h2 class="text-slide">{{ textBootstrap }}</h2>
                              </li>
                              <li>
                                  <img class="img-slide" src="../assets/slider/wordpress-logo.png">
                                  <h2 class="text-slide">{{ textWordpress }}</h2>
                              </li>
                              <li>
                                  <img class="img-slide" src="../assets/slider/vue-logo.png">
                                  <h2 class="text-slide">{{ textVue }}</h2>
                              </li>
                          </ul>
                      </div>
                  </div>
<!-- Slider End -->
              </div>
          </div>
      </div>
  </section>
<!-- Pricipal End -->
</template>

<script>

export default {
  name: 'Principal',
  data() {
    return{
      textDevEs: 'Desarrollador Web Front End / ',
      textDevEnu: 'Developer Web Front End',
      textHtml: 'HTML5',
      textGit: 'GIT',
      textSass: 'SASS',
      textJquery: 'JQUERY',
      textCss: 'CSS3',
      textGithub: 'GITHUB',
      textAngular: 'ANGULAR',
      textUxui: 'UX / UI',
      textJavascript: 'JAVASCRIPT',
      textMaterialize: 'MATERIALIZE',
      textReact: 'REACT',
      textScrum: 'SCRUM',
      textBootstrap: 'BOOTSTRAP',
      textWordpress: 'WORPRESS',
      textVue: 'VUE',
    }
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (min-width: 993px) {
  #principal {
    background-color: #2195F2;
    width: 100%;
    height: 100%; }

  #img-principal {
    width: 100%; }

  .text-dev-es {
    margin: 0px;
    padding: 2em .5em 3em 0em;
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-weight: normal;
    font-size: 3em;
    color: #FAFFFD;
    text-align: right; }

  .text-dev-enu {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 1em;
    color: #FAFFFD; }

  #slider {
    width: 100%;
    display: flex;
    margin: 0px;
    padding: 0em 2em 1em 2em; }

  .slider .indicators {
    display: none !important; }

  .slides {
    height: auto !important; }

  .text-slide {
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 1.3em;
    color: #FAFFFD; } }
@media screen and (min-width: 768px) and (max-width: 992px) {
  #principal {
    background-color: #2195F2;
    width: 100%;
    height: 100%; }

  #col-img-principal {
    display: none !important; }

  .text-dev-es {
    margin: 0px;
    padding: 1em 2em 1em 2em;
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-weight: normal;
    font-size: 3em;
    color: #FAFFFD;
    text-align: center; }

  .text-dev-enu {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 1em;
    color: #FAFFFD; }

  #slider {
    width: 100%;
    display: flex;
    margin: 0px;
    padding: 0em 2em 1em 2em; }

  .slider .indicators {
    display: none !important; }

  .slides {
    height: auto !important; }

  .text-slide {
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 1.3em;
    color: #FAFFFD; } }
@media screen and (max-width: 767px) {
  #principal {
    background-color: #2195F2;
    width: 100%;
    height: 74.2vh;
    margin: 0px !important;
    padding: 0px; }

  #col-img-principal {
    display: none !important; }

  .text-dev-es {
    margin: 0px;
    padding: 1em 1em 1em 1em;
    width: 100%;
    font-family: 'Raleway', sans-serif;
    font-weight: normal;
    font-size: 3em;
    color: #FAFFFD;
    text-align: center; }

  .text-dev-enu {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 1em;
    color: #FAFFFD; }

  #slider {
    display: none !important; } }
</style>
