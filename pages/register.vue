<script lang="ts">
import { useUserstore } from '~/stores/user';


export default defineComponent({
    name: 'Register',
    setup() {
        const userstore = useUserstore();
        return {
            userstore,
        };
    },
    data() {
        return {
            email: '',
            username: '',
            password: '',
        };
    },
    methods: {
        register() {
            this.userstore.register(this.email, this.username, this.password);
        },
    },
});

</script>

<template>
    <main>
        <form @submit="register()">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" id="uname" placeholder="Username" />
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" id="password" placeholder="Password" />
            </div>
            <button class="submit">register</button>
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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}

input:hover {
    background-color: #00000043;
}

input:focus,
input:active {
    outline: none;
    border-bottom: 1px solid #fff;
    border-radius: 0 1rem 0 0;
}

.form-group {
    text-align: left;
}

.submit {
    font-size: 1rem;
    font-weight: 100;
    cursor: pointer;
    margin-top: 0.5rem;
    padding: 0.5rem;
    background-color: #0000009c;
    color: #ffffffa5;
    border-radius: 1rem 0 1rem 0;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
}

.submit:hover {
    text-decoration: underline;
    background-color: #0000009c;
    color: #fff;
    scale: 1.1;
    border-radius: 0 1rem 0 1rem;
}

.submit:focus,
.submit:active {
    outline: none;
    scale: 0.9;
}
</style>