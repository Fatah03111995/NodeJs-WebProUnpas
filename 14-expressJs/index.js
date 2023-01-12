import express from "express";

const app = express();

// routing
app.get('',(req, res) => {
    res.send('Welcome...')
})
app.get('/about', (req,res) => {
    res.send('This is About page')
})
app.get('/contact', (req,res) => {
    res.send('this is Contact page')
})

//menggunakan midleware
app.use('',(req,res) => {
    res.send('Errooorr 404')
})
//listening
app.listen(3000, ()=>{
    console.log("this server is listening from port 3000")
})
