<script lang="ts">
import { useMessagestore } from './stores/msg';
import { useUserstore } from './stores/user';

export default defineComponent({
  name: 'App',
  setup() {
    const messagestore = useMessagestore();
    const userstore = useUserstore();
    useServerSeoMeta({
      title: 'fri3dl',
      ogTitle: 'fri3dl',
      description: 'A website where I present my projects and websites',
      ogDescription: 'A website where I present my projects and websites',
      ogImage: 'https://fri3dl.com/logo.png',
      ogUrl: 'https://fri3dl.com',
      ogType: 'website',
      twitterCard: 'summary_large_image',
      twitterSite: '@fri3dl',
      twitterCreator: '@fri3dl',
    });
    return {
      messagestore,
      userstore,
    };
  },
  data() {
    return {
      folded: false,
      color1: 'rgba(59, 208, 110, 1)',
      color2: 'rgba(59, 88, 110, 1)', // background
      color3: '',
      color4: '',
    };
  },
  loading: {
    color: '#fff',
    height: '5px',
  },
  mounted() {
    const mainAll = document.getElementById('mainAll') as HTMLElement;
    mainAll.addEventListener('mousemove', (e) => {
      // console.log(e.clientX, e.clientY);
      this.mouseGradient(e.clientX, e.clientY);
    });
    this.changeColors(
      this.color1,
      this.color2,
    )
    // try to login
    // this.userstore.checkCookie();
    // this.userstore.loadCookies();
    // console.log(this.userstore.username, this.userstore.password);
    // this.userstore.session();
  },
  methods: {
    switchEnableAbleGradient(target: HTMLInputElement) {
      const mainAll = document.getElementById('mainAll') as HTMLElement;
      if (target.checked) {
        console.log('unchecked');
        mainAll.removeEventListener('mousemove', (e) => {
          // console.log(e.clientX, e.clientY);
          this.mouseGradient(e.clientX, e.clientY);
        });
        mainAll.style.background = `radial-gradient(circle at var(--x) var(--y), var(--fg) 0%, var(--bg) 100%)`;
      } else {
        console.log('checked');
        mainAll.addEventListener('mousemove', (e) => {
          // console.log(e.clientX, e.clientY);
          this.mouseGradient(e.clientX, e.clientY);
        });
        mainAll.style.background = `radial-gradient(circle at var(--x) var(--y), var(--fg) 0%, var(--bg) 100%)`;
      }
    },
    mouseGradient(x: number, y: number) {
      const page = document.getElementById('mainAll') as HTMLElement;
      const xValue = x / window.innerWidth * 100;
      const yValue = y / window.innerHeight * 100;
      page.style.setProperty('--x', xValue.toString() + '%');
      page.style.setProperty('--y', yValue.toString() + '%');
    },
    menuFolder() {
      const leftNav = document.getElementById('leftNav') as HTMLElement;
      const page = document.getElementById('mainAll') as HTMLElement;
      this.folded = !this.folded;
      leftNav.classList.toggle('close');
      leftNav.classList.toggle('open');
      page.classList.toggle('paddOn');
    },
    changeColors(color1: string, color2: string) {
      const page = document.getElementById('mainAll') as HTMLElement;
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
      const leftNav = document.getElementById('leftNav') as HTMLElement;
      const page = document.getElementById('page') as HTMLElement;
      if (this.folded) {
        this.folded = !this.folded;
        leftNav.classList.toggle('close');
        leftNav.classList.toggle('open');
        page.classList.toggle('paddOn');
      }
    },
  },
});
</script>

<template>
  <div id="mainAll">
    <div id="rightNav">
      <!-- <NuxtLink to="/login" v-if="!userstore.loggedIn">Login
        <NuxtIcon name="login" @click="" id="menuIcon" />
      </NuxtLink> -->
    </div>
    <nav class="close" id="leftNav">
      <nuxt-icon name="menu" @click="menuFolder()" id="menuIcon" />
      <ul v-if="folded">
        <li>
          <NuxtLink class="underlineEffect" to="/">Home</NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink class="underlineEffect" to="/glider">Glider</NuxtLink>
        </li> -->
        <li>
          <NuxtLink to="/projects">Projects</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/randomColors">generator</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/school">school</NuxtLink>
        </li>
        <li>
          <NuxtLink class="underlineEffect" to="/about">About</NuxtLink>
        </li>
        <!-- <li>
          <NuxtLink class="underlineEffect" to="/caps">Caps</NuxtLink>
        </li> -->
        <!-- <li>
          input toggle
          <input type="checkbox" id="switchAnimation" @click="switchEnableAbleGradient($event.target as HTMLInputElement)">
          <label for="switchAnimation">Toggle</label>
        </li> -->
      </ul>
    </nav>
    <div id="page" @click="closeMenuFolder()">
      <NuxtPage />
    </div>
    <footer>
      <NuxtLink to="/about" class="noEffect">
        <h3>© made by Benjamin Friedl</h3>
        <p>benjamin.friedl.f@gmx.at</p>
      </NuxtLink>
    </footer>
    <div id="errorFeld">
      <TransitionGroup name="list" tag="ul">
        <li v-for="msg in messagestore.messages" :key="msg.id">
          <Message>
            {{ msg.content }}
          </Message>
        </li>
      </TransitionGroup>
    </div>
    <!-- <AllowCookie v-if="userstore.cookieAllowed === undefined || userstore.cookieAllowed === false" /> -->
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

input[type=checkbox] {
  height: 0;
  width: 0;
  visibility: hidden;
}

input:checked+label {
  background: linear-gradient(to right, #00ff91, #004728);
  box-shadow: inset 0 0 0.5rem #000000;
}

input:checked+label:after {
  left: calc(100% - 0.25rem);
  transform: translateX(-100%);
}

label:active:after {
  width: 1.5rem;
}


button {
  user-select: none;
  cursor: pointer;
  border: none;
  background-color: #ffffff2c;
  color: #fff;
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1.2rem;
  margin: 0.5rem;
  /* box-shadow: 0 0 0.5rem #000000; */
}

button:hover {
  box-shadow: 0 0 0.5rem #ffffff;
}

button:active {
  box-shadow: 0 0 0.5rem #ffffff;
  transform: scale(0.9);
}

a {
  user-select: none;
}

.up-enter-active,
.up-leave-active,
.down-enter-active,
.down-leave-active {
  transition: all 0.3s;
}

.up-enter-from {
  opacity: 0;
  transform: translate(0, 3rem);
}

.up-leave-to {
  opacity: 0;
  transform: translate(0, -3rem);
}

.down-enter-from {
  opacity: 0;
  transform: translate(0, -3rem);
}

.down-leave-to {
  opacity: 0;
  transform: translate(0, 3rem);
}

#errorFeld {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 100;
  display: flex;
  justify-content: left;
  align-items: center;
  padding-left: 1rem;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

*::-webkit-scrollbar {
  width: 0.5rem;
}

.noEffect {
  text-decoration: none;
}

.noEffect::after {
  content: none !important;
  width: 0 !important;
}

.noEffect a:hover::after,
.noEffect a:focus::after {
  opacity: 0;
  transform: none;
}


#rightNav {
  backdrop-filter: blur(0.5rem);
  position: absolute;
  top: 0;
  right: 0;
  z-index: 100;
  display: inline-flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  padding-bottom: 0;
  /* background: #1e211fd4; */
  color: #fff;
}

#rightNav a {
  text-decoration: none;
}

#rightNav #menuIcon {
  font-size: 1.5rem;
  cursor: pointer;
}

#rightNav #menuIcon:hover {
  transition: all 0.3s ease-in-out;
  color: #fff;
  scale: 1.2;
}

#rightNav #menuIcon:active {
  transition: all 0.3s ease-in-out;
  color: #fff;
  scale: 0.8;
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
  transition: all 1s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 2rem;
  min-height: 100vh;
  background-size: 100% 100%;
  background-attachment: fixed;
  backdrop-filter: blur(1rem);
  box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

@property --fg {
  syntax: '<color>';
  initial-value: #000000;
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
  --footerHeight: 0;
  --pointColor: #ffffff2c;
}

#mainAll {
  --fg: #00ff15;
  --bg: #004728;
  --y: 50%;
  --x: 50%;
  background: radial-gradient(circle at var(--x) var(--y),
      var(--fg) 0%,
      var(--bg) 100%);
  /* transition-property: --fg, --bg, --x, --y;
  transition-duration: 1s, 1s, 0s, 0s; */
  transition: all 1s ease-in-out;
}

#page main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
}

footer {
  background-color: #00000088;
  padding: 1rem;
  color: #ffffffb3;
  /* margin-bottom: -1rem; */
  /* width: 100vw; */
  position: relative;
}

/* Underline styles */
h1,
.underline {
  display: block;
  position: relative;
  padding: 0.2rem 0;
}

/* Fade in */
h1::after,
.underline::after {
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
h1:focus::after,
.underline:hover::after,
.underline:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}



h1::after,
h1:focus::after,
.underline::after,
.underline:focus::after {
  transform: translate3d(0, 0, 0);
}

/* Scale from center */
h1::after,
h1:focus::after {
  opacity: 1;
  transform: scale(0);
  transform-origin: center;
}

h1:hover::after,
h1:focus::after,
.underline:hover::after,
.underline:focus::after {
  transform: scale(1);
}
</style>

<style scoped>
.open {
  height: 100%;
  backdrop-filter: blur(1rem);
}

#menuIcon {
  cursor: pointer;
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
  margin: .7rem 0;
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

@media screen and (max-width: 768px) {
  #errorFeld {
    align-items: flex-end;
  }
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
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column-reverse;
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>