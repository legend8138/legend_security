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

const prefix = "m!";

const queue = new Map();
bot.on("ready", () => console.log("🤖Ready Bot In Online🤖"));



bot.on("message", message => {
  if (message.content === "m!help") {
    const embed = new Discord.RichEmbed().setColor("#000000")
      .setDescription(`**زانیاری بۆتکە**
👮|Protection Commands|👮 - کۆدی پارێزگاری : 


〔 m!antibots on 〕⇰ 『 هیچ بۆت ئەک ناتوانی بێتە ناو سێرڤەر』



〔 m!antibots off 〕⇰ 『بۆت دەتوانی بێنیە ناو سێرڤەر 』



〔 m!anti ban 〕⇰ 『  • سنورێک بۆ باند کردن۳بۆ٤ کەس 』



〔 m!anti kick 〕⇰ 『 •  سنورێک بۆ کیک کردن۳بۆ٤ کەس』



〔 m!anti role 〕⇰ 『   •   سنورێک بۆ سڕینەوەی ۳بۆ٤ رۆڵ』



〔 m!anti role 〕⇰ 『  • سنورێک بۆ دروستکردنی ڕۆڵ ۳بۆ ٤   』



〔 m!anti channel 〕⇰ 『 •سنورێک بۆ سڕینەوەی ۳بۆ٤ ڕووم بۆ ئەوکەسانەی پلەدارن』



〔 m!anti time 〕⇰ 『 • ئه وكه سانه ى كه نه فه ر باند ده كه ن روليان ليده ستيندريته وه』



〔 m!invite 〕⇰ 『 • بۆئینڤایت کردنی بۆت بۆ سیرڤەرەکەت 』

**•𝐁𝐘 𝐌𝐀𝐑𝐒 ❥︎ 𝐋𝐀𝐇𝐔𝐑𝐈•**`);
    message.author.sendEmbed(embed);
  }
});

bot.on("ready", () => {
  console.log(`Logged in as ${bot.user.tag}!`);
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
setInterval(t_c, 60000);

bot.on("ready", () => {
  bot.user.setActivity("m!help | It's time to secure your server!", { type: "" });
  bot.user.setStatus("");
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
        "**:closed_lock_with_key:  بەس ئۆنەڕشیڤ،ئەتوانێ ئۆنی بکات**"
      );
    if (message.content.startsWith(prefix + "anti ban")) {
      if (!num) return message.channel.send("**:1234: | ‎ژمارە  بنێرە ! **");
      if (isNaN(num))
        return message.channel.send("**:1234: | تەنها ژمارە ! **");
      config[message.guild.id].banLimit = num;
      message.channel.send(
        `**:lock: | گۆڕا بۆ : ${config[message.guild.id].banLimit} **`
      );
    }
    if (message.content.startsWith(prefix + "anti kick")) {
      if (!num) return message.channel.send("**:1234: | ‎ژمارە  بنێرە ! **");
      if (isNaN(num))
        return message.channel.send("**:1234: | تەنها ژمارە ! **");
      config[message.guild.id].kickLimits = num;
      message.channel.send(
        `**:lock: | گۆڕا بۆ : ${config[message.guild.id].kickLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti role")) {
      if (!num) return message.channel.send("**:1234: | ‎ژمارە  بنێرە ! **");
      if (isNaN(num))
        return message.channel.send("**:1234: | تەنها ژمارە ! **");
      config[message.guild.id].roleDelLimit = num;
      message.channel.send(
        `**:lock: | گۆڕا بۆ : ${config[message.guild.id].roleDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti role")) {
      if (!num) return message.channel.send("**:1234: | ‎ژمارە  بنێرە ! **");
      if (isNaN(num))
        return message.channel.send("**:1234: | تەنها ژمارە ! **");
      config[message.guild.id].roleCrLimits = num;
      message.channel.send(
        `**:lock: | گۆڕا بۆ : ${config[message.guild.id].roleCrLimits}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channel")) {
      if (!num) return message.channel.send("**:1234: | ‎ژمارە  بنێرە ! **");
      if (isNaN(num))
        return message.channel.send("**:1234: | تەنها ژمارە ! **");
      config[message.guild.id].chaDelLimit = num;
      message.channel.send(
        `**:lock: | گۆڕا بۆ : ${config[message.guild.id].chaDelLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti channel")) {
      if (!num) return message.channel.send("**:1234: | ‎ژمارە  بنێرە ! **");
      if (isNaN(num))
        return message.channel.send("**:1234: | تەنها ژمارە ! **");
      config[message.guild.id].chaCrLimit = num;
      message.channel.send(
        `**:lock: | گۆڕا بۆ : ${config[message.guild.id].chaCrLimit}**`
      );
    }
    if (message.content.startsWith(prefix + "anti time")) {
      if (!num) return message.channel.send("**:1234: | ‎ژمارە  بنێرە ! **");
      if (isNaN(num))
        return message.channel.send("**:1234: | تەنها ژمارە ! **");
      config[message.guild.id].time = num;
      message.channel.send(
        `**:lock: | گۆڕا بۆ : ${config[message.guild.id].time}**`
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
            `**⇏ | ${entry.username} ژوڕی زۆڕی سڕی وەتەوە **`
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
  if (!["text", "category", "voice"].includes(channel.type.toLowerCase()))
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
            `**⇏ | ${entry.username} ژوڕی زۆڕی دروست کردوە **`
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
            `**⇏ | ${entry.username} ‎ڕۆلی زۆڕی سڕیوەتەو **`
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
            `**⇏ | ${entry.username} ڕۆڵی زۆڕدڕوست  کڕدوە **`
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
          guild.owner.send(`**⇏ | ${entry.username} هەوڵی داهەموان باند بکا **`)
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
          guild.owner.send(`**⇏ | ${entry.username} هەوڵی داهەموان کیک کا **`)
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
              `**⇏ | ${entry.username} هەوڵی داهەموان کیک کا **`
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
      `**‎✅ **__بە سەرکەوتوانە ئێستا بۆت ناتوانێ جۆین سێرڤەر بێت__`
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
      `**✅ __بە سەرکەوتوانە ئێستا بۆت دەتوانی جۆین ی سێرڤەر بکات__**`
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
  if (message.content === "m!invite") {
    if (!message.channel.guild)
      return message.reply(
        "Please Do not type bot commands in bot private chat"
      );
    let embed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("=--> بۆ ڕاکێشانی بۆتەکە داگرە  <--=")
      .setImage("https://cdn.discordapp.com/attachments/724596106377560097/724605098512089149/LEGEND_20200622_154143.gif")
      .setURL(
        "https://discordapp.com/oauth2/authorize?client_id=724644270266646610&scope=bot&permissions=2146958847"
      ) // Type Your Link here after ''
      .setFooter("𝐁𝐘 𝐌𝐀𝐑𝐒 ❥︎ 𝐋𝐀𝐇𝐔𝐑𝐈", message.author.avatarURL);
    message.channel.sendEmbed(embed);
  }
});


bot.login("NzI0NjQ0MjcwMjY2NjQ2NjEw.XwJJrw.biwUr6FaSrCRxBWCdN48DiRbnjQ");

