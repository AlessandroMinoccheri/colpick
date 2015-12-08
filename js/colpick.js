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
                var colpickPopup = '';

                obj.css("background", o.color);
                obj.css("width", o.width + 'px');
                obj.css("height", o.height + 'px');

                var arrLetter = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
                var arrColor = '#';

                var startColor = 'FFFFFF';
                var endColor = '000000';

                var color = endColor;
                var colDiv = '';
                var cont = 0;
                var contGeneral = 0;                
                obj.click(function(event){
                    var id = event.target.id;
                    if((id != 'colpickPopup') && (id != 'colpickPopupImg')){
                        if(obj.find('.colpick-popup').length > 0){
                            obj.find('.colpick-popup').remove();
                            colpickPopup = '';
                        }
                        else{
                            obj.append('<div class="colpick-popup" id="colpickPopup"><img src="img/bg-gradient.png" id="colpickPopupImg" /><div class="colpick-select"></div></div>');
                            colpickPopup = obj.find('.colpick-popup');
                        }
                    }
                    else{
                        var offset = obj.find('.colpick-popup').offset();
                        var posX = (event.pageX - offset.left) - 5;
                        var posY = (event.pageY - offset.top) - 5;

                        obj.find('.colpick-select').css('left', posX);
                        obj.find('.colpick-select').css('top', posY);
                    }
                });
            });
        }
    });
})(jQuery);