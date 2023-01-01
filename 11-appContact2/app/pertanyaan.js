const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const pertanyaan = {
  tanya: (pertanyaan) => {
    return new Promise((res) => {
      rl.question(pertanyaan, (jawaban) => res(jawaban));
    });
  },
  tutup: () => {
    rl.close();
  },
};

module.exports = pertanyaan;
