const express = require('express');
const path=require('path')
const srv=express();


srv.use('/files',express.static(path.join(__dirname,'public')))
srv.listen(8012,function(){
    console.log("server started");
});