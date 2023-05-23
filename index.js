//import library
const express = require("express");
const redis = require("redis");
const process=require("process")

const app = express();
const client=redis.createClient({
    host: 'redis-server',
    port: 6379
});
client.set('visits',0)


app.get('/',(req,res)=>{
    // exit code =0 means exited and everything is ok
    // ecit code = 1, 2, 3, 400, 500 means something went wrong
    //process.exit(0)
    client.get('visits',(err,visits)=>{
        res.send("number of visits is "+visits)
        client.set('visits',parseInt(visits)+1)
    })
})


app.listen(3000,()=>{
    console.log("listening port is 3000")
})