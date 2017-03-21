//contoh promise biasa
const fetchData = () => new Promise((resolve) => {
    setTimeout(() => resolve('hasil data yang didapatkan setelah beberapa waktu'), 2000);
});

const data = fetchData().then(result => console.log('hasil promise: ', result));

//contoh generator
function* tampilkanBeberapaData() {
	//gunakan yield untuk mensuplay data satu persatu
	yield 'data 1'; 
	yield 'data 2';
	yield 'data 3';
}

//hasil dari generator di atas bisa ditampilkan seperti ini
for (const val of tampilkanBeberapaData()) {
	console.log('hasil generator: ', val)
}

//atau begini:
const [...values] = tampilkanBeberapaData(); //kita menampung nilai  kembalian dalam sebuah array (menggunakan operator spread ...)
console.log('hasil generator secara spread: ', values);

//hasil dari generator adalah sebuah object yang bisa diiterasi (dalam loop) 
//iterasi nilai dilakukan dengan perintah .next()
/**
* nilai yang dihasilkan adalah sebuah object seperti berikut:
*	{
*		value: Any;
*		done: Boolean;
*	}
*	property "done" mengindikasikan apakah generator sudah mencapai nilai terakhir yang dimilikinya
*/








