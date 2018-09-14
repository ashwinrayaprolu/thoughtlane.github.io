$(document).ready(function(){

	$('#basicuse').jflickrfeed({
		limit: 12,
		qstrings: {
			id: '62587165@N08'
		},
		itemTemplate: '<li><a href="http://www.flickr.com/photos/62587165@N08/"target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a></li>'
	});
	
	$('#cbox').jflickrfeed({
		limit: 12,
		qstrings: {
			id: '62541976@N04'
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