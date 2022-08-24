const express = require("express");
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;
// app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended : false}));
const connectDB = require('./config/db');
connectDB();

app.use(express.static(path.join(__dirname, './public')));


//template engine
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.engine('html', require('ejs').renderFile);



//Routes
app.use('/api/files', require('./routes/files'));
app.use('/files', require('./routes/show'));
app.use('/files/download', require('./routes/download'));

app.get('/api/files', (req,res) => {
    res.render("home")
})

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})