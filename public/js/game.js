var commands = [];
var paths = [];
var state = {
  mode: "init",
  current: "sleep"
}

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
  await print("Hello and welcome. Type 'help' for instructions, or 'begin' to begin.");
  await print("Loaded " + commands.length + " commands and " + paths.length + " game paths.");
}

async function process(commandString){
  var c = commands.find(command => { return command.name == commandString });
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
    await print("Exiting COVID-19 Depression Simulator.")
  }
  $("#prompt").val("");
}

$(document).ready(() => {
  console.log("ready");

  $.getJSON("data/commands.json", (json) => {
    $.getJSON("data/paths.json", (p) => {
      paths = p;
      commands = json;
      intro();
    });
  });

  $("#prompt").on('keyup', function (e) {
    if ((e.key === 'Enter' || e.keyCode === 13) && $("#prompt").val() != "") {
      if(state.mode == "init") process($("#prompt").val());
      else if(state.mode == "game") game($("#prompt").val());
    }
  });
});
