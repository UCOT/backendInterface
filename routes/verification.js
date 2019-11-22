import express from 'express';
import bodyParser from 'body-parser';
import Verification from "../controller/verification";
import {
  withAuth
} from '../config/auth';
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));
router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/**
 * @description: Manipulate verification related data
 */
router.post('/verification', withAuth, (req, res) => {
  console.log(req.body);
  if (typeof Verification[req.body.method] === "function") {
    Verification[req.body.method](req.body).then(results => {
      res.send(results);
    })
  } else {
    res.send("Invalid method");
  }
});

export default router;