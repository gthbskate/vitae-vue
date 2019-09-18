<template>
    <div class="school">
        <Schools/>
        <Footer/>
    </div>
</template>

<script>
import Schools from '@/components/Schools.vue'

import Footer from '@/components/Footer.vue'

export default {
    name: 'school',
    components: {
        Schools,
        Footer,
    }
}
</script>

