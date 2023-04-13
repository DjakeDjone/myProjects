import { defineStore } from "pinia";

export const useBlogStore = defineStore({
    id: "blog",
    state: () => ({
        username: "",
        password: "",
        token: "",
    }),
});
    