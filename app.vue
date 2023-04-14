<script lang="ts">

export default defineComponent({
  name: 'App',
  data() {
    return {
      folded: false,
      color1: 'rgba(59, 208, 110, 1)',
      color2: 'rgba(59, 88, 110, 1)', // background
      color3: '',
      color4: '',
    };
  },
  mounted() {
    const page = document.getElementById('page') as HTMLElement;
    page.addEventListener('mousemove', (e) => {
      // console.log(e.clientX, e.clientY);
      this.mouseGradient(e.clientX, e.clientY);
    });
    this.changeColors(
      this.color1,
      this.color2,
    )
    // page.onclick = () => {
    //   this.changeColorsRandom()
    //   console.log(this.color1, this.color2);
    //   // rgba(59, 208, 110, 1) rgba(59, 88, 110, 1)
    // }
  },
  methods: {
    mouseGradient(x: number, y: number) {
      const page = document.getElementById('page') as HTMLElement;
      const xValue = x / window.innerWidth * 100;
      const yValue = y / window.innerHeight * 100;
      page.style.setProperty('--x', xValue.toString() + '%');
      page.style.setProperty('--y', yValue.toString() + '%');
    },
    menuFolder() {
      const nav = document.querySelector('nav') as HTMLElement;
      const page = document.getElementById('page') as HTMLElement;
      this.folded = !this.folded;
      nav.classList.toggle('close');
      nav.classList.toggle('open');
      page.classList.toggle('paddOn');
    },
    changeColors(color1: string, color2: string) {
      const page = document.getElementById('page') as HTMLElement;
      page.style.setProperty('--fg', color1);
      page.style.setProperty('--bg', color2);
      this.color1 = color1;
      this.color2 = color2;
    },
    changeColorsRandom() {
      const red = Math.floor(Math.random() * 255);
      const blue = Math.floor(Math.random() * 255);
      this.changeColors(`rgba(${red}, 208, ${blue}, 1)`, `rgba(${red}, 88, ${blue}, 1)`);
    },
    closeMenuFolder() {
      const nav = document.querySelector('nav') as HTMLElement;
      const page = document.getElementById('page') as HTMLElement;
      if (this.folded) {
        this.folded = !this.folded;
        nav.classList.toggle('close');
        nav.classList.toggle('open');
        page.classList.toggle('paddOn');
      }
    },
  },
});
</script>

<template>
  <div id="mainAll">
    <nav class="close">
      <nuxt-icon name="menu" @click="menuFolder()" id="menuIcon" />
      <ul v-if="folded">
        <li>
          <!-- <RouterLink to="/">Home</RouterLink> -->
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <!-- <RouterLink to="/glider">Glider</RouterLink> -->
          <NuxtLink to="/glider">Glider</NuxtLink>
        </li>
        <li>
          <!-- <RouterLink to="/projects">Projects</RouterLink> -->
          <NuxtLink to="/projects">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/randomColors">Background Generator</NuxtLink>
        </li>
      </ul>
    </nav>
    <div id="page" @click="closeMenuFolder()">
      <NuxtPage />
    </div>
    <footer>
      <p>Footer</p>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease-in-out;
  text-align: center;
  color: #ffffffb3;
  scrollbar-width: thin;
}

#mainAll {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #1e211fd4;
  color: #fff;
}

::selection {
  background: #ffffff80;
  color: #00000076;
}

#page {
  padding: 2rem;
  min-height: 100vh;
  background-size: 100% 100%;
  background-attachment: fixed;
  backdrop-filter: blur(1rem);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

@property --fg {
  syntax: '<color>';
  initial-value: #ffffff;
  inherits: false;
}

@property --bg {
  syntax: '<color>';
  initial-value: #00ff91;
  inherits: false;
}

:root {
  --x: 50%;
  --y: 50%;
}

#page {
  --fg: #ffffff;
  --bg: #00ff91;
  --y: 50%;
  --x: 50%;
  background: radial-gradient(circle at var(--x) var(--y),
      var(--fg) 0%,
      var(--bg) 100%);
  transition-property: --fg, --bg, --x, --y;
  transition-duration: 1s, 1s, 0s, 0s;
}

#page main {
  /* padding-top: 2rem; */
  /* padding: 0.5rem; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  /* min-height: 80vh; */
}
</style>

<style scoped>
.open {
  height: 100%;
}

#menuIcon {
  cursor: pointer;
}

.paddOn {
  padding-left: 6rem !important;
}

.close {
  /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */
  box-shadow: none;
  height: 100%;
  font-size: 2rem;
  transform: rotate(90deg);
  /* border-radius: 0 50% 0 0; */
  position: fixed;
  max-height: fit-content;
  overflow: hidden;
  background: #f5f5f500;
  height: 3rem;
  width: 3rem;
}

.close:hover {
  text-shadow: 0 0 0.5rem #fff;
  scale: 1.1;
}

/* nav */
nav {
  transition: all 0.5s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background: #f5f5f52c;
  backdrop-filter: blur(0.1rem);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  padding: 1rem;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
}

nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  /* justify-content: space-evenly; */
  align-items: center;
  height: 100%;
}

nav ul li {
  margin: 1rem 0;
}

nav * {
  text-decoration: none;
  /* color: #333; */
  font-size: 1.5rem;
}

/* nav .router-link-active {
  transition: all 0.3s ease-in-out;
  text-decoration: underline;
} */

.router-link-active {
  border-bottom: 2px solid #ffffffd9;
}

.router-link-active:hover {
  border-bottom: none;
}

/*  */
a {
  display: block;
  position: relative;
  padding: 0.2em 0;
}

a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: rgb(255, 255, 255);
  opacity: 0;
  transition: opacity 300ms, transform 300ms;
}

a:hover::after,
a:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}

a:hover::after,
a .router-link-active {
  transform: translate3d(0, 0, 0);
}


/* Slide in */
a {
  overflow: hidden;
}

a::after {
  opacity: 1;
  transform: translate3d(-100%, 0, 0);
}

@keyframes OpacityAni {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes slideIn {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
}

@media screen and (max-width: 768px) {
  #page {
    padding: 0.5rem;
    padding-top: 3rem;
  }
}</style>