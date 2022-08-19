const express = require('express'),
setting = require('./appsetting'),
con = require('./connection'),
crud = require('./crud'),
bodyParser = require('body-parser'),

app = new express()
app.set('views','./views')
app.set('view engine','ejs')
app.use(bodyParser.json({'limit':'10mb',extended:true}))
app.use(bodyParser.urlencoded({'limit':'10mb',extended:true}))
app.use(express.static(__dirname + '/..'));
console.log("DIRNAME",__dirname)

module.exports = {
    app:app,
    setting:setting,
    con:con,
    crud:crud
}