<script lang="ts">

export default defineComponent({
    data() {
        return {
            carouselIdx: 0,
            carouselLength: 4,
        };
    },
    mounted() {
        this.showOnly();
        // setInterval(async () => {
        //     this.next();
        // }, 5000);
    },
    methods: {
        next() {
            if (this.carouselIdx === this.carouselLength) {
                this.carouselIdx = 0;
            } else {
                this.carouselIdx++;
            }
            this.showOnly();
        },
        prev() {
            this.carouselIdx = this.carouselIdx - 1 < 0 ? this.carouselLength : this.carouselIdx - 1;
            this.showOnly();
        },
        showImg(idx: number) {
            this.carouselIdx = idx;
            this.showOnly();
        },
        showOnly() {
            const container = document.querySelector('.carousel__container__inner') as HTMLElement;
            const imgs = document.querySelectorAll('.carousel__container__inner img') as NodeListOf<HTMLElement>;
            imgs.forEach((img, idx) => {
                if (idx === this.carouselIdx) {
                    // img.style.display = 'block';
                    img.style.opacity = '1';
                    img.style.width = '100%';
                } else {
                    // img.style.display = 'none';
                    img.style.opacity = '0';
                    img.style.width = '0%';
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
.carousel__container__inner {
    display: flex;
    flex-direction: row;
}
.carousel__container__inner img {
    width: 100%;
    transition: all 1s ease-in-out;
    height: 9rem;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.circle0 {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    margin: 0 0.5rem;
    background-color: #000000;
    box-shadow: 0px 0px 5px #ffffff;
}
.circle1 {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #000000;
}
#circles {
    position: relative;
    top: -1.5rem;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
}
</style>