// const yargs = require("yargs");
// const chalk = require ("chalk")
import chalk from "chalk";
const log = console.log;
// log(process.argv);//process module yang dimiliki node.js tidak memerlukan require
//coba ketik di terminal node main abdul fatah
// akan keluar array yang mengembalikan nilai => (1. tempat penyimpanan node 2. tempat penyimpanan entry point 3. argumen yang dimasukkan)

//mengambil argumen dari prompt
const command = process.argv[2]
if (command === "add"){
    //perintah jika node main add
};
if (command === "remove"){
    //perintah jika node main remove
}

//menggunakan module yargs untuk membuat interaksi dengan command prompt
//masukkan perintah di command <node note add --nama="abdul fatah" --noHp="085798222315">
// log(yargs.argv)
// akan muncul
//{
//     _: [ 'add' ],         ----> perintah
//     nama: 'abdul fatah',  ----> data yang dikirim dengan key --nama
//     noHp: '085798222315',
//     '$0': 'note'
//   }

//jika perintah node note add nama="abdul fatah" --noHp="085798222315" 
//akan muncul
//{
//     _: [ 'add', 'nama=abdul fatah' ],
//     noHp: '085798222315',  ----> hanya dengan key -- dianggap sebagai key
//     '$0': 'note'
//}

//chalk digunakan untuk memberikan warna pada terminal
const teks = `halo nama saya ${chalk.green("abdul fatah")}`
log(teks)