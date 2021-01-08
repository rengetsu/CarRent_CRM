/*------------------------------------------------------------------

[Table of contents]
1. Time picker
2. car list style
3. reservation links
4. castum  selectop for price
5.  accordion
6. scroll menu
7. dropdown animation
8. home active care
9. bootstrap select
10. tabs
11 Swipper
12.Menu
13 backround block with image
14 map 
15 Load resize
-------------------------------------------------------------------*/

;
(function($, window, document, undefined) {
    "use strict";

// time picker

    if ($('.timepicker').length) {
        $('.timepicker').datetimepicker({
            datepicker: false,
            format: 'H:i'
        });
    }
    if ($('.datetimepicker').length) {


        $.datetimepicker.setLocale('de');

        $('.datetimepicker').datetimepicker({
            i18n: {
                de: {
                    months: [
                        'Januar', 'Februar', 'März', 'April',
                        'Mai', 'Juni', 'Juli', 'August',
                        'September', 'Oktober', 'November', 'Dezember',
                    ],
                    dayOfWeek: [
                        "So.", "Mo", "Di", "Mi",
                        "Do", "Fr", "Sa.",
                    ]
                }
            },
            timepicker: false,

            format: 'd.m'
        });
    }



$('.wheel-table-cart .fa-times').on('click', function (e) {
   $(this).parent().parent().remove();
});

    // car list style
    $('.wheel-car-list-btn a').on('click', function(event) {
        event.preventDefault();
        var that = $(this),
            newStyle = $('.product-elem-style'),
            thatAttr = that.attr('data-list');

        if (that.hasClass('active')) {
            return false;
        } else {
            that.parent('.wheel-car-list-btn').find('a').removeClass('active')
            that.addClass('active')
            if (newStyle.hasClass('product-elem-style2')) {
                console.log(newStyle.parent());
                newStyle.parent().removeClass('col-lg-4  col-md-6').addClass('col-xs-12')
                newStyle.removeClass('product-elem-style2')
                newStyle.addClass(thatAttr)
            } else {
                newStyle.removeClass('product-elem-style1')
                newStyle.parent().removeClass('col-xs-12').addClass('col-lg-4  col-md-6')
                newStyle.addClass(thatAttr)
            }

        }


    });

    // reservation links

    $('.reservation .wheel-start-form label.promo button').on('click', function(event) {
        event.preventDefault();
        window.location.href = "reservation2.html";
    });

    $('.product-list .wheel-btn').on('click', function(event) {
        event.preventDefault();
        window.location.href = "reservation3.html";
    });
    $('.product-wrap .wheel-btn.style-2').on('click', function(event) {
        event.preventDefault();
        window.location.href = "reservation4.html";
    });



    // add  identical height  to block
    $('.car-item-wrap').css('height', 'auto').equalHeights();


    // castum  selectop for price

    $('.select.select-1 span').on('click', function() {
        $(this).siblings('.list').toggle();
        $(this).toggleClass('active');
    });

    $('.select.select-1 .list li').on('click', function() {
        var tx = $(this).text();
        $('.select.select-1 span').text(tx);
        $(this).parents('.list').toggle();
        $('.select.select-1 span').toggleClass('active');
    });



    $('.select.select-2 span').on('click', function() {
        $(this).siblings('.list').toggle();
        $(this).toggleClass('active');
    });

    $('.select.select-2 .list li').on('click', function() {
        var tx = $(this).text();
        $('.select.select-2 span').text(tx);
        $(this).parents('.list').toggle();
        $('.select.select-2 span').toggleClass('active');
    });


    $('.select.select-3 span').on('click', function() {
        $(this).siblings('.list').toggle();
        $(this).toggleClass('active');
    });

    $('.select.select-3 .list li').on('click', function() {
        var tx = $(this).text();
        $('.select.select-3 span').text(tx);
        $(this).parents('.list').toggle();
        $('.select.select-3 span').toggleClass('active');
    });


    $('.select.select-4 span').on('click', function() {
        $(this).siblings('.list').toggle();
        $(this).toggleClass('active');
    });

    $('.select.select-4 .list li').on('click', function() {
        var tx = $(this).text();
        $('.select.select-4 span').text(tx);
        $(this).parents('.list').toggle();
        $('.select.select-4 span').toggleClass('active');
    });



    // accordion
    var wpcRemoveClass = function(el, _class) {
        if (el.classList)
            el.classList.remove(_class ? _class : 'active');
        else
            el.className = panel.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    $('.wpc-accordion').on('click', '.panel-title', function() {

        var panel_parent = this.parentNode,
            panel_container = panel_parent.parentNode,
            panels_wrap = panel_container.querySelectorAll('.panel-wrap');

        Array.prototype.forEach.call(panels_wrap, function(panel, i) {
            if (panel !== panel_parent) {
                wpcRemoveClass(panel);
            }
        });

        if (-1 !== this.parentNode.className.indexOf('active')) {
            wpcRemoveClass(panel_parent);
        } else {
            panel_parent.className += ' active';
        }

    });

    // Scroll menu
    function undateMenu() {
        var scrollTop = window.pageYOffset;
        var menu = $('.wheel-menu-wrap ');

        if (scrollTop > 5 || $(window).width() < 993) {

            if (scrollTop > 5) {
                menu.addClass('active-scroll');
            } else {
                menu.removeClass('active-scroll');
            }

        } else if (scrollTop < 5 || $(window).width() > 993) {
            menu.removeClass('active-scroll');
        }
    }

    // home active care
    $('.wheel-collection').on('click', '.wheel-collection-item', function() {

        var activeCar = $('.wheel-collection-text'),
            activeCarImg = $('.wheel-collection-img  .car-img'),
            valueName = $(this).attr('data-name'),
            valueCarClass = $(this).attr('data-carClass'),
            valuePrice = $(this).attr('data-price'),
            valueText = $(this).attr('data-text'),
            valueBags = $(this).attr('data-bags'),
            valuePassenger = $(this).attr('data-passenger'),
            valueSpeed = $(this).attr('data-speed'),
            valueImg = $(this).attr('data-img');


        activeCar.find('.car-name').text(valueName)
        activeCar.find('.car-class').text(valueCarClass)
        activeCar.find('.car-name').text(valueName)
        activeCar.find('.car-text').text(valueText)
        activeCar.find('.car-bags').text(valueBags)
        activeCar.find('.car-passengers').text(valuePassenger)
        activeCar.find('.car-speed').text(valueSpeed)
        activeCarImg.attr('src', valueImg)

        $(this).parents('.swiper-container').find('.wheel-collection-item').removeClass('active-car')
        $(this).addClass('active-car')
    })


    // bootstrap select
    $('.selectpicker').selectpicker({
        style: 'btn-info',
        size: 4
    });


    // tabs
    $('.tabs-header').on('click', 'li:not(.active)', function() {

        var index_el = $(this).index();

        $(this).addClass('active').siblings().removeClass('active');
        $(this).closest('.tabs').find('.tabs-item').removeClass('active').eq(index_el).addClass('active');
        swipers['swiper-' + $(this).closest('.wheel-collection ').find('.tabs-item.active .swiper-container').attr('id')].reInit();
        sliderOpacity()
        var index_el = $(this).index();
        $(this).closest('.wheel-our-menu').find('.tabs-item').removeClass('visible-swiper').hide().eq(index_el).fadeIn(700).addClass('visible-swiper');

    });

    $('  .tabs-header li a ').on('click', function(e) {
        e.preventDefault();
    });

    /*============================*/
    /* 01 - VARIABLES */
    /*============================*/
    var swipers = [],
        winW, winH, winScr, _isresponsive, smPoint = 768,
        mdPoint = 992,
        lgPoint = 1200,
        addPoint = 1600,
        _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

    /*========================*/
    /* 02 - PAGE CALCULATIONS */
    /*========================*/
    function pageCalculations() {
        winW = $(window).width();
        winH = $(window).height();
    }

    /*=================================*/
    /* 03 - FUNCTION ON DOCUMENT READY */
    /*=================================*/
    pageCalculations();

    /*============================*/
    /* 04 - FUNCTION ON PAGE LOAD */
    /*============================*/

    $(window).load(function() {
        initSwiper();

        $('.load-wrap').hide();
    });


    /*==============================*/
    /* 05 - FUNCTION ON PAGE RESIZE */
    /*==============================*/
    function resizeCall() {
        pageCalculations();
        $('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function() {
            var thisSwiper = swipers['swiper-' + $(this).attr('id')],
                $t = $(this),
                slidesPerViewVar = updateSlidesPerView($t),
                centerVar = thisSwiper.params.centeredSlides;
            thisSwiper.params.slidesPerView = slidesPerViewVar;
            thisSwiper.reInit();
            if (!centerVar) {
                var paginationSpan = $t.find('.pagination span');
                var paginationSlice = paginationSpan.hide().slice(0, (paginationSpan.length + 1 - slidesPerViewVar));
                if (paginationSlice.length <= 1 || slidesPerViewVar >= $t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
                else $t.removeClass('pagination-hidden');
                paginationSlice.show();
            }
        });
    }
    if (!_ismobile) {
        $(window).resize(function() {
            resizeCall();
        });
    } else {
        window.addEventListener("orientationchange", function() {
            resizeCall();
        }, false);
    }

    /*=====================*/
    /* 06 - SWIPER SLIDERS */
    /*=====================*/

    function initSwiper() {
        var initIterator = 0;
        $('.swiper-container').each(function() {
            var $t = $(this);

            var index = 'swiper-unique-id-' + initIterator;

            $t.addClass('swiper-' + index + ' initialized').attr('id', index);
            $t.find('.pagination').addClass('pagination-' + index);

            var autoPlayVar = parseInt($t.attr('data-autoplay'), 10);
            var mode = $t.attr('data-mode');
            var slidesPerViewVar = $t.attr('data-slides-per-view');
            if (slidesPerViewVar == 'responsive') {
                slidesPerViewVar = updateSlidesPerView($t);
            } else slidesPerViewVar = parseInt(slidesPerViewVar, 10);

            var loopVar = parseInt($t.attr('data-loop'), 10);
            var speedVar = parseInt($t.attr('data-speed'), 10);
            var centerVar = parseInt($t.attr('data-center'), 10);
            swipers['swiper-' + index] = new Swiper('.swiper-' + index, {
                speed: speedVar,
                pagination: '.pagination-' + index,
                loop: loopVar,
                paginationClickable: true,
                autoplay: autoPlayVar,
                slidesPerView: slidesPerViewVar,
                keyboardControl: true,
                calculateHeight: true,
                simulateTouch: true,
                roundLengths: true,
                centeredSlides: centerVar,
                mode: mode || 'horizontal',
                onInit: function(swiper) {
                    $t.find('.swiper-slide').addClass('active');

                    sliderOpacity();
                },
                onSwiperCreated: function() {

                },
                onSlideChangeEnd: function(swiper) {
                    var activeIndex = (loopVar === 1) ? swiper.activeLoopIndex : swiper.activeIndex;
                },
                onSlideChangeStart: function(swiper) {
                    $t.find('.swiper-slide.active').removeClass('active');
                }
            });
            swipers['swiper-' + index].reInit();
            if ($t.attr('data-slides-per-view') == 'responsive') {
                var paginationSpan = $t.find('.pagination span');
                var paginationSlice = paginationSpan.hide().slice(0, (paginationSpan.length + 1 - slidesPerViewVar));
                if (paginationSlice.length <= 1 || slidesPerViewVar >= $t.find('.swiper-slide').length) $t.addClass('pagination-hidden');
                else $t.removeClass('pagination-hidden');
                paginationSlice.show();
            }

            if ($t.find('.default-active').length) {
                swipers['swiper-' + index].swipeTo($t.find('.swiper-slide').index($t.find('.default-active')), 0);
            }

            initIterator++;

        });

    }

    function updateSlidesPerView(swiperContainer) {
        if (winW >= addPoint) return parseInt(swiperContainer.attr('data-add-slides'), 10);
        else if (winW >= lgPoint) return parseInt(swiperContainer.attr('data-lg-slides'), 10);
        else if (winW >= mdPoint) return parseInt(swiperContainer.attr('data-md-slides'), 10);
        else if (winW >= smPoint) return parseInt(swiperContainer.attr('data-sm-slides'), 10);
        else return parseInt(swiperContainer.attr('data-xs-slides'), 10);
    }

    // slider opacity elem

    function sliderOpacity() {
        var elem = $('.wheel-collection .swiper-slide-visible');
        if ($(window).width() > 992) {

            elem.removeClass('wheel-opacity')
            elem.eq(0).addClass('wheel-opacity')
            elem.eq(elem.length - 1).addClass('wheel-opacity')
        }
    }

    //swiper arrows
    $('.swiper-arrow-left').on('click', function() {
        swipers['swiper-' + $(this).parent().attr('id')].swipePrev();
        sliderOpacity()
    });

    $('.swiper-arrow-right').on('click', function() {
        swipers['swiper-' + $(this).parent().attr('id')].swipeNext();
        sliderOpacity()
    });

    $('.swiper-outer-left').on('click', function() {
        swipers['swiper-' + $(this).parent().find('.swiper-container').attr('id')].swipePrev();
    });

    $('.swiper-outer-right').on('click', function() {
        swipers['swiper-' + $(this).parent().find('.swiper-container').attr('id')].swipeNext();
    });

    /*=================================*/
    /* RESPONSIVE MENU */
    /*=================================*/

    var $first_child_link = $('.menu-item-has-children > a').append('<span class="fa fa-angle-right "></span>');

    $('.nav-menu-icon').on('click', function(e) {
        $(this).toggleClass('active');
        $('.wheel-navigation').toggleClass('active');
        $('html').toggleClass('overflow-html');


    });


    $first_child_link.find('span').on('click', function(e) {
        e.preventDefault();
        var self = $(this),
            parentLi = self.parent();
        self.toggleClass(' fa-angle-down').toggleClass('fa-angle-right ');
        self.closest('li').siblings('.menu-item.menu-item-has-children').removeClass('active').find('span.fa-angle-down').removeClass('fa-angle-down').addClass('fa-angle-right');
        self.closest('li').toggleClass('active');

    });

    /*============================*/
    /* HEADER NAVIGATOR SHOW */
    /*============================*/

    if ($(window).width() >= 993) {

        $(".wheel-nav-menu-icon").on('click', function() {

            var wpc_header = $('.wheel-header');

            if (wpc_header.hasClass('header-animate')) {
                $('.wheel-navigation').css('overflow', 'hidden');
                wpc_header.removeClass('header-animate');
                wpc_header.find("nav").removeClass('slide-active');
            } else {
                wpc_header.find("nav").addClass('slide-active');
                wpc_header.addClass('header-animate');
                setTimeout(function() {
                    $('.wheel-navigation').css('overflow', 'visible');
                }, 500);
            }


        });

    }

    var counters = function() {
        $('.wheel-testimonial-item span ').not('.animated').each(function() {
            if ($(window).scrollTop() >= $(this).offset().top - $(window).height() * 0.7) {
                $(this).addClass('animated').countTo();
            }
        });

        var elemSize = $('.wheel-interest ');
        if (elemSize.length) {
            if ($(window).scrollTop() >= elemSize.offset().top - $(window).height() * 0.7) {
                elemSize.each(function(index, el) {
                    elemSize.eq(index).width($(this).attr('data-size') + '%')
                });

            }
        }

    }

    // backround block with image
    function wpc_add_img_bg2(img_sel, parent_sel) {

        if (!img_sel) {
            console.info('no img selector');
            return false;
        }
        var $parent, _this;

        $(img_sel).each(function() {
            _this = $(this);
            $parent = _this.closest(parent_sel);
            $parent = $parent.length ? $parent : _this.parent();
            $parent.css('background-image', 'url(' + this.src + ')');
            _this.css('visibility', 'hidden');
        });

    }

    wpc_add_img_bg2('.wheel-service-img .wheel-img', '.wheel-service-img');
    wpc_add_img_bg2('.wheel-service-img2 .wheel-img2', '.wheel-service-img2');
    wpc_add_img_bg2('.wheel-news-item2 .wheel-news-item-img img', '.wheel-news-item2 .wheel-news-item-img');
    wpc_add_img_bg2('.product-list .img-wrap img', '.product-list .img-wrap');
    wpc_add_img_bg2('.r-return-block .img-wrap img', '.r-return-block .img-wrap');


    function wpc_add_img_bg(img_sel, parent_sel) {

        if (!img_sel) {
            console.info('no img selector');
            return false;
        }
        var $parent, _this;

        $(img_sel).each(function() {
            _this = $(this);
            $parent = _this.closest(parent_sel);
            $parent = $parent.length ? $parent : _this.parent();
            $parent.css('background-image', 'url(' + this.src + ')');
            _this.hide();
        });

    }

    wpc_add_img_bg('.wheel-deals .wheel-img', '.wheel-deals');
    wpc_add_img_bg('.wheel-start .wheel-img', '.wheel-start');
    wpc_add_img_bg('.wheel-quote .wheel-img', '.wheel-quote');
    wpc_add_img_bg('.wheel-footer .wheel-img', '.wheel-footer');
    wpc_add_img_bg('.wheel-info-img .wheel-img', '.wheel-info-img');
    wpc_add_img_bg('.wheel-app-body .wheel-img', '.wheel-app-body');
    wpc_add_img_bg('.wheel-start3 .wheel-img', '.wheel-start3');

    /*============================*/
    /* map               */
    /*============================*/

    if ($('.wheel-map').length) {
        $('.wheel-map').each(function() {
            initialize(this);
        });
    }

    function initialize(_this) {

        var stylesArray = {
            //style 1
            'style-1': [{ "featureType": "landscape", "stylers": [{ "hue": "#FFBB00" }, { "saturation": 43.400000000000006 }, { "lightness": 37.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.highway", "stylers": [{ "hue": "#FFC200" }, { "saturation": -61.8 }, { "lightness": 45.599999999999994 }, { "gamma": 1 }] }, { "featureType": "road.arterial", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 51.19999999999999 }, { "gamma": 1 }] }, { "featureType": "road.local", "stylers": [{ "hue": "#FF0300" }, { "saturation": -100 }, { "lightness": 52 }, { "gamma": 1 }] }, { "featureType": "water", "stylers": [{ "hue": "#0078FF" }, { "saturation": -13.200000000000003 }, { "lightness": 2.4000000000000057 }, { "gamma": 1 }] }, { "featureType": "poi", "stylers": [{ "hue": "#00FF6A" }, { "saturation": -1.0989010989011234 }, { "lightness": 11.200000000000017 }, { "gamma": 1 }] }]
        };

        var styles, map, marker, infowindow,
            lat = $(_this).attr("data-lat"),
            lng = $(_this).attr("data-lng"),
            contentString = $(_this).attr("data-string"),
            image = $(_this).attr("data-marker"),
            styles_attr = $(_this).attr("data-style"),
            zoomLevel = parseInt($(_this).attr("data-zoom"), 10),
            myLatlng = new google.maps.LatLng(lat, lng);


        // style_1
        if (styles_attr == 'style-1') {
            styles = stylesArray[styles_attr];
        }
        // custom
        if (typeof hawa_style_map != 'undefined' && styles_attr == 'custom') {
            styles = hawa_style_map;
        }
        // or default style

        var styledMap = new google.maps.StyledMapType(styles, { name: "Styled Map" });

        var mapOptions = {
            zoom: zoomLevel,
            disableDefaultUI: true,
            center: myLatlng,
            scrollwheel: false,
            mapTypeControlOptions: {
                mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
            }
        };

        map = new google.maps.Map(_this, mapOptions);

        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');

        infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            icon: image
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map, marker);
        });

    }

    // video size
    function videoSize() {
        $('.wheel-info-video iframe').attr('height', '440');
    }

    /*============================*/
    /* LOAD RESIZE               */
    /*============================*/

    $(window).on('scroll', function() {
        counters();
        undateMenu();

    })

    $(window).on('load resize', function() {

        // add  identical height  to block
        $('.car-item-wrap').css('height', 'auto').equalHeights();

        undateMenu();

        $('.wheel-info-img').height($('.wheel-info-text').height())

        if ($(window).width() < 1200) {
            videoSize();
        }
    });

})(jQuery, window, document);
