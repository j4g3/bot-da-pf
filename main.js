require("dotenv").config();
const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "!";
client.login(process.env.TOKEN);

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", async (msg) => {
  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  console.log(msg);
  if (msg.content === "191") {
    msg.reply("Olá, você ligou para polícia federal qual seria a denúncia?");
  }

  if (command === "denuncia") {
    if (!args.length) {
      msg.reply("Por favor informar qual é a denúncia!");
    } else {
      msg.reply("Estamos mandando as viaturas já!");
      msg.reply("https://static.poder360.com.br/2019/08/giphy-2.gif");
    }
  }
  if (command === "espiao") {
    if (
      msg.author.id == 294995244108218369 ||
      msg.author.id == 112597168816201728
    ) {
      if (msg.member.voice.channel) {
        const connect = await msg.member.voice.channel.join();
        msg.reply("Entrando.");
      } else {
        msg.reply("Você tem que entrar em um voice!");
      }
    } else {
      msg.reply(`Você não é um privilégiado!`);
    }
  }
  if (command === "ajuda" || command === "help") {
    msg.reply(`
      191 - Ligar pra mim ${client.user.username}.
      !denuncia - Fazer sua denúncia.
      !espiao - Colocar um espião no porão(Apenas alguns mods e o j4g3#2757).
    `);
  }
});
