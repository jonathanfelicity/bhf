const express = require("express")
const bodyParser = require('body-parser')



const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res)=>{
    res.render('one.ejs')
})



// app.use((req, res, next) => {
//     res.status(404).render('404', { title: 'Page not found'})
// })



app.listen(419)