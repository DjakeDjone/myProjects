import { defineStore } from "pinia";
import { useMessagestore } from "./msg";
import Cookies from "js-cookie";

export const useUserstore = defineStore({
    id: "user",
    state: () => ({
        loggedIn: false,
        username: Cookies.get("username") || "",
        password: Cookies.get("password") || "",
        email: Cookies.get("email") || "",
        token: "",
        cookieAllowed: undefined as boolean | undefined,
        API_Base: useRuntimeConfig().public.API_Base,
    }),
    actions: {
        logout() {
            this.loggedIn = false;
            this.username = "";
            this.password = "";
            this.email = "";
            this.token = "";
            useMessagestore().throwInfo("Logged out", 5000);
        },
        checkCookie() {
            if (Cookies.get("username") != undefined) {
                this.cookieAllowed = true;
            } else {
                this.cookieAllowed = false;
            }
        },
        loadCookies() {
            if (this.cookieAllowed) {
                this.username = Cookies.get("username") || "";
                this.password = Cookies.get("password") || "";
                this.email = Cookies.get("email") || "";
            }
        },
        async session() {
            if (this.username == "" || this.password == "") {
                useMessagestore().throwError("Please enter your username and password", 5000);
                return;
            }
            const data = await useFetch(this.API_Base + "/session", {
                method: "POST",
                body: {
                    username: this.username,
                    password: hashPassword(this.password as string) as unknown as string,
                },
                cache: "no-cache",
            });
            try {
                let msg = JSON.parse(data.data.value as string);
                if (msg == null) {
                    useMessagestore().throwError("登录失败", 5000);
                    return;
                }
                console.log(msg);
                if (msg.type == "success") {
                    console.log("login successful");
                    this.loggedIn = true;
                    this.token = msg.token;
                    useMessagestore().throwInfo("Login successful!", 5000);
                    // create a cookie
                    Cookies.set("username", this.username as string);
                    Cookies.set("password", this.password as string);
                    Cookies.set("email", this.email as string);
                } else {
                    useMessagestore().throwError(msg.message, 5000);
                }
            } catch (e) {
                console.log(e);
            }
        },
        async register() {
            const data = await useFetch(this.API_Base + "/register", {
                method: "POST",
                body: {
                    username: this.username,
                    password: hashPassword(this.password as string) as unknown as string,
                    email: this.email,
                },
                cache: "no-cache",
            });
            try {
                let msg = JSON.parse(data.data.value as string);
                console.log(msg);
                if (msg != null && msg.type == "success") {
                    this.loggedIn = true;
                    this.token = msg.token;
                    // create a cookie
                    Cookies.set("username", this.username as string);
                    Cookies.set("password", this.password as string);
                    Cookies.set("email", this.email as string);
                    console.log('cookie set');
                    console.log(Cookies.get("username"));
                    useMessagestore().throwInfo("successful created an account!", 5000);
                } else {
                    useMessagestore().throwError(msg.message, 5000);
                }
            } catch (e) {
                console.log(e);
                useMessagestore().throwError("注册失败", 5000);
            }
        },
    },
});

function hashPassword(password: string) {
    let hash = 0;
    console.log(password);
    // if (password.length == 0) return hash;
    for (let i = 0; i < password.length; i++) {
        hash = password.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}
