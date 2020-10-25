//=============================== - [ Consts ] - ===================================
const Discord = require("discord.js");

const bot = new Discord.Client();

const { Util } = require("discord.js");

const timezone = require("moment-timezone");

const YouTube = require("simple-youtube-api");

const fs = require("fs");

const request = require("request");

const bannedwords = ["@here", "@everyone"];

const ytdl = require("ytdl-core");

const prefix = "p!";

const queue = new Map();
bot.on("ready", () => console.log("🤖Ready Bot In Online🤖"));



bot.on("message", message => {
  if (message.content === "p!help") {
    const embed = new Discord.RichEmbed().setColor("#000000")
      .setDescription(`

**📝 𝗖𝗼𝗺𝗺𝗻𝗱 𝗛𝗲𝗹𝗽 𝗠𝗲𝗻𝘂**
 
**🤖 The prefix for the bot is: ⇰ 〔 p! 〕 🤖**


〔 **bot 🔒 〕⇰ 『 p!anti bot on  』

〔 bot 🔓 〕⇰ 『 p!anti bot off 』

〔bot〕⇰  『 p!anti ban 1 -- 5 』

〔kick〕⇰ 『 p!anti ban 1 -- 5 』

〔role〕⇰ 『 p!anti role 1 -- 5 』

〔channel〕⇰『 p!anti channel 1 -- 5 』

〔time〕⇰『 p!anti time  1 -- 5 』

〔 📝 〕⇰『 p!about 』

〔 ✨ 〕⇰『 p!invite   』

〔 ✨ 〕⇰『 p!bot 』**

`)
.setAuthor(`Max Bot `, bot.user.avatarURL)
.setFooter(`max bot | Coded by Emir Bolat, by ᵏᵃᵏ PrOfEsSoR🇨🇳.`, bot.user.avatarURL)
return message.channel.send(embed);
     
    message.channel.sendEmbed(embed);
     
  }
});

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});


bot.on("message", message => {
if (message.content === "p!about") {
const embed = new Discord.RichEmbed().setColor("#000000")
.setAuthor(message.guild.name, message.guild.iconURL)
.setDescription(`
𝗡𝗮𝗺𝗲

Security#0460

𝗜𝗗

682146815017222150

𝗢𝘄𝗻𝗲𝗿
PROFESSOR






`);
message.channel.sendEmbed(embed);
}
});

bot.on("ready", () => {
  console.log(`[!]-------------------------------------[!]`);
  console.log(`Display Name : ${bot.user.username}`);
  console.log(`Public Prefix : ${prefix}`);
  console.log(`Version : 0.0.1`);
  console.log(`[!]-------------------------------------[!]`);
});

const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.listen(process.env.PORT);
function t_c() {
  request.get(
    `https://${process.env.PROJECT_DOMAIN}.glitch.me/`,
    (error, response, body) => {
      let AGRIN = body;
      return AGRIN;
    }
  );
}

bot.on("ready", () => {
console.log(
`Online In Servers : ${bot.guilds.size} | Users : ${bot.users.size}`
);
let statuses = [
///// لێرانە شتێک بووسە بۆ ستریمینگەکە
//// DASTKARE MAKA DACHE BGYE BEKAYTA EROR BA WRYAYI DASKARII MAKA
`Servers: ${bot.guilds.size}| Users: ${bot.users.size}`,
`p!help It's time to secure your server!`,
];

  setInterval(function() {
let dnd = statuses[Math.floor(Math.random() * statuses.length)];
bot.user.setStatus("");
bot.user.setActivity(dnd, {

  
  
type:"", 
url: "https://www.twitch.tv/faith"
});
}, 2000);
});





let anti = JSON.parse(fs.readFileSync("./antigrefff.json", "UTF8"));
let config = JSON.parse(fs.readFileSync("./server.json", "UTF8"));
bot.on("message", message => {
  if (!message.channel.guild) return;
  let user = anti[message.guild.id + message.author.id];
  let num = message.content
    .split(" ")
    .slice(2)
    .join(" ");
  if (!anti[message.guild.id + message.author.id])
    anti[message.guild.id + message.author.id] = {
      actions: 0
    };
  if (!config[message.guild.id])
    config[message.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (message.content.startsWith(prefix + "anti")) {
    if (message.author.id !== message.guild.owner.user.id)
      return message.channel.send(
        "**:closed_lock_with_key:  Just Ownership can online **"
      );
    if (message.content.startsWith(prefix + "anti ban")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num))
        return message.channel.send("**Just number ! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**Anti ban settings has been updated,
Enabled: true
Minimum: ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num))
        return message.channel.send("**Just number ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**Anti kick settings has been updated,
Enabled: true
Minimum: ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti role")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num))
        return message.channel.send("**Just number ! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**Anti role.C settings has been updated,
Enabled: true
Minimum: ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti role")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num))
        return message.channel.send("**Just number ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**Anti role.D settings has been updated,
Enabled: true
Minimum: ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channel")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num))
        return message.channel.send("**Just number ! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**Anti channel.C settings has been updated,
Enabled: true
Minimum: ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channel")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num))
        return message.channel.send("**Just number ! **");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**Anti channel.D settings has been updated,
Enabled: true
Minimum: ${config[message.guild.id].chaCrLimit}**`
        
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num) return message.channel.send("**Please  number selector! **");
      if (isNaN(num))
        return message.channel.send("**Just number ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `**Anti time settings has been updated,
Enabled: true
Minimum: ${config[message.guild.id].time}**`
      );
    }
  }
  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});
bot.on("channelDelete", async channel => {
  const entry1 = await channel.guild
  
    .fetchAuditLogs({
      type: "CHANNEL_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("loge");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username}  :  is deleting channels on your server called , stop him before i take action!`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("channelCreate", async channel => {
  if (!["text", "ca", "vo"].includes(channel.type.toLowerCase()))
    return;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "CHANNEL_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;

  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("loge");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].chaCrLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username}  :  is creating channels on your server , stop him before i take action!**`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
bot.on("roleDelete", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_DELETE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("loge");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleDelLimit
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username}  :  is deleting roles on your server called , stop him before i take action!`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("roleCreate", async channel => {
  const entry1 = await channel.guild
    .fetchAuditLogs({
      type: "ROLE_CREATE"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[channel.guild.id])
    config[channel.guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[channel.guild.id + entry.id]) {
    anti[channel.guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
  } else {
    anti[channel.guild.id + entry.id].actions = Math.floor(
      anti[channel.guild.id + entry.id].actions + 1
    );
    console.log("loge");
    setTimeout(() => {
      anti[channel.guild.id + entry.id].actions = "0";
    }, config[channel.guild.id].time * 1000);
    if (
      anti[channel.guild.id + entry.id].actions >=
      config[channel.guild.id].roleCrLimits
    ) {
      channel.guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          channel.guild.owner.send(
            `**⇏ | ${entry.username}  :  is creating roles on your server called , stop him before i take action!`
          )
        );
      anti[channel.guild.id + entry.id].actions = "0";
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("guildBanAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_BAN_ADD"
    })
    .then(audit => audit.entries.first());
  console.log("ban: " + entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} Tried to ban **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("guildKickAdd", async (guild, user) => {
  const entry1 = await guild
    .fetchAuditLogs({
      type: "MEMBER_KICK"
    })
    .then(audit => audit.entries.first());
  console.log(entry1.executor.username);
  const entry = entry1.executor;
  if (!config[guild.id])
    config[guild.id] = {
      banLimit: 3,
      chaDelLimit: 3,
      chaCrLimit: 3,
      roleDelLimit: 3,
      kickLimits: 3,
      roleCrLimits: 3,
      time: 30
    };
  if (!anti[guild.id + entry.id]) {
    anti[guild.id + entry.id] = {
      actions: 1
    };
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
  } else {
    anti[guild.id + entry.id].actions = Math.floor(
      anti[guild.id + entry.id].actions + 1
    );
    console.log("loge");
    setTimeout(() => {
      anti[guild.id + entry.id].actions = 0;
    }, config[guild.id].time * 1000);
    if (anti[guild.id + entry.id].actions >= config[guild.id].banLimit) {
      guild.members
        .get(entry.id)
        .ban()
        .catch(e =>
          guild.owner.send(`**⇏ | ${entry.username} Tried to kick **`)
        );
      anti[guild.id + entry.id].actions = 0;
      fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
      fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
        e
      ) {
        if (e) throw e;
      });
    }
  }

  fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
    if (e) throw e;
  });
  fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(e) {
    if (e) throw e;
  });
});

bot.on("guildMemberRemove", async member => {
  const entry1 = await member.guild
    .fetchAuditLogs()
    .then(audit => audit.entries.first());
  if (entry1.action === "MEMBER_KICK") {
    const entry2 = await member.guild
      .fetchAuditLogs({
        type: "MEMBER_KICK"
      })
      .then(audit => audit.entries.first());
    const entry = entry2.executor;
    if (!config[member.guild.id])
      config[member.guild.id] = {
        banLimit: 3,
        chaDelLimit: 3,
        chaCrLimit: 3,
        roleDelLimit: 3,
        kickLimits: 3,
        roleCrLimits: 3,
        time: 30
      };
    if (!anti[member.guild.id + entry.id]) {
      anti[member.guild.id + entry.id] = {
        actions: 1
      };
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000);
    } else {
      anti[member.guild.id + entry.id].actions = Math.floor(
        anti[member.guild.id + entry.id].actions + 1
      );
      console.log("loge");
      setTimeout(() => {
        anti[member.guild.id + entry.id].actions = 0;
      }, config[member.guild.id].time * 1000 || 30000);
      if (
        anti[member.guild.id + entry.id].actions >=
        config[member.guild.id].kickLimits
      ) {
        member.guild.members
          .get(entry.id)
          .ban()
          .catch(e =>
            member.owner.send(
              `**⇏ | ${entry.username} Tried to kick **`
            )
          );
        anti[member.guild.id + entry.id].actions = 0;
        fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(
          e
        ) {
          if (e) throw e;
        });
        fs.writeFile(
          "./antigreff.json",
          JSON.stringify(anti, null, 2),
          function(e) {
            if (e) throw e;
          }
        );
      }
    }

    fs.writeFile("./config.json", JSON.stringify(config, null, 2), function(e) {
      if (e) throw e;
    });
    fs.writeFile("./antigreff.json", JSON.stringify(anti, null, 2), function(
      e
    ) {
      if (e) throw e;
    });
  }
});
//=========={Anit-Bot}========//

let antibots = JSON.parse(fs.readFileSync("./antibot.json", "utf8")); //require antihack.json file
bot.on("message", message => {
  if (message.content.startsWith(prefix + "antibots on")) {
    if (!message.member.hasPermission("Ownership")) return message.reply(":");
    antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(
      `You have enabled anti bot!`
    );
    fs.writeFile("./antibot.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
//antihack with ON , OFF ! RARE CODE
//LIKE PLUSBOT !

bot.on("message", message => {
  if (message.content.startsWith(prefix + "antibots off")) {
    if (!message.member.hasPermission("Ownership")) return message.reply("");
    antibots[message.guild.id] = {
      onoff: "Off"
    };
    message.channel.send(
      `You have disabled anti bot!`
    );
    fs.writeFile("./antibot.json", JSON.stringify(antibots), err => {
      if (err)
        console.error(err).catch(err => {
          console.error(err);
        });
    });
  }
});
bot.on("guildMemberAdd", member => {
  if (!antibots[member.guild.id])
    antibots[member.guild.id] = {
      onoff: "Off"
    };
  if (antibots[member.guild.id].onoff === "Off") return;
  if (member.user.bot) return member.kick();
});

fs.writeFile("./antibot.json", JSON.stringify(antibots), err => {
  if (err)
    console.error(err).catch(err => {
      console.error(err);
    });
});


  bot.on("message", message => {
  if (message.content === "p!invite") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("=--> click touch for link bot <--=")
      .setURL(
        "https://discord.com/api/oauth2/authorize?client_id=767190881689272330&permissions=8&scope=bot"
      ) // Type Your Link here after ''
      .setFooter("", message.author.avatarURL);
    message.channel.sendEmbed(embed);
  }
});




bot.on('message', message => {

    if(message.content === "p!bot") {
 
     const embed = new Discord.RichEmbed()

        .setImage("https://cdn.discordapp.com/attachments/696796419595567108/741981480653291570/image0-40.gif")
        .setColor("RANDOM")

        .setDescription(`

 

**🤖 NAME BOT **
<@767190881689272330>

 

**Servers**🌐 **__${bot.guilds.size}__**

**Users**  👥 **__${bot.users.size}__**

**Channels**📚 **__${bot.channels.size}__**

**🤴OwnerBot**
<@682146815017222150>
 
**🤖coder Bot**
<@539468591884664845>
 
 

`)

               message.channel.sendEmbed(embed);

           }

});







bot.on("message", message => {
let ToOFaN
if (message.content === "p!lock") {
if (!message.channel.guild)
return message.reply("This command is only for servers");
if (!message.member.hasPermission("MANAGE_MESSAGES"))
return message.reply("<a:righth:759903066563543090> Sorry you don't have `MANAGE MESSAGES` permissions");
message.channel
.overwritePermissions(message.guild.id, {
SEND_MESSAGES: false
})
.then(() => {
message.reply("**🔒 locked channel 🔒**");
});
}

if (message.content === "p!unlock") {
if (!message.channel.guild)
return message.reply("** This command is only for servers**");
if (!message.member.hasPermission("MANAGE_MESSAGES"))
return message.reply("**__توانات نیە بیکەیتەوە چونکە ڕۆڵەکەی تۆ ```MANAGE_MESSAGES``پێ نیە**");
message.channel
.overwritePermissions(message.guild.id, {
SEND_MESSAGES: true
})
.then(() => {
message.reply("**🔓 Unlocked Channel🔓 **");
});
}
});












bot.on('message', message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	 if (message.content === prefix + "dark") {
		let embed = new Discord.RichEmbed()
			.setColor('BLACK')
			.setTitle('Choose From The Reactions :')
			.setDescription(`
=====================
<a:righth:759903066563543090> 🛡️ ->> Secuirty Commands
=====================
<a:righth:759903066563543090> <a:dark21:744205765232820225> ->> Admin Commands
=====================
<a:righth:759903066563543090> <a:dark22:744205831981236314> ->> Command information
=====================`);
		message.channel.send(embed).then(async msg => {
			msg.react('🛡️');
			msg.react('⚙');
			msg.react('🗓');
			const p1 = msg.createReactionCollector(
				(reaction, user) =>
					reaction.emoji.name == '🛡️' && user.id == message.author.id,
				{ time: 86400000 }
			);
			const p2 = msg.createReactionCollector(
				(reaction, user) =>
					reaction.emoji.name == '⚙' && user.id == message.author.id,
				{ time: 86400000 }
			);
			const p3 = msg.createReactionCollector(
				(reaction, user) =>
					reaction.emoji.name == '🗓' && user.id == message.author.id,
				{ time: 86400000 }
			);
			p1.on('collect', async r => {
				await r.remove(message.author);
				let embe = new Discord.RichEmbed()
					.setColor('white')
					.setThumbnail(msg.guild.iconURL)
					.setTitle(`** Name :** **${msg.guild.name}**`)
			
					.setDescription(`
=====================

**<a:dark22:744205831981236314> {Secuirty Commands} <a:dark22:744205831981236314>**

=====================**
<a:righth:759903066563543090>p!anti kick     3 
<a:righth:759903066563543090>p!anti ban      3 
=====================
<a:righth:759903066563543090>p!anti role   3 
=====================
<a:righth:759903066563543090>p!anti channel   3 
=====================
<a:righth:759903066563543090>panti bot on   3 
<a:righth:759903066563543090>p!anti bot off    3 
=====================
<a:righth:759903066563543090>p!set time  0.1 
=====================
<a:righth:759903066563543090>p!stats
=====================
<a:righth:759903066563543090>p! invite**
=====================
`)
					.setFooter(message.author.username, message.author.avatarURL)
					.setTimestamp();
				msg.edit(embe);
			});
			p2.on('collect', async r => {
				await r.remove(message.author);
				let embe = new Discord.RichEmbed()
					.setColor('White')
					.setThumbnail(msg.guild.iconURL)
					.setTitle(`Name :**${msg.guild.name}**`)
			
					.setDescription(`
==================

**<a:dark21:744205765232820225> { ADMIN COMANNDS } <a:dark21:744205765232820225> **

==================
**
<a:righth:759903066563543090>p!lock / p!unlok
===================
<a:righth:759903066563543090>p!verify
===================
<a:righth:759903066563543090>p!
===================
<a:righth:759903066563543090>p!
===================
<a:righth:759903066563543090>p!
===================
<a:righth:759903066563543090>p!
===================
<a:righth:759903066563543090>p!
===================**`)
					.setFooter(message.author.username, message.author.avatarURL)
					.setTimestamp();
				msg.edit(embe);
			});
			p3.on('collect', async r => {
				await r.remove(message.author);
				let embe = new Discord.RichEmbed()
					.setColor('white')
					.setThumbnail(msg.guild.iconURL)
					.setTitle(`Name :**${msg.guild.name}**`)
			
					.setDescription(`
==================

 ** <a:dark22:744205831981236314> { INFO HELP ANTI }** <a:dark22:744205831981236314>

===================
<a:righth:759903066563543090> **p!help-ban
===================
<a:righth:759903066563543090> p!help-kick
===================
<a:righth:759903066563543090> p!help-role
===================
<a:righth:759903066563543090> p!help-channel
===================
<a:righth:759903066563543090> p!help-bot**
===================

`)
      
					.setFooter(message.author.username, message.author.avatarURL)
					.setTimestamp();
				msg.edit(embe);
			});
		});
	}
});




bot.on('message', async message => {
	if (message.content === 'p!verify') {
    let embed = new Discord.RichEmbed()
    .setDescription('max bot vote !!! ✅ ')
    .setColor('RANDOM')
    .setTimestamp()
		const reactmessage = await message.channel.send(embed);
		await reactmessage.react('✅');

		const filter = (reaction, user) => reaction.emoji.name === '✅' && !user.bot;
		const collector = reactmessage.createReactionCollector(filter, { time: 15000 });

		collector.on('collect', async reaction => {
			const user = reaction.users.last();
			const guild = reaction.message.guild;
			const member = guild.member(user) || await guild.fetchMember(user);
			member.addRole(message.roleid);  //config
		});
	}
});



bot.login("NzY3MTkwODgxNjg5MjcyMzMw.X4uULw.5CLp6_kY2chmygROXpfHT2Yrr-I");

