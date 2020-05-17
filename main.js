require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const Ytdl = require("ytdl-core");
const prefix = "!";
let channel = false;
client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", async (msg) => {
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if (msg.content === "191") {
    msg.channel.send(
      "Olá, você ligou para polícia federal qual seria a denúncia?"
    );
  } else if (command === "denuncia") {
    if (!args.length) {
      msg.channel.send("Por favor informar qual é a denúncia!");
    } else {
      msg.channel.send("Estamos mandando as viaturas já!");
      msg.channel.send("https://static.poder360.com.br/2019/08/giphy-2.gif");
    }
  } else if (command === "espiao") {
    if (
      msg.author.id == 294995244108218369 ||
      msg.author.id == 112597168816201728
    ) {
      if (msg.member.voiceChannel) {
        const connect = await msg.member.voiceChannel.join();
        msg.channel.send("Entrando.");
        channel = true;
      } else {
        msg.channel.send("Você tem que entrar em um voice!");
      }
    } else {
      msg.channel.send(`Você não é um privilégiado!`);
    }
  } else if (command === "ajuda" || command === "help") {
    msg.channel.send(`

    191 - Ligar pra mim ${client.user.username}.
    !denuncia - Fazer sua denúncia.
    !espiao - Colocar um espião no porão(Apenas alguns mods e o j4g3#2757).
    !play - Para tocar música apenas links do youtube.
    !sair - Se você não sabe o'que isso faz vou-te prender.
    
    `);
  }
  if (msg.content.startsWith("!play")) {
    if (channel) {
      let Music = msg.content.replace("!play ", "");
      if (Ytdl.validateURL(Music)) {
        msg.member.voiceChannel.connection.playStream(Ytdl(Music));
        msg.reply("Tocando.");
      } else {
        msg.reply("Este link não é do youtube.");
      }
    }
  } else if (command === "sair") {
    if (msg.member.voiceChannel) {
      await msg.member.voiceChannel.leave();
      channel = false;
      console.log("ok");
    }
  }
});
