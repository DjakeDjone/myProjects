<script lang="ts">
export default defineComponent({
    name: 'RandomColors',
    data() {
        return {
            color1: 'rgba(59, 208, 110, 1)',
            color2: 'rgba(0, 88, 110, 1)', // background
        };
    },
    setup() {
        definePageMeta({
            title: 'Home',
            description: 'Page to generate random colors for a radial gradient.',
            keywords: 'random, colors, radial, gradient',
            _transitionIdx: 3,
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
    },
    mounted() {
        const page = document.getElementById('page') as HTMLElement;
        const randomColorsMain = document.getElementById('background') as HTMLElement;
        this.changeColors(
            this.color1,
            this.color2,
        )
    },
    methods: {
        copyGradient() {
            const p = document.getElementById('gradient') as HTMLElement;
            console.log(p.innerHTML);
            navigator.clipboard.writeText(p.innerHTML);
        },
        changeColors(color1: string, color2: string) {
            const mainAll = document.getElementById('mainAll') as HTMLElement;
            mainAll.style.setProperty('--fg', color1);
            mainAll.style.setProperty('--bg', color2);
            this.color1 = color1;
            this.color2 = color2;
        },
        mouseGradient(x: number, y: number) {
            const mainAll = document.getElementById('mainAll') as HTMLElement;
            const xValue = x / window.innerWidth * 100;
            const yValue = y / window.innerHeight * 100;
            mainAll.style.background = `radial-gradient(circle at ${xValue * 100}% ${yValue * 100}%, var(--fg) 0%, var(--bg) 100%)`;
        },
        changeColorsRandom() {
            const red = Math.floor(Math.random() * 255);
            const blue = Math.floor(Math.random() * 255);
            this.changeColors(`rgba(${red}, 208, ${blue}, 1)`, `rgba(${red}, 88, ${blue}, 1)`);
        },
    },
    beforeUnmount() {
        const page = document.getElementById('page') as HTMLElement;
        page.removeEventListener('mousemove', (e) => {
            // console.log(e.clientX, e.clientY);
            this.mouseGradient(e.clientX, e.clientY);
        });
        this.color1 = 'rgba(59, 208, 110, 1)' as string,
            this.color2 = 'rgba(59, 88, 110, 1)' as string,
            this.changeColors(this.color1 as string, this.color2 as string)
    },
})
</script>

<template>
    <main>
        <div id="background" @click="changeColorsRandom()">
            <h1>This page generates random radial backgrounds</h1>
        </div>
        <div class="copyHtml">
            <p id="gradient">radial-gradient(circle at {{ 50 }}% {{ 50 }}%, {{ color1 }} 0%, {{
                color2 }} 100%)</p>
            <NuxtIcon @click="copyGradient" class="copyIcon" name="copy" />
        </div>
        <button @click="changeColorsRandom()">generate</button>
    </main>
</template>

<style scoped>
main {
    height: 100%;
    transition: all 0.3s ease;
}
button {
    background: var(--fg);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    color: var(--bg);
    border: none;
    padding: 0.5rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: all 0.5s ease;
}
button:hover {
    background: var(--bg);
    color: var(--fg);
}
button:active {
    scale: 0.6;
    /* turn the button up to 90deg */
    transform: rotateZ(-360deg);
    /* transition the transform to look smooth */
    /* transition: transform 0.9s; */
    /* padding: 0.5rem; */
}
#gradient {
    transition: all 0.3s ease;
}
.copyHtml {
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--bg);
    background-color: rgba(128, 128, 128, 0.319);
    padding: 0.5rem;
    border-radius: 0 0 0 0.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
}
.copyIcon {
    font-size: 1.5rem;
    margin-left: 0.5rem;
    transition: all 0.3s ease;
    margin-bottom: 0.5rem;
}
.copyHtml:hover {
    background: var(--fg);
    color: var(--bg);
}
.copyHtml:hover .copyIcon {
    transform: scale(1.2);
}
.copyIcon:active, .copyIcon:focus {
    scale: 0.6;
    /* padding: 0.5rem; */
}
</style>