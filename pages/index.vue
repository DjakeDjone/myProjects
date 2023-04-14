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
        <a href="">
            <h1>Home</h1>
        </a>
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

/* Underline styles */
h1 {
    display: block;
    position: relative;
    padding: 0.2rem 0;
}

/* Fade in */
h1::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1rem;
    background-color: rgba(255, 255, 255, 0.671);
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
}

h1:hover::after,
h1:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
}



h1::after,
h1:focus::after {
    transform: translate3d(0, 0, 0);
}

/* Scale from center */
h1::after {
    opacity: 1;
    transform: scale(0);
    transform-origin: center;
}

h1:hover::after,
h1:focus::after {
    transform: scale(1);
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