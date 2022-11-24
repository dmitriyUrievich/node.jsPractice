const yargs = require('yargs')
const {addNote, printNotes} = require("./notesController");

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

yargs.parse()

