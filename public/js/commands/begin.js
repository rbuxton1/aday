async function run(){
  if(paths.length != 0){
    await print("\tPlease enjoy. Type 'end' to end.");
    await print("");


    state.mode = "game";
    var path = paths.find(p => { return p.name == state.current; });
    await print("\t" + path.text[Math.floor(Math.random() * path.text.length)]);
    for(var i = 0; i < path.options.length; i++){
      await print("\t" + path.options[i].text + " (" + path.options[i].target + ")");
    }
  } else {
    await print("No game loaded. Use 'load [url]' to load.");
  }
}
run();
