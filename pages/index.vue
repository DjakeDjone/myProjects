<script lang="ts">
export default {
    transition: {
        name: 'fade',
        mode: 'out-in'
    }
}

</script>

<template>
    <main>
        <h1>Home</h1>
        <h2>
            This is the home page. It's a simple page with a background gradient
            and a title.
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
}</style>