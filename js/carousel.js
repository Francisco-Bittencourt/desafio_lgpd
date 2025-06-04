let carouselArr = []; //variavel com um array vazio

class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    } //classe carousel e a funçao constructor que cria o slide

    static index = 0; //slide começa do 0, ou seja, do primeiro.

    static Start(carouselArr) {
        Carousel.Show(carouselArr[Carousel.index]);

        Carousel.setInterval = setInterval(() => {
            Carousel.index = (Carousel.index + 1) % carouselArr.length;
            Carousel.Show(carouselArr[Carousel.index]);
        }, 2000);
    }

        static Show(carouselItem) {
        const carouselDiv = document.getElementById("carousel");
        const titleDiv = document.getElementById("carousel-title");

        carouselDiv.innerHTML = `<img src="img/${carouselItem.image}" style="width:100%; height:100%; object-fit:cover;" />`;
        titleDiv.innerHTML = `<a href="${carouselItem.url}">${carouselItem.title}</a>`;
    }

    
}

