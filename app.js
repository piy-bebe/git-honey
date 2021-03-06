const express = require('express')
const fs = require('fs')

const app = express()
const filePath = 'db.json'

// app.set('port', process.env.PORT || 3000);
const PORT = process.env.PORT || 3001;
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
  if (req.method === 'OPTIONS') {
  res.send(200);
  }
  next();
  });
app.get('/api/products', (req, res) => {
  const content = fs.readFileSync(filePath,"utf8")
  const products = JSON.parse(content)
  console.log('[LOG]: ', products)
  res.send(products)
})

app.listen(PORT, () => {
  console.log(`${PORT}: Server has been started...`)
})