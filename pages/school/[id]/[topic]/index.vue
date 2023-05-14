<script lang="ts">
import type { Subject, Content, Topic } from '~/stores/school'
import { useSchoolStore } from '~/stores/school'
import { useUserstore } from '~/stores/user'

export default defineComponent({
    name: 'subject',
    setup() {
        const school = useSchoolStore()
        const user = useUserstore()
        return {
            school,
            user,
        }
    },
    data() {
        return {
        }
    },
    mounted() {
        this.school.getTopic(this.school.currentSubject.id, this.$route.params.topic as unknown as number)
        // this.user.isAdmin = true
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

        <h1>{{ school.currentSubject.name }} - {{ school.currentTopic.name }}</h1>
        <div>
            <!-- <h2>{{ school.currentTopic }}</h2> -->
        </div>
        <div v-for="content in school.currentTopic.contents" :key="content.id">
            <h2>{{ content.title }}</h2>
            <p>{{ content.zugriffe }}</p>
            <p>{{ content.content }}</p>
            <div v-for="img in content.images">
                <img :src="img" alt="Image" />
            </div>
            <div v-if="user.isAdmin" class="adminWindows">
                <button>delete</button>
                <button>edit</button>
                <button>image</button>
            </div>
            <div v-for="comment in content.comments" class="commentBox">
                <h3>{{ comment.user }}</h3>
                <p>{{ comment.content }}</p>
            </div>
        </div>
    </main>
</template>

<style>
.commentBox {
    border: 1px solid black;
    margin: 1rem;
    padding: 1rem;
}
.adminWindows {
    border-top: 1px solid black;
    margin: 1rem;
    background-color: rgba(0, 0, 0, 0.165);
}
</style>