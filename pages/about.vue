<script lang="ts" setup>

definePageMeta({
    title: 'Home',
    description: 'Welcome to my website. It\'s built with nuxt, Vue, and Node.js in the backend.',
    keywords: 'fri3dl.com, Benjamin Friedl, benji, vue, Vue, nuxt, Nuxt, node, Node',
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


</script>

<template>
    <main id="aboutMain">
        <div id="aboutText">
            <h1>About me</h1>
            <p>My name is Benjamin Friedl. I'm 16 years old and I live in Austria.</p>
            <p>Apart from Software developing I'm interesting in everything technical, I'm playing piano and I am committed
                to
                climate protection.</p>
        </div>
        <img src="../assets/images/me.jpg" alt="Image about me, Benjamin Friedl">
    </main>
</template>

<style scoped>
h1 {
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 1rem;
    color: var(--fg);
    text-shadow: 0px 0px 5px var(--bg);
}

h3 {
    font-size: 1.2rem;
    font-weight: 300;
    max-width: 20rem;
    /* margin-bottom: 3rem; */
}

p {
    font-size: 1.2rem;
    font-weight: 300;
    max-width: 20rem;
    margin-bottom: 1rem;
}

img {
    display: block;
    height: 15rem;
    width: 9rem;
    border-radius: 50%;
    margin-left: 2rem;
    box-shadow: 0 0 1rem 0.5rem #000000;
    opacity: 0.8;
    object-fit: cover;
    object-position: center;
    transition: all 1s ease-in-out;
}

img:hover {
    box-shadow: 0 0 1rem 0.5rem #ffffff;
    object-position: center;
    scale: 1.1;
    opacity: 1;
    filter: brightness(1.2);
}

/* .aboutText {
} */
#aboutMain {
    display: flex;
    flex-direction: row !important;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}

@media (max-width: 700px) {
    #aboutMain {
        flex-direction: column !important;
    }

    img {
        margin-left: 0;
        margin-top: 2rem;
    }
}</style>