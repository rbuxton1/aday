async function confirm(){
  await print("\t\tDone!");
  await print("\tLoaded " + paths.length + " paths.");
}

async function deny(){
  await print("\t\tFAILED! See documentation for help.");
}

async function run(){
  await print("\tLoading . . .");
  $.getJSON(args[1] || "data/paths.json", (p) => {
    paths = p;
    confirm();
  }).fail((error) => {
    deny();
  })
}
run();
