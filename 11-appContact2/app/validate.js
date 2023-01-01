const validator = require("validator");

const validate = {
  duplikat: (objContact, inputContactObject, param) => {
    if (
      objContact.find((contact) => contact[param] === inputContactObject[param])
    ) {
      return `${param} sudah ada !! gunakan ${param} lainnya ..`;
    } //jika ada duplikat maka benar ada
  },
  isMail: (inputContactObject) => {
    if (!validator.isEmail(inputContactObject.email)) {
      //jika email salah maka benar
      return "pastikan e-mail sudah ditulis dengan benar !!";
    }
  },
};

module.exports = validate;
