const express = require('express')
const puppeteer = require('puppeteer')

const app = express()

app.get('/',async (req, res) => {
  return res.send('Hi')
})

app.listen(process.env.PORT)
