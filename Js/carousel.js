(function initCarousel() {
    function carousel() {
        return {
            init() {
                this.container = this.$refs.container;
                this.slides = this.container.children;
                this.totalSlides = this.slides.length;
                this.currentSlide = 0;
                this.slideWidth = this.slides[0].offsetWidth;

                this.startInterval();
            },
            startInterval() {
                setInterval(() => {
                    this.slideLeft();
                }, 5000);
            },
            slideLeft() {
                const nextSlide = (this.currentSlide + 1) % this.totalSlides;

                this.container.style.transition = 'transform 1s ease-in-out';
                this.container.style.transform = `translateX(-${nextSlide * this.slideWidth}px)`;

                setTimeout(() => {
                    this.container.style.transition = 'none';
                    this.currentSlide = nextSlide;
                }, 1000);
            },
        };
    }

    window.carousel = carousel;
})();