var express = require('express')


var app = new express()


app.use('/static',express.static(__dirname+'/build'))
// it is /static
app.set('views',__dirname+'/views')
app.set('view engine','pug')
app.get('*', function(req, res) {
  res.render("index")
})
app.listen(9999, function() {
  console.log("listening to the joint on port 9999")
})