//this example can be found here:
//https://github.com/erdivartanovich/js-generator-example

console.log("======== simple generator example part 1 ==========");
function *prosesBertahap(x, y) {
	yield x*y;
	yield x + y;
	yield (x/y);
}

var it = prosesBertahap(6,7);

var res= it.next();
console.log(res);

var res= it.next();
console.log(res.value);

var res = it.next();
console.log(res.value);

//bagaimana memperoleh hasil sekaligus?
var [...arrvalues] = prosesBertahap(2,3);
console.log('hasil sekaligus: ', arrvalues);



















console.log("======== simple generator example part 2 ==========");
var x = 1;

function *prosesBertahap2() {
	++x;
	yield;
	console.log("x:", x);
	++x;
	yield;
	console.log("x:", x);
}

function bar() {
	x++;
	console.log("x by bar:", x);
}

var it = prosesBertahap2 ();
it.next();
x;
bar();
x;
it.next();
bar();
it.next();
it.next();
















console.log("======== simple generator example part 3 ==========");
function *prosesBertahap3(x) {
	var y = x * (yield "hello");
	return y;
} 

var it = prosesBertahap3(6);
var hasil_pertama = it.next(); // y = 6 *
console.log(hasil_pertama);

var hasil_kedua = it.next(8);
console.log(hasil_kedua);

var hasil_ketiga = it.next(9);
console.log(hasil_ketiga);















console.log("======== simple generator example part 4 ==========");
function promise() {
	return new Promise((resolve, reject) => {
		setTimeout(function() {
			var kondisi = Math.floor(Math.random() * (2));
			kondisi ? resolve('sukses') : reject('gagal')

		}, 3000);
	}
	)};

function *generator() {
			var hasilPromise = yield promise();
			console.log('hasil promise: ', hasilPromise);
}

var it = generator();
var p = it.next().value;

p.then(
	(result) => {
		it.next(result);
	},
	(error) => {
		it.throw(error)
	}
)
