require('dotenv').config()
const express =  require('express')
    , bodyParser = require('body-parser')
    , nodemailer = require('nodemailer')
  
    
const {
  SERVER_PORT,
  EMAIL,
  MAIL_PASSWORD
} = process.env
    
const app = express()

app.use(bodyParser.json())

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: MAIL_PASSWORD
  }
})

app.post('/email', (req, res, next) => {
  console.log('endpoint hit')
  const {name, email, message} = req.body
  let mail = {
    from: EMAIL,
    to: EMAIL,
    html: "Name: " + name + "<br/>" + "Respond to: " + email + "<br/> Message: " + message 
  }
  transporter.sendMail(mail, (error, response) => {
    if(error){
        console.log("Error sending email");
        console.log(error);
    }else {
        console.log("Email Sent!")
    }
    transporter.close();
})
res.sendStatus(201);
})



app.listen(SERVER_PORT, console.log(`Docked at port ${SERVER_PORT}`))
    
