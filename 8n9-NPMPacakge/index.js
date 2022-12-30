const log = console.log;
//beberapa module di NPM yang dapat bermanfaat
//jika module di install di cakupan global, ketika d deploy , module tidak ikut terkopi, maka install di folder projectnya
//1. validator, untuk melakukan pengecekan terhadap variabel, noHP, email, dll
    //npm i validator

    const validator = require ('validator')
    const a = "fatah03111995@gmail.com"
    const isEmail = validator.isEmail;
    log(isEmail(a))//true

//2. nodemon, jika ada perubahan code (ctrl + s) yang terdeteksi oleh nodemon, nodemon akan secara otomatis menjalankan ulang file (tidak perlu node namafile.js)
//npm i --save nodemon disimpan di depedencies
//npm i --save-dev nodemon disimpan di devdepedencies
//tidak bisa langsung dirunning di dalam terminal, harus ada penambahan kode di file package pada properti script, tambahkan properti baru
//namaPerintah : nodemon namaFile.js
//running di terminal npm run namaPerintah
