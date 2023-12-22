const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

const { MessageMedia } = require('whatsapp-web.js');



client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
})

client.initialize();

client.on('message', message => {
  if (message.body === 'oi' || message.body === 'Oi') {
    message.reply('oie');
  } else if (message.body === "Sim") {
    message.reply('ok, ok')
  } else if (message.body === "Cardápio") {
    const media = MessageMedia.fromFilePath('./images/cardapio.pdf');
    message.reply(media);
  }
});


 