async function confirm(){
  await print("\t\tDone!");
  await print("\tLoaded " + paths.length + " paths.");
}

async function run(){
  await print("\tLoading . . .");
  $.getJSON(args[1] || "data/paths.json", (p) => {
    paths = p;
    confirm();
  });
}
run();
