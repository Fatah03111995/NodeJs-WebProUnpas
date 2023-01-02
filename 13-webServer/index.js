import fs from "fs";
import http from "http";

const path = "./page/about.html";

const port = 3000;
const readFile = (path, res) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write("pageNotFound");
    } else {
      res.write(data);
    }
    res.end();
  });
};
const loader = (url, file, res) => {
  const path = `./page${file}.html`;
  if (url === file) readFile(path, res);
};
const server = http.createServer((req, res) => {
  const url = req.url;
  console.log(url);
  loader(url, "/about", res);
  loader(url, "/contact", res);
});
server.listen(port, () => {
  console.log(`server listening from port ${port}`);
});
