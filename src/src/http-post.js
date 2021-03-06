const http = require('http') 
const querystring = require('querystring')

const queryData = querystring.stringify({
    province: '上海',
    city: '上海',
    district: '宝山区',
    address: '同济支路199号',
    latitude: 43.0,
    longitude: 160.0,
    message: '测试',
    contact: '1234567',
    type: 'sell',
    time: 1571217561
})

const options = {
    protocol: 'http:',
    hostname: 'localhost',
    method: 'post',
    port: 3000,
    path: '/data',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Content-Length': Buffer.byteLength(queryData)
    }
}

const server = http.createServer((req, res) => {
    const request = http.request(options, (result) => {

    })

    request.write(queryData)
    request.end()

    res.end()
})

server.listen(8080, () => {
    console.log('localhost:8080')
})