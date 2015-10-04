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

                var arrLetter = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
                var arrColor = '#';

                var startColor = 'FFFFFF';
                var endColor = '000000';

                var color = endColor;
                var colDiv = '';
                var cont = 0;
                var contGeneral = 0;                
                obj.click(function(){
                    if(obj.find('.colpick-popup').length > 0){
                        obj.find('.colpick-popup').remove();
                    }
                    else{
                        obj.append('<div class="colpick-popup">' + colDiv + '</div>');

                        var i = 0, color;
                        for (; i < 16777216; ++i) { // this is a BIG loop, will freeze/crash a browser!
                            color = '#' + ('00000' + i.toString(16)).slice(-6); // pad to 6 digits
                            cont += 1;
                            contGeneral += 1;

                            if(contGeneral == 2000){
                                break;
                            }

                            console.log(color);

                            if(cont == 500){
                                cont = 0;
                                colDiv += '<div style="width:10px; height:10px;background:' + color + '; float:left;"></div><div style="clear"both;"></div>';
                            }
                            else{
                                colDiv += '<div style="width:10px; height:10px;background:' + color + '; float:left;"></div>';
                            }
                        }

                        obj.append('<div class="colpick-popup">' + colDiv + '</div>');
                    }
                });
            });
        }
    });
})(jQuery);