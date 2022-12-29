const fs = require ("fs")
const readline =  require("readline")

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})



rl.question("siapa nama kamu ?", (nama) => {
    rl.question("tuliskan no hp kamu !", (noHp)=>{
        const contact = {
            nama, noHp
        }
        const path = "data/contacts.json"
        fs.readFile(path, "utf-8",(err,success) => {
            if(err)throw err;
            else {
                const contacts = JSON.parse(success)
                contacts.push(contact)
                fs.writeFileSync (path, JSON.stringify(contacts, null, 1))
                //JSON.stringify memiliki 3 parameter
                // (1. yang akan dilakukan string (dalam array),
                // 2. kriteria input yang akan dimasukkan output ex ["nama"], hanya nama yang akan dimasukkan di output,
                // 3. menambahkan indentasi, supaya enak dibaca)
                console.log("berhasil")
            }
        })
       
        rl.close()
    })
})

