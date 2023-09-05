const express = require("express");
const app = express( );
const PORT = 3000;

const fs = require( 'fs' ) ; // require the file system module, is a library 


app.engine('portal', (filePath, options, callback) => { // define the view engine called portal
  fs.readFile(filePath, (err, content) => {
    if (err) return callback(err)
    // this is an extremely simple view engine we'll be more complex later
    const rendered = content.toString()
      .replace('#title#', '<title>' + options.title + '</title>')
      .replace('#message#', '<h1>' + options.message + '</h1>')
      .replace('#content#','<div>'+ options.content + '</div>' )
      .replace('#url#', options.url);
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'portal') // register the hypatia view engine


//route 1 template 1
app.get('/', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Hello there!', content: 'I am the Boss Ricky Ross' })
  })
  
  app.get('/about-me', (req, res) => {
    res.render('template', { title: 'Hey', message: 'Rick Ross!', content: 'The most underated Rapper in the game' })
  })
  
  app.get('/another-one', (req, res) => {
    res.render('template', { title: 'We The Best', message: 'Who!', content: 'We Taking Over, Major Key Alert, Yall know who it is, All I do is win' })
  })

  app.get('/lyrics', (req, res) => {
    res.render('template2', { title: 'We The Best', message: 'Who!', content: 'God Forgives: I Dont', url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROU9LIs2iDSXOpGnv7bDgTeBJ9Hrqfh5g9LFK9A9J1Xw&s" })
  })

app.get('/cars', (req, res) => {
    res.render('template2', { title: 'We The Best', message: 'Who!', content: 'God Forgives: I Dont', url: "https://www.bosshunting.com.au/cdn-cgi/imagedelivery/izM8XxyLg9MD6py1ribxJw/www.bosshunting.com.au/2021/07/Rick-Ross-Car-Collection-No-Drivers-License.jpg/w=1200,h=675"})

})

app.get('/charity', (reeq, res) => {
    res.render('template2', { title: 'We The Best', message: 'Who!', content: 'God Forgives: I Dont', url: "https://img.thriftbooks.com/api/images/i/m/D36EB7F66EC25F9823B6FB611DAE0EF10B44B787.jpg"})
})

app.get('/chain', (reeq, res) => {
    res.render('template2', { title: 'We The Best', message: 'Who!', content: 'God Forgives: I Dont', url: "https://i.pinimg.com/originals/52/a9/4a/52a94a99edc7485feb040788d70c4c1c.jpg"})
})

app.get('/party', (reeq, res) => {
    res.render('template2', { title: 'We The Best', message: 'Who!', content: 'God Forgives: I Dont', url: "https://media.gq.com/photos/56ab6e0c2bc59eac1441cbfe/master/w_2000,h_1333,c_limit/rick-ross-40th-birthday-15.jpg"})
})

app.get('/house', (reeq, res) => {
    res.render('template2', { title: 'We The Best', message: 'Who!', content: 'I got a real nice house!', url: "https://media.architecturaldigest.com/photos/5b10174775a4f940de3da9e3/4:3/w_3776,h_2832,c_limit/DF-10511.jpg"})

})

app.get('/fans', (reeq, res) => {
    res.render('template2', { title: 'We The Best', message: 'Who!', content: 'Love to my fans!', url: "https://exclusiveaccess.net/content/2017/06/Rick-Ross-pops-up-at-checkers-to-meet-and-greet-fans-photos-by-Thaddaeus-McAdams-ExlusiveAccess.Net-23-of-24-800x534.jpg"})

})




  app.listen(PORT, function() {
    console.log(`listening on ${PORT}`)
})