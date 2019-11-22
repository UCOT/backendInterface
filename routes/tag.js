import express from 'express';
import bodyParser from 'body-parser';
import Tag from "../controller/tag";
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
 * @description: Manipulate tags related data
 */
router.post('/tag', withAuth, (req, res) => {
  if (typeof Tag[req.body.method] === "function") {
    Tag[req.body.method](req.body).then(results => {
      res.send(results);
    })
  } else {
    console.log(req.body.method)
    res.send("Invalid method");
  }
});


module.exports = router;