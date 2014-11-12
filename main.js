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
