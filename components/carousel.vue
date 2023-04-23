<script lang="ts">

export default defineComponent({
    data() {
        return {
            carouselIdx: 0,
            carouselLength: 2,
        };
    },
    mounted() {
        this.showOnly();
    },
    methods: {
        next() {
            this.carouselIdx = this.carouselIdx + 1 > this.carouselLength ? 0 : this.carouselIdx + 1;
            this.showOnly();
        },
        prev() {
            this.carouselIdx = this.carouselIdx - 1 < 0 ? this.carouselLength : this.carouselIdx - 1;
            this.showOnly();
        },
        showOnly() {
            const container = document.querySelector('.carousel__container__inner') as HTMLElement;
            const imgs = document.querySelectorAll('.carousel__container__inner img') as NodeListOf<HTMLElement>;
            imgs.forEach((img, idx) => {
                if (idx === this.carouselIdx) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        },
    },
})
</script>

<template>
    <div class="carousel">
        <div class="carousel__container">
            <div class="carousel__container__inner">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<style>
.carousel {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: -1;
}
.carousel__container__inner img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
}
</style>