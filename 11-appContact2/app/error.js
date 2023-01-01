const { duplikat, isMail } = require("./validate");

const errValidate = (contacts, inputContactObj) => {
  const err = [];
  const duplikatNama = duplikat(contacts, inputContactObj, "nama");
  const duplikatNoHp = duplikat(contacts, inputContactObj, "noHp");
  const email = isMail(inputContactObj);

  if (duplikatNama) err.push(duplikatNama);
  if (duplikatNoHp) err.push(duplikatNoHp);
  if (email) err.push(email);

  if (err.length !== 0) {
    err.forEach((val) => console.log(val));
    return true;
  } else return false;
};

module.exports = errValidate;
