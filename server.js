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

const prefix = "z!";

const queue = new Map();
bot.on("ready", () => console.log("๐คReady Bot In Online๐ค"));



bot.on("message", message => {
  if (message.content === "....") {
    const embed = new Discord.RichEmbed().setColor("05FFEE")
      .setDescription(`

**๐ ๐๐ผ๐บ๐บ๐ป๐ฑ ๐๐ฒ๐น๐ฝ ๐ ๐ฒ๐ป๐**
 
**๐ค The prefix for the bot is: โฐ ใ z! ใ ๐ค**


ใ **bot ๐ ใโฐ ใ z!anti bot on  ใ

ใ bot ๐ ใโฐ ใ z!anti bot off ใ

ใbotใโฐ  ใ z!anti ban 1 -- 5 ใ

ใkickใโฐ ใ z!anti ban 1 -- 5 ใ

ใroleใโฐ ใ z!anti role 1 -- 5 ใ

ใchannelใโฐใ !anti channel 1 -- 5 ใ

ใtimeใโฐใ z!anti time  1 -- 5 ใ

ใ ๐ ใโฐใ p
ใ โจ ใโฐใ p!invite   ใ

ใ โจ ใโฐใ p!bot ใ**

`)
.setAuthor(`zangana `, bot.user.avatarURL)
.setFooter(`zangana | Coded by Emir Bolat, by แตแตแต zangana๐จ๐ณ.`, bot.user.avatarURL)
return message.channel.send(embed);
     
    message.channel.sendEmbed(embed);
     
  }
});

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});


bot.on("message", message => {
if (message.content === "z!about") {
const embed = new Discord.RichEmbed().setColor("05FFEE")
.setAuthor(message.guild.name, message.guild.iconURL)
.setDescription(`
๐ก๐ฎ๐บ๐ฒ

**Security**

๐๐

**<@639145405476503552>**

๐ข๐๐ป๐ฒ๐ฟ
**! ZANGANA | Kแดสแดษชsส Sแดแดแดสษชแดส**






`);
message.channel.sendEmbed(embed);
}
});

bot.on("ready", () => {
  console.log(`[!]-------------------------------------[!]`);
  console.log(`Display Name : ${bot.user.username}`);
  console.log(`Public Prefix : ${prefix}`);
  console.log(`Version : v.1`);
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
`z!help | | Kurdish Security Staff`,
);
let statuses = [

`z!help | | Kurdish Security Staff `,
`z!help | | Kurdish Security Staff `,
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
            `**โ | ${entry.username}  :  is deleting channels on your server called , stop him before i take action!`
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
            `**โ | ${entry.username}  :  is creating channels on your server , stop him before i take action!**`
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
            `**โ | ${entry.username}  :  is deleting roles on your server called , stop him before i take action!`
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
            `**โ | ${entry.username}  :  is creating roles on your server called , stop him before i take action!`
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
          guild.owner.send(`**โ | ${entry.username} Tried to ban **`)
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
          guild.owner.send(`**โ | ${entry.username} Tried to kick **`)
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
              `**โ | ${entry.username} Tried to kick **`
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
//=========={Anit-Bot}========//let antibots = JSON.parse(fs.readFileSync("./antibot.json", "utf8")); //require antihack.json file
bot.on("message", message => {
  if (message.content.startsWith(prefix + "antibots on")) {
    if (!message.member.hasPermission("Ownership")) return message.reply(":");
      antibots[message.guild.id] = {
      onoff: "On"
    };
    message.channel.send(
      `You have **enabled** anti bot!`
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
  if (message.content === "W!invite") {
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
  if (message.content.startsWith( prefix + "bot")) {
  message.channel.send({
  embed: new Discord.RichEmbed()
     .setAuthor(bot.user.username,bot.user.avatarURL)
     .setThumbnail(bot.user.avatarURL)
     .setColor('RANDOM')
     .setTitle('``Info The Bot`` ')
     .addField('``My Ping``' , [`${Date.now() - message.createdTimestamp}` + 'MS'], true)
     .addField('``Servers``', [ bot.guilds.size ], true)
     .addField('``Channels``' , `[${bot.channels.size}]` , true)
     .addField('``Users``' ,`[${bot.users.size}]` , true)
     .addField('``My Name``' , `[ ${bot.user.tag} ]` , true)
     .addField('``My ID``' , `[ ${bot.user.id} ]` , true)
           .addField('``My Prefix``' , `[ W!
]` , true)
           .addField('``Bot Version``' , `[ v.1 ]` , true)
           .setFooter('Made By | Win Ter')
  })
  }
  });

 



bot.on("message", message => {
let ToOFaN
if (message.content === "W!lock") {
if (!message.channel.guild)
return message.reply("This command is only for servers");
if (!message.member.hasPermission("MANAGE_MESSAGES"))
return message.reply("<a:righth:759903066563543090> Sorry you don't have `MANAGE MESSAGES` permissions");
message.channel
.overwritePermissions(message.guild.id, {
SEND_MESSAGES: false
})
.then(() => {
message.reply("**๐ locked channel ๐**");
});
}

if (message.content === "W!unlock") {
if (!message.channel.guild)
return message.reply("** This command is only for servers**");
if (!message.member.hasPermission("MANAGE_MESSAGES"))
return message.reply("**__ุชูุงูุงุช ู?? ุจ?ฺฉ??ุช?ู? ฺููฺฉ? ฺ?ฺต?ฺฉ?? ุช? ```MANAGE_MESSAGES``ูพ? ู??**");
message.channel
.overwritePermissions(message.guild.id, {
SEND_MESSAGES: true
})
.then(() => {
message.reply("**๐ Unlocked Channel๐ **");
});
}
});












bot.on('message', message => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	 if (message.content === prefix + "help") {
		let embed = new Discord.RichEmbed()
			.setColor('BLACK')
			.setTitle('Choose From The Reactions :')
			.setDescription(`
=====================
 ->> Secuirty Commands
=====================
 ->> Admin Commands
=====================
 ->> Command information
=====================`);
		message.channel.send(embed).then(async msg => {
			msg.react('๐ก๏ธ');
			msg.react('โ');
			msg.react('๐');
			const p1 = msg.createReactionCollector(
				(reaction, user) =>
					reaction.emoji.name == '๐ก๏ธ' && user.id == message.author.id,
				{ time: 86400000 }
			);
			const p2 = msg.createReactionCollector(
				(reaction, user) =>
					reaction.emoji.name == 'โ' && user.id == message.author.id,
				{ time: 86400000 }
			);
			const p3 = msg.createReactionCollector(
				(reaction, user) =>
					reaction.emoji.name == '๐' && user.id == message.author.id,
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

** {Secuirty Commands} **

=====================**
W!anti kick     3 
W!anti ban      3 
=====================
W!anti role   3 
=====================
W!anti channel   3 
=====================
W!anti bot on   3 
W!anti bot off    3 
=====================
W!set time  0.1 
=====================
w!stats
=====================
w!invite**
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

** { ADMIN COMANNDS } **

==================
**
W!lock / p!unlok
===================
W!verify
===================
W!bot
===================
W!id
===================
W!about
===================
W!bot voice
===================
W!list bot
===================
W!view / p!unview
===================
W!all bots
===================
W!server
===================
W!clear
===================
W!avatar
===================
W!move all
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

 ** { INFO HELP ANTI }**

===================
**Auto logs channel ( logs )
===================
Auto  stop @.everyone 
===================
Auto  stop @.here 
===================**

`)
      
					.setFooter(message.author.username, message.author.avatarURL)
					.setTimestamp();
				msg.edit(embe);
			});
		});
	}
});




bot.on('message', async message => {
	if (message.content === 'W!verify') {
    let embed = new Discord.RichEmbed()
    .setDescription('NooB bot vote !!! โ ')
    .setColor('RANDOM')
    .setTimestamp()
		const reactmessage = await message.channel.send(embed);
		await reactmessage.react('โ');

		const filter = (reaction, user) => reaction.emoji.name === 'โ' && !user.bot;
		const collector = reactmessage.createReactionCollector(filter, { time: 15000 });

		collector.on('collect', async reaction => {
			const user = reaction.users.last();
			const guild = reaction.message.guild;
			const member = guild.member(user) || await guild.fetchMember(user);
			member.addRole(message.roleid);  //config
		});
	}
});










bot.on("voiceStateUpdate", (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;
  let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;

  let ch = oldM.guild.channels.find("name", "logs");
  if (!ch) return;

  oldM.guild.fetchAuditLogs().then(logs => {
    let user = logs.entries.first().executor.username;

    if (m1 === false && m2 === true) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
        .setDescription(` ${user} ู?ูุช? ู??ุณ ฺฉุฑุง     ${newM} `)
        .setColor("#36393e")
        .setTimestamp();
      ch.send(embed);
    }
    if (m1 === true && m2 === false) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
        .setDescription(` ${user}  ู?ูุช? ฺค??ุณ? ฺฉุฑุง??ู?  ${newM} `)
        .setColor("#36393e")
        .setTimestamp();
      ch.send(embed);
    }
    if (d1 === false && d2 === true) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
        .setDescription(` ${user}  ุฏ?ู?ูุฏ? ฺค??ุณ ฺฉุฑุง    ${newM}`)
        .setColor("#36393e")
        .setTimestamp();

      ch.send(embed);
    }
    if (d1 === true && d2 === false) {
      let embed = new Discord.RichEmbed()
        .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
        .setDescription(` ${user}   ุฏ?ฺค?ูุฏ? ฺค??ุณ? ูุงุจุฑุง   ${newM}`)
        .setColor("#36393e")
        .setTimestamp();

      ch.send(embed);
    }
  });
});

bot.on("messageUpdate", (message, newMessage) => {
  if (message.content === newMessage.content) return;
  if (
    !message ||
    !message.id ||
    !message.content ||
    !message.guild ||
    message.author.bot
  )
    return;
  const channel = message.guild.channels.find("name", "logs");
  if (!channel) return;

  let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setTitle(" ุฏ?ุณฺฉุงุฑ? ฺฉุฑุฏู? ู?ุณุฌ  :  ")
    .addField("ูพ?ุด ุฏ?ุณฺฉุงุฑ? ฺฉุฑุฏู ", `${message.cleanContent}`)
    .addField(" ุฏูุง? ุฏ?ุณฺฉุงุฑ? ฺฉุฑุฏู   ", `${newMessage.cleanContent}`)
    .addField("  ู?ฺ?ูุงฺต?  ", `<#${message.channel.id}>`)
    .addField("  ู?ูุง??ู ", `<@${message.author.id}> `)
    .setColor("#36393e")
    .setTimestamp();
  channel.send({ embed: embed });
});

bot.on("guildMemberAdd", member => {
  if (!member || !member.id || !member.guild) return;
  const guild = member.guild;

  const channel = member.guild.channels.find("name", "logs");
  if (!channel) return;
  let memberavatar = member.user.avatarURL;
  const fromNow = bot (member.user.createdTimestamp).fromNow();
  const isNew = new Date() - member.user.createdTimestamp < 900000 ? "๐" : "";

  let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag}`, member.user.avatarURL)
    .setColor("#36393e")
    .setDescription(` <@${member.user.id}> ูุงุช? ูุงู ุณ?ุฑฺค?ุฑ `)
    .setTimestamp();
  channel.send({ embed: embed });
});

bot.on("guildMemberRemove", member => {
  if (!member || !member.id || !member.guild) return;
  const guild = member.guild;

  const channel = member.guild.channels.find("name", "logs");
  if (!channel) return;
  let memberavatar = member.user.avatarURL;
  const fromNow = bot (member.joinedTimestamp).fromNow();

  let embed = new Discord.RichEmbed()
    .setAuthor(`${member.user.tag}`, member.user.avatarURL)
    .setColor("#36393e")
    .setDescription(` <@${member.user.id}>  ุฏ?ุฑฺู ู? ุณ?ุฑฺค?ุฑ  `)
    .setTimestamp();
  channel.send({ embed: embed });
});

bot.on("messageDelete", message => {
  if (
    !message ||
    !message.id ||
    !message.content ||
    !message.guild ||
    message.author.bot
  )
    return;
  const channel = message.guild.channels.find("name", "logs");
  if (!channel) return;

  let embed = new Discord.RichEmbed()
    .setAuthor(`${message.author.tag}`, message.author.avatarURL)
    .setTitle("ุณฺ?ู?ู?? ูุงู?  :   ")
    .addField(" ูุงู?  ", `${message.cleanContent}`)
    .addField("   ู? ฺ?ูุงฺต?  ", `<#${message.channel.id}>`)
    .addField("  ู?ูุง??ู ", `<@${message.author.id}> `)
    .setColor("#36393e")
    .setTimestamp();
  channel.send({ embed: embed });
});

bot.on("roleDelete", role => {
  bot.setTimeout(() => {
    role.guild
      .fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = role.guild.channels.find("name", "logs");
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor("#36393e")
            .setTitle("ุณฺ?ู?ู?? ฺ?ฺต ")
            .addField(" ูุงู? ฺ?ฺต? ุณฺุงู?   ", role.name, true)
            .addField("  ุฆุง?ุฏ? ฺ?ฺต ", role.id, true)
            .addField(" ฺ?ูฺฏ? ฺ?ฺต  ", role.hexColor, true)
            .addField(" ู?ูุง??ู ", exec, true)
            .setColor("#36393e")
            .setTimestamp();

          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

bot.on("roleCreate", role => {
  bot.setTimeout(() => {
    role.guild
      .fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = role.guild.channels.find("name", "logs");
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setTitle("ฺ?ฺต ุฏุฑูุณุช ฺฉุฑุฏู    ")
            .addField("  ูุงู? ฺ?ฺต  ", role.name, true)
            .addField("  ุฆุง?ุฏ? ฺ?ฺต ", role.id, true)
            .addField("  ฺ?ูฺฏ? ฺ?ฺต ", role.hexColor, true)
            .addField(" ู?ูุง??ู ", exec, true)
            .setColor("#36393e")
            .setTimestamp();

          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

bot.on("guildBanAdd", (guild, member) => {
 bot.setTimeout(() => {
    guild
      .fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find("name", "logs");
          if (!log) return;
         bot.fetchUser(member.id).then(myUser => {
            let embed = new Discord.RichEmbed()
              .setAuthor("ุจุงูุฏ ฺฉุฑุงู :  ")
              .setColor("#36393e")
              .setThumbnail(myUser.avatarURL)
              .addField("   ", `**${myUser.username}**`, true)
              .addField("   ", `**${exec}**`, true)
              .setFooter(myUser.username, myUser.avatarURL)
              .setTimestamp();
            log.send(embed).catch(e => {
              console.log(e);
            });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});

bot.on("guildBanRemove", (guild, member) => {
  bot.setTimeout(() => {
    guild
      .fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find("name", "logs");
          if (!log) return;
          bot.fetchUser(member.id).then(myUser => {
            let embed = new Discord.RichEmbed()
              .setAuthor("     ")
              .setColor("#36393e")
              .setThumbnail(myUser.avatarURL)
              .addField("   ", `**${myUser.username}**`, true)
              .addField("   ", `**${exec}**`, true)
              .setFooter(myUser.username, myUser.avatarURL)
              .setTimestamp();
            log.send(embed).catch(e => {
              console.log(e);
            });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});





bot.on('message', message => {
    var prefix = "W!"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |๐ค.";
}
if (z.bot) {
var w = 'ุจูุช';
}else {
var w = 'ุฆ?ูฺตุง?ู';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('๐ฑ| ูุงู:',`**<@` + `${z.id}` + `>**`, true)
.addField('๐ก| ุฆุง?ุฏ?:', "**"+ `${z.id}` +"**",true)
.addField('๐ฅ| ุฌ?ุฑ? ุฆ?ูฺตุง?ู:','**'+y+'**' , true)
.addField('๐ค| ุฌ?ุฑ? ุฆ?ฺฉุงููุช:',"**"+ w + "**",true)    
.addField('๐| ฺฉ?ุฏ? ุฆ?ฺฉุงููุช:',"**#" +  `${z.discriminator}**`,true)
.addField('**ฺฉุงุช? ุฏุฑูุณุชฺฉุฑุฏู? ุฆ?ฺฉุงููุช | ๐ **: ' ,year + "-"+ month +"-"+ day)    
.addField("**ฺฉุงุช? ูุงุชู?ูุงู ุณ?ุฑฺค?ุฑ| โ   :**", message.member.joinedAt.toLocaleString())    

.addField('**โ | ู?ููู ฺฉุงุช? ุฏุฑูุณุชฺฉุฑุฏู? ุฆ?ฺฉุงููุช :**', message.author.createdAt.toLocaleString())
.addField("**ฺฉ?ุชุง ฺุงุชุช ู?ุฑ? | ๐ฌ  :**", message.author.lastMessage)            

.setThumbnail(`${z.avatarURL}`)
.setImage("https://cdn.discordapp.com/attachments/703243461079597138/708070790079184957/image0.gif")
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**ููุดูู ูู ุจู ุฌูุงูู ุฏุงูู **').catch(console.error);

}

});







ย bot.on('message', message => {
if (!message.guild) return;
if (message.content === 'W!bot voice') {
if (message.member.voiceChannel) {
message.member.voiceChannel.join()
.then(connection => { 
message.reply('ok im here');
})
.catch(console.log);
} else {
message.reply('You have to join a voice channel');
}
}
});

bot.on("message", message => {
  if (message.content === prefix + "list bot") {
    var list_all = [];
    message.guild.members.forEach(bb => {
      if (!bb.user.bot) return;
      list_all.push(`<@${bb.user.id}>`);
    });
    message.channel.send(list_all.join(", "));
  }
});





bot.on('message', fantic => {
if (fantic.content === "W!unview") {
if (!fantic.member.hasPermission("ADMINISTRATOR")) return fantic.react(":x:")
fantic.channel.overwritePermissions(fantic.guild.id, {
VIEW_CHANNEL: false
});
fantic.react("๐")
}
});

bot.on('message', fantic => {
if (fantic.content === "W!view") {
if (!fantic.member.hasPermission("ADMINISTRATOR")) return fantic.react(":x:")
fantic.channel.overwritePermissions(fantic.guild.id, {
VIEW_CHANNEL: true
});
fantic.react("๐")
}
});



bot.on("guildCreate", async guild => {
  const embed = new Discord.RichEmbed()
    .setColor(`GREEN`)
    .setTitle(`Joined!`)
    .setDescription(
      `Name server: ${guild.name} 

\ ID Server: ${guild.id} 

\Owned by: ${guild.owner}

\member count ${guild.memberCount}

\Created at: ${guild.createdAt}

\Verification Level: ${guild.verificationLevel}

thanks for invite bot  ๐ค `
      
    );
 bot.channels.get('').send(embed);
              
});
bot.on("guildDelete", async guild => {
  const embed = new Discord.RichEmbed()
    .setColor(`RED`)
    .setTitle(`Kicked!`)
    .setDescription(
      `Name server: ${guild.name}
\ID Server: ${guild.id}

\Owner bay: ${guild.owner}

\member count: ${guild.memberCount}

\Created at : ${guild.createdAt}

\Verification Level: ${guild.verificationLevel}

tell us the reason why you kicked our bot๐ค`
    );
  bot.channels.get('770072668154101810').send(embed);
});


bot.on('message', message => {
if(!message.channel.guild) return;
var prefix = "p!";//// ุจ? ุฏฺต? ุฎ?ุช ูพฺ?ู?ฺฉุณ? ุจููุณ? /// set prefix
if(message.content.startsWith(prefix + 'all bots')) {


if (message.author.bot) return;
let i = 1;
const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`);
const embed = new Discord.RichEmbed()
.setAuthor(message.author.tag, message.author.avatarURL)
.setDescription(`**${message.guild.members.filter(m=>m.user.bot).size} ุจ?ุช ุฏ?ุฒุฑุง??ู? ู?ู ุณ?ุฑฺค?ุฑ?ุฏุง**
${botssize.join('\n')}`)
.setFooter(bot.user.username, bot.user.avatarURL)
.setTimestamp();
message.channel.send(embed)

}


});





bot.on("message", message => {
if (message.content.startsWith("W!server")) {
if (!message.channel.guild)
return message.channel.send(` | This Command is used only in servers!`);
const millis = new Date().getTime() - message.guild.createdAt.getTime();
const now = new Date();
const verificationLevels = ["None", "Low", "Medium", "Insane", "Extreme"];
const days = millis / 1000 / 60 / 60 / 24;
var embed = new Discord.RichEmbed()
.setAuthor(message.guild.name, message.guild.iconURL)
.addField(":id:โฝ** Server ID:**", `ยป ${message.guild.id} `, true)
.addField(
":calendar:โฝ**Created At**",
`ยป ${message.guild.createdAt.toLocaleString()}`,
true
)
.addField(":crown: โฝ**owner server**", `**${message.guild.owner}**`, true)
.addField(
`โฝ** users ** [${message.guild.members.size}]`,
`**${
message.guild.members.filter(c => c.presence.status !== "offline")
.size
}** **user online**`,
true
)
.addField(
":speech_balloon:โฝ**Channel Count **",
`ยป **${message.guild.channels.filter(m => m.type === "text").size}**` +
" Text | Voice " +
`**${message.guild.channels.filter(m => m.type === "voice").size}** `,
true
)
.addField(":kurd:โฝ** Country **", ` ${message.guild.region}`, true)/////// ๐ WENAKAY BGORA gawad
.setImage("")

.setColor("#000000");
message.channel.sendEmbed(embed);
}
});



bot.on("message", message => {
if (message.content.split(" ")[0].toLowerCase() === "p!clear") {
const word = message.content;
const number = word.slice(7, word.length);
const int = Number(number);
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
return message.channel.send("You don't have `MANAGE_MESSAGES` permission "
);
}
if (int >= 101) {
return message.channel.send(
"I can't delete more than"
);
}
if (!message.member.hasPermission("MANAGE_MESSAGES")) {
return message.channel.send(
"Manage Messages permission required "
);
}
if (int == "1000") {

return message.channel.send("supply A Number to Delete");
} else if (isNaN(int)) {
return message.reply("Must be a number");
}
message.channel.bulkDelete(int).then(() => {
return message.channel
.send(`Cleared ${int} messages.`)
.then(m => m.delete(5000));
});
}
});
  


bot.on("message", message => {
  if (message.content.split(" ")[0] === prefix + "avatar") {
    if (message.author.bot || message.channel.type == "dm") return;
    var args = message.content.split(" ")[1];
    var avt = args || message.author.id;
    bot
      .fetchUser(avt)
      .then(user => {
        avt = user;
        let avtEmbed = new Discord.RichEmbed()
          .setColor("#36393e")
          .setAuthor(`${avt.username}'s Avatar`, message.author.avatarURL)
          .setImage(avt.avatarURL)
          .setFooter(`Avatar`, message.client.user.avatarURL);
        message.channel.send(avtEmbed);
      })
      .catch(() => message.channel.send(`ุงุจูุช ุงูุฏููู ู ุฏุงูู`));
  } // Julian
}); // Codes - Toxic Codes





bot.on("message", message => {
if (message.content.startsWith("W!move all")) {
if (!message.guild.member(bot.user).hasPermission("SEND_MESSAGES"))
return message.reply("```You don't have enough permissions```")
if (message.member.voiceChannel == null)
return message.channel.send(
'```You have to be in a voice channel```'
);
let ToOFaN
var author = message.member.voiceChannelID;
var m = message.guild.members.filter(m => m.voiceChannel);
message.guild.members
.filter(m => m.voiceChannel)
.forEach(m => {
m.setVoiceChannel(author);
}); message.channel.send("All members being moved"
);
}
});


bot.on('message', message => { 

 

if(message.content.includes("@here")){ 

if(!message.member.hasPermission('KICK_MEMBERS')){ 

message.delete(); 

message.reply("๐จ you can mention  ๐จ") 

} 

 

} 

 

});



bot.on('message', message => { 

 

if(message.content.includes("@everyone")){ 

if(!message.member.hasPermission('KICK_MEMBERS')){ 

message.delete(); 

message.reply("๐จ you can mention  ๐จ") 

} 

 

} 

 

});



  bot.on("message", message => {
  if (message.content === prefix + "stats") {
    if (!message.member.hasPermission("Ownership"))
      if (!message.channel.guild) return;
    if (message.content < 1023) return;
    const dark = new Discord.RichEmbed()
      .setAuthor(bot.user.username, bot.user.avatarURL)
      .setThumbnail(bot.user.avatarURL).setDescription(`AntiBan
Enabled:๐ข 
Maximum Ban : ${config[message.guild.id].banLimit}
-
AntiKick
Enabled:๐ข 
Maximum Kick : ${config[message.guild.id].kickLimits}
-
AntiChannelD
Enabled:๐ข 
Maximum Delete : ${config[message.guild.id].chaDelLimit}
-
AntiChannelC
Enabled:๐ข 
Maximum Create : ${config[message.guild.id].chaCrLimit}
-
AntiRoleD
Enabled:๐ข 
Maximum Delete : ${config[message.guild.id].roleDelLimit}
-
AntiRoleC
Enabled:๐ข 
Maximum Create : ${config[message.guild.id].roleCrLimits}
-
AntiTime
Enabled:๐ข 
Maximum Time : ${config[message.guild.id].time}
`);

    message.channel.sendEmbed(dark);
  }
});


  
  
  
bot.login("ODMzMzE0OTEzMzU4NTc3Njk0.YHwi_Q.jSHkinIZgnW9wmkIRIXPTmFtvAI");

