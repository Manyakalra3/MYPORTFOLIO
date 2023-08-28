const express = require("express");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
require("dotenv").config();
const app = express();

app.route("/").get(function (req, res) {
  res.sendFile(process.cwd() + "/index.html");
});
app.use('/stylesheets',express.static(__dirname +'/stylesheets'));
app.use('/js',express.static(__dirname +'/js'));

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});


const transporter = nodemailer.createTransport({
    // host: "smtp.gmail.com", 
    // port: 587,
    service:'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });
 
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });
  app.post("/send", (req, res) => {
    //1.
    let form = new multiparty.Form();
    let data = {};
    form.parse(req, function (err, fields) {
    //  console.log(fields);
      Object.keys(fields).forEach(function (property) {
        data[property] = fields[property].toString();
      });
 
      //2. You can configure the object however you want
      let address= `<${data.email}>`;
     // console.log(address);
      const mail = {
        from:`${data.name} <${data.email}>`,
        to: process.env.EMAIL,
        subject: data.subject,
        text: `${data.name} <${data.email}> \n${data.message}`,
      };
  
      //3.
      transporter.sendMail(mail, (err, data) => {
        if (err) {
          console.log(err);
          res.status(500).send("oops! Something went wrong.");
        } else {
          res.status(200).send("Mail Successfully sent !! Thankyou for the feedback.");
        }
      });
    });
  });
  