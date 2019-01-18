const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  function lol() {
    client.guilds.get('487943764355055618').roles.find("name", "rainbow").setColor("RANDOM");
  };
  setInterval(lol, 1000);
});

client.on("ready", () => {
  function lol() {
    client.guilds.get('474838434343813120').roles.find("name", "rainbow").setColor("RANDOM");
  };
  setInterval(lol, 1000);
  
});

client.on('ready' , async ready => {
 client.user.setActivity("Type j!invite ", {type:'WATCHING'});
});

client.on("message", message => {
  var prefix = "j!"
    if(message.content.startsWith(prefix + 'invite')) {
        message.delete(5000)
        if(!message.channel.guild) return;
        const e = new Discord.RichEmbed()
        .setColor('#36393e')
        .setDescription(`Check your DM message.`)
     const embed = new Discord.RichEmbed()
         .setColor('#36393e')
         .setTitle('Click to get bot invite ')
         .setURL('https://discordapp.com/oauth2/authorize?client_id=532329689344114698&scope=bot&permissions=268435456')
         .setDescription(``)
   message.channel.send(e).then(m => m.delete(5000))
   message.author.sendEmbed(embed).catch(error => message.reply('please open your DM first.'))
   
   }
   });

client.login(process.env.BOT_TOKEN);
