$(document).ready(function(){var n=$(".burger"),o=$(".main-menu");$("#fullpage").fullpage({menu:"#menu",anchors:["first","about","works","contact"],css3:!0,slidesNavigation:!0,slidesNavPosition:"bottom",afterRender:function(){$("video").get(0).play()},afterLoad:function(){$("video").get(0).play()}}),n.on("click",function(){o.addClass("is-open"),n.hide()}),$(".close-icon, .main-menu__link").on("click",function(){o.removeClass("is-open"),n.show()}),$(".arrow-up").on("click",function(n){n.preventDefault(),$.fn.fullpage.moveSectionUp()}),$(".arrow-down, .link--scroll").on("click",function(n){n.preventDefault(),$.fn.fullpage.moveSectionDown()})});