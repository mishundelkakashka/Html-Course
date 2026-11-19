const logo_img = document.getElementById("logo-img");

logo_img.src = "logo.png"

$(document).ready(function(){
    $('.carousele').slick({
        slidesToShow: 3,        // сколько картинок видно
        slidesToScroll: 1,      // по сколько пролистывается
        autoplay: true,         // крутится само
        autoplaySpeed: 3000,    // каждые 3 секунды
        dots: true,             // точки под слайдером
        infinite: true,         // зациклено
        speed: 400,
        responsive: [           // адаптив
            {
                breakpoint: 768,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1 }
            }
        ]
    });
});