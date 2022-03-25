const http = require('http')
const user = [
  { id: 1, name: 'cyy' },
  { id: 2, name: 'lxr' },
  { id: 3, name: 'lxr_cyy' }
]
const sever = http.createServer((req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  if (req.url === '/api/user') {
    res.end(JSON.stringify(user))
  } else {
    res.end('404 Not Found')
  }
})
sever.listen(3000, () => {
  console.log('后端服务已启动在3000端口');
})
