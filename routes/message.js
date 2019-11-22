import express from 'express';
import bodyParser from 'body-parser';
import Message from '../controller/message';
import {withAuth} from '../config/auth';
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @description: Manipulate message related data
 */
router.post('/message', withAuth,(req, res) => {
    console.log(req.body)
    if(typeof Message[req.body.method] === "function"){
      Message[req.body.method](req.body).then(results=> {
        res.send(results);
      })
    }
    else{
      res.send("Invalid method");
    }
  });
module.exports = router;