<script lang="ts">
import { useSchoolStore } from '~/stores/school'
import { useBlogStore } from '~/stores/blog'
import { useMessagestore } from '~/stores/msg'

export default defineComponent({
    name: 'school',
    setup() {
        const blogstore = useBlogStore()
        const msg = useMessagestore()
        const school = useSchoolStore()
        definePageMeta({
            title: 'school',
            description: 'ESP32 Glider is a project to build a rc plane with a ESP32 microcontroller.',
            keywords: 'fri3dl.com, glider, espGlider, esp32Glider, esp32glider',
            _transitionIdx: 5,
            pageTransition: {
                name: 'down',
                mode: 'out-in',
            },
            middleware(to, from) {
                if (!to.meta.pageTransition || (typeof to.meta.pageTransition === 'boolean')) return;
                if (typeof to.meta._transitionIdx !== 'number' || typeof from.meta._transitionIdx !== 'number') return;
                to.meta.pageTransition.name = to.meta._transitionIdx > from.meta._transitionIdx ? 'up' : 'down';

                if (!from.meta.pageTransition || (typeof from.meta.pageTransition === 'boolean')) return;
                if (typeof from.meta._transitionIdx !== 'number' || typeof from.meta._transitionIdx !== 'number') return;
                from.meta.pageTransition.name = to.meta._transitionIdx > from.meta._transitionIdx ? 'up' : 'down';
            }
        })
        return {
            blogstore,
            msg,
            school,
        }
    },
    data() {
        return {
            blogPage: 0,
        }
    },
    mounted() {
        this.school.getSubjects()
    },
    methods: {
        getSubject(id: number) {
            this.school.getSubject(id)
            // router
            this.$router.push({ path: '/school/'+id })
        },
    },
})
</script>




<template>
    <main>

        <div>
            <h1>school</h1>
        </div>
        <div v-for="subject in school.subjects" class="subject" :key="subject.id">
            <h2 @click="getSubject(subject.id)">{{subject.name }}</h2>
            <p>{{ subject.lastEdit }}</p>
        </div>
    </main>
</template>


<style scoped>

h1 {
    margin: auto;
    margin-bottom: 1rem;
    width: 8rem;
}
.subject {
    /* border: 1px solid black; */
    background-color: rgba(0, 0, 0, 0.27);
    color: var(--bg);
    /* border-radius: 1rem; */
    opacity: 0.8;
    margin: 1rem;
    padding: 1rem;
}

.subject:hover {
    opacity: 1;
    border-radius: 1rem;
    cursor: pointer;
}

h2 {
    margin: auto;
    width: 8rem;
}

p {
    margin: auto;
    width: 8rem;
}
</style>