

// select2
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});

// $(function(){
//
//     $('.count-product').on('click', '.btn', function(e){
//         // var numberElement=$('#gueste1');
//         // console.log(numberElement.val());
//         // if(numberElement.val()==null || numberElement.val()=='undifind')
//         //     numberElement.val(1);
//         var input = $(this).parents('div.count-product').children('input');
//         var value = parseInt(input.attr('value'));
//         var min = parseInt(input.attr('min'));
//         var max = parseInt(input.attr('max'));
//         if ($(this).hasClass('up')) { var op = +1;} else {var op = -1;}
//         if (!(min==value && op == -1) && !(max==value && op == +1)) {
//             input.attr('value', value + op)
//         }
//     })
// });
$(function(){
    $('.guestse .number .count-product').on('click', '.btn', function(e){
        var input = $(this).parents(' .number').children('input');
        var value = parseInt(input.attr('value'));
        var min = parseInt(input.attr('min'));
        var max = parseInt(input.attr('max'));
        if ($(this).hasClass('up')) { var op = +1;} else {var op = -1;}
        if (!(min==value && op == -1) && !(max==value && op == +1)) {
            input.attr('value', value + op)
        }
    })

});
$(function(){
    $('.count-product .item-number').on('click', '.btn--', function(e){
        var input = $(this).parents('div.count-product .item-number').children('input');
        var value = parseInt(input.attr('value'));
        var min = parseInt(input.attr('min'));
        var max = parseInt(input.attr('max'));
        if ($(this).hasClass('up')) { var op = +1;} else {var op = -1;}
        if (!(min==value && op == -1) && !(max==value && op == +1)) {
            input.attr('value', value + op)
        }
    })
});
$(function(){
    $('.count-product').on('click', '.btn', function(e){
        var input = $(this).parents('div.count-product').children('input');
        var value = parseInt(input.attr('value'));
        var min = parseInt(input.attr('min'));
        var max = parseInt(input.attr('max'));
        if ($(this).hasClass('up')) { var op = +1;} else {var op = -1;}
        if (!(min==value && op == -1) && !(max==value && op == +1)) {
            input.attr('value', value + op)
        }
    })
});
$(function(){
    $('.count-product ').on('click', '.btn--', function(e){
        var input = $(this).parents('div.count-product').children('input');
        var value = parseInt(input.attr('value'));
        var min = parseInt(input.attr('min'));
        var max = parseInt(input.attr('max'));
        if ($(this).hasClass('up')) { var op = +1;} else {var op = -1;}
        if (!(min==value && op == -1) && !(max==value && op == +1)) {
            input.attr('value', value + op)

        }
    })
});
var slider = $('.slider-testmonial')
slider.owlCarousel({
    loop:false,
    margin:0,
    rtl:true,
    dots:true,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    dotsContainer:'#slider-dot',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
});
var sliderIndex = $('.slider-index')
sliderIndex.owlCarousel({
    loop:false,
    margin:0,
    rtl:true,
    dots:false,
    nav:true,
    autoplay:true,
    smartSpeed:450,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    navContainer:'.nav-index',
    navText:['<i class="icon-right-arrow"></i>','<i class="icon-left-arrow"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
var sliderTravel = $('.slider-travel')
sliderTravel.owlCarousel({
    loop:true,
    margin:0,
    rtl:true,
    dots:false,
    nav:true,
    autoplay:false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navContainer:'.nav-travel',
    navText:['<i class="icon-right-arrow"></i>','<i class="icon-left-arrow"></i>'],
    responsive:{
        0:{
            items:1
        },

        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});
var destinationSlider = $('.destination-slider')
destinationSlider.owlCarousel({
    loop: true,
    margin:0,
    rtl:true,
    dots:false,
    nav:true,
    autoplay:false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navContainer:'#destination',
    navText:['<i class="icon-right-arrow"></i>','<i class="icon-left-arrow"></i>'],
    responsive:{
        0:{
            items:1
        },

        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
var blog = $('.blog-slider')
blog.owlCarousel({
    loop:false,
    margin:0,
    rtl:true,
    dots:false,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navContainer:'#nav',
    navText:['<i class="icon-right-arrow"></i>','<i class="icon-left-arrow"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
var Tour = $('.slider-item')
Tour.owlCarousel({
    loop:false,
    margin:0,
    rtl:true,
    dots:false,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navContainer:'#tour',
    navText:['<i class="icon-right-arrow"></i>','<i class="icon-left-arrow"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
var blogDetails = $('.slider-blog-details')
blogDetails.owlCarousel({
    loop:false,
    margin:0,
    rtl:true,
    dots:false,
    nav:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navContainer:'#navblog',
    navText:['<i class="icon-right-arrow"></i>','<i class="icon-left-arrow"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
var modal = $('.slider-modal')
modal.owlCarousel({
    loop:true,
    margin:0,
    rtl:true,
    dots:false,
    nav:true,
    autoplay:false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navContainer:'#navmodal',
    navText:['<i class="icon-right-chevron"></i>','<i class="icon-left-chevron"></i>'],
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

// Read More
$('.overview-1 .read-more > .read-more__expand .btn').on('click', function() {
    $(this).parents('.read-more').toggleClass('collapsed');
    // $(this).text($(this).text() == 'ادامه ' ? '  بستن ' :'ادامه ');
});

// ADD CLASS
$(".show-on-mobile").click(function() {
    $('.side-grid').addClass('filter'),
    $('.header-grid').addClass('filter')
});
$(".fa-times").click(function() {
    $('.side-grid').removeClass('filter'),
        $('.header-grid').removeClass('filter'),
        $('.place-details .side').removeClass('side-reserv')
});

$(".reserv-fix-mobile").click(function() {
    $('.place-details .side').addClass('side-reserv')
});


// Fliter RESPONSIVE
function myFunction(x) {
    if (x.matches) {
        // res
        $(document).ready(function(){
            $(".header-fix-mobile").show(),
                $(".reserv-fix-mobile").show(),
                // $(".fa-times").show(),
                $(".side-grid .mobile-filter").show(),
                $(".header-grid").hide(),
                $(".side-other").show(),
            $(".side-grid-").hide(),
                $(".place-details .side .close").show()
        });
    } else {

        // window
        $(document).ready(function(){
            $(".header-fix-mobile").hide(),
                $(".reserv-fix-mobile").hide(),
                // $(".fa-times").hide(),
                $(".side-grid .mobile-filter").hide(),
                $(".header-grid").show(),
                $(".side-other").hide(),
            $(".side-grid-").show(),
                $(".place-details .side .close").hide()
        });
    }
}
var x = window.matchMedia("(max-width: 1200px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
// END FILTER

// ADD CLASS AFTER SCROLL
$(window).scroll(function(){
    if ($(this).scrollTop() >150) {
        $('.scroll-fix').addClass('show');
    } else {
        $('.scroll-fix').removeClass('show');
    }
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
        $('.rsmm-open-button').addClass('change');
    } else {
        $('.rsmm-open-button').removeClass('change');
    }
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 450) {
        $('.header-fix').addClass('show');
    } else {
        $('.header-fix').removeClass('show');
    }
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 300) {
        $('.show-on-mobile-place').addClass('show');
    } else {
        $('.show-on-mobile-place').removeClass('show');
    }
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 0) {
        $('.grid-show').addClass('show');
    } else {
        $('.grid-show').removeClass('show');
    }
});
$(window).scroll(function(){
    if ($(this).scrollTop() > 400){
        $('.header-content').addClass('color-bg');
    } else {
        $('.header-content ').removeClass('color-bg');
    }
});

// Momdal
$(document).ready(function(){
    $("img").click(function(){
        var t = $(this).attr("src");
        $(".modal-body").html("<img src='"+t+"' class='modal-img'>");
        $("#myModal").modal();
    });
})

// Nav
$(document).ready(function() {
    $('.myNav').rsmm({
        'mobile' : 930,
        'position' : 'fixedOn<a href="https://www.jqueryscript.net/tags.php?/Scroll/">Scroll</a>'
    });
});

// lng item
$('.nav-item .lng .down-arrow').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).slideDown(300);
},
    function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(100).slideUp(300);
});



//heart like
$('.heart').on('click', function() {
    var $this = $(this);
    $this.toggleClass('beating');
});
// Active
$('.header-blog .btn-group .category-button2').click(function () {
    $('.btn-group').find('.active-model').removeClass('active-model');
    $(this).addClass('active-model')
});
$(' .btn-group .category-button2').click(function () {
    $('.btn-group').find('.active-model').removeClass('active-model');
    $(this).addClass('active-model')
});
$('.place-details .btn-group .category-button2').click(function () {
    $('.btn-group').find('.active-model').removeClass('active-model');
    $(this).addClass('active-model')
});
$(' .pagination a').click(function () {
    $('.pagination').find('.active').removeClass('active');
    $(this).addClass('active')
});
$('.ourtravel.btn-group .category-button2').click(function () {
    $('.btn-group').find('.active-model').removeClass('active-model');
    $(this).addClass('active-model')
});
$('.top-grid .grid  .category-button2').click(function () {
    $('.top-grid .grid ').find('.active-model').removeClass('active-model');
    $(this).addClass('active-model')
});


// Scroll
$(".scroll").click(function (){
    $('html, body').animate({
        scrollTop: $(".category").offset().top
    }, 400);
});
$(".s").click(function (){
    $('html, body').animate({
        scrollTop: $(".calender-1").offset().top
    }, 600);
});
$(".space").click(function (){
    $('html, body').animate({
        scrollTop: $(".space-1").offset().top
    }, 700);
});
$(".sleep").click(function (){
    $('html, body').animate({
        scrollTop: $(".sleep-1").offset().top
    }, 900);
});
$(".capacity").click(function (){
    $('html, body').animate({
        scrollTop: $(".capacity-1").offset().top
    }, 800);
});
$(".details").click(function (){
    $('html, body').animate({
        scrollTop: $(".details-1").offset().top
    }, 900);
});
$(".overview").click(function (){
    $('html, body').animate({
        scrollTop: $(".overview-1").offset().top
    }, 800);
});
$(".author").click(function (){
    $('html, body').animate({
        scrollTop: $(".author-1").offset().top
    },800);
});
$(".gallery").click(function (){
    $('html, body').animate({
        scrollTop: $(".gallery-1").offset().top
    }, 600);
});
$(".map").click(function (){
    $('html, body').animate({
        scrollTop: $(".map-1").offset().top
    }, 600);
});
$(".facilities").click(function (){
    $('html, body').animate({
        scrollTop: $(".facilities-1").offset().top
    }, 600);
});
$(".scores").click(function (){
    $('html, body').animate({
        scrollTop: $(".scores-1").offset().top
    }, 800);
});
$(".reviews").click(function (){
    $('html, body').animate({
        scrollTop: $(".reviews-1").offset().top
    }, 800);
});
$(".scroll-fix").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});
$(".about-1").click(function (){
    $('html, body').animate({
        scrollTop: $(".about").offset().top
    }, 800);
});
$(".destination-1").click(function (){
    $('html, body').animate({
        scrollTop: $(".destination").offset().top
    }, 800);
});
$(".video-1").click(function (){
    $('html, body').animate({
        scrollTop: $(".video").offset().top
    }, 1800);
});
$(".travel-1").click(function (){
    $('html, body').animate({
        scrollTop: $(".travel").offset().top
    }, 2000);
});


// Close LOGIN
$(".btn-close").click(function() {
    $('.content-form').addClass('remove');
    $('.index-').removeClass('opacity');
});
$( ".icon-cross" ).click( function(){
    $( this ).closest( ".tr" ).fadeOut( 200, function() {$( this ).remove();});
    $thisClass = $ ( this ).closest( ".tr" ).attr( "class" );
    $( ".tr" ).hasClass( $thisClass ).remove();

});

// Price
$('.title-filter').click(function () {
    $(this).parent().find('.body-filter').slideToggle();
    $(this).find('i').toggleClass('d-none')
})
$(document).ready(function(){
    $('.range-slider-demo').jRange({
        from: 30,
        to: 6200,
        step: 1,
        format: '%s',
        width: 270,
        showLabels: true,
        isRange : true
    });
});



// ACTIVE BTN
$('.nav .nav-item').click(function () {
    $('.nav').find('.active-rate').removeClass('active-rate');
    $(this).addClass('active-rate')
});
$('.sidePanelMain .sidebarnav .nav-item').click(function () {
    $('.sidePanelMain .sidebarnav').find('.active').removeClass('active');
    $(this).addClass('active')
});

// Search
function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
    if(!container.hasClass('active')){
        container.addClass('active');
        evt.preventDefault();
    }
    else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
        container.removeClass('active');
        // clear input
        container.find('.search-input').val('');
        // clear and hide result container when we press close
        container.find('.result-container').fadeOut(100, function(){$(this).empty();});
    }
}

// FILTER
$(document).ready(function(){
    // clicking button with class "category-button"
    $(".category-button2").click(function(){
        // get the data-filter value of the button
        var filterValue = $(this).attr('data-filter');
        $(".filter-sec2").not('.'+filterValue).hide();
        // and then, show only items with selected data-filter value
        $(".filter-sec2").filter('.'+filterValue).show();
    });

});
var DisplayClass=jQuery('.nav>.active').data('filter');
jQuery(".filter-sec").css('display','none');
jQuery("."+DisplayClass).css('display','block');

/*========== Side Panel  ==========*/
$('.sidePanelClose').click(function(){
    $('.sidebar-dashboard').toggleClass('sidePanelMainClosed');
    $('.sidebarnav .nav-item .has-arrow .hide-menu').stop().toggle();
    $('.sidebarnav .nav-small-cap').toggleClass('hide');
});

// dashboard
$('.noticifacion').click(function () {
   $('.mailbox').slideToggle("slow show");
});

//persian nummber
$(document).ready(function () {

    ConvertNumberToPersions();
});
function ConvertNumberToPersions() {
    persian = { 0: '۰', 1: '۱', 2: '۲', 3: '۳', 4: '۴', 5: '۵', 6: '۶', 7: '۷', 8: '۸', 9: '۹' };
    function traverse(el) {
        if (el.nodeType == 3) {
            var list = el.data.match(/[0-9]/g);

            if (list != null && list.length != 0) {
                for (var i = 0; i < list.length; i++)
                el.data = el.data.replace(list[i], persian[list[i]]);
            }
        }
        for (var i = 0; i < el.childNodes.length; i++) {
            traverse(el.childNodes[i]);
        }
    }
    traverse(document.body);
};

// video
videojs.autoSetup();
videojs('my_video_1').ready(function(){
    console.log(this.options()); //log all of the default videojs options
    // Store the video object
    var myPlayer = this, id = myPlayer.id();
    // Make up an aspect ratio
    var aspectRatio = 9/16;
    function resizeVideoJS(){
        var width = document.getElementById(id).parentElement.offsetWidth - 30;
        myPlayer.width(width).height( width * aspectRatio );
    }
    // Initialize resizeVideoJS()
    resizeVideoJS();
    // Then on resize call resizeVideoJS()
    window.onresize = resizeVideoJS;
});

//video
$(document).on('click', ".btn_video", function () {
    $('.videobg').addClass("show");
    $('.btn-close').addClass("show");
    $('.detail-video').addClass("hide");
    videojs('my_video_1').ready(function(){
        this.play()
    });

});
$(document).on('click', ".btn-close", function () {
    $('.videobg').removeClass("show");
    $('.btn-close').removeClass("show");
    $('.detail-video').removeClass("hide");
    videojs('my_video_1').ready(function(){
        this.pause()
    });
});

// select2
$(document).ready(function() {
    $('.js-example-basic-single').select2();
});


