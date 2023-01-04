const yargs = require ('yargs')
const simpan = require ('./app/FileSystem')
const view = require ('./app/view')
//1. yargs.command() ----> berisi argumen
// yargs.command(
//     "add", //command: nama perintah
//     "Menambahkan Kontak Baru", //describe
//     ()=>{},//builder : berisi func atau object
//     (argv)=>{ //handler : untuk menangani nilai yang ditangkap
//         console.log(argv)
//     }
// )
// yargs.parse()//untuk menjalankan yargs

//2. yargs.command ({}) ----> berisi object
yargs.command({
    command:"add",
    describe:"fungsi untuk menambahkan data contact",
    builder: {
        nama: { //berisi object untuk menuliskan option yang dapat diberikan
            demandOption:true,
            type:'string',
            describe:"nama lengkap"
        },
        email:{
            demandOption:false,
            type:'string',
            describe:"e-mail"
        },
        noHp:{
            demandOption:true,
            type:'string',
            describe:"no Hp"
        }
    },
    handler (argv) {
        const contact = {
            nama : argv.nama,
            email : argv.email,
            noHp : argv.noHp
        };
        simpan(contact)
    }    
}).demandCommand()

yargs.command({
    command:"list",
    describe:"menampilkan data berupa list",
    handler () {
        view.list()
    }
})

yargs.command ({
    command:"detail",
    describe:"menampilkan data secra detail",
    builder: {
        nama: {
            demandOption:true,
            type:'string',
            describe:"nama lengkap"
        }
    },
    handler (argv) {
        view.detail(argv.nama)
    }
})
yargs.parse()