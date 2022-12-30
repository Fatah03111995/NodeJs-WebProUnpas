const {tanya, tutup} = require ('./app/Pertanyaan')
const penyimpanan = require ('./app/FileSystem')
const main = async () => {
    const nama = await tanya("siapa nama kamu : ")
    const noHp = await tanya ("tuliskan no Hp kamu : ")
    const email = await tanya ("tuliskan email kamu : ")
    penyimpanan({nama, noHp, email})
    tutup();
}
main ()