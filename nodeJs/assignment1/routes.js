const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;

    if( url === '/') {
        res.write('<html>');
        res.write('<head><title>Greetings</title></head>');
        res.write('<body><h1>Hello Pavel</h1><br><form method="POST" action="/create-user"><input type="text" name="username"><button type="submit">send</button></form></body>')
        res.write('</html>')
        res.end();
    }

    if( url === '/users') {
        //dummy users
        res.write('<html>');
        res.write('<head><title>Dummy user</title></head>');
        res.write('<body><ul><li>User 1</li></ul</body>');
        res.write('</html>');
    }

    if( url === '/create-user' && method === 'POST') {
        
        //parsing data in the console

        const body = [];

        req.on('data', (chunk)=>{
            //loggin user on the console
            console.log(chunk);
            body.push(chunk);

            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody.split('=')[1]);
        })
    }
}

module.exports = requestHandler;