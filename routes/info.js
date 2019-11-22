import express from "express";
import bodyParser from "body-parser";
import Info from "../controller/info";
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
 * @description: Manipulate company related data
 */
router.post("/company", withAuth, (req, res) => {
  if (typeof Info[req.body.method] === "function") {
    Info[req.body.method](req.body).then(results => {
      res.send(results);
    });
  } else {
    res.send("Invalid method");
  }
});

module.exports = router;
