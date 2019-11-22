import express from 'express';
import bodyParser from 'body-parser';
import Product from '../controller/product';
import {withAuth} from '../config/auth';
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @description: Manipulate product related data
 */
router.post('/product', withAuth, (req, res) => {
    if(typeof Product[req.body.method] === "function"){
      Product[req.body.method](req.body).then(results=> {
        res.send(results);
      })
    }
    else{
      res.send("Invalid method");
    }
  });
module.exports = router;