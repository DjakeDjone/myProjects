<script lang="ts">
import { useUserstore } from '~/stores/user';

export default defineComponent({
    name: 'CookieAllow',
    setup() {
        const userstore = useUserstore();
        return {
            userstore
        }
    }
})
</script>

<template>
    <div id="cookieAllow">
        <div>
            <div>
                <NuxtIcon id="cookieIcon" name="cookie" size="2rem" />
                <h2>Cookies Consent</h2>
            </div>
            <p>This website uses cookies to save your login and user data, so you are logged in at all our sites.</p>
            <div id="cookieButtons">
                <button @click="userstore.cookieAllowed = true">Accept</button>
                <button @click="userstore.cookieAllowed = false">Decline</button>
            </div>
            <div id="saveSettings">
                <input type="checkbox" name="saveSetting"><label for="saveSetting">save decision</label>
            </div>
        </div>
    </div>
</template>

<style scoped>
#cookieAllow {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #0000002d;
    color: #ffffff;
    padding: 1rem;
    border-radius: 0 0 0 1rem;
    box-shadow: 0 0 1rem 0.5rem #000000;
}

#cookieAllow>div {
    width: 100%;
    max-width: 500px;
    background-color: #00000097;
    backdrop-filter: blur(0.2rem);
    padding: 1rem;
    border-radius: 1rem;
    box-shadow: 0 0 1rem 0.5rem #00000097;
}
#saveSettings label {
    text-align: left !important;
    padding-left: 0.5rem;
}
#saveSettings input {
    cursor: pointer;
    margin-left: 1rem;
}
#cookieAllow>div>div {
    display: grid;
    grid-template-columns: auto 3fr;
}
#cookieAllow>div>div>h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    margin-left: -1rem;
    display: inline-block;
}

#cookieAllow>div>p {
    font-size: 1rem;
    margin-bottom: 1rem;
}

#cookieAllow>div>#cookieButtons {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

#cookieAllow>div>#cookieButtons>button {
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    border: none;
    background-color: #00000000;
    color: #ffffff;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
}

#cookieAllow>div>#cookieButtons>button:hover {
    background-color: #ffffff;
    color: #000000;
    scale: 1.1;
}

#cookieAllow>div>#cookieButtons>button:active,
#cookieAllow>div>#cookieButtons>button:focus:active {
    background-color: #00000000;
    color: #ffffff;
    scale: 1;
}

@media screen and (min-width: 600px) {
    #cookieAllow>div {
        width: 25rem;
        padding-top: 2rem;
        padding-bottom: 2rem;
    }
    #cookieIcon {
        margin-left: 1rem;
    }
    #cookieAllow>div>div>h2 {
        margin-left: -2rem;        
    }
}
</style>