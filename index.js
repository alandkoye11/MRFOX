const Discord = require("discord.js");
const client = new Discord.Client({disableEveryone: true})


client.on('message', message => { 

if (!message.guild) return; 

if (message.content === 'wara') { 
 if (!message.member.hasPermission("ADMINISTRATOR"))  return;
if (message.member.voiceChannel) { 

message.member.voiceChannel.join() 

.then(connection => { 


}) 

.catch(console.log); 

} else { 

message.reply('**خۆت لە ڤۆیس نیت بیمە کوێ من**'); 

} 

} 

});


client.on("message" , message => {

if(message.channel.type === 'dm') {

if (message.content.startsWith("https://discord.gg/")) {
    
  message.author.send(https://discord.gg/XWdmdwg3Br`) // لینکی سێرڤەری خۆت لیرە دابنی بە هەتا هەتای بێت
    
  client.channels.get("750771688375058503").send(
`> sent By  <@${message.author.id}> ✅ 
${message.content}`)
}
    }
        })




client.on('ready', () => {
console.log(`ON ${client.guilds.size} Servers`);
console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` reklam bomn bnera `,"http://twitch.tv/PAYWANDcamper") 
});




client.login("NzkzNjcwMzM2NDc0MTIwMjMz.X-vpGQ.zLFOafJsfsGnL94CxRTz9tokGSQ");//تۆکین لێرە دانێ
