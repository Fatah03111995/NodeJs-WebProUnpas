const fs = require ('fs')
const {duplikat, isMail} = require ('./validate')

const dir = './data'
const valDir = () => {
    if (!fs.existsSync(dir)) fs.mkdirSync("./data")
}
const file = '/contacts.json'
const dirFile = dir + file
const valDirFile = () => {
    if (!fs.existsSync(dirFile)) fs.writeFileSync(dirFile, "[]", "utf8")
}

const penyimpanan = (inputObj) => {
    valDir();
    valDirFile();
    const contacts = JSON.parse(fs.readFileSync (dirFile,"utf-8"))
   
    if (duplikat(contacts,inputObj,"nama")) return false;
    if (isMail(inputObj)) return false;
 
    contacts.push(inputObj);
    fs.writeFileSync(dirFile, JSON.stringify(contacts, null, 1),"utf-8")
    console.log('berhasil disimpan !!')
}

module.exports = penyimpanan;