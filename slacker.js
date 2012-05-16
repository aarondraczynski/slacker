/**
 * Slacker, an image lazy load plugin for jQuery
 * @requires jQuery v1.7 or later
 * @author Aaron Draczynski
 *
 * Copyright (C) 2010-2012 Aaron Draczynski (aarondraczynski at gmail)
 * http://github.com/aarondraczynski/slacker
 * http://twitter.com/developer
 *
 * Released under the MIT License
 * http://www.opensource.org/licenses/mit-license.php
 */

(function($) {
  // Load images slightly outside of the viewport using the following threshold, in pixels
  var sensitivity = 50;

  $.fn.slacker = function() {
    // On scroll and resize, determine which images to load and show them
    $(window).on('scroll resize', function() {
      $('.l:visible').each(function() {
        if (!$.scrollVert(this) && !$.scrollHoriz(this)) {
          slackem($(this));
          $(this).trigger('show');
        }
      });
      return false;
    }).trigger('scroll');

    setTimeout(function() {
      $(window).trigger('scroll');
    }, 1200);
    return this;
  };

  function slackem(elem) {
    elem.one('show', function() {
      if (elem.hasClass('l')) {
        elem.css('opacity', 0);
        // Bind fade-in animation to image load event
        elem.on('load', function() {
          elem.animate({'opacity': 1}, 120).off('load', arguments.callee);
        });
        elem.removeClass('l').attr('src', elem.data('src'));
      }
    });
  };

  $.scrollVert = function(e) {
    return ($(window).height() + $(window).scrollTop()) <= ($(e).offset().top - sensitivity);
  };

  $.scrollHoriz = function(e) {
    return ($(window).width() + $(window).scrollLeft()) <= $(e).offset().left;
  };
})(jQuery);
