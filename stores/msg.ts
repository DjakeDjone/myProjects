import { Pinia } from "pinia";
import { defineStore } from "pinia";

export const useMessagestore = defineStore({
    id: "msg",
    state: () => ({
        error: false,
        errorMsg: [] as String[],
        successMsg: [] as String[],
    }),
    actions: {
        throwError(msg: String) {
            this.errorMsg.push(msg);
            this.error = true;
        },
        removeError() {
            this.errorMsg.pop();
            if (this.errorMsg.length == 0) {
                this.error = false;
            }
        }
    },
});