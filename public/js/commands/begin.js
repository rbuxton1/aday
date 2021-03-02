async function run(){
  await print("\tYou are now entering the meat of this /thing/.");
  await print("\tAfter each action you complete you will be prompted with some options. The command to complete each one of those actions will be in parenthesis after the breif description.");
  await print("\tAn example would be: ");
  await print("\t\t You decide you hate this game (leave)");
  await print("\tTo do that action, you would type 'leave'. Rinse and repeat.");
  await print("\tPlease enjoy.");
  await print("");


  state.mode = "game";
  var path = paths.find(p => { return p.name == state.current; });
  await print("\t" + path.text[Math.floor(Math.random() * path.text.length)]);
  for(var i = 0; i < path.options.length; i++){
    await print("\t" + path.options[i].text + " (" + path.options[i].target + ")");
  }
}
run();
