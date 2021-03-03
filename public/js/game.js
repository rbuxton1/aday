var commands = [];
var paths = [];
var state = {
  mode: "init",
  current: "sleep"
}
var args = [];

function sleep(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function print(data){
  var tb = $("#output");
  for(var i = 0; i < data.length; i++){
    tb.scrollTop(tb[0].scrollHeight);
    tb.val(tb.val() + data.charAt(i));
    await sleep(5);
  }
  tb.val(tb.val() + "\n");
}

async function intro(){
  await print("System boot up. . .");
  await sleep(250);

  var things = ["discombobulator", "hampster", "disco engine", "bullshit", "the Caramelldansen Girls", "a wizard", "The Wizard", "magic smoke", "terrain", "a miniature clone of myself", "the universe"];
  var verbs =["Preparing", "Initializing", "Loading", "Perfecting", "Diagnosing", "Optimizing", "Generating"];
  for(var i = 0; i < things.length; i++){
    var thing = things[i];
    var verb = verbs[Math.floor(Math.random() * verbs.length)]
    await print("\t" + verb + " " + thing + " . . .");
    await sleep(100 + Math.floor(Math.random() * 250));
    await print("\t\tDONE.");
  }

  await print("Boot complete. Starting aday.");
  await sleep(1500);
  $("#output").val("");

  await print("aday version 1.1.0 loaded.");
  await print("Hello and welcome. Type 'help' for a list of commands or 'about' to learn what this is.");
  await print("Loaded " + commands.length + " commands.");
}

async function process(commandString){
  args = commandString.split(" ");
  var c = commands.find(command => { return command.name == args[0].toLowerCase() });
  if(c) {
    await print("> " + c.name);
    $.getScript("js/commands/" + c.name + ".js", function(){ console.log(c.name); });
  } else await print("Command not recognized.");
  $("#prompt").val("");
}

async function game(commandString){
  if(commandString != "end"){
    var curr = paths.find(p => { return p.name == state.current; });
    var command = curr.options.find(opt => { return opt.target == commandString; });
    var next;
    if(command) next = paths.find(p => { return p.name == command.target });
    await print("> " + commandString);
    if(command && next){
      await print("\t" + next.text[Math.floor(Math.random() * next.text.length)]);
      for(var i = 0; i < next.options.length; i++){
        await print("\t" + next.options[i].text + " (" + next.options[i].target + ")");
      }
      state.current = next.name;
    } else {
      await print("\tI dont think you can do that here.");
    }
  } else {
    state.mode = "init";
    await print("Exiting.")
  }
  $("#prompt").val("");
}

async function printError(errorText){
  await print("\t" + errorText);
}

$(document).ready(() => {
  console.log("ready");

  $.getJSON("data/commands.json", (json) => {
    commands = json;
    intro();
  });

  $("#prompt").on('keyup', function (e) {
    if ((e.key === 'Enter' || e.keyCode === 13) && $("#prompt").val() != "") {
      try{
        if(state.mode == "init") process($("#prompt").val());
        else if(state.mode == "game") game($("#prompt").val());
      } catch(error){
        printError(error);
      }
    }
  });
});
