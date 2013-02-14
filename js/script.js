/*----------------------------------
*							
*	Version: 1.0				  
*	Date: 11/02/2013			  
*	Author: Romain GAZIELLY	  
*	Mail: romain.gazielly@gmail.com
*	Website: www.romaingazielly.com
*								  
*----------------------------------*/

/*-------------------
	Home
-------------------*/
$(function() {

	h = $(window).height();
	w = $(window).width();
	myZone = 'zone1';

	$('#container').css({'width': Math.round(w*2), 'height': Math.round(h*2)});
	$('#container section').css({'width': Math.round(w), 'height': Math.round(h)});
	$('#container section#zone3').css({'margin-left': Math.round(w/2)});
	$(window).resize(function(){ 
	    redimensionnement();
	}); 

	$('#container section').on('click', function(){
		$this = $(this);
		zone = $this.attr('id');
		redimensionnement();

		if(zone == 'zone1') {
			$('#container').animate({ marginLeft:Math.round(-w/2)+'px', marginTop:Math.round(-h)+'px'});
			myZone = 'zone3';
		}
		else if(zone == 'zone3') {
			$('#container').animate({ marginTop:'0px', marginLeft:Math.round(-w)+'px' });
			myZone = 'zone2';
		}
		else if(zone == 'zone2') {
			$('#container').animate({ marginLeft:'0px' });
			myZone = 'zone1';
		}
		return zone;
	});
});

function redimensionnement() {
	if (document.all) {
		h=document.body.clientHeight;
		w=document.body.clientWidth;
	} else {
		w=window.innerWidth;
		h=window.innerHeight;
	}
	$('#container').css({'width': Math.round(w*2), 'height': Math.round(h*2)});
	$('#container section').css({'width': Math.round(w), 'height': Math.round(h)});
	$('#container section#zone3').css({'margin-left': Math.round(w/2)});

	if(myZone == 'zone1') {
		$('#container').css({ marginLeft:'0px' });
	}
	else if(myZone == 'zone3') {
		$('#container').css({marginTop:Math.round(-h)+'px', marginLeft:Math.round(-w/2)+'px'});
	}
	else if(myZone == 'zone2') {
		$('#container').css({marginLeft:Math.round(-w)+'px'});
	}
}
