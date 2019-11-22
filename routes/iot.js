import express from 'express';
import bodyParser from 'body-parser';
import IoT from '../controller/iot';
import {iotAuth, issueIotToken, withAuth} from '../config/auth';

const router = express.Router();
const iotPushFunc = bodyParser.text()
const iot = bodyParser.json()
router.use(bodyParser.urlencoded({ extended: true }));
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

/**
 * @description: Manipulate iot related data
 */
router.post('/iot',iot, withAuth, iotAuth,(req, res) => {
  if(typeof IoT[req.body.method] === "function"){
    if(!req.body.iottoken){
      issueIotToken().then(iottoken=>{
        if(iottoken){
          req.body.iottoken = iottoken
          IoT[req.body.method](req.body).then(results=> {
            res.send(results);
          }).catch(err=>{
            if(err){
              res.status(401).send("Unauthorized: Invalid iotToken")
            }
          })
        }
      })
    }else{
      IoT[req.body.method](req.body).then(results=> {
        res.send(results);
      }).catch(err=>{
        if(err){
          console.log(err)
          res.status(401).send("Unauthorized: Invalid iotToken or error message: "+JSON.stringify(err))
        }
      })
    }
  }else{
    res.send("Invalid method");
  }
});

/**
 * @description: push iot data
 */
router.post('/iotPush',iotPushFunc,(req,res)=>{
  let getPush = "iot_recvUpdateData"
  IoT[getPush](req.body).then(results=>{
    res.send(results)
  }).catch(err=>{
    res.status(401).send("Push message failed: "+JSON.stringify(err))
  })
})

module.exports = router;