/**
 * Copyright (c) 2007-2015 Ariel Flesler - aflesler ○ gmail • com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 2.1.3
 */
;(function(f){"use strict";"function"===typeof define&&define.amd?define(["jquery"],f):"undefined"!==typeof module&&module.exports?module.exports=f(require("jquery")):f(jQuery)})(function($){"use strict";function n(a){return!a.nodeName||-1!==$.inArray(a.nodeName.toLowerCase(),["iframe","#document","html","body"])}function h(a){return $.isFunction(a)||$.isPlainObject(a)?a:{top:a,left:a}}var p=$.scrollTo=function(a,d,b){return $(window).scrollTo(a,d,b)};p.defaults={axis:"xy",duration:0,limit:!0};$.fn.scrollTo=function(a,d,b){"object"=== typeof d&&(b=d,d=0);"function"===typeof b&&(b={onAfter:b});"max"===a&&(a=9E9);b=$.extend({},p.defaults,b);d=d||b.duration;var u=b.queue&&1<b.axis.length;u&&(d/=2);b.offset=h(b.offset);b.over=h(b.over);return this.each(function(){function k(a){var k=$.extend({},b,{queue:!0,duration:d,complete:a&&function(){a.call(q,e,b)}});r.animate(f,k)}if(null!==a){var l=n(this),q=l?this.contentWindow||window:this,r=$(q),e=a,f={},t;switch(typeof e){case "number":case "string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(e)){e= h(e);break}e=l?$(e):$(e,q);case "object":if(e.length===0)return;if(e.is||e.style)t=(e=$(e)).offset()}var v=$.isFunction(b.offset)&&b.offset(q,e)||b.offset;$.each(b.axis.split(""),function(a,c){var d="x"===c?"Left":"Top",m=d.toLowerCase(),g="scroll"+d,h=r[g](),n=p.max(q,c);t?(f[g]=t[m]+(l?0:h-r.offset()[m]),b.margin&&(f[g]-=parseInt(e.css("margin"+d),10)||0,f[g]-=parseInt(e.css("border"+d+"Width"),10)||0),f[g]+=v[m]||0,b.over[m]&&(f[g]+=e["x"===c?"width":"height"]()*b.over[m])):(d=e[m],f[g]=d.slice&& "%"===d.slice(-1)?parseFloat(d)/100*n:d);b.limit&&/^\d+$/.test(f[g])&&(f[g]=0>=f[g]?0:Math.min(f[g],n));!a&&1<b.axis.length&&(h===f[g]?f={}:u&&(k(b.onAfterFirst),f={}))});k(b.onAfter)}})};p.max=function(a,d){var b="x"===d?"Width":"Height",h="scroll"+b;if(!n(a))return a[h]-$(a)[b.toLowerCase()]();var b="client"+b,k=a.ownerDocument||a.document,l=k.documentElement,k=k.body;return Math.max(l[h],k[h])-Math.min(l[b],k[b])};$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(a){return $(a.elem)[a.prop]()}, set:function(a){var d=this.get(a);if(a.options.interrupt&&a._last&&a._last!==d)return $(a.elem).stop();var b=Math.round(a.now);d!==b&&($(a.elem)[a.prop](b),a._last=this.get(a))}};return p});

//////

// global functions

function closeFlyOut() {
  $('.flyOut').removeClass('flyOut__active');
  $('body').removeClass('no-scroll');
}

function hashRewrite(path) {
  // console.log(path);
  var currentPath = window.location.pathname;
  var currentDomain = document.domain;

  if (path === undefined || path === null) {
    window.history.replaceState({}, currentDomain, currentPath);
    return false;
  } else {
    window.history.replaceState({}, currentDomain, currentPath + path);
    return false;
  }
}

$(document).ready(function(){

    $(".mainNav").addClass("js").before('<div class="mainNav__button">&#9776;</div>');
    $(".mainNav__button").click(function(){
      $(".mainNav").slideToggle();
    });
    $(window).resize(function(){
      if(window.innerWidth > 600) {
        $(".mainNav").removeAttr("style");
      }
    });


    // if the URL comes with an ID attached
    if (window.location.hash) {

      var flyOutContent = $('.flyOut__wrap').find(window.location.hash);

      // if that ID exists within a flyOut wrapper
      if(flyOutContent.length) {

        // open the flyout menu
        flyOutContent.addClass('flyOut__active');

        // prevent the body of the page from scrolling
        $('body').addClass('no-scroll');

      }

    }

    /**
     * This part causes smooth scrolling using scrollto.js
     * We target all a tags inside the nav, and apply the scrollto.js to it.
     */
    $(".toc a").click(function(evn){

      var currentPath = window.location.pathname;
      var currentDomain = document.domain;

      evn.preventDefault();
      $('html,body').scrollTo(this.hash, this.hash);
      // URL rewrites
      window.history.pushState({}, currentDomain, currentPath + $(this).attr("href"));
      return false;
    });

    /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $(".toc li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray

    for (var i=0; i < aChildren.length; i++) {
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    var currentPath = window.location.pathname;
    var currentDomain = document.domain;

    // find position of first section in the sub nav
    var firstSectionID = $('.toc li:first-of-type a').attr("href");

    if(typeof firstSectionID !== 'undefined') {
      var firstSectionPos = $(firstSectionID).offset().top;
    }

    $(window).on('scroll', _.debounce(function() {

      var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
      var windowHeight = $(window).height(); // get the height of the window
      var docHeight = $(document).height();

      for (var i=0; i < aArray.length; i++) {
          var theID = aArray[i];
          var divPos = $(theID).offset().top; // get the offset of the div from the top of page
          var divHeight = $(theID).height(); // get the height of the div in question

          if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
              $("a[href='" + theID + "']").addClass("nav-active");
              hashRewrite(theID);
          } else {
              $("a[href='" + theID + "']").removeClass("nav-active");
          }
      }
      // if you're at the bottom of the page;
      if(windowPos + windowHeight == docHeight) {
          if (!$("nav li:last-child a").hasClass("nav-active")) {
              var navActiveCurrent = $(".nav-active").attr("href");
              $("a[href='" + navActiveCurrent + "']").removeClass("nav-active");
              $("nav li:last-child a").addClass("nav-active");
          }
      }

      if(windowPos < firstSectionPos) {
        hashRewrite();
      }
    }, 100));

    // fly out sidebar
    $( ".flyOutButton, .flyOut__close, .g-flyOutButton").click(function() {

      var flyOut = $(this).parents('.flyOut__wrap').find('.flyOut')
      var flyOutID = flyOut.attr("id");

      // if this flyOut window is already open
      if (flyOut.hasClass('flyOut__active')) {

        closeFlyOut();

        // URL rewrites
        hashRewrite()

      } else {

        flyOut.toggleClass('flyOut__active')
        $('body').addClass('no-scroll');
        // URL rewrites
        hashRewrite('#' + flyOutID)

      }
    })
});

// Close fly-out when you click in the dark part
$('.flyOut__bg').click( function() {
  closeFlyOut();
  hashRewrite();
});

// Close fly-out feature when esc key is pressed
$(document).keyup(function(e) {
  if (e.keyCode === 27) {
    closeFlyOut();
    hashRewrite();
  }
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 5;
var headerHeight = $('.header__wrap').outerHeight();
var windowHeight = $(window).height();

$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop){

      // Scrolling Down
      // if we're above the fold
      if (st > headerHeight ) {
        // remove header down and add header up
        $('.header').removeClass('header--down').addClass('header--up');
      }

    } else {
      // Scrolling up
      // if we're above the wrapper, and above the nav wrapper
      if (st < headerHeight) {
        $('.header').removeClass('header--down header--up header--onlyNav');
      }
      else if (windowHeight > st > headerHeight) {

      }
      // scrolling up below the nav bar
      else {
        $('.header').removeClass('header--up').addClass('header--down header--onlyNav');

        // // if we're below the fold
        // if (st > windowHeight ) {
        //   console.log("WE'RE BELOW THE FOLD: " + st + " > " + headerHeight);
        //     // remove the header down class after XX seconds
        //     setTimeout(function() {
        //       $('.header').removeClass('header--down').addClass('header--up');
        //     }, 3000)
        // }
      }
    }

    if ((st + windowHeight) == $(document).height()) {
      $('.header').removeClass('header--up').addClass('header--down header--onlyNav');
    }

    lastScrollTop = st;
}

// timeline scripts

// https://css-tricks.com/slide-in-as-you-scroll-down-boxes/

(function($) {

  $.fn.visible = function(partial) {

      var $t            = $(this),
          $w            = $('.timelineWindow'),
          viewLeft       = $w.scrollLeft(),
          viewRight    = viewLeft + $w.width(),
          _left          = $t.offset().left,
          _right       = _left + $t.width(),
          compareLeft    = partial === true ? _right : _left,
          compareRight = partial === true ? _left : _right;

    return ((compareRight <= viewRight) && (compareLeft >= viewLeft));

  };

})(jQuery);

var win = $('.timeline__viewport');
var allMods = $('.timeline__section');

// Already visible modules
allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
    el.addClass("active");
  }
});

win.scroll(function(event) {

  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("active");
    } else {
      el.removeClass("active");
    }
  });

});


// https://github.com/newsdev/ai2html/blob/gh-pages/_includes/resizer-script.html
(function() {
    // only want one resizer on the page
    if (document.documentElement.className.indexOf("g-resizer-v3-init") > -1) return;
    document.documentElement.className += " g-resizer-v3-init";
    // require IE9+
    if (!("querySelector" in document)) return;
    function resizer() {
        var elements = Array.prototype.slice.call(document.querySelectorAll(".g-artboard[data-min-width]")),
            widthById = {};
        elements.forEach(function(el) {
            var parent = el.parentNode,
                width = widthById[parent.id] || parent.getBoundingClientRect().width,
                minwidth = el.getAttribute("data-min-width"),
                maxwidth = el.getAttribute("data-max-width");
            widthById[parent.id] = width;

            if (+minwidth <= width && (+maxwidth >= width || maxwidth === null)) {
                el.style.display = "block";
            } else {
                el.style.display = "none";
            }
        });
        try {
            if (window.parent && window.parent.$) {
                window.parent.$("body").trigger("resizedcontent", [window]);
            }
            if (window.require) {
                require(['foundation/main'], function() {
                    require(['shared/interactive/instances/app-communicator'], function(AppCommunicator) {
                        AppCommunicator.triggerResize();
                    });
                });
            }
        } catch(e) { console.log(e); }
    }

    document.addEventListener('DOMContentLoaded', resizer);
    // feel free to replace throttle with _.throttle, if available
    window.addEventListener('resize', throttle(resizer, 200));

    function throttle(func, wait) {
        // from underscore.js
        var _now = Date.now || function() { return new Date().getTime(); },
            context, args, result, timeout = null, previous = 0;
        var later = function() {
            previous = _now();
            timeout = null;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        };
        return function() {
            var now = _now(), remaining = wait - (now - previous);
            context = this;
            args = arguments;
            if (remaining <= 0 || remaining > wait) {
                if (timeout) {
                    clearTimeout(timeout);
                    timeout = null;
                }
                previous = now;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            } else if (!timeout && options.trailing !== false) {
                timeout = setTimeout(later, remaining);
            }
            return result;
        };
    }

})();

// https://css-tricks.com/snippets/jquery/open-external-links-in-new-window/
$('a').each(function() {
   var a = new RegExp('/' + window.location.host + '/');
   if(!a.test(this.href)) {
       $(this).click(function(event) {
           event.preventDefault();
           event.stopPropagation();
           window.open(this.href, '_blank');
       });
       // TODO: change this from click function to one that adds target="_blank" to all links (for css selection)
   }
});

// load the lazy-loading library
// https://css-tricks.com/lozad-js-performant-lazy-loading-images/
const observer = lozad(); // lazy loads elements with default selector as ".lozad"
observer.observe();
