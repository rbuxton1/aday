async function run(){
  await print("Current commands: ");
  for(var i = 0; i < commands.length; i++){
    await print("\t" + commands[i].name + " - " + commands[i].helptext);
  }
}
run();
