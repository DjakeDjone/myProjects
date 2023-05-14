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
    object-fit: cover;
    object-position: center;
}
img:hover {
    box-shadow: 0 0 1rem 0.5rem #ffffff;
    object-position: center;
    scale: 1.1;
}
.aboutText {
}
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
}
</style>