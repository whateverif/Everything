
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();


client.on('ready', () => {
  console.log("Logged in as ${client.user.tag}!");
});
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'welcome');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}`);
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "Hi"
  if (message.content === 'Hi') {
    // Send "Hyyy" to the same channel
    message.channel.send('Hyyy');
  }
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "My avatar"
  if (message.content === 'My avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // If the message content starts with "!kick"
  if (message.content.startsWith("!kick")) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Kick the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         */
        member.kick("Optional reason that will display in the audit logs").then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Successfully kicked ${member}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply("I was unable to kick the member");
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn\'t in this guild!");
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply("You didn\'t mention the user to kick!");
    }
  }
});

client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;

  // if the message content starts with "!ban"
  if (message.content.startsWith("!ban")) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        /**
         * Ban the member
         * Make sure you run this on a member, not a user!
         * There are big differences between a user and a member
         * Read more about what ban options there are over at
         * https://discord.js.org/#/docs/main/stable/class/GuildMember?scrollTo=ban
         */
        member.ban({
          reason: ("They were bad!"),
        }).then(() => {
          // We let the message author know we were able to ban the person
          message.reply(`Successfully banned ${member}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to ban the member,
          // either due to missing permissions or role hierarchy
          message.reply("I was unable to ban the member");
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply("That user isn\'t in this guild!");
      }
    } else {
    // Otherwise, if no user was mentioned
      message.reply("You didn\'t mention the user to ban!");
    }
  }
});


 client.login("NTc3NTU1NDU5NzkyMTc1MTA1.XNmwow.Y2hhPA5Ctf44bDeH498Fo22KgQM");
