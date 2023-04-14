<script lang="ts">
export default defineComponent({
    name: 'RandomColors',
    data() {
        return {
            color1: 'rgba(59, 208, 110, 1)',
            color2: 'rgba(0, 88, 110, 1)', // background
        };
    },
    mounted() {
        const page = document.getElementById('page') as HTMLElement;
        const randomColorsMain = document.getElementById('background') as HTMLElement;
        this.changeColors(
            this.color1,
            this.color2,
        )
        randomColorsMain.onclick = () => {
            this.changeColorsRandom()
            console.log(this.color1, this.color2);
        }
    },
    methods: {
        copyGradient() {
            const p = document.getElementById('gradient') as HTMLElement;
            console.log(p.innerHTML);
        },
        changeColors(color1: string, color2: string) {
            const page = document.getElementById('page') as HTMLElement;
            page.style.setProperty('--fg', color1);
            page.style.setProperty('--bg', color2);
            this.color1 = color1;
            this.color2 = color2;
        },
        mouseGradient(x: number, y: number) {
            const page = document.getElementById('page') as HTMLElement;
            const xValue = x / window.innerWidth * 100;
            const yValue = y / window.innerHeight * 100;
            page.style.background = `radial-gradient(circle at ${xValue * 100}% ${yValue * 100}%, var(--fg) 0%, var(--bg) 100%)`;
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
        <div id="background">
            <h1>This page generates random radial backgrounds</h1>
        </div>
        <p id="gradient" @click="copyGradient()">radial-gradient(circle at {{ 50 }}% {{ 50 }}%, {{ color1 }} 0%, {{ color2 }} 100%)</p>
    </main>
</template>

<style scoped></style>