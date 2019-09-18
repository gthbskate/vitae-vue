<template>
<!-- Skills Start -->
    <section id="skills">
        <div class="row">
            <div class="col s12 m12 l12 xl12">
                <h1 class="text-skill-principal">
                    {{ textSkillEs }}<span class="text-skill-principal-span">{{ textSkillEnu }}</span> 
                </h1>
            </div>
        </div>
        <div class="row">
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textHtml }}</span>
                        <img class="img-card" src="../assets/slider/html5-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d50"></div>
                        </div>
                    </div>
                </div>           
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textCss }}</span>
                        <img class="img-card" src="../assets/slider/css3_logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d50"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textSass }}</span>
                        <img class="img-card" src="../assets/slider/sass-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d50"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textBootstrap }}</span>
                        <img class="img-card" src="../assets/slider/bootstrap-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d50"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textWordpress }}</span>
                        <img class="img-card" src="../assets/slider/wordpress-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d50"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textJavascript }}</span>
                        <img class="img-card" src="../assets/slider/js-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d25"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textJquery }}</span>
                        <img class="img-card" src="../assets/slider/jquery-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d25"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textMaterialize }}</span>
                        <img class="img-card" src="../assets/slider/materialize-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d25"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textReact }}</span>
                        <img class="img-card" src="../assets/slider/react-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d25"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textVue }}</span>
                        <img class="img-card" src="../assets/slider/vue-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d25"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textAngular }}</span>
                        <img class="img-card" src="../assets/slider/angular-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d25"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textGit }}</span>
                        <img class="img-card" src="../assets/slider/git-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d25"></div>
                        </div>
                    </div>
                </div>           
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textGithub }}</span>
                        <img class="img-card" src="../assets/slider/github-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d25"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textUxui }}</span>
                        <img class="img-card" src="../assets/slider/uiux-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d25"></div>
                        </div>
                    </div>
                </div>           
            </div>
            <div class="col s12 m4 l3 xl2 col-cards">
                <div class="card card-container-cards">
                    <div class="card-content white-text">
                        <span class="card-title">{{ textScrum }}</span>
                        <img class="img-card" src="../assets/slider/scrum-logo.png" alt="">
                    </div>
                    <div class="card-action">
                        <div class="progress">
                            <div class="determinate d25"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
<!-- Skills End -->
</template>

<script>
export default {
    name: 'Skills',
    data(){
        return{
            textSkillEs: 'Habilidades / ',
            textSkillEnu: 'Skills',
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

<style scoped>
@media screen and (min-width: 993px) {
  body {
    margin: 0px !important;
    padding: 0px !important; }

  #skills {
    background-color: #FAFFFD !important; }

  .text-skill-principal {
    font-family: 'Raleway', sans-serif;
    font-size: 5.5em;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid #2195F2;
    padding-bottom: .5em;
    color: #2195F2; }

  .text-skill-principal-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1em;
    font-weight: bold;
    color: #2195F2; }

  .col-cards {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin: 1em auto 1em auto !important;
    padding: 0 !important; }

  .card-container-cards {
    width: 166px;
    margin: auto !important;
    padding: 0px !important;
    background-color: #342E37 !important;
    box-shadow: 5px 5px 5px #342E37 !important; }
    .card-container-cards .card-title {
      font-family: 'Roboto Condensed', sans-serif !important;
      font-size: 1.5em !important;
      font-weight: bold !important;
      text-align: center; }

  .img-card {
    display: block;
    height: 5em;
    margin: auto; }

  .card-action {
    margin: 0px !important;
    padding: 4px !important; }

  .determinate {
    background-color: #2195F2 !important; }

  .d25 {
    width: 25%; }

  .d50 {
    width: 50%; }

  .progress {
    height: 10px !important; } }
@media screen and (min-width: 768px) and (max-width: 992px) {
  body {
    margin: 0px !important;
    padding: 0px !important; }

  #skills {
    background-color: #FAFFFD; }

  .text-skill-principal {
    font-family: 'Raleway', sans-serif;
    font-size: 4em;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid #2195F2;
    padding-bottom: .5em;
    color: #2195F2; }

  .text-skill-principal-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1em;
    font-weight: bold;
    color: #2195F2; }

  .col-cards {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin: 1em auto 1em auto !important;
    padding: 0 !important; }

  .card-container-cards {
    width: 166px;
    margin: auto !important;
    padding: 0px !important;
    background-color: #342E37 !important;
    box-shadow: 5px 5px 5px #342E37 !important; }
    .card-container-cards .card-title {
      font-family: 'Roboto Condensed', sans-serif !important;
      font-size: 1.5em !important;
      font-weight: bold !important;
      text-align: center; }

  .img-card {
    display: block;
    height: 5em;
    margin: auto; }

  .card-action {
    margin: 0px !important;
    padding: 4px !important; }

  .determinate {
    background-color: #2195F2 !important; }

  .d25 {
    width: 25%; }

  .d50 {
    width: 50%; }

  .progress {
    height: 10px !important; } }
@media screen and (max-width: 767px) {
  body {
    margin: 0px !important;
    padding: 0px !important; }

  #skills {
    background-color: #FAFFFD; }

  .text-skill-principal {
    font-family: 'Raleway', sans-serif;
    font-size: 2.3em;
    font-weight: normal;
    text-align: center;
    border-bottom: 1px solid #2195F2;
    padding-bottom: .5em;
    color: #2195F2; }

  .text-skill-principal-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 1em;
    font-weight: bold;
    color: #2195F2; }

  .col-cards {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin: 1em auto 1em auto !important;
    padding: 0 !important; }

  .card-container-cards {
    width: 166px;
    margin: auto !important;
    padding: 0px !important;
    background-color: #342E37 !important;
    box-shadow: 5px 5px 5px #342E37 !important; }
    .card-container-cards .card-title {
      font-family: 'Roboto Condensed', sans-serif !important;
      font-size: 1.5em !important;
      font-weight: bold !important;
      text-align: center; }

  .img-card {
    display: block;
    height: 5em;
    margin: auto; }

  .card-action {
    margin: 0px !important;
    padding: 4px !important; }

  .determinate {
    background-color: #2195F2 !important; }

  .d25 {
    width: 25%; }

  .d50 {
    width: 50%; }

  .progress {
    height: 10px !important; } }
</style>