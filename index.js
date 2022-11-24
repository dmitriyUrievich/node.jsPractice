const yargs = require('yargs')
const {addNote, printNotes,removeNotes} = require("./notesController");

yargs.command({
  command:"add",
  disable:"add new note to list",
  builder:{
    title:{
      type:'string',
      description:'note title',
      demandOption:true
    }
  },
  handler({title}){
    addNote(title)
    console.log('add command:', title)
  }
})

yargs.command({
  command:"list",
  disable:"print all notes",
  async handler () {
    printNotes()
  }
})
yargs.command({
  command: "remove",
  describe: "Remove note by id",
  builder: {
    id: {
      type: "string",
      describe: "Note ID",
      demandOption: true,
    },
  },
  handler({ id }) {
    removeNotes(id);
  },
});


yargs.parse()

