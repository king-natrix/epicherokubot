const Discord = require('discord.js');
const client = new Discord.Client();
const nitro = require('discordnitro')


client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!help') {
    	message.reply('``!nitro``');
  	}
});

client.on('message', message => {
    if (message.content === '!nitro') 
    message.channel.send(nitro(1))
  
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
