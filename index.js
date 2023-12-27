const express = require('express');
const fs = require('fs');
const path = require('path');
const upload = require('express-fileupload');
const app = express();
const port = process.env.PORT || 3000;

app.use(upload());

let fileName;
let fileReadPath;
let fileWritePath;

function convertingTxtToJson(){
    fileReadPath = path.join(__dirname, "./uploads", fileName);
    fileWritePath = path.join(__dirname, "./downloads", `${fileName.replace('.txt',"")}.json`);
    let rawData = fs.readFileSync(fileReadPath,{ encoding: 'utf8', flag: 'r' });

    const regex = /\/*\* ([0-9]|[1-9][0-9]{1,3}|10000) \*\//gi;
    const objectIdReplaceRegex = /[A-Za-z]+\(/gi;
    const commaReplaceregex = /"\),/gi;
    const commaAddRegex = /\}/gi;
    const bottomremoveRegex = /\},\]/gi;

    rawData = rawData.replace(regex, "\n");
    let modifedData = "[" + rawData + "]";
    modifedData = modifedData.replace(commaAddRegex, '},');
    modifedData = modifedData.replace(objectIdReplaceRegex, "");
    modifedData = modifedData.replace(commaReplaceregex, '",');
    modifedData = modifedData.replace(bottomremoveRegex, "}]");

    let requiredData = JSON.stringify(JSON.parse(modifedData));
    fs.writeFileSync(fileWritePath,requiredData);
}

app.listen(port, "0.0.0.0", ()=>{
    console.log("Server Running at port:3000");
})

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname + '/index.html'));
})

app.post('/upload', (req,res)=>{
    let file = req.files.file;
    fileName = file.name;
    file.mv('./uploads/' + fileName, (err)=>{
        if(err) throw err;
    });
    res.redirect('/');
});

app.get('/download', (req,res)=>{
    convertingTxtToJson();
    res.download(fileWritePath, `${fileName.replace('.txt',"")}.json`);
})
