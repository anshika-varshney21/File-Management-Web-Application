const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    fs.readdir('./files', function(err, files) {
        if (err) {
            return res.status(500).send('Error reading directory');
        }
        res.render("index", { files: files });
    } )
})

app.get('/file/:filename', (req, res) => {  
    fs.readFile(`./files/${req.params.filename}`, 'utf8', function(err, filedata) {
        if (err) {
            return res.status(404).send('File not found');
        }
        res.render("show", { filename: req.params.filename, filedata: filedata });
    });
})
app.get('/edit/:filename', (req, res) => {
    res.render('edit',{filename: req.params.filename});
})

app.post('/edit', (req, res) => {
    fs.rename(`./files/${req.body.Previous}`, `./files/${req.body.New}`, function(err) {
        if (err) {
            return res.status(500).send('Error renaming file');
        }
        res.redirect("/");
    })  
})


app.post('/delete', (req, res) => {
    const filename = req.body.filename;
    fs.unlink(`./files/${filename}`, function(err) {
        if (err) {
            return res.status(500).send('Error deleting file');
        }
        res.redirect("/");
    });
});

app.post('/create', (req, res) => {
    fs.writeFile(`./files/${req.body.title.split(' ').join('')}.txt`, req.body.details, function(err) {
        if (err) {
            return res.status(500).send('Error creating file');
        }
        res.redirect("/");
    })
    
})



app.listen(3000);