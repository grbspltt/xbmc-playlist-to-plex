import nanit from 'nanit'

const app = {};

nanit.initialize(app,(err)=>{
  if(err){
    console.log(err);
    process.exit(0);
  }
  //application started.
});

export default app;
