const express=require('express');
const srv=express();
srv.use(express.json());
srv.set('view engine','hbs');
srv.use(express.urlencoded({extended:true}));
let todos=[
    {name:'task1',done:false},
    {name:'task2',done:true}
]
srv.get('/',(req,res)=>{
    res.render('todos',{
        title:'TODOS',
    todos
})
})
srv.post('/todos',(req,res)=>{
   todos.push({
    name:req.body.task,
    done:false
})
res.redirect('/')
})
srv.listen(8014,function(){
    console.log("server started");
})