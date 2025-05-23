let carouselArr = [];

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static index = 0;
    static setInterval = 0;

    static Start(carouselArray) {
        Carousel.Show(carouselArray[Carousel.index]);

        Carousel.setInterval = setInterval(() => {
            Carousel.index = (Carousel.index + 1) % carouselArray.length;
            Carousel.Show(carouselArray[Carousel.index]);
        }, 5000);
    }

        static Show(carouselItem) {
        const carouselDiv = document.getElementById("carousel");
        const titleDiv = document.getElementById("carousel-title");

        carouselDiv.innerHTML = `<img src="img/${carouselItem.image}" style="width:100%; height:100%; object-fit:cover;" />`;
        titleDiv.innerHTML = `<a href="${carouselItem.url}">${carouselItem.title}</a>`;
    }
}

