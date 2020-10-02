const nJwt = require('njwt');
const request = require('request')


const TOKEN = process.argv[2]
const EncodingAESKey = process.argv[3]

var claims ={"username":"-123","msg":"资源猫"}
var jwt = nJwt.create(claims, EncodingAESKey,"HS256");
var token = jwt.compact();

request.post('https://openai.weixin.qq.com/openapi/message/' + TOKEN, {
  json: {
    query: token
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(`statusCode: ${res.statusCode}`)
  console.log(body)
})