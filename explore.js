require('dotenv').config();

console.log(process.env);

const Twilio = require("twilio");

const twilio_account_sid = process.env.TWILIO_ACCOUNT_SID;
const twilio_auth_token = process.env.TWILIO_AUTH_TOKEN;

const client = new Twilio(twilio_account_sid, twilio_auth_token);


client.messages.create({
    body: 'Dette er en SMS sendt fra VS code:) !',
    from:'+12482663212',
    to: '+4793614894'
})
.then(message => console.log(message.body));

console.log('Gathering your message log');



// client.messages.list()
//     .then(messages => 
//         console.log(`The most recent message is ${messages[0].body}`)
//         ).catch(err => console.error(err));

//         console.log('Gathering your message log');