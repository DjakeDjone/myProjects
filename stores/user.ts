import { defineStore } from "pinia";

export const useUserstore = defineStore({
    id: "user",
    state: () => ({
        loggedIn: false,
        username: "benjamin",
        password: "123456",
        email: "benji@gmx.at",
        token: "",
        API_URL: "http://localhost:3300/api",
    }),
    actions: {
        async session(username: String, password: String) {
            const data = await useFetch(this.API_URL + "/session", {
                method: "POST",
                body: {
                    username: username,
                    password: hashPassword(password),
                },
                cache: "no-cache",
            });
            try {
                let msg = JSON.parse(data.data.value as string);
                console.log(msg);
            } catch (e) {
                console.log(e);
            }
        },
        async register(username: String, password: String, email: String) {
            const data = await useFetch(this.API_URL + "", {
                method: "POST",
                body: {
                    name: username,
                    password: password,
                },
                cache: "no-cache",
            });
        },
    },
});

function hashPassword(password: String) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        hash = password.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}
    