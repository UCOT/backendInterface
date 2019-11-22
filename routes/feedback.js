import express from "express";
import bodyParser from "body-parser";
import Feedback from "../controller/feedback";
import { withAuth } from "../config/auth";

const router = express.Router();
router.use(bodyParser.json());
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
 * @description: Manipulate feedbacks for UTracer
 */
router.post("/feedback", withAuth, (req, res) => {
  if (typeof Feedback[req.body.method] === "function") {
    Feedback[req.body.method](req.body)
      .then(results => {
        res.send(results);
      })
      .catch(error => {
        console.log(error);
      });
  } else {
    res.send("Invalid method");
  }
});

module.exports = router;
