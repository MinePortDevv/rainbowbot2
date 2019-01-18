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
client.on('message', message => {
              var prefix = "=invite" ;
            if (message.content.startsWith(prefix + "help")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)   
.addField('https://discordapp.com/oauth2/authorize?client_id=532329689344114698&scope=bot&permissions=268435456')


.setColor('RANDOM')
  message.author.sendEmbed(embed);
    }
});

client.login(process.env.BOT_TOKEN);
