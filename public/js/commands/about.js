async function run(){
  await print("\tThis is a weird little game that I made to try and express how cyclical quarantine life has felt. The goal of the game was to emulate what my days have looked like since mid March 2020. In a weird way, its also a game about how much I have grown since then. I am not sure what I really expect the impact of this to be, haha. I also don't think I have ever played a real text adventure game, so I appologize if this is hot garbage. At the very least its hot garbage made with. . . love?");
  await print("I have written this in a way that it can load outside files. If you have a story that you would like to tell through a poorly designed website, please see my documentation at my GitHub.");
  await print("\tTo play, type 'load' to load a game and then type 'begin'. You will be given some text describing what is happening, after which will be prompted with some options. The command to complete each one of those actions will be in parenthesis after the breif description.");
  await print("\tAn example would be: ");
  await print("\t\t You decide you hate this game (leave)");
  await print("\tTo do that action, you would type 'leave'. Rinse and repeat.");
  await print("");
  await print("\tIf you end up liking this, I do make other things! The best place to find me is at my website (ryanbuxton.com) or my GitHub account (github.com/rbuxton1). Please let me know how this 'game' made you feel!");
}
run();
