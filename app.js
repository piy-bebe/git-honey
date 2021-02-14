const express = require('express')
const fs = require('fs')

const app = express()
const filePath = 'db.json'

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS');
  if (req.method === 'OPTIONS') {
  res.send(200);
  }
  next();
  });
app.get('/products', (req, res) => {
  const content = fs.readFileSync(filePath,"utf8")
  const products = JSON.parse(content)
  console.log(products)
  res.send(products)
})

app.listen(3000)