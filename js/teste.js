/*
class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static index = 0;
    static interval = null;

    static Start(carouselArray) {
        Carousel.Show(carouselArray[Carousel.index]);

        Carousel.interval = setInterval(() => {
            Carousel.index = (Carousel.index + 1) % carouselArray.length;
            Carousel.Show(carouselArray[Carousel.index]);
        }, 5000); // 5 segundos
    }

    static Show(carouselItem) {
        const carouselDiv = document.getElementById("carousel");
        const titleDiv = document.getElementById("carousel-title");

        carouselDiv.innerHTML = `<img src="img/${carouselItem.image}" style="width:100%; height:100%; object-fit:cover;" />`;
        titleDiv.innerHTML = `<a href="${carouselItem.url}">${carouselItem.title}</a>`;
    }
}

const carouselArr = []; // prepara o array que você está usando no HTML

teste-2
// Armazena os slides
let carouselArr = [];

// Classe Carousel
class Carousel {
    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static _sequence = 0;
    static _size = 0;
    static _interval = null;

    // Inicia o carrossel
    static Start(arr) {
        if (arr && arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel.Show(arr[Carousel._sequence]); // mostra o primeiro slide
            Carousel._interval = setInterval(function () {
                Carousel.Next(arr);
            }, 5000);
        } else {
            throw "Method Start needs a non-empty array.";
        }
    }

    // Avança para o próximo slide
    static Next(arr) {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel.Show(arr[Carousel._sequence]);
    }

    // Mostra o slide atual
    static Show(carouselItem) {
        const carouselDiv = document.getElementById("carousel");
        const titleDiv = document.getElementById("carousel-title");

        carouselDiv.innerHTML = `<img src="img/${carouselItem.image}" style="width:100%; height:100%; object-fit:cover;" />`;
        titleDiv.innerHTML = `<a href="${carouselItem.url}">${carouselItem.title}</a>`;
    }
}
    
*/