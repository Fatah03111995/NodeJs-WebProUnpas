const fs = require ('fs')
const pathFile = './data/contacts.json'
const readFile = (pathFile) => {
    return JSON.parse(fs.readFileSync(pathFile, 'utf-8'))
}
const view =  {
    list : () => {
        const contacts = readFile(pathFile)
        contacts.forEach((el,i)=> { 
            console.log(`${i+1}. ${el.nama} - ${el.noHp}`)
        });
    },
    detail : (nama) => {
        const contacts = readFile(pathFile)
        const contact = contacts.filter(el => el.nama === nama)
        console.log(contact)
    },
}

module.exports = view;
