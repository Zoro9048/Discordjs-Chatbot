const { Client } = require("discord.js");
const client = new Client({ intents: 513 });
const smartestchatbot = require("smartestchatbot");
const x = new smartestchatbot.Client();
client.on("ready", () => {
  console.log("Ready for chatting!| Bot by 0_0");
});
client.on("message", async message => {
  // when client detects a message
  if (message.author.bot) return; 
  message.content = message.content
    .replace(/@(everyone)/gi, "everyone")
    .replace(/@(here)/gi, "here");
  if (message.content.includes(`@`)) {
    return message.reply(
  
    );
  }
  message.channel.startTyping();
  if (!message.content)
    return message.channel.send("I can only reply to text messages");
  x.chat({
    message: message.content,
    name: client.user.username,
    owner: "Zoro",
    user: message.author.id,
    language: "en"
  }).then(reply => {
 
message.reply(`${reply}`); 

  });
  message.channel.stopTyping();
});
client.login(process.env.TOKEN);

client.login('ODQ1MzU4MDk2NzUzNjIzMDgw.YKfzFA.kNCOI4daijs8O3c4cJIb3-nc00k')