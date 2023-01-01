const fs = require("fs");
const errValidate = require("./error");
const dir = "./data";
const valDir = () => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
};
const file = "/contacts.json";
const dirFile = dir + file;
const valDirFile = () => {
  if (!fs.existsSync(dirFile)) fs.writeFileSync(dirFile, "[]", "utf-8");
};

const penyimpanan = (inputContactObj) => {
  valDir();
  valDirFile();
  const contacts = JSON.parse(fs.readFileSync(dirFile, "utf-8"));
  if (errValidate(contacts, inputContactObj)) return false;
  contacts.push(inputContactObj);
  fs.writeFileSync(dirFile, JSON.stringify(contacts, null, 1), "utf-8");
  console.log("berhasil disimpan");
};

module.exports = penyimpanan;
