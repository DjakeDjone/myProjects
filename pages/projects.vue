<template>
    <main>
        <h1>Projects</h1>
        <h2>
            This is the projects page. It's made to preview my projects.
        </h2>
        <ul>
            <li>
                <ion-icon></ion-icon>
                <a href="https://fri3dl.com/projects/todo/" target="_blank">Todo-list</a>
                <p>This is a page to manage and organize your todos! I made it for school</p>
            </li>
            <li>
                <a href="https://fri3dl.com/projects/pizza" target="_blank">Pizza</a>
                <p>This is a page to order pizza! I made it for school</p>
            </li>
            <li>
                <a href="https://chat.fri3dl.com/tabs/login" target="_blank">Chat-App</a>
                <p>This is a page to chat. I made it just for fun!</p>
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
    overflow-x: scroll;
    max-width: 100%;
    /* background-color: rgba(0, 0, 0, 0.157); */
    /* box-shadow: 0 0 0.5rem #fcfcfc; */
}

li {
    margin: 1rem;
    max-height: 80%;
    padding: 1rem;
    background-color: rgba(0, 0, 0, 0.157);
    box-shadow: 0 0 0.5rem #000000;
}

li:hover {
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 0.5rem #ffffff;
}

a {
    font-size: 1.5rem;
    text-decoration: none;
    color: var(--fg);
    /* text breake none */
    word-break: keep-all;
    min-width: 10rem;
    text-shadow: 0 0 0.5rem #fff;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

a:hover {
    color: var(--bg);
}</style>