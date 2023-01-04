const validator = require('validator');
validate = {
    // duplikat : () => {}
    // duplikat : function () {}
    duplikat (contacts, inputObj, param) { // penulisan baru
        if(contacts.find((contact)=>contact[param] === inputObj[param])){
            console.log(`${param} sudah terdaftar, gunakan ${param} lain`)
            return true
        }
    },

    isMail (inputObj) {
        if(!validator.isEmail(inputObj.email)){
        console.log("masukkan email yang benar bung")
        return true
    }
    }

}
module.exports = validate;