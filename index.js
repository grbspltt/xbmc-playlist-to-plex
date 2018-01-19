require('dotenv').config();
const nanit = require('nanit');
const app = {};

nanit.initialize(app,(err)=>{
  if(err){
    console.log(err);
    process.exit(0);
  }
  //application started.
  console.log('Application Started');
});

/*nanit.finalize(app,(err)=>{
  console.log('App shutdown complete.');
  process.exit(0);
});*/

module.exports = app;
