# A Day
This project originally started as a way to verbalize how tiring the last year has been for me mentally without actually having to say that. It has since grown into a shell capable of playing simple text based choose your own adventure games. These games are defined with JSONs, and the system is capable of loading outside JSONs.

[Live demo.](aday.ryanbuxton.com)
## Making your own game
Making a custom game is pretty simple, and can be all done in JSON. Consider this example:
`[
  {
    "name":"a",
    "text":["You are at A.", "This is another text."],
    "options":[
      {
        "target":"b",
        "text":"Go to branch b"
      }
    ]
  },
  {
    "name":"b",
    "text":["You are at B.", "This is another another text."],
    "options":[
      {
        "target":"a",
        "text":"Go to branch a"
      }
    ]
  }
]`
In this sample you can see two "paths" that link together. The `name` and `target` values are the same. `text` is the array of what prompts will print apon entering the respective branch. If there are more than one elements it will randomly select from them. `options.text` is the text that is printed along with the target to give the user a better idea of what that path entails.
