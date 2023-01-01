const yargs = require("yargs");
const simpan = require("./app/penyimpanan");

yargs.command({
  command: "add",
  describe: "fungsi menambahkan kontak",
  builder: {
    nama: {
      type: "string",
      demandOption: true,
      describe: "nama lengkap",
    },
    email: {
      type: "string",
      demandOption: false,
      describe: "e-mail",
    },
    noHp: {
      type: "string",
      demandOption: true,
      describe: "nomor handphone",
    },
  },
  handler(argv) {
    const contact = {
      nama: argv.nama,
      email: argv.email,
      noHp: argv.noHp,
    };
    simpan(contact);
  },
});

yargs.parse();
