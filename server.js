const express = require('express')

const app = express()

app.get('/', (req, res) => {
  return res.send('<h5>1234สวัสดีจ้าสาวๆ</h5')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.info('Server is ready at', PORT)
})