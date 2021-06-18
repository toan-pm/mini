$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoWidth: true,
        autoplay: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
});

$("#btnAbc").click(function(evnet){
    event.preventDefault();
    alert('Cảm ơn quý khách! Chức năng này hiện tại đang được xây dựng')
})