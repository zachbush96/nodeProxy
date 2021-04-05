const express = require('express')
const puppeteer = require('puppeteer')

const app = express()

app.get('/',async (req, res) => {
  const {url} = req.query
  
  if(!url){
    return res.send('No url Provided')
  }
  else {
   try{
     const browser = await puppeteer.launch()
     const page = await broswer.newPage()
     await page.goto('https://${url}')
     
     let document = await page.evaluate(() => document.document.Element.outerHTML)
     
     return res.send()
   } catch (err){
      return res.send(err)     
   }      
  }
})

app.listen(process.env.PORT)
