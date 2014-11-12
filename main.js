var bgImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg'];

$('body').css({'background-image': 'url(images/' + bgImages[Math.floor(Math.random() * bgImages.length)] + ')'});

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
			minlength: 9,
			pwcheck: true
		}
	}
});

$.validator.addMethod('pwcheck', function (value) {
	return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value)
	&& /[a-z]/.test(value)
	&& /\d/.test(value)
}, 'Must contain one letter and one number');