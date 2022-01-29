const http = require('http')
const path = require('path')
const readStaticFile = require('./readStaticFile')

const server = http.createServer(async (req, res) => {
    const urlString = req.url
    // const filePathName = path.resolve(__dirname, './public', urlString)
    const filePathName = path.join(__dirname, './public', urlString)
    const {data, mimeType} = await readStaticFile(filePathName)

    res.writeHead(200, {
        'content-type': `${mimeType};charset=utf-8`
    })
    res.write(data)
    res.end()
})

server.listen(8080, () => {
    console.log('localhost:8080');
})

