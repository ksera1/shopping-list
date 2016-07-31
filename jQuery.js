$(document).ready(function() {
            $('#shopping-list-entry').submit(function(event) {

                $('ul').append(
                    "<li>" + ".shopping-item" + "</li>"
                );
            });

            $('.button-label').toggleClass(function(event) {
            	$('.shopping-item-toggle').click(function(){
            		$(this).toggleClass('add');
            		$(this).toggleClass('delete');
            	});


               });
            });