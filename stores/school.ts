import { defineStore } from "pinia";
import { useUserstore } from "./user";
import type { comment } from "./blog";

export type Content = {
    id: number,
    title: string,
    content: string,
    images: string[],
    zugriffe: number,
    comments: comment[]
};
export type Topic = {
    id: number,
    name: string,
    contents: Content[],
};
export type Subject = {
    id: number,
    name: string,
    topics: Topic[],
};
export type SubjectPreview = {
    id: number,
    name: string,
    topics: [],
    contributions: number,
    zugriffe: number,
    lastEdit: string,
};

export const useSchoolStore = defineStore({
    id: "school",
    state: () => ({
        subjects: [] as SubjectPreview[],
        currentSubject: {} as Subject,
        currentTopic: {} as Topic,
        currentContent: {} as Content,
        API_Base: useUserstore().API_Base,
    }),
    actions: {
        async getSubjects() {
            const data = await $fetch(this.API_Base + "/subjects", {
                method: "GET",
                cache: "no-cache",
            });
            try {
                const msg = JSON.parse(data as string);
                this.subjects = JSON.parse(msg.subjects as string);
                console.log("subjects", this.subjects);
            } catch (error) {
                console.log("error", error);
            }
        },
        async getSubject(id: number) {
            const data = await $fetch(this.API_Base + "/subject/" + id, {
                method: "GET",
                cache: "no-cache",
            });
            console.log("data", data);
            try {
                const msg = JSON.parse(data as string);
                this.currentSubject = JSON.parse(msg.content as string);
                console.log("subject", this.currentSubject);
            }
            catch (error) {
                console.log("error", error);
            }
        },
        async getTopic(subjectId: number, topicId: number, from: number = 0, anz: number = 10) {
            // from = 0, anz = 10
            const data = await $fetch(this.API_Base + "/subject/" + subjectId + "/" + topicId, {
                method: "GET",
                cache: "no-cache",
                params: {
                    from: from,
                    anz: anz,
                }
            });
            console.log("data", data);
            try {
                const msg = JSON.parse(data as string);
                this.currentTopic = JSON.parse(msg.topicMeta as string);
                this.currentTopic.contents = JSON.parse(msg.contents as string);
                console.log("topic", this.currentTopic);
            }
            catch (error) {
                console.log("error", error);
            }
        },
        async getContent(subjectId: number, topicId: number, contentId: number) {
            const data = await $fetch(this.API_Base + "/subject/" + subjectId + "/" + topicId + "/" + contentId, {
                method: "GET",
                cache: "no-cache",
            });
            console.log("data", data);
            try {
                const msg = JSON.parse(data as string);
                this.currentContent = JSON.parse(msg.contents as string);
                console.log("content", this.currentContent);
            }
            catch (error) {
                console.log("error", error);
            }
        }  
    },
})