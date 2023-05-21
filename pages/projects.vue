<script setup lang="ts">
definePageMeta({
    title: 'Projects',
    description: 'This is the projects page. It\'s made to preview my projects.',
    keywords: 'fri3dl.com, Benjamin Friedl, benji, vue, Vue, nuxt, Nuxt, node, Node, myProjects, myprojects',
    _transitionIdx: 2,
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
    },
})
</script>

<template>
    <main>
        <h1>Projects</h1>
        <h2>
            This is the projects page. It's made to preview my projects.
        </h2>
        <ul>
            <li>
                <a href="https://quiz.fri3dl.com">
                    <h2>Quiz-App</h2>
                    <img class="logo" src="../assets/icons/logoB.svg" alt="">
                    <p>This is a page to play or create quizes. I made it just for fun.</p>
                </a>
            </li>
            <li>
                <a href="https://quizsimple.fri3dl.com/">
                    <h2>Quiz-App</h2>
                    <img class="logo" src="../assets/icons/logoB.svg" alt="">
                    <p>This is a page to play one given Quiz. I made it for school</p>
                </a>
            </li>
            <li>
                <a href="https://old.fri3dl.com">
                    <h2>Old Website</h2>
                    <img class="logo" src="../assets/icons/logoB.svg" alt="">
                    <p>This is my old website. See the changes to my current landing!</p>
                </a>
            </li>
            <li>
                <a href="https://fri3dl.com/projects/todo/" target="_blank">
                    <h2>Todo-list</h2>
                    <!-- <NuxtIcon name="logoB" /> -->
                    <img class="logo" src="../assets/icons/logoB.svg" alt="">
                    <p>This is a page to manage and organize your todos! I made it for school</p>
                </a>
            </li>
            <li>
                <a href="https://fri3dl.com/projects/pizza" target="_blank">
                    <h2>
                        Pizza
                    </h2>
                    <img class="logo" src="../assets/icons/logoB.svg" alt="">
                    <p>This is a page to order pizza! I made it for school</p>
                </a>
            </li>
            <li>
                <a href="https://chat.fri3dl.com/tabs/login" target="_blank">
                    <h2>Chat-App</h2>
                    <img class="logo" src="../assets/icons/logoB.svg" alt="">
                    <p>This is a page to chat. I made it just for fun!</p>
                </a>
            </li>

        </ul>
        <ul>
            <li>
                <NuxtLink to="/glider">
                    <h2>Esp32 Glider</h2>
                    <img class="logo" src="../assets/icons/logoB.svg" alt="">
                    <p>A rc glilder controllable with the smartphone with a esp32 as controller</p>
                </NuxtLink>
            </li>
            <li>
                <NuxtLink to="/windrad">
                    <h2>windgenerator</h2>
                    <img class="logo" src="../assets/icons/logoB.svg" alt="">
                    <p>A selfmade windmill generates green energy for free!</p>
                </NuxtLink>
            </li>
        </ul>
    </main>
</template>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

h1 {
    font-size: 3rem;
    margin: 0;
}

h2 {
    font-size: 1.5rem;
    margin: 0;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    overflow-y: hidden;
    overflow-x: auto;
    max-width: 100%;
    /* background-color: rgba(0, 0, 0, 0.157); */
    /* box-shadow: 0 0 0.5rem #fcfcfc; */
}

li a {
    margin: 1rem;
    max-height: 80%;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.157);
    box-shadow: 0 0 0.5rem #000000;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 3fr;
    grid-template-areas: "img title" "img desc";
    border-radius: 0.5rem;
    overflow: hidden;
    /* its to height */
    height: 100%;
}

.logo {
    transition: transform .5s ease;
    grid-area: img;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
}

li a p {
    grid-area: desc;
    margin: 0;
    padding: 0;
    font-size: 1rem;
    color: var(--fg);
    text-shadow: 0 0 0.5rem var(--bg);
}

li a h2 {
    grid-area: title;
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    color: var(--fg);
    text-shadow: 0 0 0.5rem var(--bg);
}

li a *:hover {
    color: rgba(255, 255, 255, 0.727);
}

li a:hover img {
    transform: rotateY(180deg);
    /* scale: .9; */
}

li a:hover {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 0.5rem #ffffff;
}

a {
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--fg);
    word-break: keep-all;
    min-width: 15rem;
    text-shadow: 0 0 0.5rem #fff;
    color: white;
    grid-area: title;
    display: flex;
    align-items: center;
    justify-content: center;
}

a:hover {
    color: var(--bg);
}

@media screen and (max-width: 768px) {
    li a {
        margin: 1rem;
        max-height: 80%;
        padding: 1rem;
        background-color: rgba(0, 0, 0, 0.157);
        box-shadow: 0 0 0.5rem #000000;
        display: grid;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr 3fr;
        grid-template-areas: "img title" "img desc";
        border-radius: 0.5rem;
        overflow: hidden;
        /* its to height */
        height: 100%;
    }
}
</style>