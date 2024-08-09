anillaTilt.init(document.querySelector(".box"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 1,
});





if ($('.hero .hero-text h2').length == 1) {
    let typed_strings = $('.hero .hero-text .typed-text').text();
    let typed = new Typed('.hero .hero-text h2', {
        strings: typed_strings.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
    });
}