const readline = require ('readline')
const rl = readline.createInterface ({
    input:process.stdin,
    output:process.stdout
})
    const pertanyaan = {
        tanya :  (pertanyaan) => {
            return new Promise ((resolve)=>{
                rl.question(pertanyaan,(jawaban)=> resolve(jawaban))
            })
        },
        tutup : () => {
            rl.close()
        }
}

module.exports = pertanyaan;