const displayAtATime = (value) => new Promise((resolve) => {
	setTimeout(function() {
		resolve(value)
	}, 3000);
})
const show = async () => {
	const a = displayAtATime('a');
	const b = displayAtATime('b');
	return await(a) + await(b);
	
};
show().then(result => console.log(result));
