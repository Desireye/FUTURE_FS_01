const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json({limit: "25mb"}));
app.use(express.urlencoded({limit: "25mb"}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

function sendEmail() {
    return newPromise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            service: "gmail.com", 
            auth: {
                user: "modesiresoneye@gmail.com",
                pass: "ciku wybk uswv dtyn"
            }
        });

        const mail_config = {
            from: "exam"
        }
    })
}