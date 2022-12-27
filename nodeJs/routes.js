const fs = require('fs');

const reqestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if ( url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">send</button></form>')
        res.write('</html>');
        return res.end();
    }
    
    if(url === '/message' && method === 'POST') {
    
        //enabling the user to write input and save it in a file
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt',message, err => {
                res.statusCode = 302;   
            res.setHeader('Location', '/');                   
            return res.end();                  
                                     
            });                                                               
        })                                                            
    }
    
    
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My first page</title></head>');
    res.write('<body><h1>Hola ! mucho gusto ! </h1></body>');
    res.end();


};


module.exports = reqestHandler;

// module.exports = {
//     handler: reqestHandler,
//     someText: "Some hard coded text ! "
// }


