import nanit from 'nanit'

const app = {};

nanit.initialize(app,(err)=>{
  if(err) return console.log(err);

});

export default app;
