const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  function lol() {
    client.guilds.get('487943764355055618').roles.find("name", "rainbow").setColor("RANDOM");
  };
  setInterval(lol, 100);
});
 
client.login(process.env.BOT_TOKEN);
