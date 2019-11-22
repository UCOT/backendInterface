import express from 'express';
import bodyParser from 'body-parser';
import Photo from '../controller/photo';
import { photoAuth } from "../config/auth";
const router = express.Router();
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

/**
 * @description: Manipulate UPhoto related data
 */
router.post('/photo',photoAuth,(req, res) => {
    if(typeof Photo[req.body.method] === "function"){
      Photo[req.body.method](req.body).then(results=> {
        console.log(results)
        res.send(results);
      })
    }
    else{
      res.send("Invalid method");
    }
  });


module.exports = router;
