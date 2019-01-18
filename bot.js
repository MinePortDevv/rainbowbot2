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
 client.user.setActivity("You", {type:'WATCHING'});
});

client.login(process.env.BOT_TOKEN);
