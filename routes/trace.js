import express from 'express';
import bodyParser from 'body-parser';
import Trace from "../controller/trace";
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
 * @description: Manipulate trace related data
 */
router.post('/trace', withAuth, (req, res) => {
  console.log(req.body);
  if (typeof Trace[req.body.method] === "function") {
    Trace[req.body.method](req.body).then(results => {
      res.send(results);
    })
  } else if (req.body.method === "trace_getCityOversea") {
    trace_getCityOversea().then((results) => {
      res.send(results);
    });
  } else {
    res.send("Invalid method");
  }
});

module.exports = router;