const http = require('http'); // Loads the http module
const url = require('url');

http.createServer((request, response) => {

    // 1. Tell the browser everything is OK (Status code 200), and the data is in plain text
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });

    // 2. Write the announced text to the body of the page
    response.write("<!DOCTYPE \"html\">");
    response.write("<html>");
    response.write("<body>");
    response.write("<h1>Hello, this is a test</h1>");
    response.write("</body>");
    response.write("</html>");

    // 3. Tell the server that all of the response headers and body have been sent
    response.end();

}).listen(1337); // 4. Tells the server what port to be on

