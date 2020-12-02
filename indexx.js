const express=require('express');
const app=express();
//let mongodb=require('mongodb');
//let mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');
//let mongoose= require('mongoose');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use('/insert',require('./insert/insert'));
app.use(cors());
//app.use(mongodb());

/*app.get('/',(req,res)=>{
    res.send('i am ok')
});
app.get('/post',(req,res)=>{
    res.send('yess i am post')
})*/


app.listen(3000);
console.log('server listening port no 3000')