<script lang="ts">
export default defineComponent({
    name: 'Home',
    transition: {
        name: 'fade',
        mode: 'out-in'
    },
    setup() {
        const title = ref('Home');
        return {
            title
        };
    },
    mounted() {
        this.title = 'Home';
        navigator.clipboard.writeText('fri3dl.com');
    }
});

</script>

<template>
    <main>
        <a href="">
            <h1>Home</h1>
        </a>
        <h2>
            Welcome to my website. It's made with <a href="nuxt.com">nuxt</a>, Vue, and Node.js in the backend.
        </h2>
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
</style>