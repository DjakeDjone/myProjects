<script lang="ts" setup>
// definePageMeta({
//     title: 'About me',
//     description: 'About me',
//     keywords: 'About me',
//     url: 'about',
//     type: 'website',
//     locale: 'en_US',
//     og: {
//         site_name: 'fri3dl.com',
//         type: 'website',
//         locale: 'en_US',
//         url: 'https://fri3dl.com/about',
//         title: 'About me',
//         description: 'About me',
//     },
//     _transitionIdx: 1,
// });
</script>

<template>
    <main>
        <h1>About me</h1>
        <p>My name is Benjamin Friedl. I'm 16 years old and I live in Austria.</p>
        <p>Apart from Software developing I'm interesting in everything technical, I'm playing piano and I am committed to
            climate protection.</p>
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
</style>