//====================< Create Function >====================\\
async function loadMessageCommands(client, color) {
  //====================< Import Module >====================\\
  const { readdirSync } = require("fs");

  //====================< Code >====================\\

  console.log(`Started refreshing application commands...`.yellow);

  const commandFolders = readdirSync(`${process.cwd()}/Src/Commands/Message`);
  let publicCommands = 0;
  for (const folder of commandFolders) {
    const commandFiles = readdirSync(`${process.cwd()}/Src/Commands/Message/${folder}`).filter((file) => file.endsWith(".js"));
    for (const file of commandFiles) {
      const command = require(`${process.cwd()}/Src/Commands/Message/${folder}/${file}`);
      client.messageCommands.set(command.data.name, command);
      publicCommandsArray.push(command.data.toJSON());
      publicCommands++;
    }
  }
  client.application.commands.set(publicCommandsArray).then(console.log(`${color.bold.green(`[GLOBAL COMMANDS]`)} ` + `[${publicCommandsArray.length}] `.cyan + `Successfully loaded!`.yellow));
}
module.exports = { loadMessageCommands };
