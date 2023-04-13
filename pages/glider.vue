<script lang="ts">
import { useErrorstore } from '../stores/error'
import { useBlogStore } from '../stores/blog'
export default defineComponent({
    name: 'Glider',
    setup() {
        const errorstore = useErrorstore()
        const blogstore = useBlogStore()
        return {
            errorstore,
            blogstore
        }
    },
    mounted() {
        this.blogstore.getBlog()
        const jetIcon = document.getElementById('jetIcon') as HTMLElement;
        const sendButton = document.getElementById('sendButton') as HTMLElement;
    },
    methods: {
        async sendComment() {
            try {
                await this.blogstore.postComment()
                const commentInput = document.getElementById('commentInput') as HTMLInputElement;
                commentInput.value = ''
            } catch (error) {
                this.errorstore.throwError(error as string)
            }
        }
    },
})
</script>

<template>
    <main>
        <div id="esp32Glider">
            <h1>Esp32 Glider</h1>
            <p>ESP32 Glider is a project to build a rc plane with a ESP32 microcontroller.</p>
            <br>
            <h2>
                What I have done so far:
            </h2>
            <ul>
                <li>
                    <p>I programmed the esp32 in C++, so that I can controll three servos with WebSockets</p>
                </li>
                <li>
                    <p>I developed a web interface to controll the servos</p>
                </li>
            </ul>
            <div class="programmCode" id="esp32Cpp">

            </div>
        </div>
        <div id="blog">
            <h1>Blog</h1>
            <div id="sendBlog">
                <h2>leave a comment</h2>
                <form @submit.prevent="sendComment()">
                    <input id="commentInput" type="text" v-model="blogstore.comment.content" placeholder="Comment">
                    <button type="submit" id="sendButton">
                        <nuxt-icon name="fighterJet" id="jetIcon"></nuxt-icon>
                    </button>
                </form>
            </div>
            <ul id="comments">
                <li v-for="comment in blogstore.comments" class="commentLi">
                    <div class="comment">
                        <h3>{{ comment.user }}</h3>
                        <p>{{ comment.content }}</p>
                        <i>{{ comment.time }}</i>
                    </div>
                </li>
            </ul>
        </div>
    </main>
</template>

<style scoped>
main {
    z-index: 0;
}

main * {
    z-index: 1;
}
.fly {
    animation: fly 1s ease-in-out;
}
#jetIcon {
    transition: all 2s;
    font-size: 1.5rem;
    z-index: 0;
    opacity: 0.8;
    color: inherit;
    transition: 0.2s;
}
h1,
#esp32Glider h2 {
    text-decoration: underline;
    text-align: center;
    margin-bottom: 1rem;
}

#esp32Glider {
    border-radius: 1rem;
    padding-bottom: 4rem;
}

#esp32Glider h1 {
    text-decoration: underline;
}

p {
    /* text-align: justify; */
    text-rendering: optimizeLegibility;
    font-size: 1.1rem;
    line-height: 1.5rem;
}

ul {
    list-style-type: none;
    padding: 0;
}

#comments {
    border-top: 1px solid #fff;
    box-shadow: 0px 0px 5px #fff;
    background-color: rgba(255, 255, 255, 0.103);
    backdrop-filter: blur(0.2rem);
    padding: 1rem;
    max-height: 80vh;
    overflow-y: scroll;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    color: black;
}

.commentLi {
    margin: 1rem;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 1rem;
    box-shadow: 0px 0px 5px #ffffff;
    /* border-bottom: 2px solid #000000; */
    max-width: 100%;
    flex-wrap: wrap;
    /* begin next line if the text is to long */
    word-break: break-word;
    color: black;
}

.commentLi:hover {
    background: rgba(0, 0, 0, 0.7);
    box-shadow: 0px 0px 7px #ffffff;
}

.commentLi h3 {
    text-align: left;
}

#sendBlog {
    transition: 2s;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.5);
    /* border-radius: 1rem; */
    box-shadow: 0px 0px 5px #fff;
    border-bottom: 2px solid #fff;
    flex-wrap: wrap;
}

form {
    display: grid;
    grid-template-columns: 3fr auto;
    margin-top: 1rem;
}
#sendBlog h2 {
    color: #000000b3;
}
#sendBlog form input {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background: rgba(0, 0, 0, 0.5);
    /* color: #ffffffa9; */
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    /* border-bottom: 2px solid #fff; */
}

#sendBlog form input:focus {
    box-shadow: 0px 0px 5px #fff;
    outline: none;
    border-bottom: 2px solid #fff;
    background-color: rgba(0, 0, 0, 0.175);
    color: #000000;
}

#sendBlog form button {
    width: 100%;
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background: rgba(0, 0, 0, 0.5);
    color: #ffffffa9;
    margin-left: 0.5rem;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

#sendBlog form button:hover {
    cursor: pointer;
    scale: 1.1;
    color: #ffffff;
}

#sendBlog form button:active {
    cursor: pointer;
    background: rgba(8, 8, 8, 0.092);
    box-shadow: 0px 0px 5px #fff;
    scale: 0.9;
}

@media screen and (min-width: 800px) {
    main {
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        grid-gap: 1rem;
        align-content: start;
        align-items: start;
        padding: 1rem;
    }
    main > * {
        margin-top: 0 !important;
        margin-bottom: auto;
    }
}
</style>