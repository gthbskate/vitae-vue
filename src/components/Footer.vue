<template>
<!-- footer Start -->
    <section id="footer">
        <div class="row">
            <div class="col s12 m12 l12 xl12 col-container-footer">
                <h6 class="text-footer-h6"><i class="material-icons">computer</i>{{ textFooter }}<span class="text-footer-span">{{ textFooterSpan }}</span></h6>
                <p class="text-footer-p">{{ textFooterP }}</p>
                <a class="text-footer-a" href="./contact.html"><i class="material-icons">phone</i>{{ textFooterA }}<span class="text-footer-span">{{ textFooterASpan }}</span></a>
            </div>
        </div>
    </section>
<!-- footer End -->
</template>

<script>
export default {
    name: 'Footer',
    data(){
        return{
          textFooter: 'Desarrollado por / ',
          textFooterSpan: 'Powered by :',
          textFooterP: ' Cesar González Caballero',
          textFooterA: ' Contacto / ',
          textFooterASpan: 'Contact',
        }
    }
}
</script>

<style scoped>
@media screen and (min-width: 993px) {
  body {
    margin: 0px !important;
    padding: 0px !important; }

  #footer {
    background-color: #577399;
    display: flex;
    margin: 0px;
    padding: 0px; }

  .col-container-footer {
    display: flex;
    justify-content: center;
    align-items: center; }

  .text-footer-h6 {
    color: #FAFFFD;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: normal; }

  .text-footer-p {
    color: #FAFFFD;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: normal;
    margin: 2em 1em 1em 1em; }

  .text-footer-a {
    color: #FAFFFD;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: normal; }

  .text-footer-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold; } }
@media screen and (min-width: 768px) and (max-width: 992px) {
  body {
    margin: 0px !important;
    padding: 0px !important; }

  #footer {
    background-color: #577399;
    display: flex;
    margin: 0px;
    padding: 0px; }

  .col-container-footer {
    display: flex;
    justify-content: center;
    align-items: center; }

  .text-footer-h6 {
    color: #FAFFFD;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: normal; }

  .text-footer-p {
    color: #FAFFFD;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: normal;
    margin: 2em 1em 1em 1em; }

  .text-footer-a {
    color: #FAFFFD;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: normal; }

  .text-footer-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold; } }
@media screen and (max-width: 767px) {
  body {
    margin: 0px !important;
    padding: 0px !important; }

  #footer {
    background-color: #577399;
    display: flex;
    margin: 0px;
    padding: 0px; }

  .col-container-footer {
    display: flex;
    justify-content: center;
    align-items: center; }

  .text-footer-h6 {
    color: #FAFFFD;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: normal; }

  .text-footer-p {
    color: #FAFFFD;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: normal;
    margin: 2em 1em 1em 1em; }

  .text-footer-a {
    color: #FAFFFD;
    font-family: 'Raleway', sans-serif;
    font-size: 1em;
    font-weight: normal; }

  .text-footer-span {
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold; } }
</style>