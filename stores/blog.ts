import { Pinia } from "pinia";
import { defineStore } from "pinia";
import { useErrorstore } from "./error";

type comment = {
    id: number,
    user: string,
    time: string,
    content: string
};
export const useBlogStore = defineStore({
    id: "blog",
    state: () => ({
        blog: {},
        comments: [] as comment[],
        API_Base: "http://localhost:3300/api",
        comment: {
            name: "",
            content: "",
        }
    }),
    actions: {
        async startListener() {
            // listen to messages from the server
            const { data, pending, error, refresh } = await useFetch('/api/auth/login', {
                onRequest({ request, options }) {
                    // Set the request headers
                    options.headers = options.headers || {}                    
                },
                onRequestError({ request, options, error }) {
                    // Handle the request errors
                },
                onResponse({ request, response, options }) {
                    // Process the response data
                    console.log(response._data);
                    return response._data
                },
                onResponseError({ request, response, options }) {
                    // Handle the response errors
                }
            })
        },
        async getBlog() {
            const data = await useFetch(this.API_Base + "/blog/Glider", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            try {
                console.log(data.data.value);
                const msg = JSON.parse(data.data.value as string);
                this.blog = msg;
                this.comments = msg.comments;
            } catch (error) {
                console.log(error);
            }
        },
        async postComment() {
            if (this.comment.content == "") {
                useErrorstore().throwError("评论不能为空");
                return;
            }
            const data = await useFetch(this.API_Base + "/blog/Glider/comment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.comment)
            });
            try {
                console.log(data.data.value);
                const msg = JSON.parse(data.data.value as string);
                // this.comments.push(msg);
            } catch (error) {
                console.log(error);
            }
        },
    }
});