<script lang="ts">
import { useUserstore } from '~/stores/user';
import { useBlogStore } from '~/stores/blog';
export default defineComponent({
    name: 'Home',
    transition: {
        name: 'fade',
        mode: 'out-in'
    },
    setup() {
        const title = ref('Home');
        const blogStore = useBlogStore();
        const userstore = useUserstore();
        definePageMeta({
            title: 'Home',
            description: 'Welcome to my website. It\'s built with nuxt, Vue, and Node.js in the backend.',
            keywords: 'fri3dl.com, Benjamin Friedl, benji, vue, Vue, nuxt, Nuxt, node, Node',
            _transitionIdx: 0,
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
            title,
            userstore,
            blogStore
        };
    },
    mounted() {
        // navigator.clipboard.writeText('fri3dl.com');
        // setTimeout(() => {
        //     this.blogStore.getNews();
        // }, 500);
        this.blogStore.getNews();
    }
});

</script>

<template>
    <main>
        <a href="https://fri3dl.com">
            <h1>Home</h1>
        </a>
        <h2>
            Welcome to my website. It's made with <a href="nuxt.com">nuxt</a>, Vue, and Node.js in the backend.
        </h2>
        <br>
        <h2>
            News:
        </h2>
        <ul id="newsList">
            <li class="newsItem" v-for="post in blogStore.news" :key="post.id">
                <a>
                    <h2>{{ post.title }}</h2>
                </a>
                <p>{{ post.description }}</p>
                <div class="newsContent">
                    <p v-html="post.content"></p>
                </div>
                <i>{{ post.date }}</i>
            </li>
        </ul>
    </main>
</template>

<style scoped>
* {
    font-family: 'Lato', sans-serif;
}

h1 {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 1rem;
    text-shadow: 0px 0px 5px #fff;
}

#newsList {
    margin-top: 1rem;
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
    flex-direction: row;
    align-items: flex-start;
    align-content: center;
}

.newsItem {
    margin: .5rem;
    padding: 1rem;
    background-color: #ffffff2c;
    box-shadow: 0px 0px 5px #000000;
    width: 45%;
}

.newsItem:hover {
    background-color: var(--pointColor);
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
}

.newsContent {
    /* display: none; */
    opacity: 0;
    transition: all 3s ease-in-out,
        max-height .5s ease-in-out,
        opacity .5s ease-in-out;
    height: auto;
    max-height: 0vh;
    overflow: hidden;
    /* text wrap */
    word-wrap: break-word;
    /* hyphenation support */
    -webkit-hyphens: auto;
    -moz-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
}

.newsItem:hover .newsContent {
    /* display: block; */
    opacity: 1;
    transition: all 3s ease-in-out,
        max-height 1s ease-in-out,
        opacity .5s ease-in-out;
    max-height: 50vh;
}


ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

/* Layout */
body {
    display: flex;
    justify-content: center;
    align-items: center;
}

ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

li {
    margin: 0 2rem;
}


@keyframes linearBackground {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}

@keyframes move {
    0% {
        background-position: 0 0;
    }

    100% {
        background-position: 100vw 100vh;
    }
}

@media screen and (max-width: 480px) {
    .newsItem {
        width: 90%;
    }    
}

@media screen and (min-width: 768px) {
    .newsItem {
        width: 45%;
    }    
}
@media screen and (min-width: 1024px) {
    .newsItem {
        width: 30%;
    }
}
</style>