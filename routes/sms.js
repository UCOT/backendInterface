import express from 'express';
import bodyParser from 'body-parser';
import Sms from '../controller/sms';
import {withAuth} from '../config/auth';
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * @description: Manipulate sms related data
 */
router.post('/sms',withAuth,(req, res) => {
  if(typeof Sms[req.body.method] === "function"){
    Sms[req.body.method](req.body).then(results=> {
      res.send(results);
    })
  }
});


module.exports = router;
