const express =require('express');
const srv= express();


srv.get('/',(req,res)=> {
    console.log('get request recieved');
let name = req.query.name;
console.log(name);
res.send("hello world" + name);
}
)
srv.get('/bye',(req,res)=>{
    console.log('get bye' );
    res.send("good bye");
})
srv.get('/:greetings',(req,res)=>
{
    console.log('get greeeting request');
    let name= req.query.name;
    if(!name){
        name = 'sir/madam'
    }
    res.send(req.params.greetings + ' ' + name)
})
srv.listen(8070,function(){
    console.log("server is running at port 6070");
})