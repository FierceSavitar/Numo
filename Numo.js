

const Discord = require("discord.js");
const Numo = new Discord.Client();
const config = require('./config.json');

Numo.on('ready', () => {
  console.log(`Logged in as ${Numo.user.username}!`);
});


Numo.on('message', msg => {
   let prefix = "n!";
   if(!msg.content.startsWith(config.prefix)) return;
  if (msg.content === prefix + 'ping') {
    msg.reply('Pong!');
  }
else if(msg.content === prefix + 'support') {
  msg.reply('https://discord.gg/J33EChP');
}

  else if (msg.content === prefix + 'help') {
      msg.reply('Type n!commands for the list of my most genuine commands');
  }
   else if (msg.content === prefix + 'info') {
      msg.reply('I am a bot created by Javax');
  }
  else if (msg.content === prefix + 'commands') {
      msg.reply('commands: n!math, n!happyspam, n!prune, n!ping, n!prune');
  }
  else if (msg.content === prefix + 'happyspam') {
      msg.reply(':smiley:' + ':smiley:' + ':smiley:' + ':smiley:' + ':smiley:' + ':smiley:' + ':smiley:' + ':smiley:' + ':smiley:' + ':smiley:' );
  }
  else if(msg.content === prefix + "prune") {
    const user = msg.mentions.users.first();
const amount = !!parseInt(msg.content.split(" ")[1]) ? parseInt(msg.content.split(" ")[2]) : parseInt(msg.content.split(" ")[1])
if (!amount) return msg.reply("How many messages do you want me to delete!");
if (!amount && !user) return msg.reply("Must specify a user and amount, or just an amount, of messages to purge!");
msg.channel.fetchMessages({
  limit: amount,
}).then((messages) => {
  if (user) {
    const filterBy = user ? user.id : Client.user.id;
    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
  }
 msg.channel.bulkDelete(messages).catch(error => console.log(error.stack));
});
  }
  else if(msg.content === prefix + 'whoisagoodnumo') {
    msg.reply('0110101 I am, I am 01101010 Beep Boop Bop')
  }
  
 else if (message.content === 'what is my avatar') {
    // send the user's avatar URL
    message.reply(message.author.avatarURL);
  }

});
Numo.login(config.token);
