$(document).ready(function(){

	$('#basicuse').jflickrfeed({
		limit: 12,
		qstrings: {
			id: 'sssdfdsf'
		},
		itemTemplate: '<li><a href="http://www.flickr.com/photos/sdfsfs/"target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	});
	
	$('#cbox').jflickrfeed({
		limit: 12,
		qstrings: {
			id: 'sdfsfsf'
		},
		itemTemplate: '<li>'+
						'<a rel="colorbox" href="{{image}}" title="{{title}}">' +
							'<img src="{{image_s}}" alt="{{title}}" />' +
						'</a>' +
					  '</li>'
	}, function(data) {
		$('#cbox a').colorbox();
	});
});