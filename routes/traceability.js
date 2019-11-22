import express from 'express';
import bodyParser from 'body-parser';
import Traceability from '../controller/traceability';
import {
  withAuth
} from '../config/auth';
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
  extended: true
}));

/**
 * @description: Manipulate traceability related data
 */
router.post('/traceability', withAuth, (req, res) => {
  if (typeof Traceability[req.body.method] === "function") {
    console.log(Traceability[req.body.method](req.body))
    Traceability[req.body.method](req.body).then(results => {
      res.send(results);
    })
  } else {
    res.send("Invalid method");
  }
});

module.exports = router;