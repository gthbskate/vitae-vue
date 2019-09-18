<template>
    <div class="skill">
        <Skills/>
        <Footer/>
    </div>
</template>

<script>
import Skills from '@/components/Skills.vue'

import Footer from '@/components/Footer.vue'

export default {
  name: 'skill',
  components: {
    Skills,
    Footer,
  }
}
</script>