var sliders = $( '.slider' );
if (sliders.length > 0){
		sliders.each(function(e){
			var $this = $(this),
				slidewrap = $this.find('ul:first'),
				sliderFx = slidewrap.data('fx'),
				sliderAuto = slidewrap.data('auto'),
				sliderCircular = slidewrap.data('circular'),
				sliderPrefix = '#slider-',
				sliderHeight = slidewrap.data( 'height' ) ? slidewrap.data( 'height' ) :  'variable',
				sliderPaddingTop = slidewrap.data( 'padding-top' ) ? slidewrap.data( 'padding-top' ) :  '',
				sliderMin = slidewrap.data( 'min' ) ? slidewrap.data( 'min' ) :  1,
				sliderMax = slidewrap.data( 'max' ) ? slidewrap.data( 'max' ) :  5;

				if ( sliderMax === 1 ) {
					$(this).addClass( 'oneslider' );
				}
				if ( sliderPaddingTop ) {
					slidewrap.css( 'paddingTop', sliderPaddingTop );
				}

			$this.attr( 'id', 'slider-' + e );

			slidewrap.carouFredSel({
				responsive:true,
				infinite: (typeof sliderCircular) ? sliderCircular : true,
				circular: (typeof sliderCircular) ? sliderCircular : true,
				auto : sliderAuto ? sliderAuto : false,
				scroll : {
					fx : sliderFx ? sliderFx : 'crossfade',
					duration : instance.options.speedAnimation,
					timeoutDuration : instance.options.sliderInterval,
					items: 'page'
				},
				items: {
					// width: 400,
					height: sliderHeight,
					visible : {
						min : sliderMin,
						max : sliderMax
					}
				},
				swipe : {
					onTouch : true,
					onMouse : false
				},
				prev : $(sliderPrefix + e).find('.prev'),
				next : $(sliderPrefix + e).find('.next'),
				pagination : {
					container: $(sliderPrefix + e).find('.nav-pages')
				}
			});

		});
	}