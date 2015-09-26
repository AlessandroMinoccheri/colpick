/*
Alessandro Minoccheri
V 0.0.1
26-09-2015
*/

(function ($) {
    $.fn.extend({      
        colpick: function (argumentOptions) {
            var defaults = {
                color: '#000000',
            };

            var options = $.extend(defaults, argumentOptions);
            
            return this.each(function () {
                var o = options;
                var obj = $(this);
            });
        }
    });
})(jQuery);