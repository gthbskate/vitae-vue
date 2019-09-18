<template>
    <div class="experience">
        <Experiences/>
        <Footer/>
    </div>
</template>

<script>
import Experiences from '@/components/Experiences.vue'

import Footer from '@/components/Footer.vue'

export default {
    name: 'experience',
    components: {
        Experiences,
        Footer,
    }
}
</script>