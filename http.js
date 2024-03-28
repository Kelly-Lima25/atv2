

var http = require("http");
const fs = require("fs");
const path = require("path");

// listen é pra chamar a porta do servidor 
const server = http.createServer((req,resposta)=>{
    if(req.url === '/' || req.url === '/index.html'){
        fs.readFile(path.join(__dirname, 'index.html'), (err,data) =>{
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
            resposta.end(data);
        })

    }
    else if(req.url === '/style.css'){
        fs.readFile(path.join(__dirname, 'style.css'), (err,data) =>{
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
            resposta.end(data);
        })
    }
    else if(req.url === '/fotos/paul-weaver-nWidMEQsnAQ-unsplash.jpg'){
        fs.readFile(path.join(__dirname, '/fotos/paul-weaver-nWidMEQsnAQ-unsplash.jpg'), (err,imageData) =>{
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
            resposta.end(imageData);
        })
    }
    else if(req.url === '/fotos/jannis-lucas-msNCux-u3lo-unsplash.jpg'){
        fs.readFile(path.join(__dirname, '/fotos/jannis-lucas-msNCux-u3lo-unsplash.jpg'), (err,imageData) =>{
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
            resposta.end(imageData);
        })
    }
    else if(req.url === '/fotos/nathanael-desmeules-8E1Yplw6Hho-unsplash.jpg'){
        fs.readFile(path.join(__dirname, '/fotos/nathanael-desmeules-8E1Yplw6Hho-unsplash.jpg'), (err,imageData) =>{
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
            resposta.end(imageData);
        })
    }
    else if(req.url === '/fotos/robert-bye-tG36rvCeqng-unsplash.jpg'){
        fs.readFile(path.join(__dirname, '/fotos/robert-bye-tG36rvCeqng-unsplash.jpg'), (err,imageData) =>{
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
            resposta.end(imageData);
        })
    }
    else if(req.url === "fotos/user.png"){
        fs.readFile(path.join(__dirname, "fotos/user.png"), (err, imageData) =>{
            if (err) {
                console.error('Erro ao ler o arquivo:', err);
                return;
            }
            resposta.end(imageData);
        })
    }
   
    else{
        resposta.end("Site não encontrado");
    }
}).listen(8186);

console.log("Meu servidor!");

