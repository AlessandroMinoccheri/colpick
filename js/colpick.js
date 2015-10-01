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
                function incrementColor(color, step){
                    var colorToInt = parseInt(color.substr(1), 16),                     // Convert HEX color to integer
                    nstep = parseInt(step);                                         // Convert step to integer
                    if(!isNaN(colorToInt) && !isNaN(nstep)){                            // Make sure that color has been converted to integer
                        colorToInt += nstep;                                            // Increment integer with step
                        var ncolor = colorToInt.toString(16);                           // Convert back integer to HEX
                        ncolor = '#' + (new Array(7-ncolor.length).join(0)) + ncolor;   // Left pad "0" to make HEX look like a color
                        if(/^#[0-9a-f]{6}$/i.test(ncolor)){                             // Make sure that HEX is a valid color
                            return ncolor;
                        }
                    }
                    return color;
                }

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
                for (var i = 0; i <= 5000; i++){
                    cont += 1;
                    color = incrementColor(color, 1);

                    if(cont == 500){
                        cont = 0;
                        colDiv += '<div style="width:10px; height:10px;background:' + color + '; float:left;"></div><div style="clear"both;"></div>'
                    }
                    else{
                        colDiv += '<div style="width:10px; height:10px;background:' + color + '; float:left;"></div>'
                    }
                }

                obj.click(function(){
                    if(obj.find('.colpick-popup').length > 0){
                        obj.find('.colpick-popup').remove();
                    }
                    else{
                        obj.append('<div class="colpick-popup">' + colDiv + '</div>');
                    }
                });
            });
        }
    });
})(jQuery);