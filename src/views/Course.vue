<template>
    <div class="course">
        <Courses/>
        <Footer/>
    </div>
</template>

<script>
import Courses from '@/components/Courses.vue'

import Footer from '@/components/Footer.vue'

export default {
    name: 'course',
    components: {
        Courses,
        Footer,
    }
}
</script>