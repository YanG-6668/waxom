parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
$(function(){$('a[href^="#"]').click(function(){var t=$(this).attr("href");return $("html, body").animate({scrollTop:$(t).offset().top},1e3),!1}),$(".menu__btn").on("click",function(){$(".header__top-menu-list").slideToggle()}),$(".slider").slick({dots:!0,fade:!0,autoplay:5e3,arrows:!1}),$(".post__item-slider-img").slick({dots:!0,fade:!0,autoplay:5e3,arrows:!1}),$(".post__items").slick({prevArrow:'<button type="button" class="slick-arrow slick-prev"></button>',nextArrow:'<button type="button" class="slick-arrow slick-next"></button>',slidesToShow:3,slidesToScroll:1,infinite:!1,responsive:[{breakpoint:1140,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:840,settings:{slidesToShow:1,slidesToScroll:1}}]});mixitup(".project__inner-box")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9f4399e7.js.map