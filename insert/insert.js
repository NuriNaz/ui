//let express = require('express');
const mongodb=require('mongodb');
//let mongoose=require('mongoose');
//let pro=require('../model/model');
const nareshIt=mongodb.MongoClient;
//let mongodb=require('mongodb');
const insert=require('express').Router().post('/',(req,res)=>{
    nareshIt.connect('mongodb://localhost:27017/angul',({useNewUrlParser:true,useUnifiedTopology:true})),
    (err,db)=>{
        if(err)throw err;
        else{
            db.collection('pro')
            .insert({
                "p_id":req.body.p_id,
                "p_name":req.body.p_name,
                "p_cost":req.body.p_cost
            },(err,result)=>{
                if(err)throw err;
                else{
                    res.send({insert:'success'})
                }
            });
        }
            
        
    }
});

module.exports=insert;