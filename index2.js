// const h = require('http');
// const server = h.createServer((req, res) => {
//     res.write("hello")
//     res.end()
// })
// server.listen(3000)



const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url === '/home') {

        // res.write('every one are doing someone ')
        res.end("<a href='/not'>not </a>")

    } else if (req.url === '/not') {
        res.end("nothing")
    } else {
        res.end(`<h1> hello bro</h1>
    <a href = '/home'>home</a>`);
    }
})
server.listen(3000);