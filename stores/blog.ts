import { Pinia } from "pinia";
import { defineStore } from "pinia";
import { useMessagestore } from "./msg";
import { useUserstore } from "./user";

type comment = {
    id: number,
    user: string,
    time: string,
    content: string
};
type news = {
    id: number,
    title: string,
    date: string,
    content: string,
    description: string,
};
export const useBlogStore = defineStore({
    id: "blog",
    state: () => ({
        blog: {},
        comments: [] as comment[],
        logadingBlog: false,
        news: [] as news[],
        API_Base: useRuntimeConfig().public.API_Base,
        comment: {
            name: useUserstore().username,
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
        async getBlog(blogName: string = "Glider", from: number = 0, length: number = 10) {
            this.logadingBlog = true;
            console.log("getBlog", blogName);
            const data = await $fetch(this.API_Base + "/blog/" + blogName, {
                method: "GET",
                cache: "no-cache",
            });
            try {
                const msg = JSON.parse(data as string);
                this.blog = msg;
                this.comments = msg.comments;
                this.logadingBlog = false;
            } catch (error) {
                console.log(error);
                this.logadingBlog = false;
                useMessagestore().throwError("获取博客失败");
            }
        },
        async postComment() {
            if (this.comment.content == "") {
                useMessagestore().throwError("评论不能为空");
                return;
            }
            const data = await useFetch(this.API_Base + "/blog/Glider/comment", {
                method: "POST",
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
        async getNews() {
            const data = await $fetch(this.API_Base + "/news", {
                method: "GET",
                cache: "no-cache",
            });
            try {
                console.log(data);
                const msg = JSON.parse(data as string);
                if (msg.length == 0) {
                    useMessagestore().throwError("暂无新闻");
                    return;
                }
                this.news = JSON.parse(msg.news);
                this.news = sortNews(this.news);
                console.log("News:", this.news);
                useMessagestore().throwSuccess("news loaded", 1000);
            } catch (error) {
                console.log(error);
                useMessagestore().throwError("获取新闻失败");
            }
        }
    }
});

function sortNews(news: news[]) {
    // sort them by date
    for (let i = 0; i < news.length; i++) {
        for (let j = i + 1; j < news.length; j++) {
            if (news[i].date < news[j].date) {
                let temp = news[i];
                news[i] = news[j];
                news[j] = temp;
            }
        }
    }
    return news;
}