const express = require("express")
const expressLayouts = require('express-ejs-layouts')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(expressLayouts)



app.get('/', (req, res)=>{
    res.render('home', {title: 'Home'})
})

app.get('/events', (req, res)=>{
    res.render('events', {title: 'Events'})
})
app.get('/donations', (req, res)=>{
    res.render('donations', {title: 'Donations'})
})

app.get('/volunteers', (req, res)=>{
    res.render('volunteers', {title: 'Volunteers'})
})

app.get('/about', (req, res)=>{
    res.render('about', {title: 'About'})
})

app.get('/contact', (req, res)=>{
    res.render('contact', {title: 'Contact'})
})






// 404 PAGE NOT FOUND 


app.listen(419)