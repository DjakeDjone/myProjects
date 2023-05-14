<script lang="ts">
import type { Subject, Content, Topic } from '~/stores/school'
import { useSchoolStore } from '~/stores/school'

export default defineComponent({
    name: 'subject',
    setup() {
        const school = useSchoolStore()
        return {
            school,
        }
    },
    data() {
        return {
            subject: {} as Subject,
            blogPage: 0,
        }
    },
    mounted() {
        this.subject = this.school.currentSubject;
        console.log(this.subject)
    },
    methods: {
        getTopic(id: number) {
            console.log('getTopic', id);
            this.school.getTopic(this.school.currentSubject.id, id)
            // router
            this.$router.push({ path: '/school/' + this.school.currentSubject.id + '/' + id })
        },
    },
})
</script>


<template>
    <main>

        <div>
            <h1>{{ subject.name }}</h1>
            <!-- <div>{{ subject }}</div> -->
            <div v-for="topic in subject.topics" :key="topic.id">
                <h2>{{ topic.name }}</h2>
                <div class="contentPrev" v-for="content in topic.contents" :key="content.id" @click="getTopic(content.id)">
                    <h3>{{ content.title }}</h3>
                    <p>{{ content.zugriffe }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>

.contentPrev {
    /* border: 1px solid black; */
    background-color: rgba(0, 0, 0, 0.27);
    color: var(--bg);
    /* border-radius: 1rem; */
    opacity: 0.8;
    margin: 1rem;
    padding: 1rem;
}

.contentPrev:hover {
    opacity: 1;
    border-radius: 1rem;
    cursor: pointer;
}
</style>