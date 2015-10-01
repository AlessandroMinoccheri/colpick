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
                width: '15',
                height: '15'
            };

            var options = $.extend(defaults, argumentOptions);
            
            return this.each(function () {
                var o = options;
                var obj = $(this);

                obj.css("background", o.color);
                obj.css("width", o.width + 'px');
                obj.css("height", o.height + 'px');

                obj.click(function(){
                    if(obj.find('.colpick-popup').length > 0){
                        obj.find('.colpick-popup').remove();
                    }
                    else{
                        obj.append('<div class="colpick-popup"></div>');
                    }
                });
            });
        }
    });
})(jQuery);