<script lang="ts">
import { useUserstore } from '~/stores/user';
export default defineComponent({
    name: 'Login',
    setup() {
        const userstore = useUserstore();
        return {
            userstore,
        };
    },
    data() {
        return {
            username: '',
            password: '',
        };
    },
    methods: {
        login() {
            this.userstore.session(this.username, this.password);
        },
    },
});
</script>

<template>
    <main>
        <form @submit="login()">
            <h1>Login</h1>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" class="form-control" id="username" placeholder="Username">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <button type="submit" class="submit">Submit</button>
            <RouterLink to="/register">New at fri3dl.com?</RouterLink>
        </form>
    </main>
</template>

<style scoped>
main {
    display: flex;
    align-items: center;
    height: 100vh;
}
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 20rem;
    padding: 1.2rem;
    border-radius: 2rem 0 2rem 0;
    background: #33333354;
}
form * {
    width: 100%;
    border: none;
}
input {
    text-align: left;
    width: 100%;
    margin: 0.5rem 0;
    margin-top: 0;
    background-color: #0000009c;
    padding: 0.5rem;
    border: none;
}
input:focus {
    outline: none;
    border-bottom: 1px solid #fff;
}
.form-group {
    text-align: left;
}
.submit {
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: #0000009c;
    color: #fff;
    border: none;
    border-radius: 1rem 0 1rem 0;
    cursor: pointer;
    margin-bottom: 1rem;
}
.submit:hover {
    background-color: #00000043;
    scale: 1.1;
}
.submit:focus,
.submit:active {
    outline: none;
    scale: .8;
}
</style>