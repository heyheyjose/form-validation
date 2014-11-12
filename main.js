var images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];

$('body').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});

$('form').validate({
	rules: {
		name: {
			required: true,
			minlength: 7,
			maxlength: 26
		},
		email: {
			required: true,
			email: true
		},
		password: {
			required: true,
			minlength: 9
		}
	}
});