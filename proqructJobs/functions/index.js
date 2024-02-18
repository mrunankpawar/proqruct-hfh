const {firestore} = require("firebase-admin");
const functions = require("firebase-functions");

// Initialize the Firebase Admin SDK
const admin = require("firebase-admin");
admin.initializeApp();


const nodemailer = require('nodemailer');
var http = require('http');
var url = require('url');


console.log("Creating Transport")
const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'mrunankpawar05@gmail.com',
        pass: 'fijnrrxyvtlpxsxd'
   }
});

function formatDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}


async function mailService(userName ,userEmail, productName, productExpiryDate) {

    var htmlTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Product Expiry Notification</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f4f4f4;
                }

                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                h2 {
                    color: #333;
                }

                p {
                    color: #555;
                }

                .footer {
                    margin-top: 20px;
                    color: #888;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h2>Hi ${userName},</h2>
                <p>We hope this email finds you well. This is a notification that the following product is set to expire tomorrow: 🚨</p>
                
                <p><strong>Product Name:</strong> ${productName}</p>
                <p><strong>Expiry Date:</strong> ${productExpiryDate}</p>

                <p>Please take the necessary action to ensure the timely management of your products ♻️</p>

                <p>Thank you for using our service.</p>

                <div class="footer">
                    <p><i>This is an automated message. Please do not reply.</i></p>
                </div>
            </div>
        </body>
        </html>
    `;

    var mailOptions = {
        from:'mrunankpawar05@gmail.com',
        to: userEmail,
        subject: '🚨 Important Notification: Product Expiry Reminder!',
        html:  htmlTemplate
    }

    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response)
        }
    })
    return null;
}


exports.mailingJob = functions.pubsub.schedule("*/50 * * * *")
    .onRun(async (context) => {
      console.log("Batch Run!!");
      const db = firestore();
     
    

    const usersCollection = await db.collection("users").get();

    const tomorrowDate = new Date();
    tomorrowDate.setDate(tomorrowDate.getDate() + 1);
    const tomorrowDateString = tomorrowDate.toISOString().substring(0, 10);

    console.log(tomorrowDateString);

    usersCollection.forEach(async (userDoc) => {
        const userData = userDoc.data();
        const { productExpiryDate, userEmail, productName,  userName} = userData;
        console.log(userData);
        console.log(productExpiryDate + ":" + userEmail);
        if (productExpiryDate === tomorrowDateString) {
            console.log("Sending email to:", userEmail);
            await mailService(userName ,userEmail, productName, productExpiryDate);
        }
    });

      return null;
    });